const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()


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
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = pet.name
    clone.querySelector(".pet-description").textContent = pet.description
    const age = new Date().getFullYear() - pet.birthYear
    const ageText = age <= 1 ? age + " year old" : age + " years old";
    clone.querySelector(".pet-age").textContent = ageText
    clone.querySelector(".pet-card-photo img").src = pet.photo
    clone.querySelector(".pet-card-photo img").alt = pet.species
    wrapper.appendChild(clone)
  })
  document.querySelector(".list-of-pets").appendChild(wrapper)
}

petsArea()