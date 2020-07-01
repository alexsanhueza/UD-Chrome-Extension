function UDlookup() {
  // let phrase = document.querySelector('input').value;
  let phrase = document.querySelector('span').innerText;
  fetch(
    'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' +
      phrase,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
        'x-rapidapi-key': '36dffbdc9amsh4103a70f006c529p1b3969jsnb4ad28d4c656',
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const definition = response.list[0].definition;
      const example = response.list[0].example;
      addDiv(definition, example);
    })

    .catch((err) => {
      console.log(err);
    });
}

let bPage = chrome.extension.getBackgroundPage();
let button = document.querySelector('#check');

const definitionSpan = document.createElement('span');
definitionSpan.innerHTML = bPage.target;
document.body.appendChild(definitionSpan);

const popDiv = document.createElement('div');
let definitionP = document.createElement('p');
definitionP.classList.add('response');
let exampleP = document.createElement('p');
exampleP.classList.add('response');
popDiv.appendChild(definitionP);
popDiv.appendChild(exampleP);
document.body.appendChild(popDiv);

function addDiv(def, ex) {
  definitionP.innerHTML = def;
  exampleP.innerHTML = '"' + ex + '"';
}

// document.onload = UDlookup;
document.querySelector('#check').addEventListener('click', UDlookup);

// function sayHi() {console.log(`hi`);}
