const saveButton = document.getElementById('optionsSave');

const successAlert = document.getElementById('success-alert');

const showSaveAlert = () => {
  successAlert.classList.remove('hidden');
  window.setTimeout(() => {
    successAlert.classList.add('hidden');
  }, 5000);
};

const save = () => {
  const enableCustomBackground = document.getElementById('optionEnableCustomBackground');
  const customBackgroundUrl = document.getElementById('optionCustomBackgroundUrl');
  chrome.storage.sync.set({ backgroundEnabled: enableCustomBackground.checked });
  chrome.storage.sync.set({ backgroundImageUrl: customBackgroundUrl.value });
  showSaveAlert();
};

saveButton.addEventListener('click', () => save());

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['backgroundImageUrl', 'backgroundEnabled'], (data) => {
    document.getElementById('optionEnableCustomBackground').checked = data.backgroundEnabled;
    document.getElementById('optionCustomBackgroundUrl').value = data.backgroundImageUrl;
  });
});
