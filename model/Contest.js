const mongoose = require("mongoose");

const ContestSchema = new mongoose.Schema({
  radfleTickets: { type: Number, default: null,count:0},
  accountBalance: { type: Number, default: null },
  userId: { type: String, default: null },
//   createdOn:new Date().getTime()
});

module.exports = mongoose.model("Contest", ContestSchema);
