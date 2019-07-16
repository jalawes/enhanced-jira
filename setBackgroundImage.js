chrome.storage.sync.get('backgroundImageUrl', function(data) {
    if (document.getElementById('jira')) {
        document.getElementById('jira').style.background = 'url(' + data.backgroundImageUrl + ')';
    }
    if (document.getElementById('gh')) {
        document.getElementById('gh').style.background = 'transparent';
        document.getElementById('gh').style.backgroundColor = 'transparent';
    }
    if (document.getElementById('ghx-pool')) {
        document.getElementById('ghx-pool').style.background = 'transparent';
        document.getElementById('ghx-pool').style.backgroundColor = 'transparent';
    }
    if (document.getElementById('ghx-column-header-group')) {
        document.getElementById('ghx-column-header-group').style.background = 'transparent';
        document.getElementById('ghx-column-header-group').style.backgroundColor = 'transparent';
    }

    var collumns = document.getElementsByClassName('ghx-column ghx-narrow-card');
    for (var i = 0; i < collumns.length; i++) {
        collumns[i].style.background = 'rgba(255, 255, 255, 0.4)';
        collumns[i].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    }
});
