const config = {
  userAgent: 'Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'
}

function changeUserAgent (request) {
  for (let header of request.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") header.value = config.userAgent
  }

  return { requestHeaders: request.requestHeaders }
}

chrome.webRequest.onBeforeSendHeaders.addListener(changeUserAgent, {urls: ["*://*.youtube.com/tv*"]}, ["blocking", "requestHeaders"]);
