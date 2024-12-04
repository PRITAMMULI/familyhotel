// This code id responsible for the quiz app start

// import React, { useState } from "react";

// function RepeatUserInfo2() {
//   const [val, setVal] = useState([]);
//   const [credentials, setCredentials] = useState({ email: "", username: "" });

//   const { email, username } = credentials;
//   const onChange = (e) => {
//     e.preventDefault();
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };
//   const handleClick = () => {
//     const add = [...val, []];
//     setVal(add);
//   };
//   console.log(val);
//   const handleChange = (onChangeValue, i) => {
//     const inputdata = [...val];
//     inputdata[i] = onChangeValue.target.value;
//     setVal(inputdata);
//   };

//   const handleDelete = (i) => {
//     const deleteVal = [...val];
//     deleteVal.splice(i);
//     setVal(deleteVal);
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3"></div>
//           <div className="col-lg-6">
//             {/* <form>
//             <div class="mb-3">
//               <label for="exampleInputEmail1" class="form-label">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 class="form-control"
//                 id="email"
//                 name="email"
//                 onChange={(e) => handleChange(e, i)}                 aria-describedby="emailHelp"
//               />
//             </div>
//             <div class="mb-3">
//               <label for="exampleInputPassword1" class="form-label">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="username"
//                 name="username"
//                 onChange={(e) => handleChange(e, i)}               />
//             </div>

//             <button type="submit" class="btn btn-primary">
//               Submit
//             </button>
//           </form> */}
//           </div>
//         </div>
//         <button
//           onClick={() => {
//             handleClick();
//           }}
//         >
//           Add new
//         </button>
//         {val.map((data, i) => {
//           return (
//             <>
//               {/* <div>
//               <input onChange={(e) => handleChange(e, i)} />
//               <button
//                 onClick={() => {
//                   handleDelete(i);
//                 }}
//               >
//                 X
//               </button>
//             </div> */}
//               <div className="row">
//                 <div className="col-lg-3"></div>
//                 <div className="col-lg-6">
//                   <form>
//                     <div class="mb-3">
//                       <label for="exampleInputEmail1" class="form-label">
//                         Email address
//                       </label>
//                       <input
//                         type="email"
//                         class="form-control"
//                         id="email"
//                         name="email"
//                         onChange={(e) => handleChange(e, i)}
//                         aria-describedby="emailHelp"
//                       />
//                     </div>
//                     <div class="mb-3">
//                       <label for="exampleInputPassword1" class="form-label">
//                         Username
//                       </label>
//                       <input
//                         type="text"
//                         class="form-control"
//                         id="username"
//                         name="username"
//                         onChange={(e) => handleChange(e, i)}
//                       />
//                     </div>

//                     <button type="submit" class="btn btn-primary">
//                       Submit
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default RepeatUserInfo2;

// This code id responsible for the quiz app end



// This code id responsible for the travel app start

// import React, { useState } from "react";

// function RepeatUserInfo() {
//   const [credentials, setCredentials] = useState([]);
  
//   const onChange = (e) => {
//     e.preventDefault();
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleClick = () => {
//     // Add a new empty object to credentials array
//     setCredentials([...credentials, { email: "", username: "" }]);
//   };

//   const handleChange = (e, i) => {
//     const updatedCredentials = [...credentials];
//     updatedCredentials[i][e.target.name] = e.target.value;
//     setCredentials(updatedCredentials);
//   };

//   const handleDelete = (i) => {
//     const updatedCredentials = [...credentials];
//     updatedCredentials.splice(i, 1);
//     setCredentials(updatedCredentials);
//   };

//   const handleSubmit = (e, i) => {
//     e.preventDefault();
//     // Handle submission logic if needed
//     console.log("Submitted:", credentials);
//   };
//   console.log(credentials)


//   return (
//     <div className="container">
//       <button onClick={handleClick}>Add new</button>
      
//       {credentials.map((data, i) => (
//         <div key={i} className="row">
//           <div className="col-lg-3"></div>
//           <div className="col-lg-6">
//             <form onSubmit={(e) => handleSubmit(e, i)}>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id={`email${i}`}
//                   name="email"
//                   value={credentials[i].email}
//                   onChange={(e) => handleChange(e, i)}
//                   aria-describedby={`emailHelp${i}`}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="username" className="form-label">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id={`username${i}`}
//                   name="username"
//                   value={credentials[i].username}
//                   onChange={(e) => handleChange(e, i)}
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 onClick={() => handleDelete(i)}
//               >
//                 Delete
//               </button>
//             </form>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RepeatUserInfo;

 // This code id responsible for the travel app end