const express = require("express");
const brain = require("brain.js");
const fs = require("fs");
const mplayer = require("../logic/mplayer");

const misenPredict = express.Router();

misenPredict.post("/", (req, res) => {
  if (fs.existsSync(`../dbase/data_trn/${req.body.getplayer}.json`)) {
    console.log(`PREDIC --- ${req.body.getplayer.toUpperCase()} --- ${new Date()}`);
    const misen = new brain.NeuralNetwork();
    misen.fromJSON(
      JSON.parse(fs.readFileSync(`../dbase/data_trn/${req.body.getplayer}.json`, "utf8"))
    );
    const output = misen.run(mplayer.runData(req.body.getplayer));

    misen.fromJSON(
      JSON.parse(fs.readFileSync(`../dbase/data_trn2/${req.body.getplayer}.json`, "utf8"))
    );
    const output2 = misen.run(mplayer.runData(req.body.getplayer));

    misen.fromJSON(
      JSON.parse(fs.readFileSync(`../dbase/data_trn3/${req.body.getplayer}.json`, "utf8"))
    );
    const output3 = misen.run(mplayer.runData(req.body.getplayer));

    let playerRecord = JSON.parse(fs.readFileSync("../dbase/data_ply/mplayers.json"));
    let newPlayer = true;
    let lastTrnDate;
    let newRecord = {
      [req.body.getplayer]: {
        lastPrdDate: Date.now(),
        lastPredict: [
          [output[0].toFixed(5)],
          [output[1].toFixed(5)],
          [output[2].toFixed(5)],
          [output[3].toFixed(5)]
        ]
      }
    };

    for (let i = 0; i < playerRecord.length; i++) {
      if (playerRecord[i].hasOwnProperty([req.body.getplayer])) {
        newPlayer = false;
        lastTrnDate = playerRecord[i][req.body.getplayer].lastTrnDate;
        playerRecord[i][req.body.getplayer].lastPrdDate = Date.now();
        playerRecord[i][req.body.getplayer].lastPredict = [
          [output[0].toFixed(5)],
          [output[1].toFixed(5)],
          [output[2].toFixed(5)],
          [output[3].toFixed(5)]
        ];
        break;
      }
    }

    if (newPlayer) {
      playerRecord.push(newRecord);
    }

    playerRecord = JSON.stringify(playerRecord, null, " ");
    fs.writeFileSync("../dbase/data_ply/mplayers.json", playerRecord);

    //Record prediction results if REC option is checked on client.
    if (req.body.recResult !== null) {
      let misen_seq = JSON.parse(fs.readFileSync("../dbase/data_ply/mplayers.json"));

      let results_seq1;
      let results_seq2;
      let results_seq3;
      let results_rmv1;
      let results_rmv2;
      let results_rmv3;

      for (let p = 0; p < misen_seq.length; p++) {
        if (misen_seq[p].hasOwnProperty(`${req.body.getplayer}`)) {
          results_seq1 = `A${misen_seq[p][req.body.getplayer].update_seq[0] + 1}`;
          results_seq2 = `B${misen_seq[p][req.body.getplayer].update_seq[0] + 1}`;
          results_seq3 = `C${misen_seq[p][req.body.getplayer].update_seq[0] + 1}`;
          results_rmv1 = `A${misen_seq[p][req.body.getplayer].update_seq[0] - 4}`;
          results_rmv2 = `B${misen_seq[p][req.body.getplayer].update_seq[0] - 4}`;
          results_rmv3 = `C${misen_seq[p][req.body.getplayer].update_seq[0] - 4}`;
        }
      }

      let results_str = JSON.parse(fs.readFileSync("../dbase/data_ply/mresults.json"));
      let results_out1 = [
        [output[0].toFixed(5)],
        [output[1].toFixed(5)],
        [output[2].toFixed(5)],
        [output[3].toFixed(5)]
      ];

      let results_out2 = [
        [output2[0].toFixed(5)],
        [output2[1].toFixed(5)],
        [output2[2].toFixed(5)],
        [output2[3].toFixed(5)]
      ];

      let results_out3 = [
        [output3[0].toFixed(5)],
        [output3[1].toFixed(5)],
        [output3[2].toFixed(5)],
        [output3[3].toFixed(5)]
      ];

      let results_max1 = 0;
      let results_pos1 = null;

      for (let m = 0; m < results_out1.length; m++) {
        if (results_out1[m] > results_max1) {
          results_max1 = results_out1[m];
          results_pos1 = m;
        }
      }

      let results_rng1 = null;

      if (results_pos1 === 0) {
        results_rng1 = [1, 2, 3];
      } else if (results_pos1 === 1) {
        results_rng1 = [4, 5, 6];
      } else if (results_pos1 === 2) {
        results_rng1 = [7, 8, 9];
      } else if (results_pos1 === 3) {
        results_rng1 = [10, 11, 12];
      }

      let results_max2 = 0;
      let results_pos2 = null;

      for (let m = 0; m < results_out2.length; m++) {
        if (results_out2[m] > results_max2) {
          results_max2 = results_out2[m];
          results_pos2 = m;
        }
      }

      let results_rng2 = null;

      if (results_pos2 === 0) {
        results_rng2 = [12, 1, 2];
      } else if (results_pos2 === 1) {
        results_rng2 = [3, 4, 5];
      } else if (results_pos2 === 2) {
        results_rng2 = [6, 7, 8];
      } else if (results_pos2 === 3) {
        results_rng2 = [9, 10, 11];
      }

      let results_max3 = 0;
      let results_pos3 = null;

      for (let m = 0; m < results_out3.length; m++) {
        if (results_out3[m] > results_max3) {
          results_max3 = results_out3[m];
          results_pos3 = m;
        }
      }

      let results_rng3 = null;

      if (results_pos3 === 0) {
        results_rng3 = [11, 12, 1];
      } else if (results_pos3 === 1) {
        results_rng3 = [2, 3, 4];
      } else if (results_pos3 === 2) {
        results_rng3 = [5, 6, 7];
      } else if (results_pos3 === 3) {
        results_rng3 = [8, 9, 10];
      }

      let first_entry = true;

      for (let r = 0; r < results_str.length; r++) {
        if (results_str[r].misenCode == [req.body.getplayer]) {
          first_entry = false;
          results_str[r][`${results_seq1}`] = results_rng1;
          results_str[r][`${results_seq2}`] = results_rng2;
          results_str[r][`${results_seq3}`] = results_rng3;
          results_str[r].P1_conf = results_max1 * 100;
          results_str[r].P2_conf = results_max2 * 100;
          results_str[r].P3_conf = results_max3 * 100;
          results_str[r].updateTime = Date.now();
          delete results_str[r][`${results_rmv1}`];
          delete results_str[r][`${results_rmv2}`];
          delete results_str[r][`${results_rmv3}`];
          break;
        }
      }

      if (first_entry == true) {
        let newResultsObj = {
          misenCode: req.body.getplayer,
          [`${results_seq1}`]: results_rng1,
          [`${results_seq2}`]: results_rng2,
          [`${results_seq3}`]: results_rng3,
          updateTime: Date.now()
        };
        results_str.push(newResultsObj);
      }

      results_str = JSON.stringify(results_str, null, " ");
      fs.writeFileSync("../dbase/data_ply/mresults.json", results_str);
    }

    res
      .status(200)
      .json([
        { a: output[0].toFixed(5) },
        { b: output[1].toFixed(5) },
        { c: output[2].toFixed(5) },
        { d: output[3].toFixed(5) },
        { e: output2[0].toFixed(5) },
        { f: output2[1].toFixed(5) },
        { g: output2[2].toFixed(5) },
        { h: output2[3].toFixed(5) },
        { i: output3[0].toFixed(5) },
        { j: output3[1].toFixed(5) },
        { k: output3[2].toFixed(5) },
        { l: output3[3].toFixed(5) },
        { m: lastTrnDate }
      ]);
  } else {
    res.json(`${[req.body.getplayer].toUpperCase()} has not been trained.`);
  }
});

module.exports = misenPredict;
