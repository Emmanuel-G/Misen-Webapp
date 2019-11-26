const express = require("express");
const fs = require("fs");
const xlsx = require("xlsx");
const mplayer = require("../logic/mplayer");
const workbook = xlsx.readFile("C://Misen/emisen900d.xlsm");

const misenRollback = express.Router();

misenRollback.post("/", (req, res) => {
  console.log(`ROLLBACK --- ${req.body.get_player.toUpperCase()} --- ${new Date()}`);
  let misenCode = req.body.get_player;
  let misenVers = JSON.parse(fs.readFileSync("../dbase/data_ply/mplayers.json"));
  let misenPost = JSON.parse(fs.readFileSync(`../dbase/data_raw/${misenCode}.json`));
  let misenRmv = misenPost.pop();
  let misenCodeV;

  for (let i = 0; i < misenVers.length; i++) {
    if (misenVers[i].hasOwnProperty([misenCode])) {
      misenCodeV = misenVers[i][misenCode].update_seq[0] - 1;
      misenVers[i][misenCode].update_seq[0] = misenVers[i][misenCode].update_seq[0] - 1;
      break;
    }
  }

  misenVers = JSON.stringify(misenVers, null, " ");
  fs.writeFileSync("../dbase/data_ply/mplayers.json", misenVers);
  misenPost = JSON.stringify(misenPost, null, " ");
  fs.writeFileSync(`../dbase/data_raw/${misenCode}.json`, misenPost);

  res.json(
    `${misenCode.toUpperCase()} has been rolled-back to version ${misenCodeV} and position ${misenRmv} was removed.`
  );
});

module.exports = misenRollback;
