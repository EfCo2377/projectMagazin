const User=require('../Models/user')
const jwt=require('jsonwebtoken')

//create new user
const createUser=async (req,res)=>{
    try {
        let u= await User.findOne({userName:req.body.userName,password:req.body.password})
        if(u){
            res.send('this user exist')
        }
        else{
            let user=new User(req.body)
            const token=jwt.sign({userName:user.userName,password:user.password},process.env.CODE)
            console.log(token);
            await user.save()
            res.status(200).json(user) 
        }
    } catch (error) {
        res.status(404).send(error)
    }
}

//getUserByUserName
const login=async(req,res)=>{
    try {
        let {nameUser}=req.params
        let user=await User.findOne({userName:nameUser})
        if(user){
            const token=jwt.sign({userName:user.userName,password:user.password},process.env.CODE)
            console.log(token);
            res.status(200).json(user)
        }
        else{
            res.send(`the user ${nameUser} not defind`)
        }
    } catch (error) {
        res.status(200).send(error)
    }
}

//getAllUsers
const getAllUsers=async(req,res)=>{
    try{
        let users=await User.find()
        res.status(200).json(users)
    }
    catch(error){
        res.status(500).send(error)
    }
}

//editUser
const editUser=async (req,res)=>{
    let {nameUser}=req.params
    let newUser=req.body
    try {
        let user=await User.findOneAndUpdate({userName:nameUser},newUser,{new:true})
        res.json(user)
    } catch (error) {
        res.status(404).send(error)
    }
}

//deleteUser
const deleteUser=async(req,res)=>{
    let {nameUser}=req.params
    try {
        let user=await User.findOneAndDelete({userName:nameUser})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports={createUser,getAllUsers,login,editUser,deleteUser}
