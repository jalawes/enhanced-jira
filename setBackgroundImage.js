chrome.storage.sync.get('backgroundImageUrl', function(data) {
    document.getElementById('jira').style.background = 'url(' + data.backgroundImageUrl + ')';
    document.getElementById('gh').style.background = 'transparent';
    document.getElementById('gh').style.backgroundColor = 'transparent';

    if (document.getElementById('ghx-pool')) {
        document.getElementById('ghx-pool').style.background = 'transparent';
        document.getElementById('ghx-pool').style.backgroundColor = 'transparent';
    }
    if (document.getElementById('ghx-column-header-group')) {
        document.getElementById('ghx-column-header-group').style.background = 'transparent';
        document.getElementById('ghx-column-header-group').style.backgroundColor = 'transparent';
    }
    if (document.getElementById('jira-issue-container')) {
        document.getElementById('jira-issue-container').style.background = '#ffffff';
        document.getElementById('jira-issue-container').style.backgroundColor = '#ffffff';
    }
    if (document.getElementById('ghx-plan')) {
        document.getElementById('ghx-plan').style.background = '#ffffff';
        document.getElementById('ghx-plan').style.backgroundColor = '#ffffff';
    }

    const collumns = document.getElementsByClassName('ghx-column ghx-narrow-card');
    for (let i = 0; i < collumns.length; i++) {
        collumns[i].style.background = 'rgba(255, 255, 255, 0.4)';
        collumns[i].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    }
});
