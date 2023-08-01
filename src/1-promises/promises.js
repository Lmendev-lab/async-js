
const delay = (time, message) =>
  new Promise((resolve, reject) => {
    if (time < 0) reject("Time cannot be negative")
    
    window.setTimeout(() => {
      resolve(message)
    }, time)
  })

delay(2000, "Hello after 2s").then(message => console.log(message))
