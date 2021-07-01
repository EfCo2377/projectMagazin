const router=require('express').Router()
const magazineFunc=require("../Controllers/magazine")
router.get('/getMagazinesByUser/:userName',magazineFunc.getMagazinesByUser)
router.post('/addMagazine/:userName',magazineFunc.addMagazine)

module.exports=router