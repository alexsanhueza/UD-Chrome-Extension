

window.addEventListener('mouseup', selected);
function selected() {
    let selection = window.getSelection().toString().trim();
    console.log(selection);

    if(selection.length > 2) {
        let message = {text: selection};
        chrome.runtime.sendMessage(message);
    }
}


let files = ["logo.png", "logo2.png", "logo3.png"];
let imgs = document.getElementsByTagName("img");

for (el of imgs) {
    let pic = files[Math.floor(Math.random()*files.length)]
    el.src = chrome.extension.getURL(pic);
    console.log(`hi`);
}





// const popDiv = document.createElement('div');

// let definitionP = document.createElement('p');
// let exampleP = document.createElement('p');
// popDiv.appendChild(definitionP);
// popDiv.appendChild(exampleP);
// document.body.appendChild(popDiv);

//   function addDiv(def, ex) {
//       definitionP.innerHTML = def;
//       exampleP.innerHTML = ex;  
//   }

