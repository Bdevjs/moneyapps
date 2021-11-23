const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const userRouter = require('./routers/userRoute')

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({ extanded: false }))
app.use(bodyParser.json())

app.use('/api/users', userRouter)


app.get('/',(req, res)=>{
    res.json({
        massage : 'Welcome to Our Application'
    })
})
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
    mongoose.connect('mongodb://loaclhost/money-management-app', 
    { useNewUrlParser: true },
    ()=>{
        console.log('Database connected.....')
    });
})