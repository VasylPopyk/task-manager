import express from "express"
import bodyParser from "body-parser"
import './config/db.js'

import authRouter from './routes/authRoutes.js'
import taskRouter from './routes/taskRoutes.js'
//1:14:40 video
const app = express()
const port = 3000

//middlewaresrs
app.use(bodyParser.json())

app.use('/api', authRouter)
app.use('/api', taskRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port} and starting at http://localhost:${port}`)
})