function UDlookup() {
  //let phrase = document.querySelector('input').value;
  let phrase = document.querySelector('#word').value;
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

const definitionDiv = document.createElement('div');
const exampleDiv = document.createElement('div');
document.body.appendChild(definitionDiv);
document.body.appendChild(exampleDiv);

  function addDiv(def, ex) {
      definitionDiv.innerHTML = def;
      exampleDiv.innerHTML = ex;  
  }
    

document.querySelector('#check').addEventListener('click', UDlookup);

document.addEventListener('keydown', (key) => {
  if(key === 13) UDlookup()});
