/* eslint-disable react/prop-types */

import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
function Print({ data, BackendDelete, BackendEdit }) {
  const [isEdit, setEdit] = useState();
  const [disable, setDisable] = useState(true);

  const workRef = useRef();
  const dateRef = useRef();
  function handleDelete(id) {
    BackendDelete(id);
  }

  function handleEdit(id) {
    setEdit(id);
  }

  function handleSave(id) {
    BackendEdit(id, workRef.current.value, dateRef.current.value);
    setEdit();
  }

  function checkDisable() {
    if (workRef.current.value == "") {
      setDisable(true);
    } else if (dateRef.current.value == "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">TODO</th>
            <th scope="col">DATE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        {data.map((entry) => {
          return (
            <tbody key={entry._id}>
              <tr>
                {isEdit == entry._id ? (
                  <>
                    <th>
                      <input
                        onChange={checkDisable}
                        type="text"
                        placeholder="enter todo here"
                        required
                        ref={workRef}
                      />
                    </th>
                    <td>
                      <input
                        type="date"
                        required
                        ref={dateRef}
                        onChange={checkDisable}
                      />
                    </td>
                    <td>
                      {disable ? (
                        <>
                          <button disabled={true}>Save</button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              handleSave(entry._id);
                            }}
                          >
                            Save
                          </button>
                        </>
                      )}
                    </td>
                  </>
                ) : (
                  <>
                    <th scope="row">{entry.work}</th>
                    <td>{entry.date}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleDelete(entry._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleEdit(entry._id);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </>
                )}
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Print;
