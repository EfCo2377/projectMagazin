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

module.exports={createUser}