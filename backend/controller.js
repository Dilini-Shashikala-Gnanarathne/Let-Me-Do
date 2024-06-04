const User = require('./models');

const getAllUsers = (req,res,next) => {
    User.find()
   .then(response => {
    res.json({response})
    })
    .catch(err => {
        res.json({err: err});
    });

   }


const addUser = (req, res, next) => {
    const user = new User({
    id:req.body.id,
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    gender:req.body.gender,
    });
    user.save()
   .then(response => {
    res.json({response})
    })
   .catch(err => {
        res.json({err: err});
    });
}





// const users= [
//     {
//      id:1   ,
//      name: "Dilini",
//      email: "dilini@gmail.com",
//      password: "dilini" },

//      {
//      id:2 ,
//      name: "Dilini",
//      email: "dilini@gmail.com",
//      password: "dilini" },       
// ]

// const getAllUsers =(cb)=>{
//     return cb(users);
// }

// const getUser =(id,cb)=>{
//     const user =users.find(user => user.id == id);
//     return cb(user);
// }

// exports.getAllUsers = getAllUsers;
// exports.getUser = getUser;