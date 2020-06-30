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

      const definitionDiv = document.createElement('div');
      definitionDiv.innerHTML = definition;
      document.body.appendChild(definitionDiv);

      const exampleDiv = document.createElement('div');
      exampleDiv.innerHTML = example;
      document.body.appendChild(exampleDiv);
    })
    .catch((err) => {
      console.log(err);
    });
}

document.querySelector('#check').addEventListener('click', UDlookup);
