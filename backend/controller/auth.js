const User =require('../models/UserSchema');
const Admin = require('../models/AdminSchema');



 const register = async(req,res)=>{

    const {email,password,name,role} = req.body

    try{

        let user=null

        if(role== 'viewer'){
            user=await User.findOne({email})
        }
        else if(role=='admin'){
            user = await Admin.findOne({email})
        }

        //check if user exist
        if(user){
            return res.status(400).json({message:'User already exist'})
        }
       
        if(role=='viewer'){
            user = new User({
                name,
                email,
                password,
                role
            })
        }

        if(role=='admin'){
            user = new Admin({
                name,
                email,
                password,
                role
            })
        }

        await user.save();

        res.status(200).json({success:true,message: 'User successfully created'});

    }catch(err){
        res.status(500).json({success:false,message: err});
    }
};

exports.register = register;
