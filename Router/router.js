const router=require('express').Router()
const userFunction=require('../Controllers/user')

//get

//post
router.post('/createUser',userFunction.createUser)

//delete

//put
router.put('/editUser/:idUser',userFunction.editUser)

module.exports=router