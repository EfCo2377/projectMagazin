const mongoose=require('mongoose')
const Post=require('../models/post')

const getAllPostOfMagazin=async(req,res)=>{
    try{
        let postsOfMagazin=await Post.find({'magazine':req.params.idMagazine})
        res.status(200).json(postsOfMagazin)
    }
    catch(err){
        console.log(err);
        res.json(err)
    }
}

const addPost=async(req,res)=>{
    try{
        let post=new Post(req.body)
        await post.save()
        res.status(200).json(post)
    }
    catch(err){
        console.log(err);
        res.json(err)
    }
}

const updatePost=async(req,res)=>{
    try{
        await Post.findOneAndUpdate(req.params.idPost,req.body)
        res.status(200).json(p)
    }
    catch(err){
        console.log(err);
        res.json(err)
    }
}

const deletePost=async(req,res)=>{
    try{
        let post=await Post.findByIdAndDelete(req.params.idPost)
        res.status(200).json(post)
    }
    catch(err){
        console.log(err);
        res.json(err)
    }
}

module.exports={
    getAllPostOfMagazin,
    addPost,
    deletePost,
    updatePost
}