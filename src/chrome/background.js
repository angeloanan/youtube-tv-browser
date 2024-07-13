const userAgent = 'Mozilla/5.0 (SMART-TV; LINUX; Tizen 7.0) AppleWebKit/537.36 (KHTML, like Gecko) 94.0.4606.31/7.0 TV Safari/537.36'

function changeUserAgent (request) {
  for (let header of request.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") header.value = userAgent
  }

  return { requestHeaders: request.requestHeaders }
}

//chrome.webRequest.onBeforeSendHeaders.addListener(changeUserAgent, {urls: ["*://*.youtube.com/tv*"]}, ["blocking", "requestHeaders"]);

const rules = {
  removeRuleIds: [1],
  addRules: [
    {
      id: 1,
      priority: 1,
      action: {
        type: 'modifyHeaders',
        requestHeaders: [
          {
            header: 'user-agent',
            operation: 'set',
            value: userAgent,
          },
        ],
      },
      condition: {
        urlFilter: '*',
        resourceTypes: ['main_frame']
      },
    },
  ],
}

chrome.runtime.onInstalled.addListener(function(details) {
  chrome.declarativeNetRequest.updateDynamicRules(rules);
});
