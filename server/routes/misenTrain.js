const express = require("express");
const brain = require("brain.js");
const fs = require("fs");
const xlsx = require("xlsx");
const mplayer = require("../logic/mplayer");

const mTrain = express.Router();

mTrain.post("/", (req, res) => {
  console.log(`TRAINING for ${req.body.name_player} started on ${new Date()}`);
  const workbook = xlsx.readFile("C://Misen/emisen900d.xlsm");
  let firstSheet = workbook.SheetNames[5];
  let currUpdate = "C4";
  const misen = new brain.NeuralNetwork({ hiddenLayers: [32, 16, 8] });
  if (fs.existsSync(`../dbase/data_trn/${req.body.name_player}.json`)) {
    misen.fromJSON(
      JSON.parse(
        fs.readFileSync(`../dbase/data_trn/${req.body.name_player}.json`, "utf8")
      )
    );
  }
  let train_err;
  misen.train(mplayer.trainData(req.body.name_player), {
    log: log => {
      train_err = log;
    },
    logPeriod: 100
  });
  fs.writeFileSync(
    `../dbase/data_trn/${req.body.name_player}.json`,
    JSON.stringify(misen.toJSON(), null, "  ")
  );

  if (fs.existsSync(`../dbase/data_trn2/${req.body.name_player}.json`)) {
    misen.fromJSON(
      JSON.parse(
        fs.readFileSync(`../dbase/data_trn2/${req.body.name_player}.json`, "utf8")
      )
    );
  }
  misen.train(mplayer.trainData2(req.body.name_player));
  fs.writeFileSync(
    `../dbase/data_trn2/${req.body.name_player}.json`,
    JSON.stringify(misen.toJSON(), null, "  ")
  );

  if (fs.existsSync(`../dbase/data_trn3/${req.body.name_player}.json`)) {
    misen.fromJSON(
      JSON.parse(
        fs.readFileSync(`../dbase/data_trn3/${req.body.name_player}.json`, "utf8")
      )
    );
  }
  misen.train(mplayer.trainData3(req.body.name_player));
  fs.writeFileSync(
    `../dbase/data_trn3/${req.body.name_player}.json`,
    JSON.stringify(misen.toJSON(), null, "  ")
  );

  let trainRecord = {
    [req.body.name_player]: {
      lastTrnDate: Date.now(),
      trainError: train_err,
      update_seq: mplayer.getPosition(firstSheet, currUpdate)
    }
  };

  let playerRecord = JSON.parse(fs.readFileSync("../dbase/data_ply/mplayers.json"));
  let newPlayer = true;

  for (let i = 0; i < playerRecord.length; i++) {
    if (playerRecord[i].hasOwnProperty([req.body.name_player])) {
      newPlayer = false;
      playerRecord[i][req.body.name_player].lastTrnDate = Date.now();
      playerRecord[i][req.body.name_player].trainError = train_err;
      break;
    }
  }

  if (newPlayer) {
    playerRecord.push(trainRecord);
  }

  playerRecord = JSON.stringify(playerRecord, null, " ");
  fs.writeFileSync("../dbase/data_ply/mplayers.json", playerRecord);
  console.log(`TRAINING for ${req.body.name_player} finished on ${new Date()}`);
  console.log(train_err);
  res.status(200).json({
    message: `${req.body.name_player.toUpperCase()} <br/> ${train_err}.`
  });
});

module.exports = mTrain;
