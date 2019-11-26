const express = require("express");
const brain = require("brain.js");
const fs = require("fs");
const mplayer = require("../logic/mplayer");

const misenXTrain = express.Router();

misenXTrain.post("/", (req, res) => {
  console.log(`X-TRAINING for ${req.body.name_player} started on ${new Date()}`);
  const misen = new brain.NeuralNetwork({ hiddenLayers: [26] });
  let train_err;
  console.log(mplayer.trainXData(req.body.name_player));
  misen.train(mplayer.trainXData(req.body.name_player), {
    log: log => {
      train_err = log;
    },
    logPeriod: 100
  });
  fs.writeFileSync(
    `../dbase/data_trn4/${req.body.name_player}.json`,
    JSON.stringify(misen.toJSON(), null, "  ")
  );

  console.log(`X-TRAINING for ${req.body.name_player} finished on ${new Date()}`);
  console.log(train_err);
  res.status(200).json({
    message: `${req.body.name_player.toUpperCase()} <br/> ${train_err}.`
  });
});

module.exports = misenXTrain;
