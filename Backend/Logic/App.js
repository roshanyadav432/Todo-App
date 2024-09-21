const express = require("express");
const cors = require("cors");
require("./Db_connection");
const Schema = require("./Schema");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/Todo", async (req, res) => {
  try {
    const Todos = await Schema.find({});
    console.log(Todos);
    if (Todos) {
      res.status(200).send(Todos);
    } else {
      res.status(200).send("No Todo List present");
    }
  } catch {
    res.status(400).send("error!!");
  }
});

app.post("/Todo", async (req, res) => {
  const Data = await req.body;
  const newData = await new Schema(Data);
  const save = await newData.save();
  console.log(save);
  if (save) {
    res.status(200).send("Data is saved!!");
  }
});

//delete logic:
app.delete("/Todo/:id", async (req, res) => {
  try {
    let Paraid = req.params.id;
    console.log(Paraid);
    const ans = await Schema.deleteOne({ _id: Paraid });
    console.log(ans);
    if (ans) {
      res.status(200).send(ans);
    }
  } catch (err) {
    console.log("error");
    res.status(400).send("Error", err);
  }
});

//update logic:
app.patch("/Todo:id", async (req, res) => {
  try {
    let Id = req.params.id;
    let { work, date } = await req.body;
    console.log(Id, work, date);

    const Data = await Schema.updateOne(
      { _id: Id },
      { $set: { work: work, date: date } }
    );
    if (Data) {
      res.status(200).send("data updated successfully");
    } else {
      res.status(400).send("error while  updating ");
    }
  } catch (err) {
    res.status(400).send("bad request!!");
  }
});

//listening:
app.listen(8080, (err, succ) => {
  console.log("listening!!");
});
