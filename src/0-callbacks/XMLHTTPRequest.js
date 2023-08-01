const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api'

const fetchData = (urlAPI, callback) => {
  const xhttp = new XMLHttpRequest()

  xhttp.addEventListener('load', () => {
    callback(null, JSON.parse(xhttp.responseText)) 
  })

  xhttp.addEventListener('error', () => {
    const error = new Error('Error: ' + urlAPI)
    callback(error, null)
  })

  xhttp.open('GET', urlAPI)
  xhttp.send()
}

fetchData(`${API}/character/1`, (error, data) => {
  if (error) return console.log(error)

  console.log(data)
})
