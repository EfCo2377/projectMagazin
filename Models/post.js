const mongoose=require('mongoose')

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
    img:[
        {type:Image}
    ]
})

module.exports=mongoose.model('Post',postSchema)