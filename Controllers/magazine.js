const Magazine=require('../Models/magazine')
const User=require("../Models/user")
const getMagazinesByUser=async(req,res)=>{
    try {
        const {userId}=req.params
       const magazines=await Magazine.find()
    let magazinesFilter= magazines.filter(ma=>ma.user==userId)
    res.json(magazinesFilter)
    } catch (error) {
        res.status(400).json({'error':error.message})
    }
}

