import express from "express";
import { addBlog, deleteBlog, getAllBlogs, updateBlog, userFollow } from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/:id", deleteBlog);
blogRouter.put("/follow/:id", userFollow);
export default blogRouter;