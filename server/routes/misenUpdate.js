const express = require("express");
const fs = require("fs");
const xlsx = require("xlsx");
const mplayer = require("../logic/mplayer");
const workbook = xlsx.readFile("C://Misen/emisen900d.xlsm");

const misenUpdate = express.Router();

misenUpdate.post("/", (req, res) => {
  console.log(`UPDATE --- ${req.body.get_player.toUpperCase()} --- ${new Date()}`);

  let misen_code = req.body.get_player;
  let mDataSheet = workbook.SheetNames[5];
  let currUpdate = "C4";
  let mDataCell = `${get_misenColumn(misen_code)}${4 + updateTarget(misen_code)}`;
  let playerUpdate = misenLastVer();

  //Get Misen's column on Spreadsheet datatable.
  //The Misen and spreadsheet columns are listed in mposition.json file
  function get_misenColumn(misen_code) {
    let mDataColumn;
    let misenColumn = JSON.parse(fs.readFileSync("../dbase/data_ply/mposition.json"));
    let hasPosition = false;

    for (let col = 0; col < misenColumn.length; col++) {
      if (misenColumn[col].hasOwnProperty([misen_code])) {
        hasPosition = true;
        mDataColumn = misenColumn[col][misen_code];
      }
    }

    if (hasPosition == false) {
      res.json(`${misen_code.toUpperCase()} position not set!`);
    }
    return mDataColumn;
  }

  //Get the latest update version of Misen.
  //This information is stored in mplayers.json file
  function misenLastVer(misen_code) {
    let last_version;
    let misen_verNos = JSON.parse(fs.readFileSync("../dbase/data_ply/mplayers.json"));

    for (let i = 0; i < misen_verNos.length; i++) {
      if (misen_verNos[i].hasOwnProperty([misen_code])) {
        last_version = misen_verNos[i][misen_code].update_seq;
        break;
      }
    }
    return last_version;
  }

  //Get the required update version.
  function updateTarget(misen_code) {
    let updater;
    let updater_seq = getPosition(mDataSheet, currUpdate) - misenLastVer(misen_code);
    if (updater_seq > 0) {
      updater = updater_seq - 1;
    } else {
      updater = 0;
    }
    return updater;
  }

  function getPosition(sheet, cell) {
    posNumber = workbook.Sheets[sheet][cell].v;
    if (isNaN(posNumber) == true) {
      posNumber = posNumber
        .replace(/[|]/g, ", ")
        .replace(/^/, "[")
        .replace(/$/, "]");
      posNumber = JSON.parse(posNumber);
    } else {
      posNumber = [posNumber];
    }
    return posNumber;
  }

  function updateMisen(misen_code) {
    let misenData = JSON.parse(fs.readFileSync("../dbase/data_ply/mplayers.json"));
    let misenLastVersion;
    let isListedPlayer = false;

    for (let p = 0; p < misenData.length; p++) {
      if (misenData[p].hasOwnProperty([misen_code])) {
        isListedPlayer = true;
        if (misenData[p][misen_code].update_seq !== undefined) {
          misenLastVersion = misenData[p][misen_code].update_seq;
          break;
        } else {
          res.json(`${misen_code.toUpperCase()} has no previous update!`);
        }
      }
    }

    if (isListedPlayer == false) {
      res.json(`${misen_code.toUpperCase()} is not in MPLAYERS list!`);
    }

    let misenCurrentUpdate = getPosition(mDataSheet, currUpdate);

    if (misenLastVersion[0] === misenCurrentUpdate[0]) {
      res.json(`${misen_code.toUpperCase()} is up-to-date!`);
    } else {
      let playerData = JSON.parse(
        fs.readFileSync(`../dbase/data_raw/${misen_code}.json`)
      );
      playerData.push(getPosition(mDataSheet, mDataCell));
      playerData = JSON.stringify(playerData, null, 2);
      fs.writeFileSync(`../dbase/data_raw/${misen_code}.json`, playerData);

      for (let p = 0; p < misenData.length; p++) {
        if (misenData[p].hasOwnProperty([misen_code])) {
          misenData[p][misen_code].update_seq = [misenLastVersion[0] + 1];
          break;
        }
      }
      misenData = JSON.stringify(misenData, null, " ");
      fs.writeFileSync("../dbase/data_ply/mplayers.json", misenData);

      let misen_seq = JSON.parse(fs.readFileSync("../dbase/data_ply/mplayers.json"));

      let misen_cur = JSON.parse(
        fs.readFileSync(`../dbase/data_raw/${req.body.get_player}.json`)
      );

      let results_cur;
      let results_rmv;
      let current_seq;
      let results_mat;

      for (let p = 0; p < misen_seq.length; p++) {
        if (misen_seq[p].hasOwnProperty(`${req.body.get_player}`)) {
          results_cur = `D${misen_seq[p][req.body.get_player].update_seq[0]}`;
          results_mat = `A${misen_seq[p][req.body.get_player].update_seq[0]}`;
          current_seq = `${misen_seq[p][req.body.get_player].update_seq[0]}`;
          results_rmv = `D${misen_seq[p][req.body.get_player].update_seq[0] - 4}`;
        }
      }

      let results_str = JSON.parse(fs.readFileSync("../dbase/data_ply/mresults.json"));

      let first_entry = true;

      for (let r = 0; r < results_str.length; r++) {
        if (results_str[r].misenCode == [req.body.get_player]) {
          first_entry = false;
          results_str[r][`${results_cur}`] = misen_cur[misen_cur.length - 1];
          results_str[r].misenSeqn = parseInt(current_seq);
          results_str[r].updateTime = Date.now();
          delete results_str[r][`${results_rmv}`];
          break;
        }
      }

      if (first_entry == true) {
        let newResultsObj = {
          misenCode: req.body.get_player,
          misenSeqn: parseInt(current_seq),
          updateTime: Date.now(),
          [`${results_cur}`]: misen_cur[misen_cur.length - 1]
        };
        results_str.push(newResultsObj);
      }

      /* for (let s = 0; s < results_str.length; s++) {
        if (results_str[s].misenCode == [req.body.get_player]) {
          if (results_str[s].results_mat.contains([misen_cur[misen_cur.length - 1]])) {
            results_str[s][`${results_mat}`] = 1;
          } else {
            results_str[s][`${results_mat}`] = 0;
          }
        }
      }
 */
      results_str = JSON.stringify(results_str, null, " ");
      fs.writeFileSync("../dbase/data_ply/mresults.json", results_str);

      res
        .status(200)
        .json(
          `${misen_code.toUpperCase()} updated to version ${misenLastVersion[0] + 1}`
        );
    }
  }

  updateMisen(misen_code);
});

module.exports = misenUpdate;
