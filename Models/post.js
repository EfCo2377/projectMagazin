const mongoose=require('mongoose')
// const Magazine = require('./magazine')

const postSchema=mongoose.Schema({
    magazine:{type:mongoose.Schema.Types.ObjectId,ref:'Magazine'},
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
        {type:String}
    ]
})

module.exports=mongoose.model('Post',postSchema)