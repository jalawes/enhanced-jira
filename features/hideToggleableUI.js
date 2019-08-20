chrome.storage.sync.get([
    'hideBreadCrumbsEnabled',
    'hideBoardTitleEnabled',
    'hideShareButtonEnabled',
    'hideStartSprintButtonEnabled',
    'hideStarEnabled',
    'hideDaysRemainingEnabled',
    'hideNoSubtasksButtonEnabled',
    'hideNonClosedIssuesButtonEnabled',
    'hideOnlyMyIssuesButtonEnabled',
    'hideRecentlyUpdatedButtonEnabled',
], function(data) {
    if (data.hideBreadCrumbsEnabled && document.querySelector('#breadcrumbs-container')) {
        document.querySelector('#breadcrumbs-container').remove();
    }
    if (data.hideBoardTitleEnabled && document.querySelector('#subnav-title')) {
        document.querySelector('#subnav-title').remove();
    }
    if (data.hideShareButtonEnabled && document.querySelector('#ghx-share')) {
        document.querySelector('#ghx-share').remove();
    }
    if (data.hideStartSprintButtonEnabled && document.querySelector('#ghx-complete-sprint')) {
        document.querySelector('#ghx-complete-sprint').remove();
    }
    if (data.hideStarEnabled && document.querySelector('.favourite-btn')) {
        document.querySelector('.favourite-btn').remove();
    }
    if (data.hideDaysRemainingEnabled && document.querySelector('.time')) {
        document.querySelector('.time').remove();
    }
    if (data.hideNoSubtasksButtonEnabled) {
        for (const button of document.querySelector('#ghx-quick-filters').querySelectorAll("button")) {
            if (button.textContent.includes("No Subtasks")) {
                button.remove();
            }
        }
    }
    if (data.hideNonClosedIssuesButtonEnabled && document.querySelector('.time')) {
        for (const button of document.querySelector('#ghx-quick-filters').querySelectorAll("button")) {
            if (button.textContent.includes("Non-Closed Issues")) {
                button.remove();
            }
        }
    }
    if (data.hideOnlyMyIssuesButtonEnabled && document.querySelector('.time')) {
        for (const button of document.querySelector('#ghx-quick-filters').querySelectorAll("button")) {
            if (button.textContent.includes("Only My Issues")) {
                button.remove();
            }
        }
    }
    if (data.hideRecentlyUpdatedButtonEnabled && document.querySelector('.time')) {
        for (const button of document.querySelector('#ghx-quick-filters').querySelectorAll("button")) {
            if (button.textContent.includes("Recently Updated")) {
                button.remove();
            }
        }
    }
});
