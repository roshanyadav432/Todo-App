/* eslint-disable react/prop-types */
import { useRef } from "react";

function Edit({ handleSave }) {
  const todoRef = useRef();
  const dataRef = useRef();

  function handleEdit(e) {
    e.preventDefault();
    handleSave(todoRef.current.value, dataRef.current.value);
  }
  return (
    <div>
      <form onSubmit={handleEdit}>
        <table className="table">
          <tbody>
            <tr>
              <th>
                <input
                  type="text"
                  required
                  id="todoInp"
                  ref={todoRef}
                  placeholder="Enter your Todo"
                  style={{ marginRight: "10px" }}
                />
              </th>
              <td>
                <input
                  type="date"
                  required
                  id="dateInp"
                  ref={dataRef}
                  style={{ marginRight: "10px" }}
                />
              </td>
              <td>
                <button type="submit">Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Edit;
