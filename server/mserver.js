const express = require("express");
const cors = require("cors");
const brain = require("brain.js");
const fs = require("fs");
const xlsx = require("xlsx");
const mplayer = require("./logic/mplayer");
const mTrain = require("./routes/misenTrain");
const misenPredict = require("./routes/misenPredict");
const players = require("../dbase/data_ply/playerlist");
const misenUpdate = require("./routes/misenUpdate");
const misenRollback = require("./routes/misenRollback");
const misenXTrain = require("./routes/misenXTrain");

const PORT = process.env.PORT || 5000;
const mserver = express();

mserver.use(cors());
mserver.use(express.json());
mserver.use("/train_mplayer", mTrain);
mserver.use("/predict_mplayer", misenPredict);
mserver.use("/update_mplayer", misenUpdate);
mserver.use("/rollback", misenRollback);
mserver.use("/xtrain", misenXTrain);

mserver.get("/current_version", (req, res) => {
  const workbook = xlsx.readFile("C://Misen/emisen900d.xlsm");
  let firstSheet = workbook.SheetNames[5];
  let currUpdate = "C4";
  let current_version = mplayer.getPosition(firstSheet, currUpdate);
  res.status(200).json(current_version);
});

mserver.get("/misen_match", (req, res) => {
  let misenResults = JSON.parse(fs.readFileSync("../dbase/data_ply/mresults.json"));
  res.status(200).json(misenResults);
});

mserver.listen(PORT, err => {
  if (!err) {
    console.log(`M_Player server started on ${new Date()}`);
    console.log(`SERVER listening on http://localhost:${PORT}`);
  } else {
    console.log(JSON.stringify(err));
  }
});
