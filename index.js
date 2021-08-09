import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
// allowing the cross site access
app.use(cors())
// enable the request logging
app.use(morgan('dev'))
// the root definition of the API
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {

        title: "Dictionary API with ExpressJS",
        version: '1.0.0'
    }
}
// the Options for creating the API Documentations specs
const options = {
    swaggerDefinition,
    // where to find the API's routes
    apis: ['./routes/*.js']
}
// create the Specs of the Api
const swaggerSpecs = swaggerJSDoc(options)
// Generate the docs and serve it to the end point /api/docs
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs))

const port = 5050
// Serve the app to the 5050 Port
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
})