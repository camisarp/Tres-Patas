require('dotenv-safe').config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect.js")
const index = require("./routes/index")
const usersRoute = require('./routes/usersRoutes')
const petsRoute = require('./routes/petsRoutes')
const ongOuLarRoutes = require('./routes/ongsOrTemporaryHomesRoutes')
const petShopsOrSpecialtyHousesRoutes = require('./routes/petShopsOrSpecialtyHousesRoutes')
const vetOrSpecialistsRoutes = require('./routes/vetOrSpecialistsRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect()

app.use('/', index)
app.use(usersRoute)
app.use(petsRoute)
app.use(ongOuLarRoutes)
app.use(petShopsOrSpecialtyHousesRoutes)
app.use(vetOrSpecialistsRoutes)
app.use('/my-documentation-route', swaggerUi.serve, swaggerUi.setup(swaggerFile));


module.exports = app