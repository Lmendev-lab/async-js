import fetch from 'node-fetch';
const API = 'https://rickandmortyapi.com/api'

const fetchData = urlAPI => fetch(urlAPI)

fetchData(`${API}/character/1`)
  .then(response => response.json())
  .then(character => console.log(character))
  .catch(error => console.log(error))
