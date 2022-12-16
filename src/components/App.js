import React, { useState, useRef } from "react";
import Student from "./Student";

export default function App() {
  let styles = {
    display: "flex",
    maxWidth: "75vw",
    height: "90vh",
    // justifyContent : 'center',
    alignItems: "center",
    flexDirection: "column",
    border: "20px solid black",
    borderRadius: "10px",
    margin: "50px auto",
    background: "rgba(100, 0, 0, .4)",
    
  };
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const clickHandler = () => {
    // if (students.length === 6) {
    //   alert("First complete Remaining Tasks!!!");
    // } else {
    let newArr = [...students, name];
    setStudents(newArr);

    setName("");
  };
  const deleteHandler = (id) => {
    const arr = [...students];
    arr.splice(id, 1);
    setStudents(arr);
  };
  const editHandler = (val, id) => {
    const arr2 = [...students];
    arr2[id] = val;
    setStudents(arr2);
  };

  return (
    <div style={styles}>
      <div
        className="topContainer"
        style={{
          background: "wheat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          borderRadius: "10px",
          border: "5px solid pink",
        }}
      >
        <h3 style={{ color: "black" }}>TO-DO LIST</h3>
        {/* <div className="input" style={{display : "flex"}}>
          
          <input onChange={(e) => setName(e.target.value)} value={name} />
          <button onClick={clickHandler}>Add</button>
        </div> */}
        <div class="input-group mb-3" style={{ maxWidth: "60%" }}>
          <input
            type="text"
            class="form-control"
            placeholder="Add your tasks here"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={clickHandler}
          >
            Add
          </button>
        </div>
      </div>
      <div style={{ height: "90%", overflowY: "auto", width: "90%" }}>
        <ol style={{ margin: "10px 0" }}>
          {students.map((st, id) => {
            return (
              <Student
                key={id}
                students={students}
                st={st}
                id={id}
                del={deleteHandler}
                edit={editHandler}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
