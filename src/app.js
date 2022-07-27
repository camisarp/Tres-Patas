require('dotenv-safe').config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect.js")
const usersRoute = require('./routes/usersRoutes')
const petsRoute = require('./routes/petsRoutes')
const ongOuLarRoutes = require('./routes/ongsOrTemporaryHomesRoutes')
const petShopsAndSpecialtyHousesRoutes = require('./routes/petShopsAndSpecialtyHousesRoutes')
const vetAndSpecialistsRoutes = require('./routes/vetAndSpecialistsRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(usersRoute)
app.use(petsRoute)
app.use(ongOuLarRoutes)
app.use(petShopsAndSpecialtyHousesRoutes)
app.use(vetAndSpecialistsRoutes)
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));


module.exports = app