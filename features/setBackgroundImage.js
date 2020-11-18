chrome.storage.sync.get(['backgroundImageUrl', 'backgroundEnabled'], function(data) {
    if (data.backgroundEnabled) {
        const collumns = document.getElementsByClassName('ghx-column ghx-narrow-card');
        const swimlaneHeaders = document.getElementsByClassName('ghx-swimlane-header');
        const swimlaneStalker = document.getElementById('ghx-swimlane-header-stalker');
        const gh = document.getElementById('gh');
        const ghxColumn = document.getElementById('ghx-column-header-group');
        const ghxPlan = document.getElementById('ghx-plan');
        const ghxPool = document.getElementById('ghx-pool');
        const jira = document.getElementById('jira-frontend');
        const jiraIssueContainer = document.getElementById('jira-issue-container');
        const columnHeaders = document.getElementById('ghx-column-headers');

        jira.style.background = 'url(' + data.backgroundImageUrl + ')';
        gh.style.background = 'transparent';
        gh.style.backgroundColor = 'transparent';

        if (ghxPool) {
            ghxPool.style.background = 'transparent';
            ghxPool.style.backgroundColor = 'transparent';
        }
        if (ghxColumn) {
            ghxColumn.style.background = 'transparent';
            ghxColumn.style.backgroundColor = 'transparent';
        }
        if (jiraIssueContainer) {
            jiraIssueContainer.style.background = '#ffffff';
            jiraIssueContainer.style.backgroundColor = '#ffffff';
        }
        if (ghxPlan) {
            ghxPlan.style.background = '#ffffff';
            ghxPlan.style.backgroundColor = '#ffffff';
        }
        if (swimlaneStalker) {
            swimlaneStalker.style.background = 'rgba(255, 255, 255, 1.0)';
            swimlaneStalker.style.backgroundColor = 'rgba(255, 255, 255, 1.0)';
        }
        if (columnHeaders) {
            columnHeaders.style.borderSpacing = '0';
            columnHeaders.style.background = 'rgba(255, 255, 255, 1.0)';
            columnHeaders.style.backgroundColor = 'rgba(255, 255, 255, 1.0)';
            columnHeaders.style.borderRadius = '7px';
            columnHeaders.style.position = 'relative';
            columnHeaders.style.left = '10px';
            columnHeaders.style.width = 'calc(100% - 10px)';
        }

        for (let i = 0; i < collumns.length; i++) {
            if (collumns[i].children[0].className === 'ghx-column-header-flex') {
                collumns[i].style.background = 'rgba(255, 255, 255, 0.85)';
                collumns[i].style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                collumns[i].style.padding = '0px';
                collumns[i].style.borderRadius = '0px';
                collumns[i].style.paddingLeft = '20px';
                collumns[i].style.paddingTo = '10px';
            } else {
                collumns[i].style.background = 'rgba(255, 255, 255, 0.5)';
                collumns[i].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            }
        }

        for (let i = 0; i < swimlaneHeaders.length; i++) {
            swimlaneHeaders[i].style.background = 'rgba(255, 255, 255, 0.85)';
            swimlaneHeaders[i].style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
            swimlaneHeaders[i].style.width = '100%';
        }
    }
});
