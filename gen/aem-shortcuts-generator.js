var fs = require('fs');

var FILE_NAME = "aem-shortcuts.js";
var CODE = '';
var cache = {};

var apiURLs = {
    'get': [
        '/account',
        '/account/alerts/open',
        '/account/alerts/resolved',
        '/account/components',
        '/account/devices',
        '/account/sites',
        '/account/users',
        '/alert/:alertUid',
        '/audit/device/:deviceUid',
        '/audit/device/:deviceUid/software',
        '/audit/esxihost/:deviceUid',
        '/audit/printer/:deviceUid',
        '/device/id/:deviceId',
        '/device/:deviceUid',
        '/device/:deviceUid/alerts/open',
        '/device/:deviceUid/alerts/resolved',
        '/job/:jobUid',
        '/job/:jobUid/components',
        '/site/:siteUid',
        '/site/:siteUid/alerts/open',
        '/site/:siteUid/alerts/resolved',
        '/site/:siteUid/devices',
        '/site/:siteUid/settings',
        '/system/pagination',
        '/system/request_rate',
        '/system/status'
    ],
    'post': [
        '/device/:deviceUid/udf',
        '/site/:siteUid',
        '/site/:siteUid/settings/proxy',
        '/user/resetApiKeys'
    ],
    'put': [
        '/alert/:alertUid/mute',
        '/alert/:alertUid/resolve',
        '/alert/:alertUid/unmute',
        '/device/:deviceUid/quickjob',
        '/device/:deviceUid/site/:siteUid',
        '/site'
    ],
    'delete': [
        '/site/:siteUid/settings/proxy'
    ]
};

var convertUrls = function (url) {
    var convertedUrl = url;
    convertedUrl = convertedUrl.replace(/{/gi, ':');
    convertedUrl = convertedUrl.replace(/}/gi, '');
    return convertedUrl;
};

var parse = function (str) {
    if (arguments.length > 1) {
        var args = arguments[1],
            i = 0;
        return str.replace(/:(\w+)/g, function () {
            return args[i++];
        });
    } else {
        if (str) {
            return str;
        }
        throw 'Function is not valid for given arguments.';
    }
};

var filesByResourceId = function(params) {
    if (!params) {
        throw 'Wrong numbers of arguments for fileManager.files.post';
    }

    var fileId = params.file_id;
    var url = '/file-manager/files';

    sys.logs.debug('[AEM] POST from: ' + url);

    if (fileId) {
        var res = endpoint._getResourceById(params);
        params.file_data = res.fileData;
        if (!res.fileData) {
            throw 'File with the given ID can not be fetch from the app';
        }
    }

    var options = checkHttpOptions(url, params);
    return endpoint._post(options);

};

var camelCase = function (input) {
    return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
};

var setInitializers = function (fnName) {
    var tmpCode = '',
        namesArr = fnName.split('.'),
        path = '';
    for (var i in namesArr) {
        if (i == 0) {
            path = namesArr[0];
        } else {
            path += '.' + namesArr[i];
        }
        if (!cache[path]) {
            tmpCode += NAMESPACE + path + ' = {};\n';
            cache[path] = path;
        }
    }

    return tmpCode;
};

var checkHttpOptions = function(url, options) {
    options = options || {};
    if(!!url){
        if(isObject(url)){
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if(!!options.path || !!options.params || !!options.body){
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};


var urlsData = {get: {}, post: {}, put: {}, patch: {}, delete: {}};
var endpoint = {};
var NAMESPACE = 'endpoint.';

var makeEndpointsHelpers = function () {
    for (var method in apiURLs) {
        if (Array.isArray(apiURLs[method])) {
            var urlsArr = apiURLs[method];
            for (var n in urlsArr) {
                var numVars = 0;
                var fnNames = [];
                var newPath = '';
                var url = convertUrls(urlsArr[n]);
                var urlParts = url.split('/');
                for (var p in urlParts) {
                    if (urlParts[p] != "") {
                        if (urlParts[p].substr(0, 1) == ':') {
                            numVars++;
                            newPath += '/%s'
                        } else {
                            fnNames.push(urlParts[p]);
                            newPath += '/' + urlParts[p];
                        }
                    }
                }

                var functionName = camelCase(fnNames.join('.'));
                if (!urlsData[method][functionName]) {
                    urlsData[method][functionName] = {};
                }
                urlsData[method][functionName][numVars] = url;
            }
        }

    }

    for (var method in urlsData) {
        for (var fn in urlsData[method]) {
            CODE += setInitializers(fn);
            var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;';
            var hasParams = 'var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;';
            var parseStr, callWithParams, callWithoutParams;
            if (method == 'get' || method == 'delete') {
                callWithParams = NAMESPACE + method + '({path: url, params: arguments[size]})';
            } else if (method == 'post' || method == 'put' || method == 'patch') {
                callWithParams = NAMESPACE + method + '({path: url, body: arguments[size]})';
            }
            callWithoutParams = NAMESPACE + method + '(url)';
            parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size], Array.prototype.slice.call(arguments, 0, size));';
            CODE += NAMESPACE + fn + '.' + method + ' = function() {\n\t' + sizeStr + '\n\t' + hasParams
                + '\n\tvar url = ' + parseStr
                + '\n\tif (hasParams) return ' + callWithParams + ';'
                + '\n\telse return ' + callWithoutParams + ';\n};\n\n';
        }
    }

    var MESSAGE = '///////////////////////////////////////////////\n';
    MESSAGE += '//                                               //\n';
    MESSAGE += '//           This file was autogenerated         //\n';
    MESSAGE += '//                                               //\n';
    MESSAGE += '////////////////////////////////////////////////\n';

    CODE = MESSAGE + '\n\nvar urlsData = ' + JSON.stringify(urlsData, null, "\t") + ';\n\nvar parse = ' + parse.toString() + ';\n\n' + CODE
        + 'endpoint.fileManager = {};\nendpoint.fileManager.files = {};\nendpoint.fileManager.files.post = ' + filesByResourceId.toString() + ';\n\n';

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});
