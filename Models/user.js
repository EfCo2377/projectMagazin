const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    password:{
        required:true,
        maxlength:16,
        minlength:6,
        type:String
    },
    email:{
        required:true,
        validator:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
        type:String
    },
    magazines:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Magazine'}
    ]
})

module.exports=mongoose.model('User',userSchema)