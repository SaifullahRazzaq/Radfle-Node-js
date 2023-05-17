require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const app = express();
app.use(express.json());

app.use("/api/v1/user", require('./Api/Auth'));
app.use("/api/v1/contest",require('./Api/Contest'))
// app.use('/api/v1/todo',require('./Api/Todo'))

//create Todos

// app.post("/createTodos", (req, res) => {
//   const { Text } = req.body;
//   if (!Text) {
//     res.status(400).send({ message: "Enter a Text" });
//   } else if (verifyToken) {
//   }
// });
module.exports = app;
