const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const verifyToken = require("../middleware/verifyToken");
const Todo = require("../model/Todo");
const getUser = require("../middleware/getCurrentUser");
const Contest = require("../model/Contest");
app.use(express.json());

//get contest verifyToken
app.post("/watchAds",verifyToken, async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    res.status(400).send({ message: "Error" });
  } else {
    // let count = await Contest.findById({});
    // const data = {
    //   radfleTickets: 1,
    //   amountBalance: 20,
    //   options: true,
    // };
    // const updateContest = await Contest.findByIdAndUpdate(data);
    res.status(200).json({ message: "Success", data: "TESSTING TOKEN" });
  }
});

module.exports = app;
