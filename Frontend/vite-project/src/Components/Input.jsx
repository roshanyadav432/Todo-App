/* eslint-disable react/prop-types */
import { useRef } from "react";

function Input({ handlePost }) {
  const todoRef = useRef();
  const dataRef = useRef();

  function handleForm(e) {
    e.preventDefault();
    handlePost(todoRef.current.value, dataRef.current.value);
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          required
          id="todoInp"
          ref={todoRef}
          placeholder="Enter your Todo"
          style={{ marginRight: "10px" }}
        />
        <input
          type="date"
          required
          id="dateInp"
          ref={dataRef}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Input;
