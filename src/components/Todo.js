// import React, { useState,useRef } from "react";
// // import "./App.css";

// function Todo() {
//     const[list,setList] = useState([]);
//     const[em,setEm] = useState(false);
//     let inputRef = useRef();
//     let editRef = useRef();
//     const submitHandler = ()=>{
//       let arr = [...list,inputRef.current.value];
//       setList(arr)
//     }
//     const deleteHandler = (id)=>{
//       let arr = [...list];
//       arr.splice(id,1);
//       setList(arr)
//     }
//     const doneHandler = (id)=>{
//       let arr = [...list];
//       arr[id] = <s>{arr[id]}</s>
//       setList(arr);
//     }
//     const editHandler = (id)=>{
//       if(em){
//         let arr = [...list];
//       arr[id] = editRef.current.value;
//       setList(arr)
//       }
//       setEm(e=>!e);
//     }
//   return (
//     <div className="App">
//       <label>Add here:
//       <input type="text" ref ={inputRef}/>
//       </label>
//       <button onClick={()=>submitHandler()}>Add</button>
//       <ol>
//         {list.map((elem,id)=>{
//           return(
//             <li key={id}>
//               {!em && elem}
//               {em && <input ref={editRef}/>}
//               <button onClick={()=>deleteHandler(id)}>delete</button>
//               <button onClick={()=>doneHandler(id)}>done</button>
//               <button onClick={()=>editHandler(id)}>{em?'save':'Edit'}</button>
//             </li>
//           )
//         })}
//       </ol>
//     </div>
//   );
// }

// export default Todo;
