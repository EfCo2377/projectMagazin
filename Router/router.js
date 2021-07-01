const router=require('express').Router()
const PostController=require('../controllers/post')

router.get('/getAllPostOfMagazin/:idMagazine',PostController.getAllPostOfMagazin)
router.post('/addPost',PostController.addPost)
router.delete('/deletePost/:idPost',PostController.deletePost)
router.post('/updatePost/:idPost',PostController.updatePost)
module.exports=router