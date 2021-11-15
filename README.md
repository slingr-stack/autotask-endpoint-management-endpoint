---
title: Autotask endpoint management
keywords: 
last_updated: April 27, 2018
tags: []
summary: "Detailed description of the API of the Autotask endpoint management."
---

## Overview

Autotask Endpoint management for SLINGR facilitates integration with AEM exposing services to manage: 

- Accounts 
- Alerts
- Devices 
- Jobs 
- Sites 
- Users

In order to take advantage of this endpoint we strongly recommend to read the [AEM REST API docs](http://help.aem.autotask.net/en/Content/2SETUPAEM/APIv2.htm)

## Configuration

### API URL
This is the URL of the API.

## User configuration

You will need to create a user in AEM that will be used to access the API. All requests to the API will be done
on behalf of that user.

You will need to generate API keys to access the services. Keys are generated per AEM user. related. All requests to the 
API will be done on behalf of that user. Please refer to [API docs](http://help.aem.autotask.net/en/Content/2SETUPAEM/APIv2.htm) for more information.

Once you generate those keys you need to copy them into the following fields. 

### Key

The generated key for the user to access the API.

### Secret key

The generated secret key for the user to access the API.

## Quick start

Once you have configured the endpoint, you will need to connect at least one user to the endpoint (by going to
`My integrations` in the secondary menu of the app runtime). Then scripts need to be run with the user you have
connected.

Get account info:

```js
app.endpoints.aem.account.get();
```

## Javascript API

The Javascript API provides direct access to the Autotask Endpoint Management REST API so you can make regular HTTP
requests. 

Additionally the endpoint provides some helpers to easy access to the REST API services.

### HTTP requests

You can make `GET`, `POST`, `PUT`, and `DELETE` request to the 
[AEM API](http://help.aem.autotask.net/en/Content/2SETUPAEM/APIv2.htm) like this:

```js
var account = app.endpoints.aem.get('account'); // retrieve account info
var site = app.endpoints.aem.site.put({name: 'Acme Corp'}); // create a new site
var muteAlert = app.endpoints.aem.post('alert/b8ba0002/mute'); // mute specific alert
```

Please take a look at the documentation of the [HTTP endpoint]({{site.baseurl}}/endpoints_http.html#javascript-api)
for more information.

### Shortcuts Helpers

The Javascript API provides shortcuts to make it easier to call the [AEM REST API](http://help.aem.autotask.net/en/Content/2SETUPAEM/APIv2.htm).
For example, instead of calling manually the method `GET /site/:siteUid/alerts/open`, you can use the following
shortcut:

```js
var openedAlerts = app.endpoints.aem.site.alerts.open.get('aeda000d');
```

The following rules are used to determine the shortcut signature:

- **Path sections get converted to namespaces**: for example if the method is GET `~/audit/printer/{deviceUid}` 
  it is converted to `app.endpoints.aem.audit.printer.get(deviceUid)`.
- **HTTP method is appended to the end of the method**: the available http methods: `GET`, `POST`, `PUT` and `DELETE` will
  be used as suffix of the method as lower case.
- **Path variables become method parameters**: var arguments in the URL are passsed as method's parameters.
- **Additional parameters or body are sent in the last param as JSON**: For example the REST URL: 
    `audit/device/8ddff292-ecd0-7ea2-693f-244d5013120a/software?max=250&page=1` 
    becomes `app.endpoints.aem.audit.device.software.get('8ddff292-ecd0-7ea2-693f-244d5013120a', {max: 5, page: 2});`
    in the Javascript API. 


Here are some URLs of the REST API and their corresponding shortcut:

```js
// GET /site/{siteUid}/settings
var res = app.endpoints.aem.site.settings.get(siteUid);

// POST /site/{siteUid}
var res = app.endpoints.aem.site.post(siteUid, payload);

// PUT /alert/{alertUid}/mute
var res = app.endpoints.aem.alert.mute.put(alertUid);
```

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
