import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16px" }))
app.use(express.static("public"))
app.use(cookieParser())


//making all Routes
import userRouter from "./routes/user.routers.js"

//routes decleration
app.use("/api/v1/users",userRouter) //nich me link hai aisa hi call hoga
// http://localhost:8000/api/v1/users/register

export {app}
