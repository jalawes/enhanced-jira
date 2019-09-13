chrome.storage.sync.get(['priorityColour', 'priorityIndicationEnabled'], function(data) {
    const prioirtyMapping = {
        'Lowest priority': 0,
        'Low priority': 1,
        'Medium priority': 2,
        'High priority': 3,
        'Highest priority': 4,
    };

    if (data.priorityIndicationEnabled) {
        const stats = document.querySelectorAll('.ghx-row.ghx-stat-1');
        for (let i = 0; i < stats.length; i++) {
            if (stats[i].children[1] && stats[i].children[1].getAttribute("data-tooltip")) {
                const tooltip = stats[i].children[1].getAttribute("data-tooltip");
                if (prioirtyMapping.hasOwnProperty(tooltip)) {
                    stats[i].children[1].innerHTML = '<span style="border: 1px solid black; background: ' + data.priorityColour[prioirtyMapping[tooltip]] + '">  ' + tooltip.substr(-99 , 7) + '</span>';
                }
            }
        }
    }
});
