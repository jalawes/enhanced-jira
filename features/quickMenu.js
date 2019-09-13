chrome.storage.sync.get(['quickMenuEnabled', 'QuickMenuHTML'], function(data) {
    if (data.quickMenuEnabled && !document.querySelector('#quick-menu')) {
        const openMenu = () => {
            if (document.querySelector('#quick-menu-content').style.visibility == 'hidden'){
                document.querySelector('#quick-menu-content').style.visibility = 'visible';
            } else {
                document.querySelector('#quick-menu-content').style.visibility = 'hidden';
            }
        }

        //button
        const menuButton = document.querySelector('#board-tools-section-button');
        const quickMenuButton = menuButton.cloneNode(false);
        quickMenuButton.id = 'quick-menu';
        quickMenuButton.style.position = 'fixed';
        quickMenuButton.style.top = '4px';
        quickMenuButton.style.left = '50%';
        quickMenuButton.style.transform = 'translateX(-50%)';
        quickMenuButton.style.width = '120px';
        quickMenuButton.innerHTML = '☰ Quick Menu';
        document.getElementsByTagName('body')[0].append(quickMenuButton);

        //menu content
        const content = document.createElement("div");
        content.innerHTML = data.QuickMenuHTML;
        content.id = 'quick-menu-content';
        content.style.position = 'fixed';
        content.style.zIndex = '9999';
        content.style.top = '42px';
        content.style.left = '50%';
        content.style.transform = 'translateX(-50%)';
        content.style.background = 'white';
        content.style.border = '1px solid #6f6f6f';
        content.style.borderRadius = '4px';
        content.style.visibility = 'hidden';
        document.getElementsByTagName('body')[0].append(content);

        document.getElementById('quick-menu').addEventListener('click', () => openMenu());
    }
});

