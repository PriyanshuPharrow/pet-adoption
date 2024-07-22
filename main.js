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
    clone.querySelector(".pet-age").textContent = createAgeText(pet.birthYear)
    if (!pet.photo) {
      pet.photo = "images/fallback.jpg"
    }
    clone.querySelector(".pet-card-photo img").src = pet.photo
    clone.querySelector(".pet-card-photo img").alt = `A ${pet.species} named ${pet.name}`
    wrapper.appendChild(clone)
  })
  document.querySelector(".list-of-pets").appendChild(wrapper)
}

petsArea()

const createAgeText = birthYear => {
  const age = new Date().getFullYear() - birthYear
  const ageText = age == 0 ? "Less than a year old" : age == 1 ? "1 year old" : `${age} years old`
  return ageText
}

// pet filter button code
const allButtons = document.querySelectorAll('.pet-filter button')

allButtons.forEach(el => {
  el.addEventListener("click", handleButtonClick)
})

function handleButtonClick (e) {
  // remove active class from any and all buttons
  allButtons.forEach(el => el.classList.remove('active'))

  // add active class to the button that got clicked
  e.target.classList.add("active")


  // actually filter the pets down below
}