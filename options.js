//save
const showSaveAlert = () => {
    const successAlert = document.getElementById('success-alert');
    successAlert.classList.remove('hidden');
    window.setTimeout(() => {
        successAlert.classList.add('hidden');
    }, 5000);
};
const save = () => {
    const assigneeNames = document.querySelectorAll('.optionAssignee');
    const assigneeColours = document.querySelectorAll('.optionAssigneeColour');
    let assigneeNameAndColours = {};
    for (let i = 0; i < assigneeNames.length; i++) {
        assigneeNameAndColours[assigneeNames[i].value] = assigneeColours[i].value;
    }

    const priorityColours = document.querySelectorAll('.priorityIndicationColour');
    const priorityColourOptions = [];
    for (let i = 0; i < priorityColours.length; i++) {
        priorityColourOptions[i] = priorityColours[i].value;
    }

    chrome.storage.sync.set({backgroundEnabled: document.getElementById('optionEnableCustomBackground').checked});
    chrome.storage.sync.set({backgroundImageUrl: document.getElementById('optionCustomBackgroundUrl').value});
    chrome.storage.sync.set({assigneeHighlightingEnabled: document.getElementById('optionEnableAssigneeHighlighting').checked});
    chrome.storage.sync.set({assigneeNameAndColours: assigneeNameAndColours});
    chrome.storage.sync.set({hideBreadCrumbsEnabled: document.getElementById('optionHideBreadCrumbs').checked});
    chrome.storage.sync.set({hideBoardTitleEnabled: document.getElementById('optionHideBoardTitle').checked});
    chrome.storage.sync.set({hideShareButtonEnabled: document.getElementById('optionHideShareButton').checked});
    chrome.storage.sync.set({hideStartSprintButtonEnabled: document.getElementById('optionHideStartSprintButton').checked});
    chrome.storage.sync.set({hideStarEnabled: document.getElementById('optionHideStar').checked});
    chrome.storage.sync.set({hideDaysRemainingEnabled: document.getElementById('optionHideDaysRemaining').checked});
    chrome.storage.sync.set({hideNoSubtasksButtonEnabled: document.getElementById('optionHideNoSubtasksButton').checked});
    chrome.storage.sync.set({hideNonClosedIssuesButtonEnabled: document.getElementById('optionHideNonClosedIssuesButton').checked});
    chrome.storage.sync.set({hideOnlyMyIssuesButtonEnabled: document.getElementById('optionHideOnlyMyIssuesButton').checked});
    chrome.storage.sync.set({hideRecentlyUpdatedButtonEnabled: document.getElementById('optionHideRecentlyUpdatedButton').checked});
    chrome.storage.sync.set({quickMenuEnabled: document.getElementById('optionEnableQuickMenu').checked});
    chrome.storage.sync.set({QuickMenuHTML: document.getElementById('optionQuickMenuHTML').value});
    chrome.storage.sync.set({collapsibleSubtasksEnabled: document.getElementById('optionEnableCollapsibleSubtasks').checked});
    chrome.storage.sync.set({boardOrColumn: document.getElementById('boardOrColumn').children[2].checked ? 2 : 0});
    chrome.storage.sync.set({collapseSubtasksByDefaultEnabled: document.getElementById('optionCollapseSubtasksByDefault').checked});
    chrome.storage.sync.set({priorityIndicationEnabled: document.getElementById('optionEnablePriorityIndication').checked});
    chrome.storage.sync.set({priorityColour: priorityColourOptions});
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
          Assignee Colours
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 optionAssignee" placeholder="Name" type="text" value="Jane Doe">
        <input style="position: relative; top: 7px; height: 2.25rem;" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/6 text-gray-700 optionAssigneeColour optionAssigneeColour" placeholder="Colour" type="color" value="#ffffff">
        <button class="mt-1 shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded removeAssigneeButton" type="button">remove</button>
      </div>
    </div>`;
const addAssignee = (name, colour) => {
    const assignee = document.createElement("div");
    assignee.innerHTML = assigneeHTML;
    assignee.querySelector('.optionAssignee').value = name;
    assignee.querySelector('.optionAssigneeColour').value = colour;
    const parentContainer = document.querySelector('#assignee-container');
    assignee.querySelector('.removeAssigneeButton').addEventListener('click', removeAssignee, false);
    parentContainer.insertBefore(assignee, parentContainer.children[2]);
};
document.getElementById('addAssignee').addEventListener('click', () => addAssignee("", ""));


//highlight link
const highlightSideBarLink = (element) => {
    const sidebarLinks = document.querySelectorAll('.sidebarLink');
    for (let j = 0; j < sidebarLinks.length; j++) {
        sidebarLinks[j].classList.remove('border-l-4');
    }
    element.target.classList.add('border-l-4');
};

//add sidebar link highlighting on click
const sidebarLinks = document.querySelectorAll('.sidebarLink');
for (let i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].addEventListener("click", highlightSideBarLink);
}

//click logo sets highlight to first link
document.querySelector('#logo-link').addEventListener('click', () => {
    const sidebarLinks = document.querySelectorAll('.sidebarLink');
    sidebarLinks[0].dispatchEvent(new Event("click"));
    window.scrollTo(0, 0);
});

//auto highlight sidebar based on scroll
window.onload = () => {
    window.onscroll = () => {
        settingsHeadings = document.querySelectorAll('.hashLinkOffsetForNavBar');
        for (let i = 0; i < settingsHeadings.length; i++) {
            const offset = settingsHeadings[i].getBoundingClientRect().top;
            if (offset < 120) {
                const link = document.querySelector("a[href='#" + settingsHeadings[i].id + "']");
                link.dispatchEvent(new Event("click"));
            }
        }
    }
};

//toggleMenuItemsVisible
const toggleSidebarLink = (element) => {
    const searchTerm = element.target.value;

    const sidebarLinks = document.querySelectorAll('.sidebarLink');
    for (let i = 0; i < sidebarLinks.length; i++) {
        if (!sidebarLinks[i].innerHTML.toLowerCase().includes(searchTerm)) {
            sidebarLinks[i].parentNode.style.display = 'none';
        } else {
            sidebarLinks[i].parentNode.style.display = 'block';
        }
    }
};

const toggleSettingsSections = (element) => {
    const searchTerm = element.target.value;

    const settingsHeadings = document.querySelectorAll('.hashLinkOffsetForNavBar');
    for (let i = 0; i < settingsHeadings.length; i++) {
        if (!settingsHeadings[i].innerHTML.toLowerCase().includes(searchTerm)) {
            settingsHeadings[i].parentNode.parentNode.parentNode.style.display = 'none';
        } else {
            settingsHeadings[i].parentNode.parentNode.parentNode.style.display = 'block';
        }
    }
};

//search functionality
document.querySelector('#settings-search').addEventListener("keyup", toggleSidebarLink);
document.querySelector('#settings-search').addEventListener("search", toggleSidebarLink);
document.querySelector('#settings-search').addEventListener("keyup", toggleSettingsSections);
document.querySelector('#settings-search').addEventListener("search", toggleSettingsSections);


//load/set previous settings
document.addEventListener("DOMContentLoaded", function() {
    const assigneeNameAndColours = (assigneeNameAndColours) => {
        if (assigneeNameAndColours) {
            Object.keys(assigneeNameAndColours).forEach(function(key) {
                addAssignee(key, assigneeNameAndColours[key]);
            });
        }
    };

    const setPrioirtyColours = (priorityColour) => {
        if (priorityColour) {
            const priorityColourOptions = document.querySelectorAll('.priorityIndicationColour');
            for (let i = 0; i < priorityColourOptions.length; i++) {
                priorityColourOptions[i].value = priorityColour[i];
            }
        }
    };

    chrome.storage.sync.get([
        'backgroundImageUrl',
        'backgroundEnabled',
        'assigneeHighlightingEnabled',
        'assigneeNameAndColours',
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
        'quickMenuEnabled',
        'QuickMenuHTML',
        'collapsibleSubtasksEnabled',
        'boardOrColumn',
        'collapseSubtasksByDefaultEnabled',
        'priorityIndicationEnabled',
        'priorityColour',
    ], function(data) {
        document.getElementById('optionEnableCustomBackground').checked = data.backgroundEnabled;
        document.getElementById('optionCustomBackgroundUrl').value = data.backgroundImageUrl;
        document.getElementById('optionEnableAssigneeHighlighting').checked = data.assigneeHighlightingEnabled;
        assigneeNameAndColours(data.assigneeNameAndColours);
        document.getElementById('optionHideBreadCrumbs').checked = data.hideBreadCrumbsEnabled;
        document.getElementById('optionHideBoardTitle').checked = data.hideBoardTitleEnabled;
        document.getElementById('optionHideShareButton').checked = data.hideShareButtonEnabled;
        document.getElementById('optionHideStartSprintButton').checked = data.hideStartSprintButtonEnabled;
        document.getElementById('optionHideStar').checked = data.hideStarEnabled;
        document.getElementById('optionHideDaysRemaining').checked = data.hideDaysRemainingEnabled;
        document.getElementById('optionHideNoSubtasksButton').checked = data.hideNoSubtasksButtonEnabled;
        document.getElementById('optionHideNonClosedIssuesButton').checked = data.hideNonClosedIssuesButtonEnabled;
        document.getElementById('optionHideOnlyMyIssuesButton').checked = data.hideOnlyMyIssuesButtonEnabled;
        document.getElementById('optionHideRecentlyUpdatedButton').checked = data.hideRecentlyUpdatedButtonEnabled;
        document.getElementById('optionEnableQuickMenu').checked = data.quickMenuEnabled;
        document.getElementById('optionQuickMenuHTML').value = data.QuickMenuHTML;
        document.getElementById('optionEnableCollapsibleSubtasks').checked = data.collapsibleSubtasksEnabled;
        document.getElementById('boardOrColumn').children[data.boardOrColumn || 0].checked = true;
        document.getElementById('optionCollapseSubtasksByDefault').checked = data.collapseSubtasksByDefaultEnabled;
        document.getElementById('optionEnablePriorityIndication').checked = data.priorityIndicationEnabled;
        setPrioirtyColours(data.priorityColour);
    });
});
