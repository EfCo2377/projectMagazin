const mongoose=require("mongoose")
//const Post=require(./post)
const magazineSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        
    },
    description:{
        type:String
    },
    // postArr:[
    //     {type:mongoose.Schema.Types.ObjectId,ref:'Post'}
    // ]

    
})
module.exports=mongoose.model('Magazine',magazineSchema)