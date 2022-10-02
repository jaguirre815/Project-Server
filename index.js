const express = require('express')
const placesRoutes = require('./controllers/places')
const cors = require('cors')


const app = express()

//midleware

app.use(cors())

app.use('/place', placesRoutes )

const PORT = 8080 

app.listen(PORT, console.log(PORT))