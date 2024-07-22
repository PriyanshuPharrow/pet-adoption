const start = async () => {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  const temp = weatherData.properties.periods[0].temperature
  const temperature = document.querySelector("#temperature-output")
  temperature.textContent = temp
}

start()

const petsArea = async () => {
  const petsDataPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const petsData = await petsDataPromise.json()
  petsData.forEach(pet => {
    console.log(pet.name)
  })
}

petsArea()