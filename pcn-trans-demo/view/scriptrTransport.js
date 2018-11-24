var wssConfig = ["wsClientProvider",function (wsClientProvider) {
  wsClientProvider.setToken("QzBFMjQ5MTkzNDpkZW1vOjIxOTUxQzUxMzM5QTZGNURDQTk5RTRFQTM3QjFDNUUy");
  wsClientProvider.setPublishChannel("requestChannel");
  wsClientProvider.setSubscribeChannel("responseChannel");
}];

var httpsConfig = ["httpClientProvider",function (httpClientProvider) {
  httpClientProvider.setBaseUrl("https://api.scriptrapps.io");
  httpClientProvider.setToken("QzBFMjQ5MTkzNDpkZW1vOjIxOTUxQzUxMzM5QTZGNURDQTk5RTRFQTM3QjFDNUUy");
}]