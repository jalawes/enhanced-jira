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
  chrome.storage.sync.set({ backgroundEnabled: enableCustomBackground.checked });
  chrome.storage.sync.set({ backgroundImageUrl: customBackgroundUrl.value });
  showSaveAlert();
};

document.getElementById('optionsSave').addEventListener('click', () => save());

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['backgroundImageUrl', 'backgroundEnabled'], (data) => {
    document.getElementById('optionEnableCustomBackground').checked = data.backgroundEnabled;
    document.getElementById('optionCustomBackgroundUrl').value = data.backgroundImageUrl;
  });
});
