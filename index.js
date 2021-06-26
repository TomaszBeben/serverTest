import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
dotenv.config()

app.use(cors())

app.get('/', (req, res)=>{
    res.send('welcome to my CVCreator API')
})

const PORT = process.env.PORT || 8080



mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT} `)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)



