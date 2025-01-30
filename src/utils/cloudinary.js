import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

 cloudinary.config({
   cloud_name: process.env. CLOUDINARY_CLOUD_NAME,
   api_key: process.env. CLOUDINARY_API_KEY,
   api_secret: process.env. CLOUDINARY_API_SECRET,
 });

const uploadOnCloudinary = async (localFilePath) => {
     try {
         if (!localFilePath) return null
         
         //upload the file on cloudnary
        const response = await cloudinary.uploader.upload(localFilePath, {
             resource_type : "auto"
         })
         //file has been uploasded successfully
         console.log("file is uploaded on cloudnary", response.url);
         return response
     } catch (error) {
         //file to mil gya hai but usko server se unlink krte h
         fs.unlinkSyn(localFilePath)
         return null
     }
}
 
export {uploadOnCloudinary}