chrome.storage.sync.get(['collapsibleSubtasksEnabled', 'boardOrColumn'], function(data) {
    const hideShowSubtasksByColumn = (element) => {

        const parentCardChildren = element.target.parentNode.children;
        console.log(parentCardChildren);

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

    if (data.collapsibleSubtasksEnabled) {
        if (data.boardOrColumn) { //collapse by board
            console.log('board');
        }
        if (!data.boardOrColumn) { //collapse by colmn
            console.log('column');
            const parents = document.querySelectorAll('.ghx-parent-group');
            parents.forEach((parentCard, index) => {
                const hasButtonAlready = parentCard.innerHTML.includes('collapse subtasks');
                if (!hasButtonAlready) {
                    parentCard.innerHTML = '<button style="width: calc(100% - 10px); margin-left: 5px;" class="aui-button ghx-actions-tools" id="subtask-button-' + index + '">collapse subtasks</button>' + parentCard.innerHTML;
                    var myButton = document.querySelector ('#subtask-button-' + index);
                    myButton.addEventListener ("click", hideShowSubtasksByColumn , false);
                }
            });
        }
    }
});
