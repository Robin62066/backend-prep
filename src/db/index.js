import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//first process to connect with db
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("Mongo db no connecter error", error);
        process.exit(1)
    }
}

export default connectDB




//Database connect through async await 
// (async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR", error);
//             throw error
//         });
//         app.listen(process.env.PORT, () => {
//           console.log(`App is listening on port ${process.env.PORT}`)
//       })
        
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()