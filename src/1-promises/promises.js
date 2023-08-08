
const delay = (time, message) =>
  new Promise((resolve, reject) => {
    if (time < 0) reject("Time cannot be negative")

    setTimeout(() => {
      resolve(message)
    }, time)
  })

delay(2000, "Hello after 2s")
  .then(message => console.log(message))

// Cows example

let cows = 10

const countCows = new Promise((resolve, reject) => {
  if(cows < 10) reject("Cows: 🚫")

  resolve("Cows: OK 🐄")
})

countCows
  .then(msg => console.log(`then: ${msg}`))
  .catch(msg => console.log(`catch: ${msg}`))
