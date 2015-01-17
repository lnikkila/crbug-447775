chrome.browserAction.onClicked.addListener(function() {
  setupContextMenu();
  openPanel();
});

function setupContextMenu() {
  chrome.contextMenus.create({
    id: 'pageContext',
    title: 'Item with the ‘page’ context.',
    contexts: ['page']
  });

  chrome.contextMenus.create({
    id: 'linkContext',
    title: 'Item with the ‘link’ context.',
    contexts: ['link']
  });
}

function openPanel() {
  chrome.windows.create({
    url: 'https://rawgit.com/lnikkila/crbug-447775/master/panel.html',
    type: 'panel'
  });
}
