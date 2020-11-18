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
    'hideTopNavbarEnabled',
], function(data) {
    if (data.hideBreadCrumbsEnabled && document.querySelector('[data-testid=rapidboard-breadcrumbs]')) {
        document.querySelector('[data-testid=rapidboard-breadcrumbs]').remove();
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
    if (data.hideTopNavbarEnabled && document.querySelector('[data-testid=atlassian-navigation--header]').parentElement) {
        document.querySelector('[data-testid=atlassian-navigation--header]').parentElement.remove();
        document.querySelector('[data-testid=Navigation]').style.top = '0px';
        document.querySelector('[data-testid=Content]').style.setProperty("margin-top", "0px", "important");
    }
    if (data.hideNoSubtasksButtonEnabled) {
        for (const button of document.querySelector('#ghx-quick-filters').querySelectorAll("button")) {
            if (button.textContent.includes("No Subtasks")) {
                button.remove();
            }
        }
    }
    if (data.hideNonClosedIssuesButtonEnabled) {
        for (const button of document.querySelector('#ghx-quick-filters').querySelectorAll("button")) {
            if (button.textContent.includes("Non-Closed Issues")) {
                button.remove();
            }
        }
    }
    if (data.hideOnlyMyIssuesButtonEnabled) {
        for (const button of document.querySelector('#ghx-quick-filters').querySelectorAll("button")) {
            if (button.textContent.includes("Only My Issues")) {
                button.remove();
            }
        }
    }
    if (data.hideRecentlyUpdatedButtonEnabled) {
        for (const button of document.querySelector('#ghx-quick-filters').querySelectorAll("button")) {
            if (button.textContent.includes("Recently Updated")) {
                button.remove();
            }
        }
    }

    if (data.hideNoSubtasksButtonEnabled && data.hideNonClosedIssuesButtonEnabled && data.hideOnlyMyIssuesButtonEnabled && data.hideRecentlyUpdatedButtonEnabled) {
        document.querySelector('.ghx-top-header').style.position = 'fixed';
        document.querySelector('.ghx-top-header').style.right = '10px';
    }
});
