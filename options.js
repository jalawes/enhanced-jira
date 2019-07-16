const saveButton = document.getElementById('optionsSave');
saveButton.addEventListener('click', function () {
    const enableCustomBackground = document.getElementById('optionEnableCustomBackground');
    const customBackgroundUrl = document.getElementById('optionCustomBackgroundUrl');
    chrome.storage.sync.set({backgroundEnabled: enableCustomBackground.checked});
    chrome.storage.sync.set({backgroundImageUrl: customBackgroundUrl.value});
});

document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.sync.get(['backgroundImageUrl', 'backgroundEnabled'], function(data) {
        document.getElementById('optionEnableCustomBackground').checked = data.backgroundEnabled;
        document.getElementById('optionCustomBackgroundUrl').value = data.backgroundImageUrl;
    });
});
