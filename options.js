document.addEventListener("DOMContentLoaded", function() {
    //save
    const showSaveAlert = () => {
        const successAlert = document.getElementById('success-alert');
        successAlert.classList.remove('hidden');
        window.setTimeout(() => {
            successAlert.classList.add('hidden');
        }, 5000);
    };
    const save = () => {
        const enableCustomBackground = document.getElementById('optionEnableCustomBackground');
        const customBackgroundUrl = document.getElementById('optionCustomBackgroundUrl');
        const enableAssigneeHighlighting = document.getElementById('optionEnableAssigneeHighlighting');
        const assigneeNames = document.querySelectorAll('.optionAssignee');
        const assigneeColours = document.querySelectorAll('.optionAssigneeColour');
        let assigneeNameAndColours = {};
        for (let i = 0; i < assigneeNames.length; i++) {
            assigneeNameAndColours[assigneeNames[i].value] = assigneeColours[i].value;
        }

        chrome.storage.sync.set({backgroundEnabled: enableCustomBackground.checked});
        chrome.storage.sync.set({backgroundImageUrl: customBackgroundUrl.value});
        chrome.storage.sync.set({assigneeHighlightingEnabled: enableAssigneeHighlighting.checked});
        chrome.storage.sync.set({assigneeNameAndColours: assigneeNameAndColours});
        showSaveAlert();
    };
    document.getElementById('optionsSave').addEventListener('click', () => save());

    //remove assignee option settings
    const removeAssignee = (event) => {
        const assignee = event.target.parentNode.parentNode;
        assignee.parentNode.removeChild(assignee);
    };
    const removeAssigneeButtons = document.querySelectorAll('.removeAssigneeButton');
    for (let i = 0; i < removeAssigneeButtons.length; i++) {
        removeAssigneeButtons[i].addEventListener('click', removeAssignee, false);
    }

    //add assignee option settings
    const assigneeHTML = `<div class="md:flex md:items-center mb-1">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              assignee colours
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 optionAssignee" type="text" value="Jane Doe">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 optionAssigneeColour" type="text" value="#ffffff">
            <button class="mt-1 shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded removeAssigneeButton" type="button">remove</button>
          </div>
        </div>`;
    const addAssignee = (name, colour) => {
        const assignee = document.createElement("div");
        assignee.innerHTML = assigneeHTML;
        assignee.querySelector('.optionAssignee').value = name;
        assignee.querySelector('.optionAssigneeColour').value = colour;
        const parentContainer = document.querySelector('form');
        assignee.querySelector('.removeAssigneeButton').addEventListener('click', removeAssignee, false);
        parentContainer.insertBefore(assignee, parentContainer.children[5]);
    };
    document.getElementById('addAssignee').addEventListener('click', () => addAssignee("", ""));

    //load/set previous settings
    const assigneeNameAndColours = (assigneeNameAndColours) => {
        if (assigneeNameAndColours) {
            Object.keys(assigneeNameAndColours).forEach(function(key) {
                addAssignee(key, assigneeNameAndColours[key]);
            });
        }
    };
    chrome.storage.sync.get(['backgroundImageUrl', 'backgroundEnabled', 'assigneeHighlightingEnabled', 'assigneeNameAndColours'], function(data) {
        document.getElementById('optionEnableCustomBackground').checked = data.backgroundEnabled;
        document.getElementById('optionCustomBackgroundUrl').value = data.backgroundImageUrl;
        document.getElementById('optionEnableAssigneeHighlighting').checked = data.assigneeHighlightingEnabled;
        assigneeNameAndColours(data.assigneeNameAndColours);
    });
});
