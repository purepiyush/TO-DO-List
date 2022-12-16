import React, { useState, useRef } from "react";

export default function Student(props) {
  const [em, setEm] = useState(false);
  const inputRef = useRef();

  const editHandler = () => {
    setEm((e) => !e);
    if (em && inputRef.current.value) {
      props.edit(inputRef.current.value, props.id);
    }
  };
  return (
    <li
      style={{
        margin: "25px 0",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="listItems">
        {!em && <h5>{`${props.id+1}. ${props.st}`}</h5> }
        
        {em && <input type="text" class="form-control" placeholder="Edit your task here" aria-label="Recipient's username" aria-describedby="button-addon2" ref={inputRef} ></input>}
      </div>
      <div className="btns">
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => editHandler()}
          style={{ margin: "0 0 0 15px" }}
        >
          {em == true ? "save" : "Edit"}
        </button>
        <button onClick={() => props.del(props.id)} style={{ margin: "0 5px" }}>
          Delete
        </button>
      </div>
    </li>
  );
}
