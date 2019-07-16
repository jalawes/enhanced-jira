chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({backgroundImageUrl: 'https://picsum.photos/1920/1080'});
    chrome.storage.sync.set({backgroundEnabled: true});
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tab.url.indexOf('coconutcalendar.atlassian.net') != -1) {
            chrome.tabs.executeScript(tab.id, { file: "features/setBackgroundImage.js" });
        }
    }
});
