const router=require('express').Router()
const magazineFunc=require("../Controllers/magazine")
router.get('/getMagazinesByUser/:userName',magazineFunc.getMagazinesByUser)
router.post('/addMagazine/:userName',magazineFunc.addMagazine)

const PostController=require('../controllers/post')

router.get('/getAllPostOfMagazin/:idMagazine',PostController.getAllPostOfMagazin)
router.post('/addPost',PostController.addPost)
router.delete('/deletePost/:idPost',PostController.deletePost)
router.post('/updatePost/:idPost',PostController.updatePost)
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