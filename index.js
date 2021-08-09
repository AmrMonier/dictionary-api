import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const port = 5050
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
})