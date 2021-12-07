// Function to fetch the longitude and latitude of the city
const geoData = (city, callback) => {
  const urlMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+city+'.json?limit=1&access_token=pk.eyJ1IjoieW9tenkyMjIzIiwiYSI6ImNrdjJoZWV4cDFyeHYyb3FxajV0dnJnZGgifQ.ueRpbzKRePcKJD6V_uzRoQ'

  messageOne.textContent = 'Loading....'
  messageTwo.textContent = ''

  fetch(urlMapbox).then((response)=>{
  response.json().then((data) => {
  try {const geo = {
    longitude: data.features[0].center[0],
    latitude: data.features[0].center[1]
  }
  callback(geo)
  } catch (e) {
    callback ('Invalid city name')
  }
  })
  }).catch((e) => {
    callback('There is an error with your connection')
  })
}


// Function to fetch the weather data of the geoData
const weatherData = (long, lat, callback) => {
  const urlWeather = 'https://api.openweathermap.org/data/2.5/weather/?lat='+lat+'&lon='+long+'&appid=47c7e252dbb5dc4118ade853f44cdc5e'

  fetch(urlWeather).then((response) => {
    response.json().then((data)=>{
      callback(data.wind.speed)
    })
  })
}