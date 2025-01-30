import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiErrors.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js"
const registerUser = asyncHandler(async (req, res) => {
  //get user details  details from frontend
  // user voiledation - chk empty
  // check if user already exist or chk by usernam and email
  // chk for image, chk for avtar
  // upload them to cloudinary, chk multer or cloudinary for avtar uploaded or not
  // create user object for mongodb data= create entery in db
  // remove password and refresh token field from response
  // chk for user creation
  //response retruning

  //step 1
  const { fullName, email, username, password } = req.body;
  // if (fullName === "") {
  //   throw new ApiError(400, "fullname is required")
  // }
  if (
    [fullName, email, username, password].some((field) => field?.trim() == "")
  ) {
    throw new ApiError(400, "Allfeilds Are Reqired");
  }

  const exestedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (exestedUser) {
    throw new ApiError(409, "User with email or username already exist");
  }

  //multer se file ki destination milegi
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar image required");
  }

  //cloudnary pe upload kr do
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverLocalPath);

  //chek avatar gya ya nhi
  if (!avatar) {
    throw new ApiError(400, "Avatar image required");
    }
    
    // object banao or database me entery mar do
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage.url || "",
        email,
        password,
        username : username.toLowerCase()
    })
    //chk usr bna hai ya nhi
    const createdUser = await User.findById(user._id).select(
      "-password -refereshToken"
    );

    if (!createdUser) {
        throw new ApiError(500, "somthing went wrong while checking user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User register successfully")
    )
 
});

export { registerUser };
