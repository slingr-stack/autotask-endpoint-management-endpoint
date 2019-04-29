package io.slingr.endpoints.aem;

import io.slingr.endpoints.utils.tests.EndpointTests;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

public class AutotaskEndpointManagementTest {

    private static EndpointTests test;

    @BeforeClass
    public static void init() throws Exception {
        test = EndpointTests.start(new io.slingr.endpoints.aem.Runner(), "test.properties");
    }

    @Test
    @Ignore("For dev purposes")
    public void testGetAccount() {
        Map<String, Object> body = new HashMap<>();
        body.put("key", "O7O2706T9SL0P2VKF1QE4MJLO9J9OFBB");
        body.put("keySecret", "7HDQHVNP090IMSVIQTQID8PKLUMJQE1A");
        FunctionRequest functionRequest = EndpointTests.generateRequest(null, null, null, body, "test", null);
        ((AutotaskEndpointManagementEndpoint) test.getEndpoint()).connectUser(functionRequest);
    }
}
