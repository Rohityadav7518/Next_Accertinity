import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname :{
        type :String,
        required : true,
        trim : true,       
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date


    

})

const User = mongoose.models.user || mongoose.model("User",userSchema)

export default User;