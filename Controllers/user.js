const User=require('../Models/user')

//create new user
const createUser=async (req,res)=>{
    try {
        let user=new User(req.body)
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(404).send(error)
    }
}

//editUser
const editUser=async (req,res)=>{
    let {idUser}=req.params
    let newUser=req.body
    try {
        let user=await User.findOneAndUpdate({_id:idUser},newUser,{new:true})
        res.json(user)
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports={createUser,editUser}