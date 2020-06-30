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
