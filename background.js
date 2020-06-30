
chrome.runtime.onMessage.addListener(receiveMsg);
window.target = "";

function receiveMsg(request, ...args) {
    window.target = request.text;
    console.log(window.target);
}