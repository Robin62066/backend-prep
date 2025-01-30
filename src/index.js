//This is dot env for configuration with require syntex
//require('dotenv').config({path: "./env"})
import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./db/index.js"

//this is connecting db from by importing 
dotenv.config({
    path : './env'
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on the port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("Mongo DB connection Faild !! ", err);
})