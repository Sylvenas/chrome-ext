/* eslint-disable no-undef */
chrome.webRequest.onBeforeSendHeaders.addListener(
  ({ requestHeaders }) => {
    requestHeaders.push({
      name: 'experiment',
      value: 'hzzhaoxiangtao@corp.netease.com',
    });
    return { requestHeaders };
  },
  { urls: ['<all_urls>'] },
  ['blocking', 'requestHeaders']
);
