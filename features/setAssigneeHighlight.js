chrome.storage.sync.get(['assigneeNameAndColours', 'assigneeHighlightingEnabled'], function(data) {
    if (data.assigneeHighlightingEnabled) {
        var imgs = document.getElementsByTagName('img');

        for ( var i = 0, length = imgs.length; i < length; i++ )
        {
            var flagged = false;
            if (imgs[i].parentNode.parentNode.parentNode.parentNode.classList.contains('ghx-flagged')) {
                flagged = true;
            }

            if (data.assigneeNameAndColours) {
                Object.keys(data.assigneeNameAndColours).forEach(function(key) {
                    if ( imgs[i].getAttribute('alt') === 'Assignee: ' + key ) {
                        imgs[i].parentNode.parentNode.parentNode.parentNode.style.background = data.assigneeNameAndColours[key];
                        imgs[i].parentNode.parentNode.style.background = data.assigneeNameAndColours[key];
                        imgs[i].parentNode.style.background = data.assigneeNameAndColours[key];
                    }
                });
            }
        }
    }
});
