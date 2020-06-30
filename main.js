function UDlookup(phrase) {
  //let phrase = document.querySelector('input').value;

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
    })
    .catch((err) => {
      console.log(err);
    });
}

document.querySelector('button').addEventListener('click', UDlookup);
