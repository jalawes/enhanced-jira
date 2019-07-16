chrome.storage.sync.get('backgroundImageUrl', function(data) {
    const collumns = document.getElementsByClassName('ghx-column ghx-narrow-card');
    const gh = document.getElementById('gh');
    const ghxColumn = document.getElementById('ghx-column-header-group');
    const ghxPlan = document.getElementById('ghx-plan');
    const ghxPool = document.getElementById('ghx-pool');
    const jira = document.getElementById('jira');
    const jiraIssueContainer = document.getElementById('ghx-column-header-group');

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

    for (let i = 0; i < collumns.length; i++) {
        collumns[i].style.background = 'rgba(255, 255, 255, 0.4)';
        collumns[i].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    }
});
