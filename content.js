chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "change_the_background")) {
        sendResponse(document.innerHTML);
    }
});
