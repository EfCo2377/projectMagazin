const router=require('express').Router()
const magazineFunc=require("../Controllers/magazine")
router.get('/getMagazinesByUser/:userName',magazineFunc.getMagazinesByUser)
router.post('/addMagazine/:userName',magazineFunc.addMagazine)

const userFunction=require('../Controllers/user')

//get
router.get('/getAllUsers',userFunction.getAllUsers)
router.get('/login/:nameUser',userFunction.login)

//post
router.post('/createUser',userFunction.createUser)

//delete
router.delete('/deleteUser/:nameUser',userFunction.deleteUser)
router.delete('/deleteMagazine/:userName/:idMagazine')

//put
router.put('/editUser/:nameUser',userFunction.editUser)

module.exports=router