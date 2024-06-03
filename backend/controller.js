const users= [
    {
     id:1   ,
     name: "Dilini",
     email: "dilini@gmail.com",
     password: "dilini" },

     {
     id:2 ,
     name: "Dilini",
     email: "dilini@gmail.com",
     password: "dilini" },       
]

const getAllUsers =(cb)=>{
    return cb(users);
}

const getUser =(id,cb)=>{
    const user =users.find(user => user.id == id);
    return cb(user);
}

exports.getAllUsers = getAllUsers;
exports.getUser = getUser;