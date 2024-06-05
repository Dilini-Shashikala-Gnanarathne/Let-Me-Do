import User from '../models/UserSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const generateToken = user=>{
    return jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY,{
        expiresIn: '15d' // this for authentication expire
    })
}

export const register = async(req,res)=>{

    const {email,password,name,role,photo,gender} = req.body

    try{

        let user=null

        if(role== 'admin'){
            user=await User.findOne({email})
        }
       
        //check if user exist
        if(user){
            return res.status(400).json({message:'User already exist'})
        }


        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        if(role=='admin'){
            user = new User({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }
        await user.save();

        res.status(200).json({success:true,message: 'User successfully created'});



    }catch(err){
        res.status(500).json({success:false,message: 'Internal server error, Try again'});



    }
};

export const login = async(req,res) => {
    const {email,password} = req.body

    try{
        let user = null
        const admin = await User.findOne({email})

        if(admin){
            user=admin
        }
       

        //checks if user exist or not
        if(!user){
            return res.status(404).json({ message: "User not found"});
        }

        //compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password,user.password)

        if(!isPasswordMatch){
            return res.status(400).json({ status:false,message: "Invalid credentials"})
        }

        //get toke
        const token = generateToken(user);

        const { password,role,appointments, ...rest} = user._doc;

        res
        .status(200)
        .json({
            status:true,
            message: "Successfully login",
            token,
            data: { ...rest},
            role,
        });

    }catch(err){
        res.status(500).json({ status: false, message: "Failed to login"});
    }
};
