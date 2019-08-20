chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ backgroundImageUrl: 'https://picsum.photos/1920/1080' });
  chrome.storage.sync.set({ backgroundEnabled: true });
});

chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.url.indexOf('.atlassian.net') != -1) {
    chrome.tabs.executeScript(details.tabId, { file: 'features/setBackgroundImage.js' });
    chrome.tabs.executeScript(details.tabId, { file: 'features/setAssigneeHighlight.js' });
    chrome.tabs.executeScript(details.tabId, { file: 'features/hideToggleableUI.js' });
    chrome.tabs.executeScript(details.tabId, { file: 'features/quickMenu.js' });
  }
});

chrome.webRequest.onBeforeRequest.addListener((details) => {
  if (details.url.includes('atlassian.net/rest/greenhopper')) {
    chrome.tabs.executeScript(details.tabId, { file: 'features/setBackgroundImage.js' });
    chrome.tabs.executeScript(details.tabId, { file: 'features/setAssigneeHighlight.js' });
    chrome.tabs.executeScript(details.tabId, { file: 'features/hideToggleableUI.js' });
    chrome.tabs.executeScript(details.tabId, { file: 'features/quickMenu.js' });
  }
  return { requestHeaders: details.requestHeaders };
}, { urls: ['<all_urls>'] }, ['blocking']);
