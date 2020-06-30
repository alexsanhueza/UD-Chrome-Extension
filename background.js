chrome.runtime.onMessage.addListener(receiveMsg);
window.target = '';

function receiveMsg(request, ...args) {
  window.target = request.text;
  console.log(window.target);
}

chrome.contextMenus.create({
  id: 'UDlookup',
  title: "Define '%s' with Urban Dictionary",
  contexts: ['selection'],
  onclick: navToUD,
});

function navToUD(info) {
  chrome.tabs.create({
    url:
      'https://www.urbandictionary.com/define.php?term=' + info.selectionText,
  });
}
