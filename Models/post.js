const mongoose=require('mongoose')
// const Magazine = require('./magazine')

const postSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:30
    },
    text:{
        type:String,
        required:true
    },
    magazine:{
type:mongoose.Schema.Types.ObjectId,ref:'Magazine'
    },
    img:[
        {type:Image}
    ]
})

module.exports=mongoose.model('Post',postSchema)