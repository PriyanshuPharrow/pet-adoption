const start = async () => {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  const temp = weatherData.properties.periods[0].temperature
  const temperature = document.querySelector("#temperature-output")
  temperature.textContent = temp
}

start()
