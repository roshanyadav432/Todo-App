// import { useState } from 'react'
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import "bootstrap/dist/css/bootstrap.css";
import Print from "./Components/Print";
import axios from "axios";

function App() {
  // const newArray = [
  //   {
  //     todo: "go to school",
  //     date: "10-11-24",
  //   },
  //   {
  //     todo: "go to college",
  //     date: "10-11-24",
  //   },
  // ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  function getData() {
    axios.get("http://localhost:8080/Todo").then((result) => {
      setData(result.data);
      setLoading(false);
    });
  }

  useEffect(getData, []);

  function handlePost(work, date) {
    axios
      .post("http://localhost:8080/Todo", {
        work,
        date,
      })
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log("error in frontend axios", error);
      });
  }

  function BackendDelete(id) {
    axios
      .delete(`http://localhost:8080/Todo/${id}`)
      .then(() => {
        getData();
      })

      .catch(() => {
        console.log("error in axios frontend");
      });
  }

  function BackendEdit(id, work, date) {
    console.log(id, work, date);
    axios
      .patch(
        `http://localhost:8080/Todo${id}`,

        {
          work: work,
          date: date,
        }
      )
      .then((result) => {
        console.log(result.data);
      })
      .then(() => {
        getData();
      })
      .catch(() => {
        console.log("error in backend edit");
      });
  }
  return (
    <>
      <Header />
      <Input handlePost={handlePost} />
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <Print
          data={data}
          BackendDelete={BackendDelete}
          BackendEdit={BackendEdit}
        />
      )}
    </>
  );
}

export default App;
