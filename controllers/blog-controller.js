import { response } from "express";
import Blog from "../models/Blog";

export const getAllBlogs = async (req, res, next) =>{
    let blogs;
    try{
        blogs = await Blog.find();
    }catch (err) {
       return Console.log(err)
    }
    if(!blogs){
        return res.ststus(404).json({message:"no blogs found"});
    }
    return res.status(200).json({blogs});
};

export const addBlog = async (req, res, next) =>{
    const{ title, description, image, user} = req.body;
    const blog = new Blog({
        title,
        description, 
        image, 
        user,
    });
    try{
       await blog.save();
    }catch(err){
        return console.log(err);
    }
    return res.status(200).json({blog});
};
export const updateBlog = async (req, res, next)=>{
    const{title, description} = req.body;
    const blogId = req.params.id;
    let blog
    try{
        blog = await Blog.findByIdAndUpdate(blogId, {
            title,
            description,
        })
    }catch (err){
        return console.log(err);
    }
    if(!blog){
        return res.ststus(500).json({message:"unable to update"});
    }
    return res.status(200).json({blog});
   
};

export const deleteBlog = async (req, res, next)=>{
    const id = req.params.id;
    let blog;
    try{
        blog = await Blog.findByIdAndRemove(id);
    }catch (err){
        return console.log(err);
    }
    if(!blog){
        return res.status(500).json({message:"unable to delet"});
    }
    return res.status(200).json({message:"succefully deleted"});
   
};

export const userFollow = async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await user.findById(req.params.id);
        const currentUser = await user.findById(req.body.userId);
        if (!user.followers.includes(req.body.userId)) {
          await user.updateOne({ $push: { followers: req.body.userId } });
          await currentUser.updateOne({ $push: { followings: req.params.id } });
          res.status(200).json("user has been followed");
        } else {
          res.status(403).json("you allready follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("you cant follow yourself");
    }
  };