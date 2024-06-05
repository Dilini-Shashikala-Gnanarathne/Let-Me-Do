// import UserTable from './UserTable'
// import Axios from 'axios';
// import { useEffect, useState} from 'react'

// const Shows = () => {
//   const[users , setUsers]=useState([]);
//   const [submited, setSubmited] = useState(false);

//   useEffect(() =>{
//     getUsers();
//   },[]);

//   const getUsers = () =>{
//     Axios.get('http://localhost:3001/api/users/')
//     .then(response=>{
//       setUsers(response.data?.response||[]);
//     })
//     .catch(error=>{
//       console.error(error);
//     })
//   }


//   const addUser=(data)=>{
//     setSubmited(true);
//     const payload={
//       id:data.id,
//       name:data.name,
//     }
//     Axios.get('http://localhost:3001/api/create', payload)
//     .then(()=>{
//       getUsers();
//       setSubmited(false);
//         })
//     .catch(error=>{
//       console.error(error);
//     })
//   }
//   return (
//     <div>
//       <UserTable rows={users}/>
//     </div>
//   )
// }



// export default Shows;
