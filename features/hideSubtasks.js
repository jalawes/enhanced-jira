chrome.storage.sync.get(['collapsibleSubtasksEnabled', 'boardOrColumn'], function(data) {
    const hideShowSubtasksByColumn = (element) => {
        const parentCardChildren = element.target.parentNode.children;

        for (var i = 2; i < parentCardChildren.length; i++) {
            if (parentCardChildren[i].style.display === 'none') {
                parentCardChildren[i].style.display = 'block';
                element.target.innerHTML = 'collapse subtasks';
            } else {
                parentCardChildren[i].style.display = 'none';
                element.target.innerHTML = 'show subtasks';
            }
        }
    }

    const hideShowSubtasksByBoard = (element) => {
        const allCards = document.querySelectorAll('.ghx-issue');
        const tasks = element.target.parentNode.querySelectorAll('.ghx-extra-field-content')[0].innerHTML;

        for (var i = 0; i < allCards.length; i++) {
            if (tasks.includes(allCards[i].getAttribute('data-issue-key'))) {
                if (allCards[i].style.display === 'none') {
                    allCards[i].style.display = 'block';
                    element.target.innerHTML = '- hide subtasks';
                } else {
                    allCards[i].style.display = 'none';
                    element.target.innerHTML = '+ show subtasks';
                }
            }
        }
    }

    if (data.collapsibleSubtasksEnabled) {
        if (data.boardOrColumn) { //collapse by board
            const parents = document.querySelectorAll('.ghx-parent-group:not(.js-fake-parent)');
            parents.forEach((parentCard, index) => {
                const hasButtonAlready = parentCard.innerHTML.includes('subtasks</button>');
                if (!hasButtonAlready) {
                    parentCard.innerHTML = '<button style="width: calc(100% - 10px); margin-left: 5px;" class="aui-button ghx-actions-tools" id="subtask-button-' + index + '">collapse subtasks</button>' + parentCard.innerHTML;
                    var myButton = document.querySelector ('#subtask-button-' + index);
                    myButton.addEventListener ("click", hideShowSubtasksByBoard , false);
                }
            });
        }
        if (!data.boardOrColumn) { //collapse by colmn
            const parents = document.querySelectorAll('.ghx-parent-group');
            parents.forEach((parentCard, index) => {
                const hasButtonAlready = parentCard.innerHTML.includes('subtasks</button>');
                if (!hasButtonAlready) {
                    parentCard.innerHTML = '<button style="width: calc(100% - 10px); margin-left: 5px;" class="aui-button ghx-actions-tools" id="subtask-button-' + index + '">collapse subtasks</button>' + parentCard.innerHTML;
                    var myButton = document.querySelector ('#subtask-button-' + index);
                    myButton.addEventListener ("click", hideShowSubtasksByColumn , false);
                }
            });
        }
    }
});
