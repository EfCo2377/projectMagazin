const Magazine = require('../Models/magazine')
const User = require("../Models/user")
//החזרת כל המגזינים למשתמש מסוים לפי קוד 
const getMagazinesByUser = async (req, res) => {
    try {

        const user = await User.findOne({ userName: req.params.userName })
        const magazines = await Magazine.find({ user: user._id })
        res.status(200).json(magazines)
    } catch (error) {
        res.status(400).json({ 'error': error.message })
    }
}
const addMagazine = async (req, res) => {
    try {
        const newMagazine = new Magazine(req.body)
        await newMagazine.save()

        const user = await User.findOneAndUpdate({ userName: req.params.userName },
            { $push: { magazines: newMagazine._id } }, { new: true })
        newMagazine.user = user._id
        await newMagazine.save()
        res.status(200).json(newMagazine)
    } catch (error) {
        console.log('err');
        res.status(500).send(error.message)
    }
}

const deleteMagazine = async (rec, res) => {
    try {
        const magazine =await Magazine.findByIdAndDelete(req.params.idMagazine)
        const user = await User.findOneAndUpdate({ userName: req.params.userName }, { $pull: { magazines: magazine._id } }, { new: true })
     
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const editMagazine=async(req,res)=>{
    try {
        const magazine=await Magazine.findByIdAndUpdate(req.params.idMagazine,req.body,{new:true})
    } catch (error) {
        res.status(500).send(err) 
    }
}
module.exports = { getMagazinesByUser, addMagazine,deleteMagazine }

