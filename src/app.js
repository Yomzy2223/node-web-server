const path = require('path')
const express = require('express')
const hbs = require('hbs')


//Paths variables
const publicFolder = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/Partials')

const app = express()

//Setting the view engine and view path
app.set('view engine', 'hbs')
app.set('views', viewPath)
app.use(express.static(publicFolder))
hbs.registerPartials(partialsPath)


app.get('', (req, res)=>{
  res.render('index', {
    title: 'Weather',
    name: 'Sayo'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help'
  })
})

app.get('/about', (req, res)=>{
  res.render('about', {
    title: 'About Page',
    name: "Yomzy"
  })
})

app.get('/weather', (req, res) => {
  res.send ({
    location: 'Lagos',
    forecast: 'There is 3.6% chance of rain today'
  })
})


app.listen(3000, () =>{
  console.log("Server is running")
})