package io.slingr.endpoints.aem;

import io.slingr.endpoints.HttpPerUserEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.exceptions.ErrorCode;
import io.slingr.endpoints.framework.annotations.ApplicationLogger;
import io.slingr.endpoints.framework.annotations.EndpointFunction;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.exchange.ReservedName;
import io.slingr.endpoints.services.rest.RestClient;
import io.slingr.endpoints.services.rest.RestClientBuilder;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import javax.ws.rs.core.Form;

/**
 * <p>Autotask Endpoint Management endpoint
 * <p>
 * <p>Created by smoyano on 26/04/18.
 */
@SlingrEndpoint(name = "autotask-endpoint-management", functionPrefix = "_")
public class AutotaskEndpointManagementEndpoint extends HttpPerUserEndpoint {

    private static final Logger logger = Logger.getLogger(AutotaskEndpointManagementEndpoint.class);

    @ApplicationLogger
    private AppLogs appLogger;

    @EndpointProperty
    private String apiUrl;

    @Override
    public String getApiUri() {
        String baseUrl = StringUtils.endsWith(apiUrl, "/") ? "" : "/";
        return apiUrl + baseUrl + "api/v2";
    }

    @Override
    public void endpointStarted() {
        httpService().setAllowExternalUrl(true);
    }

    @EndpointFunction(name = ReservedName.CONNECT_USER)
    public Json connectUser(FunctionRequest request) {
        final String userId = request.getUserId();
        if(StringUtils.isNotBlank(userId)) {
            // checks if the user includes a non-empty 'code' on the request
            final Json jsonBody = request.getJsonParams();
            if (jsonBody != null) {
                String apiKey = jsonBody.string("key");
                String apiSecretKey = jsonBody.string("keySecret");
                if (StringUtils.isBlank(apiKey) || StringUtils.isBlank(apiSecretKey)) {
                    logger.warn(String.format("Key and secret key are required. User [%s] won't be connected.", userId));
                    appLogger.warn(String.format("Key and secret key are required. User [%s] won't be connected.", userId));

                    defaultMethodDisconnectUsers(request);
                    return Json.map();
                }

                RestClientBuilder restClient = RestClient.builder(String.format("%s/auth/oauth/token", apiUrl));
                restClient.basicAuthenticationHeader("public-client", "public");
                restClient.header("Content-Type", "application/x-www-form-urlencoded");
                restClient.header("Accept", "application/json");

                Json tokenResponse = restClient.post(new Form()
                        .param("grant_type", "password")
                        .param("username", apiKey)
                        .param("password", apiSecretKey));
                if (tokenResponse.contains("access_token")) {
                    // saves the information on the users data store
                    Json conf = users().save(userId, tokenResponse);
                    logger.info(String.format("User connected [%s]", userId));

                    // sends connected user event
                    users().sendUserConnectedEvent(request.getFunctionId(), userId, conf);

                    return conf;
                } else {
                    logger.warn(String.format("Problems trying to connect user [%s] to Aem: %s", userId, tokenResponse.toString()));
                    appLogger.warn(String.format("Problems trying to connect user [%s] to Aem: %s", userId, tokenResponse.string("error")));
                }
            } else {
                logger.info(String.format("Empty payload received when try to connect user [%s] [%s]", userId, request.getParams() != null ? request.getParams().toString() : "-"));
            }
        }
        defaultMethodDisconnectUsers(request);
        return Json.map();
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        try {
            setUserRequestHeaders(request);
            Json res = defaultGetRequest(request);
            return res;
        } catch (EndpointException restException) {
            if (restException.getCode() == ErrorCode.CLIENT) {
                users().sendUserDisconnectedEvent(request.getUserId());
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try {
            setUserRequestHeaders(request);
            Json res = defaultPostRequest(request);
            return res;
        } catch (EndpointException restException) {
            if (restException.getCode() == ErrorCode.CLIENT) {
                users().sendUserDisconnectedEvent(request.getUserId());
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_put")
    public Json userPut(FunctionRequest request) {
        try {
            setUserRequestHeaders(request);
            Json res = defaultPutRequest(request);
            return res;
        } catch (EndpointException restException) {
            if (restException.getCode() == ErrorCode.CLIENT) {
                users().sendUserDisconnectedEvent(request.getUserId());
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json userDelete(FunctionRequest request) {
        try {
            setUserRequestHeaders(request);
            Json res = defaultDeleteRequest(request);
            return res;
        } catch (EndpointException restException) {
            if (restException.getCode() == ErrorCode.CLIENT) {
                users().sendUserDisconnectedEvent(request.getUserId());
            }
            throw restException;
        }
    }

    // helpers

    private void setUserRequestHeaders(FunctionRequest request) {
        Json userConfig = users().findById(request.getUserId());
        if (userConfig == null || userConfig.isEmpty("access_token")) {
            throw EndpointException.permanent(ErrorCode.CLIENT, String.format("User [%s] is not connected", request.getUserEmail()));
        }
        Json body = request.getJsonParams();
        String token = userConfig.string("access_token");
        Json headers = body.json("headers");
        if (headers == null) {
            headers = Json.map();
        }
        headers.set("Authorization", "Bearer " + token);
        body.set("headers", headers);
    }
}
