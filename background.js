chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({backgroundImageUrl: 'https://picsum.photos/1920/1080'});
    chrome.storage.sync.set({backgroundEnabled: true});
});

chrome.webNavigation.onCompleted.addListener(function(details){
    if (details.url.indexOf('coconutcalendar.atlassian.net') != -1) {
        chrome.tabs.executeScript(details.tabId, { file: "features/setBackgroundImage.js" });
    }
});
