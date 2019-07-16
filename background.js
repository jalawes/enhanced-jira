chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({backgroundImageUrl: 'https://picsum.photos/1920/1080'});
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tab.url.indexOf('coconutcalendar.atlassian.net') != -1) {
            chrome.storage.sync.get('backgroundImageUrl', function(data) {
                setBackgroundImage(data.backgroundImageUrl, tab);
            });
        }
    }
});


function setBackgroundImage(url, tab) {
    chrome.tabs.executeScript(tab.id, {code: 'document.body.style.background = "url(' + url + ')";'});
    chrome.tabs.executeScript(tab.id, {code: 'document.getElementById(\'gh\').style.background = "transparent";'});
    chrome.tabs.executeScript(tab.id, {code: 'document.getElementById(\'ghx-pool\').style.background = "transparent";'});
    chrome.tabs.executeScript(tab.id, {code: 'document.getElementById(\'ghx-column-header-group\').style.background = "transparent";'});
}
