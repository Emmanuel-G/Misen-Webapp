const fs = require("fs");
const xlsx = require("xlsx");
const workbook = xlsx.readFile("C://Misen/emisen900d.xlsm");

module.exports = {
  formatData: function formatData(newData) {
    let newEntry = [];
    if (newData.mpos1 !== "") {
      newEntry.push(parseInt(newData.mpos1));
    }
    if (newData.mpos2 !== "") {
      newEntry.push(parseInt(newData.mpos2));
    }
    if (newData.mpos3 !== "") {
      newEntry.push(parseInt(newData.mpos3));
    }
    if (newData.mpos4 !== "") {
      newEntry.push(parseInt(newData.mpos4));
    }
    return newEntry;
  },

  getPosition: function getPosition(sheet, cell) {
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
  },

  changeOrder: function changeOrder(fileName) {
    fs.readFile(`../data_raw/${fileName}.json`, "utf8", (err, content) => {
      if (err) {
        console.error(err);
      }
      content = content.replace(/\"/g, "");
      let dataChange = JSON.parse(content);
      dataChange.reverse();
      dataChange = JSON.stringify(dataChange, null, 2);
      fs.writeFile(`../data_raw/${fileName}.json`, dataChange, err => {
        if (err) {
          console.error(err);
        }
      });
    });
  },

  convertText: function convertText(fileName) {
    fs.readFile("./textdata.txt", "utf8", (err, content) => {
      if (err) {
        console.error(err);
      }

      let textFile = content.replace(/\t/g, "], [").replace(/[|]/g, ", ");

      textFile = JSON.stringify(textFile, null, 2);
      fs.writeFile(`../data_raw/${fileName}.json`, textFile, err => {
        if (err) {
          console.error(err);
        }
        this.changeOrder(fileName);
      });
    });
  },

  saveData: function saveData(rawData, dataFile) {
    fs.readFile(`../dbase/data_raw/${dataFile}.json`, (err, content) => {
      if (err) {
        console.error(err);
      }
      let oldData = JSON.parse(content);
      oldData.push(rawData);
      let updatedData = JSON.stringify(oldData, null, 1);
      fs.writeFile(`../dbase/data_raw/${dataFile}.json`, updatedData, err => {
        if (err) {
          console.error(err);
        }
      });
    });
  },

  loadData: function loadData() {
    return JSON.parse(fs.readFileSync(`../data2/m033alfa.json`));
  },

  trainData: function trainData(dataFile) {
    return convertData(
      normData(JSON.parse(fs.readFileSync(`../dbase/data_raw/${dataFile}.json`)))
    );
  },

  trainXData: function trainXData(dataFile) {
    return convertXData(
      normXData(JSON.parse(fs.readFileSync(`../dbase/data_raw/${dataFile}.json`)))
    );
  },

  trainData2: function trainData2(dataFile) {
    return convertData2(
      normData(JSON.parse(fs.readFileSync(`../dbase/data_raw/${dataFile}.json`)))
    );
  },

  trainData3: function trainData3(dataFile) {
    return convertData3(
      normData(JSON.parse(fs.readFileSync(`../dbase/data_raw/${dataFile}.json`)))
    );
  },

  runData: function runData(dataFile) {
    return normRunData(
      normData(
        selectRunData(JSON.parse(fs.readFileSync(`../dbase/data_raw/${dataFile}.json`)))
      )
    );
  }
};

function selectRunData(mydata) {
  return [mydata[mydata.length - 1]];
}

function convertData3(dataArr) {
  let converted = [];
  for (let i = 0; i < dataArr.length - 1; i++) {
    let dataObj = { input: dataArr[i], output: normReducer3(dataArr[i + 1]) };
    converted.push(dataObj);
    let revData = dataArr[i + 1].shift();
    dataArr[i + 1].push(revData);
    revData = dataArr[i + 1].shift();
    dataArr[i + 1].push(revData);
  }
  return converted;
}

function convertData2(dataArr) {
  let converted = [];
  for (let i = 0; i < dataArr.length - 1; i++) {
    let dataObj = { input: dataArr[i], output: normReducer2(dataArr[i + 1]) };
    converted.push(dataObj);
    let revData = dataArr[i + 1].shift();
    dataArr[i + 1].push(revData);
  }
  return converted;
}

function convertData(dataArr) {
  let converted = [];
  for (let i = 0; i < dataArr.length - 1; i++) {
    let dataObj = { input: dataArr[i], output: normReducer(dataArr[i + 1]) };
    converted.push(dataObj);
  }
  return converted;
}

function normReducer3(normData) {
  let reducedArr = [];
  let normData2 = normData.pop();
  normData.unshift(normData2);
  normData2 = normData.pop();
  normData.unshift(normData2);

  for (let i = 0; i < normData.length; i = i + 3) {
    if (normData[i] + normData[i + 1] + normData[i + 2] > 0) {
      reducedArr.push(1);
    } else {
      reducedArr.push(0);
    }
  }
  return reducedArr;
}

function normRunData(data) {
  return data[0];
}

function normReducer2(normData) {
  let reducedArr = [];
  let normData2 = normData.pop();
  normData.unshift(normData2);

  for (let i = 0; i < normData.length; i = i + 3) {
    if (normData[i] + normData[i + 1] + normData[i + 2] > 0) {
      reducedArr.push(1);
    } else {
      reducedArr.push(0);
    }
  }
  return reducedArr;
}

function normRunData(data) {
  return data[0];
}

function normReducer(normData) {
  let reducedArr = [];
  for (let i = 0; i < normData.length; i = i + 3) {
    if (normData[i] + normData[i + 1] + normData[i + 2] > 0) {
      reducedArr.push(1);
    } else {
      reducedArr.push(0);
    }
  }
  return reducedArr;
}

function normRunData(data) {
  return data[0];
}

function normData(rawData) {
  let normalizedData = [];
  for (let k = 0; k < rawData.length; k++) {
    let num1 = rawData[k][0];
    let num2 = rawData[k][1];
    let num3 = rawData[k][2];
    let num4 = rawData[k][3];

    rawData[k].splice(0);

    for (let i = 0; i < 12; i++) {
      if (i !== num1 - 1 && i !== num2 - 1 && i !== num3 - 1 && i !== num4 - 1) {
        rawData[k].push(0);
      } else {
        rawData[k].push(1);
      }
    }
    normalizedData.push(rawData[k]);
  }
  return normalizedData;
}

//xdata

function convertXData(dataArr) {
  let convertedX = [];
  for (let i = 0; i < dataArr.length - 1; i++) {
    let dataObj = { input: dataArr[i], output: normXReducer(dataArr[i + 1]) };
    convertedX.push(dataObj);
  }
  return convertedX;
}

function normXReducer(normData) {
  let reducedXArr = [];
  for (let i = 0; i < normData.length; i = i + 3) {
    if (normData[i] + normData[i + 1] + normData[i + 2] > 0) {
      reducedXArr.push(1);
    } else {
      reducedXArr.push(0);
    }
  }
  return reducedXArr;
}

function normXData(rawData) {
  let normalizedData = [];
  let normalizedXData = [];
  for (let k = 0; k < rawData.length; k++) {
    let num1 = rawData[k][0];
    let num2 = rawData[k][1];
    let num3 = rawData[k][2];
    let num4 = rawData[k][3];
    let normX = [];

    rawData[k].splice(0);

    for (let i = 0; i < 13; i++) {
      if (i !== num1 - 1 && i !== num2 - 1 && i !== num3 - 1 && i !== num4 - 1) {
        rawData[k].push(0);
      } else {
        rawData[k].push(1);
      }
    }
    normalizedData.push(rawData[k]);

    for (let p = 0; p < 3; p++) {
      for (let x = 0; x < normalizedData[0].length; x++) {
        normX.push(normalizedData[0][x]);
      }
    }
    normalizedXData.push(normX);
  }
  return normalizedXData;
}
