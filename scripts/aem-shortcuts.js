///////////////////////////////////////////////
//                                               //
//           This file was autogenerated         //
//                                               //
////////////////////////////////////////////////


var urlsData = {
    "get": {
        "account": {
            "0": "/account"
        },
        "account.alerts.open": {
            "0": "/account/alerts/open"
        },
        "account.alerts.resolved": {
            "0": "/account/alerts/resolved"
        },
        "account.components": {
            "0": "/account/components"
        },
        "account.devices": {
            "0": "/account/devices"
        },
        "account.sites": {
            "0": "/account/sites"
        },
        "account.users": {
            "0": "/account/users"
        },
        "alert": {
            "1": "/alert/:alertUid"
        },
        "audit.device": {
            "1": "/audit/device/:deviceUid"
        },
        "audit.device.software": {
            "1": "/audit/device/:deviceUid/software"
        },
        "audit.esxihost": {
            "1": "/audit/esxihost/:deviceUid"
        },
        "audit.printer": {
            "1": "/audit/printer/:deviceUid"
        },
        "device.id": {
            "1": "/device/id/:deviceId"
        },
        "device": {
            "1": "/device/:deviceUid"
        },
        "device.alerts.open": {
            "1": "/device/:deviceUid/alerts/open"
        },
        "device.alerts.resolved": {
            "1": "/device/:deviceUid/alerts/resolved"
        },
        "job": {
            "1": "/job/:jobUid"
        },
        "job.components": {
            "1": "/job/:jobUid/components"
        },
        "site": {
            "1": "/site/:siteUid"
        },
        "site.alerts.open": {
            "1": "/site/:siteUid/alerts/open"
        },
        "site.alerts.resolved": {
            "1": "/site/:siteUid/alerts/resolved"
        },
        "site.devices": {
            "1": "/site/:siteUid/devices"
        },
        "site.settings": {
            "1": "/site/:siteUid/settings"
        },
        "system.pagination": {
            "0": "/system/pagination"
        },
        "system.request_rate": {
            "0": "/system/request_rate"
        },
        "system.status": {
            "0": "/system/status"
        }
    },
    "post": {
        "device.udf": {
            "1": "/device/:deviceUid/udf"
        },
        "site": {
            "1": "/site/:siteUid"
        },
        "site.settings.proxy": {
            "1": "/site/:siteUid/settings/proxy"
        },
        "user.resetapikeys": {
            "0": "/user/resetApiKeys"
        }
    },
    "put": {
        "alert.mute": {
            "1": "/alert/:alertUid/mute"
        },
        "alert.resolve": {
            "1": "/alert/:alertUid/resolve"
        },
        "alert.unmute": {
            "1": "/alert/:alertUid/unmute"
        },
        "device.quickjob": {
            "1": "/device/:deviceUid/quickjob"
        },
        "device.site": {
            "2": "/device/:deviceUid/site/:siteUid"
        },
        "site": {
            "0": "/site"
        }
    },
    "patch": {},
    "delete": {
        "site.settings.proxy": {
            "1": "/site/:siteUid/settings/proxy"
        }
    }
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

endpoint.account = {};
endpoint.account.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['account'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.account.alerts = {};
endpoint.account.alerts.open = {};
endpoint.account.alerts.open.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['account.alerts.open'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.account.alerts.resolved = {};
endpoint.account.alerts.resolved.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['account.alerts.resolved'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.account.components = {};
endpoint.account.components.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['account.components'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.account.devices = {};
endpoint.account.devices.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['account.devices'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.account.sites = {};
endpoint.account.sites.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['account.sites'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.account.users = {};
endpoint.account.users.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['account.users'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.alert = {};
endpoint.alert.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['alert'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.audit = {};
endpoint.audit.device = {};
endpoint.audit.device.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['audit.device'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.audit.device.software = {};
endpoint.audit.device.software.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['audit.device.software'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.audit.esxihost = {};
endpoint.audit.esxihost.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['audit.esxihost'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.audit.printer = {};
endpoint.audit.printer.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['audit.printer'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.device = {};
endpoint.device.id = {};
endpoint.device.id.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['device.id'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.device.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['device'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.device.alerts = {};
endpoint.device.alerts.open = {};
endpoint.device.alerts.open.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['device.alerts.open'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.device.alerts.resolved = {};
endpoint.device.alerts.resolved.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['device.alerts.resolved'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.job = {};
endpoint.job.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['job'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.job.components = {};
endpoint.job.components.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['job.components'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.site = {};
endpoint.site.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['site'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.site.alerts = {};
endpoint.site.alerts.open = {};
endpoint.site.alerts.open.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['site.alerts.open'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.site.alerts.resolved = {};
endpoint.site.alerts.resolved.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['site.alerts.resolved'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.site.devices = {};
endpoint.site.devices.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['site.devices'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.site.settings = {};
endpoint.site.settings.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['site.settings'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.system = {};
endpoint.system.pagination = {};
endpoint.system.pagination.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['system.pagination'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.system.request_rate = {};
endpoint.system.request_rate.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['system.request_rate'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.system.status = {};
endpoint.system.status.get = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['get']['system.status'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.get({path: url, params: arguments[size]});
    else return endpoint.get(url);
};

endpoint.device.udf = {};
endpoint.device.udf.post = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['post']['device.udf'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.post({path: url, body: arguments[size]});
    else return endpoint.post(url);
};

endpoint.site.post = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['post']['site'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.post({path: url, body: arguments[size]});
    else return endpoint.post(url);
};

endpoint.site.settings.proxy = {};
endpoint.site.settings.proxy.post = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['post']['site.settings.proxy'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.post({path: url, body: arguments[size]});
    else return endpoint.post(url);
};

endpoint.user = {};
endpoint.user.resetapikeys = {};
endpoint.user.resetapikeys.post = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['post']['user.resetapikeys'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.post({path: url, body: arguments[size]});
    else return endpoint.post(url);
};

endpoint.alert.mute = {};
endpoint.alert.mute.put = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['put']['alert.mute'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.put({path: url, body: arguments[size]});
    else return endpoint.put(url);
};

endpoint.alert.resolve = {};
endpoint.alert.resolve.put = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['put']['alert.resolve'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.put({path: url, body: arguments[size]});
    else return endpoint.put(url);
};

endpoint.alert.unmute = {};
endpoint.alert.unmute.put = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['put']['alert.unmute'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.put({path: url, body: arguments[size]});
    else return endpoint.put(url);
};

endpoint.device.quickjob = {};
endpoint.device.quickjob.put = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['put']['device.quickjob'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.put({path: url, body: arguments[size]});
    else return endpoint.put(url);
};

endpoint.device.site = {};
endpoint.device.site.put = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['put']['device.site'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.put({path: url, body: arguments[size]});
    else return endpoint.put(url);
};

endpoint.site.put = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['put']['site'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.put({path: url, body: arguments[size]});
    else return endpoint.put(url);
};

endpoint.site.settings.proxy.delete = function () {
    var size = arguments.length > 0 ? arguments.length : 0;
    var hasParams = size > 0 && (typeof arguments[size - 1] == "object");
    if (hasParams) size--;
    var url = parse(urlsData['delete']['site.settings.proxy'][size], Array.prototype.slice.call(arguments, 0, size));
    if (hasParams) return endpoint.delete({path: url, params: arguments[size]});
    else return endpoint.delete(url);
};

endpoint.fileManager = {};
endpoint.fileManager.files = {};
endpoint.fileManager.files.post = function (params) {
    if (!params) {
        throw 'wrong numbers of arguments for fileManager.files.post';
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


var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
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

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

