const router=require('express').Router()
const userFunction=require('../Controllers/user')

//get
router.get('/getAllUsers',userFunction.getAllUsers)
router.get('/login/:nameUser',userFunction.login)

//post
router.post('/createUser',userFunction.createUser)

//delete
router.delete('/deleteUser/:nameUser',userFunction.deleteUser)

//put
router.put('/editUser/:nameUser',userFunction.editUser)

module.exports=router