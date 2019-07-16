chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({backgroundImageUrl: 'https://picsum.photos/1920/1080'});
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tab.url.indexOf('coconutcalendar.atlassian.net') != -1) {
            setTimeout(function(){ chrome.tabs.executeScript(tab.id, { file: "setBackgroundImage.js" }); }, 1000);
        }
    }
});
