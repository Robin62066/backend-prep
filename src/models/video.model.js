import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required : true
        },
        thumbnail: {
            type: String,
            required : true
        },
        title: {
            type: String,
            required : true
        },
        description: {
            type: String,
            required : true
        },
        duration: {
            type: number,
            required : true
        },
        views: {
            type: number,
            default : 0
        },
        espublished: {
            type: Boolean,
            default : true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref : "User"
        }
    }, {
        timestamps : true
    }
)

export const Video = mongoose.model("Video", videoSchema)