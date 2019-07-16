chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({backgroundImageUrl: 'https://picsum.photos/1920/1080'});
    chrome.storage.sync.set({backgroundEnabled: true});
});

chrome.webNavigation.onCompleted.addListener(function(details){
    if (details.url.indexOf('.atlassian.net') != -1) {
        chrome.tabs.executeScript(details.tabId, { file: "features/setBackgroundImage.js" });
    }
});

chrome.webRequest.onBeforeRequest.addListener(function(details){
    if (details.url.includes('atlassian.net/rest/greenhopper/1.0/userData')) {
        chrome.tabs.executeScript(details.tabId, { file: "features/setBackgroundImage.js" });
    }
    return {requestHeaders: details.requestHeaders};
},
{urls: ["<all_urls>"]},
["blocking"]);
