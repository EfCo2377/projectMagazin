const mongoose=require("mongoose")
// const Post=require('./post')
// const User=require('./user')
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
    user:{
      type:mongoose.Schema.Types.ObjectId, ref:'User'
    },
    postArr:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Post'}
    ]

    
})
module.exports=mongoose.model('Magazine',magazineSchema)