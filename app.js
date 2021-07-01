const express=require('express')
const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.json())

const dotenv=require('dotenv')
dotenv.config()

const cors=require('cors')

const router=require('./Router/router')

const mongoose=require('mongoose')

const connectParonst  = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

mongoose.connect(process.env.DB_CONNECT,connectParonst)
.then(()=>console.log("connect"))
.catch((error)=>console.log(`error ${error}`))

app.use(cors(),router)

app.listen(process.env.PORT,()=>console.log("listen"))