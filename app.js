const express=require('express')
const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.json())

const dotenv=require('dotenv')
dotenv.config()

const cors=require('cors')

const routers=require('./router/router')

app.use(cors(),routers)
// app.use(app.router);
// routes.initialize(app);
const mongoose=require('mongoose')

const connectParonst  = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

mongoose.connect(process.env.DB_CONNECT,connectParonst)
.then(()=>console.log("connect"))
.catch((error)=>console.log(`error ${error}`))

app.listen(process.env.PORT,()=>console.log("listen"))