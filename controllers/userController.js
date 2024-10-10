import { catchAsynError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";
import Assignment from "../models/assignmentModel.js";

export const register = catchAsynError(async(req,res,next) => {
    const {name,email,phone,role,password} = req.body;
    
    if(!name || !email || !phone || !role || !password){
        return next(new ErrorHandler("Please fill full registration form!"));
    }

    const isEmail = await User.findOne({email});
    if(isEmail){
       return next(new ErrorHandler("Email already exists!"));
    }

    const user = await User.create({
        name,
        email,
        phone,
        role,
        password,
    });

    // res.status(200).json({
    //     success: true,
    //     message: "User registered successfully",
    //     user,
    // });

    sendToken(user,200,res, `${role === 'Admin' ? 'Admin' : 'User'} Registered Sucessfully!`);
});

//login
export const login = catchAsynError(async(req,res,next) =>{
    const {email, password, role} = req.body;

    if(!email || !password || !role){
        return next(new ErrorHandler("Please provide email, password, and role.",400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Email or Password",400));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password",400));
    }
    if(user.role !== role){
        return next(new ErrorHandler("User with this role not found!",400));
    }
    sendToken(user,200,res,`${role === 'Admin' ? 'Admin' : 'User'}  logged in Successfully!`); 
})

// logout
// export const logout = catchAsynError(async(req,res,next)=>{
//     res.status(201).cookie("token", "",{
//         httpOnly:true,
//         expire:new Date(Date.now()),
//         secure: true,
//         sameSite: "None",
//     }).json({
//         success: true,
//         message: "logged out Successfully!",
//     });
// });

// Assignment upload

// Assignment upload
export const upload = catchAsynError(async (req, res, next) => {
    const { userId, task, admin } = req.body;

    // Validate input fields
    if (!userId || !task || !admin) {
        return next(new ErrorHandler("All fields are required", 400));
    }

    // Create a new assignment using strings
    const assignment = new Assignment({
        userId,  // Directly use the userId string
        task,
        admin,    // Directly use the admin string
    });

    // Save the assignment to the database
    await assignment.save();

    // Return success response
    res.status(201).json({ 
        success: true, 
        message: "Assignment uploaded successfully!", 
        data: assignment 
    });
}); 

// Fetch all Admins in database
export const getAllAdmins = async (req, res, next) => {
    try {
        const admins = await User.find({ role: 'Admin' }); // Fetch users with role 'Admin'
        
        if (admins.length === 0) {
            return res.status(404).json({ success: false, message: "No admins found" });
        }

        res.status(200).json({ success: true, data: admins });
    } catch (error) {
        next(error); // Pass error to error handler middleware
    }
};
