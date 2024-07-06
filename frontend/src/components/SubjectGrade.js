// import React, { useState } from 'react';

// const SubjectGrade = () => {
//   const [count, setCount] = useState(0);

//   const handleAddClick = () => {
//     if (count < 9) {
//       setCount(count + 1);
//     }
//   };

//   return (
//     <div>
//       {count < 9 ? (
//         <div className="container-Add">
//           <form>
//             <h3 className="title">Add Course Details</h3>
//             <div className="form-group">
//               <label htmlFor="id">Course Code: IS100{count + 1}</label>
//             </div>
//             <div className="form-group">
//               <label htmlFor="name">Enter Subject Grade</label>
//               <select
//                 id="name"
//                 name="name"
//                 required
//                 className="form-control"
//               >
//                 <option value="">Select Grade</option>
//                 <option value="A+">A+</option>
//                 <option value="A">A</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B">B</option>
//                 <option value="B-">B-</option>
//                 <option value="C+">C+</option>
//                 <option value="C">C</option>
//                 <option value="C-">C-</option>
//                 <option value="D+">D+</option>
//                 <option value="D">D</option>
//                 <option value="D-">D-</option>
//                 <option value="E">E</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="credit">Enter Number of Credits</label>
//               <select
//                 id="credit"
//                 name="credit"
//                 required
//                 className="form-control"
//               >
//                 <option value="">Select Credits</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <button type="button" onClick={handleAddClick}>
//                 Add
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <div className="message">You have added the maximum number of courses.</div>
//       )}
//     </div>
//   );
// };

// export default SubjectGrade;
