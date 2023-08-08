import fetch from 'node-fetch'
const API = 'https://rickandmortyapi.com/api'

const fetchData = async urlAPI => {
  const response = await fetch(urlAPI)
  const data = response.json()

  return data
}

const getCharacterInfo = async () => {
  try {
    const data = await fetchData(`${API}/character/1`)

    console.log(`Ya se encuentran cargados los datos de: ${data.name}`)
  } catch (error) {
    console.log(error)
  }
}

getCharacterInfo()
console.log('Bienvenido al programa')
