import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

const app = express();
app.use(express.json());
app.use("/api/blog", blogRouter);
app.use("/api/user",router);

mongoose.connect('mongodb+srv://admin:2fE1UHphEyAEAKWl@cluster0.kjkxiz4.mongodb.net/socialmedia?retryWrites=true&w=majority'
).then(()=>app.listen(5000)).then(()=>console.log("connected to database and listening to localhost 5000")).catch((err)=>console.log(err));


//2fE1UHphEyAEAKWl