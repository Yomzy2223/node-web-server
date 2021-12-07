const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')
const submit = document.querySelector('#submit')
const input = document.querySelector('#input')


submit.addEventListener('click', () => {
  const city = input.value
  geoData(city, (data) => {
    if(data.longitude){
      weatherData(data.longitude, data.latitude, (info) => {
        messageOne.innerHTML = city
        messageTwo.innerHTML = 'The current wind speed in ' + city + ' is: ' + info
    })
    } else {
      messageOne.innerHTML = data
    }
    
  })
})

