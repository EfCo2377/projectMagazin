const Magazine = require('../Models/magazine')
const User = require("../Models/user")
//החזרת כל המגזינים למשתמש מסוים לפי קוד 
const getMagazinesByUser = async (req, res) => {
    try {

        const user = await User.findOne({ userName: req.params.userName })
        const magazines = await Magazine.find({user:user._id})
        res.json(magazines)
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
        res.send(error.message)
    }
}



module.exports = { getMagazinesByUser, addMagazine }
