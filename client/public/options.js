const prd_optionsA = document.getElementById("prd_optionA");
const prd_optionsB = document.getElementById("prd_optionB");
const prd_optionsC = document.getElementById("prd_optionC");
const prd_optionsD = document.getElementById("prd_optionD");
const prd_optionsE = document.getElementById("prd_optionE");
const prd_optionsF = document.getElementById("prd_optionF");

const trn_optionsA = document.getElementById("trn_optionA");
const trn_optionsB = document.getElementById("trn_optionB");
const trn_optionsC = document.getElementById("trn_optionC");
const trn_optionsD = document.getElementById("trn_optionD");
const trn_optionsE = document.getElementById("trn_optionE");
const trn_optionsF = document.getElementById("trn_optionF");

const upd_optionsA = document.getElementById("upd_optionA");
const upd_optionsB = document.getElementById("upd_optionB");
const upd_optionsC = document.getElementById("upd_optionC");
const upd_optionsD = document.getElementById("upd_optionD");
const upd_optionsE = document.getElementById("upd_optionE");
const upd_optionsF = document.getElementById("upd_optionF");

let listOptionsA = {
  mallalfa: "MALLALFA",
  m000alfa: "M000ALFA",
  m001alfa: "M001ALFA",
  m002alfa: "M002ALFA",
  m003alfa: "M003ALFA",
  m004alfa: "M004ALFA",
  m005alfa: "M005ALFA",
  m006alfa: "M006ALFA",
  m007alfa: "M007ALFA",
  m008alfa: "M008ALFA",
  m009alfa: "M009ALFA",
  m010alfa: "M010ALFA",
  m011alfa: "M011ALFA",
  m012alfa: "M012ALFA",
  m013alfa: "M013ALFA",
  m014alfa: "M014ALFA",
  m015alfa: "M015ALFA",
  m016alfa: "M016ALFA",
  m017alfa: "M017ALFA",
  m018alfa: "M018ALFA",
  m019alfa: "M019ALFA",
  m020alfa: "M020ALFA",
  m021alfa: "M021ALFA",
  m022alfa: "M022ALFA",
  m023alfa: "M023ALFA",
  m024alfa: "M024ALFA",
  m025alfa: "M025ALFA",
  m026alfa: "M026ALFA",
  m027alfa: "M027ALFA",
  m028alfa: "M028ALFA",
  m029alfa: "M029ALFA",
  m030alfa: "M030ALFA",
  m031alfa: "M031ALFA",
  m032alfa: "M032ALFA",
  m033alfa: "M033ALFA",
  m034alfa: "M034ALFA",
  m035alfa: "M035ALFA",
  m036alfa: "M036ALFA",
  m037alfa: "M037ALFA",
  m038alfa: "M038ALFA",
  m039alfa: "M039ALFA",
  m040alfa: "M040ALFA",
  m041alfa: "M041ALFA",
  m042alfa: "M042ALFA",
  m043alfa: "M043ALFA",
  m044alfa: "M044ALFA",
  m045alfa: "M045ALFA",
  m053alfa: "M053ALFA",
  m058alfa: "M058ALFA",
  m061alfa: "M061ALFA",
  m065alfa: "M065ALFA",
  m090alfa: "M090ALFA",
  m091alfa: "M091ALFA",
  m092alfa: "M092ALFA",
  m093alfa: "M093ALFA",
  m094alfa: "M094ALFA",
  m095alfa: "M095ALFA",
  m096alfa: "M096ALFA",
  m097alfa: "M097ALFA",
  m098alfa: "M098ALFA",
  m099alfa: "M099ALFA",
  m100alfa: "M100ALFA"
};

let listOptionsB = {
  mallbrav: "MALLBRAV",
  m000brav: "M000BRAV",
  m001brav: "M001BRAV",
  m002brav: "M002BRAV",
  m003brav: "M003BRAV",
  m004brav: "M004BRAV",
  m005brav: "M005BRAV",
  m006brav: "M006BRAV",
  m007brav: "M007BRAV",
  m008brav: "M008BRAV",
  m009brav: "M009BRAV",
  m010brav: "M010BRAV",
  m011brav: "M011BRAV",
  m012brav: "M012BRAV",
  m013brav: "M013BRAV",
  m014brav: "M014BRAV",
  m061brav: "M061BRAV"
};

let listOptionsC = {
  mallchar: "MALLCHAR",
  m000char: "M000CHAR",
  m001char: "M001CHAR",
  m002char: "M002CHAR",
  m003char: "M003CHAR",
  m004char: "M004CHAR",
  m005char: "M005CHAR",
  m006char: "M006CHAR",
  m007char: "M007CHAR",
  m008char: "M008CHAR",
  m009char: "M009CHAR",
  m010char: "M010CHAR",
  m011char: "M011CHAR",
  m012char: "M012CHAR",
  m013char: "M013CHAR",
  m014char: "M014CHAR",
  m061char: "M061CHAR"
};

let listOptionsD = {
  malldelt: "MALLDELT",
  m000delt: "M000DELT",
  m001delt: "M001DELT",
  m002delt: "M002DELT",
  m003delt: "M003DELT",
  m004delt: "M004DELT",
  m005delt: "M005DELT",
  m006delt: "M006DELT",
  m007delt: "M007DELT",
  m008delt: "M008DELT",
  m009delt: "M009DELT",
  m010delt: "M010DELT",
  m011delt: "M011DELT",
  m012delt: "M012DELT",
  m013delt: "M013DELT",
  m014delt: "M014DELT",
  m061delt: "M061DELT"
};

let listOptionsE = {
  mallecho: "MALLECHO",
  m000echo: "M000ECHO",
  m001echo: "M001ECHO",
  m002echo: "M002ECHO",
  m003echo: "M003ECHO",
  m004echo: "M004ECHO",
  m005echo: "M005ECHO",
  m006echo: "M006ECHO",
  m007echo: "M007ECHO",
  m008echo: "M008ECHO",
  m009echo: "M009ECHO",
  m010echo: "M010ECHO",
  m011echo: "M011ECHO",
  m012echo: "M012ECHO",
  m013echo: "M013ECHO",
  m014echo: "M014ECHO",
  m061echo: "M061ECHO"
};

let listOptionsF = {
  mallfoxt: "MALLFOXT",
  m000foxt: "M000FOXT",
  m001foxt: "M001FOXT",
  m002foxt: "M002FOXT",
  m003foxt: "M003FOXT",
  m004foxt: "M004FOXT",
  m005foxt: "M005FOXT",
  m006foxt: "M006FOXT",
  m007foxt: "M007FOXT",
  m008foxt: "M008FOXT",
  m009foxt: "M009FOXT",
  m010foxt: "M010FOXT",
  m011foxt: "M011FOXT",
  m012foxt: "M012FOXT",
  m013foxt: "M013FOXT",
  m014foxt: "M014FOXT",
  m061foxt: "M061FOXT"
};

prd_optionsA.style.backgroundColor = "#6b3c55";
prd_optionsA.style.color = "#ffffff";

upd_optionsA.style.backgroundColor = "#6b3c55";
upd_optionsA.style.color = "#ffffff";

trn_optionsA.style.backgroundColor = "#6b3c55";
trn_optionsA.style.color = "#ffffff";

let updateList = document.getElementById("update_list");
for (index in listOptionsA) {
  updateList.options[updateList.options.length] = new Option(listOptionsA[index], index);
}

let trainList = document.getElementById("train_list");
for (index in listOptionsA) {
  trainList.options[trainList.options.length] = new Option(listOptionsA[index], index);
}

let predictList = document.getElementById("predict_list");
for (index in listOptionsA) {
  predictList.options[predictList.options.length] = new Option(
    listOptionsA[index],
    index
  );
}

upd_optionsA.addEventListener("click", () => {
  let myupdlist = updateList.options.length;
  while (myupdlist--) {
    updateList.remove(myupdlist);
  }

  for (index in listOptionsA) {
    updateList.options[updateList.options.length] = new Option(
      listOptionsA[index],
      index
    );
  }

  upd_optionsA.style.backgroundColor = "#6b3c55";
  upd_optionsA.style.color = "#ffffff";
  upd_optionsB.style.backgroundColor = "#dddddd";
  upd_optionsB.style.color = "#000000";
  upd_optionsC.style.backgroundColor = "#dddddd";
  upd_optionsC.style.color = "#000000";
  upd_optionsD.style.backgroundColor = "#dddddd";
  upd_optionsD.style.color = "#000000";
  upd_optionsE.style.backgroundColor = "#dddddd";
  upd_optionsE.style.color = "#000000";
  upd_optionsF.style.backgroundColor = "#dddddd";
  upd_optionsF.style.color = "#000000";
});

upd_optionsB.addEventListener("click", () => {
  let myupdlist = updateList.options.length;
  while (myupdlist--) {
    updateList.remove(myupdlist);
  }

  for (index in listOptionsB) {
    updateList.options[updateList.options.length] = new Option(
      listOptionsB[index],
      index
    );
  }

  upd_optionsA.style.backgroundColor = "#dddddd";
  upd_optionsA.style.color = "#000000";
  upd_optionsB.style.backgroundColor = "#6b3c55";
  upd_optionsB.style.color = "#ffffff";
  upd_optionsC.style.backgroundColor = "#dddddd";
  upd_optionsC.style.color = "#000000";
  upd_optionsD.style.backgroundColor = "#dddddd";
  upd_optionsD.style.color = "#000000";
  upd_optionsE.style.backgroundColor = "#dddddd";
  upd_optionsE.style.color = "#000000";
  upd_optionsF.style.backgroundColor = "#dddddd";
  upd_optionsF.style.color = "#000000";
});

upd_optionsC.addEventListener("click", () => {
  let myupdlist = updateList.options.length;
  while (myupdlist--) {
    updateList.remove(myupdlist);
  }

  for (index in listOptionsC) {
    updateList.options[updateList.options.length] = new Option(
      listOptionsC[index],
      index
    );
  }

  upd_optionsA.style.backgroundColor = "#dddddd";
  upd_optionsA.style.color = "#000000";
  upd_optionsB.style.backgroundColor = "#dddddd";
  upd_optionsB.style.color = "#000000";
  upd_optionsC.style.backgroundColor = "#6b3c55";
  upd_optionsC.style.color = "#ffffff";
  upd_optionsD.style.backgroundColor = "#dddddd";
  upd_optionsD.style.color = "#000000";
  upd_optionsE.style.backgroundColor = "#dddddd";
  upd_optionsE.style.color = "#000000";
  upd_optionsF.style.backgroundColor = "#dddddd";
  upd_optionsF.style.color = "#000000";
});

upd_optionsD.addEventListener("click", () => {
  let myupdlist = updateList.options.length;
  while (myupdlist--) {
    updateList.remove(myupdlist);
  }

  for (index in listOptionsD) {
    updateList.options[updateList.options.length] = new Option(
      listOptionsD[index],
      index
    );
  }

  upd_optionsA.style.backgroundColor = "#dddddd";
  upd_optionsA.style.color = "#000000";
  upd_optionsB.style.backgroundColor = "#dddddd";
  upd_optionsB.style.color = "#000000";
  upd_optionsC.style.backgroundColor = "#dddddd";
  upd_optionsC.style.color = "#000000";
  upd_optionsD.style.backgroundColor = "#6b3c55";
  upd_optionsD.style.color = "#ffffff";
  upd_optionsE.style.backgroundColor = "#dddddd";
  upd_optionsE.style.color = "#000000";
  upd_optionsF.style.backgroundColor = "#dddddd";
  upd_optionsF.style.color = "#000000";
});

upd_optionsE.addEventListener("click", () => {
  let myupdlist = updateList.options.length;
  while (myupdlist--) {
    updateList.remove(myupdlist);
  }

  for (index in listOptionsE) {
    updateList.options[updateList.options.length] = new Option(
      listOptionsE[index],
      index
    );
  }

  upd_optionsA.style.backgroundColor = "#dddddd";
  upd_optionsA.style.color = "#000000";
  upd_optionsB.style.backgroundColor = "#dddddd";
  upd_optionsB.style.color = "#000000";
  upd_optionsC.style.backgroundColor = "#dddddd";
  upd_optionsC.style.color = "#000000";
  upd_optionsD.style.backgroundColor = "#dddddd";
  upd_optionsD.style.color = "#000000";
  upd_optionsE.style.backgroundColor = "#6b3c55";
  upd_optionsE.style.color = "#ffffff";
  upd_optionsF.style.backgroundColor = "#dddddd";
  upd_optionsF.style.color = "#000000";
});

upd_optionsF.addEventListener("click", () => {
  let myupdlist = updateList.options.length;
  while (myupdlist--) {
    updateList.remove(myupdlist);
  }

  for (index in listOptionsF) {
    updateList.options[updateList.options.length] = new Option(
      listOptionsF[index],
      index
    );
  }

  upd_optionsA.style.backgroundColor = "#dddddd";
  upd_optionsA.style.color = "#000000";
  upd_optionsB.style.backgroundColor = "#dddddd";
  upd_optionsB.style.color = "#000000";
  upd_optionsC.style.backgroundColor = "#dddddd";
  upd_optionsC.style.color = "#000000";
  upd_optionsD.style.backgroundColor = "#dddddd";
  upd_optionsD.style.color = "#000000";
  upd_optionsE.style.backgroundColor = "#dddddd";
  upd_optionsE.style.color = "#000000";
  upd_optionsF.style.backgroundColor = "#6b3c55";
  upd_optionsF.style.color = "#ffffff";
});

prd_optionsA.addEventListener("click", () => {
  let mylist = predictList.options.length;
  while (mylist--) {
    predictList.remove(mylist);
  }

  for (index in listOptionsA) {
    predictList.options[predictList.options.length] = new Option(
      listOptionsA[index],
      index
    );
  }

  prd_optionsA.style.backgroundColor = "#6b3c55";
  prd_optionsA.style.color = "#ffffff";
  prd_optionsB.style.backgroundColor = "#dddddd";
  prd_optionsB.style.color = "#000000";
  prd_optionsC.style.backgroundColor = "#dddddd";
  prd_optionsC.style.color = "#000000";
  prd_optionsD.style.backgroundColor = "#dddddd";
  prd_optionsD.style.color = "#000000";
  prd_optionsE.style.backgroundColor = "#dddddd";
  prd_optionsE.style.color = "#000000";
  prd_optionsF.style.backgroundColor = "#dddddd";
  prd_optionsF.style.color = "#000000";
});

prd_optionsB.addEventListener("click", () => {
  let mylist = predictList.options.length;
  while (mylist--) {
    predictList.remove(mylist);
  }

  for (index in listOptionsB) {
    predictList.options[predictList.options.length] = new Option(
      listOptionsB[index],
      index
    );
  }

  prd_optionsA.style.backgroundColor = "#dddddd";
  prd_optionsA.style.color = "#000000";
  prd_optionsB.style.backgroundColor = "#6b3c55";
  prd_optionsB.style.color = "#ffffff";
  prd_optionsC.style.backgroundColor = "#dddddd";
  prd_optionsC.style.color = "#000000";
  prd_optionsD.style.backgroundColor = "#dddddd";
  prd_optionsD.style.color = "#000000";
  prd_optionsE.style.backgroundColor = "#dddddd";
  prd_optionsE.style.color = "#000000";
  prd_optionsF.style.backgroundColor = "#dddddd";
  prd_optionsF.style.color = "#000000";
});

prd_optionsC.addEventListener("click", () => {
  let mylist = predictList.options.length;
  while (mylist--) {
    predictList.remove(mylist);
  }

  for (index in listOptionsC) {
    predictList.options[predictList.options.length] = new Option(
      listOptionsC[index],
      index
    );
  }

  prd_optionsA.style.backgroundColor = "#dddddd";
  prd_optionsA.style.color = "#000000";
  prd_optionsB.style.backgroundColor = "#dddddd";
  prd_optionsB.style.color = "#000000";
  prd_optionsC.style.backgroundColor = "#6b3c55";
  prd_optionsC.style.color = "#ffffff";
  prd_optionsD.style.backgroundColor = "#dddddd";
  prd_optionsD.style.color = "#000000";
  prd_optionsE.style.backgroundColor = "#dddddd";
  prd_optionsE.style.color = "#000000";
  prd_optionsF.style.backgroundColor = "#dddddd";
  prd_optionsF.style.color = "#000000";
});

prd_optionsD.addEventListener("click", () => {
  let mylist = predictList.options.length;
  while (mylist--) {
    predictList.remove(mylist);
  }

  for (index in listOptionsD) {
    predictList.options[predictList.options.length] = new Option(
      listOptionsD[index],
      index
    );
  }

  prd_optionsA.style.backgroundColor = "#dddddd";
  prd_optionsA.style.color = "#000000";
  prd_optionsB.style.backgroundColor = "#dddddd";
  prd_optionsB.style.color = "#000000";
  prd_optionsC.style.backgroundColor = "#dddddd";
  prd_optionsC.style.color = "#000000";
  prd_optionsD.style.backgroundColor = "#6b3c55";
  prd_optionsD.style.color = "#ffffff";
  prd_optionsE.style.backgroundColor = "#dddddd";
  prd_optionsE.style.color = "#000000";
  prd_optionsF.style.backgroundColor = "#dddddd";
  prd_optionsF.style.color = "#000000";
});

prd_optionsE.addEventListener("click", () => {
  let mylist = predictList.options.length;
  while (mylist--) {
    predictList.remove(mylist);
  }

  for (index in listOptionsE) {
    predictList.options[predictList.options.length] = new Option(
      listOptionsE[index],
      index
    );
  }

  prd_optionsA.style.backgroundColor = "#dddddd";
  prd_optionsA.style.color = "#000000";
  prd_optionsB.style.backgroundColor = "#dddddd";
  prd_optionsB.style.color = "#000000";
  prd_optionsC.style.backgroundColor = "#dddddd";
  prd_optionsC.style.color = "#000000";
  prd_optionsD.style.backgroundColor = "#dddddd";
  prd_optionsD.style.color = "#000000";
  prd_optionsE.style.backgroundColor = "#6b3c55";
  prd_optionsE.style.color = "#ffffff";
  prd_optionsF.style.backgroundColor = "#dddddd";
  prd_optionsF.style.color = "#000000";
});

prd_optionsF.addEventListener("click", () => {
  let mylist = predictList.options.length;
  while (mylist--) {
    predictList.remove(mylist);
  }

  for (index in listOptionsF) {
    predictList.options[predictList.options.length] = new Option(
      listOptionsF[index],
      index
    );
  }

  prd_optionsA.style.backgroundColor = "#dddddd";
  prd_optionsA.style.color = "#000000";
  prd_optionsB.style.backgroundColor = "#dddddd";
  prd_optionsB.style.color = "#000000";
  prd_optionsC.style.backgroundColor = "#dddddd";
  prd_optionsC.style.color = "#000000";
  prd_optionsD.style.backgroundColor = "#dddddd";
  prd_optionsD.style.color = "#000000";
  prd_optionsE.style.backgroundColor = "#dddddd";
  prd_optionsE.style.color = "#000000";
  prd_optionsF.style.backgroundColor = "#6b3c55";
  prd_optionsF.style.color = "#ffffff";
});

trn_optionsA.addEventListener("click", () => {
  let mytrnlist = trainList.options.length;
  while (mytrnlist--) {
    trainList.remove(mytrnlist);
  }

  for (index in listOptionsA) {
    trainList.options[trainList.options.length] = new Option(listOptionsA[index], index);
  }

  trn_optionsA.style.backgroundColor = "#6b3c55";
  trn_optionsA.style.color = "#ffffff";
  trn_optionsB.style.backgroundColor = "#dddddd";
  trn_optionsB.style.color = "#000000";
  trn_optionsC.style.backgroundColor = "#dddddd";
  trn_optionsC.style.color = "#000000";
  trn_optionsD.style.backgroundColor = "#dddddd";
  trn_optionsD.style.color = "#000000";
  trn_optionsE.style.backgroundColor = "#dddddd";
  trn_optionsE.style.color = "#000000";
  trn_optionsF.style.backgroundColor = "#dddddd";
  trn_optionsF.style.color = "#000000";
});

trn_optionsB.addEventListener("click", () => {
  let mytrnlist = trainList.options.length;
  while (mytrnlist--) {
    trainList.remove(mytrnlist);
  }

  for (index in listOptionsB) {
    trainList.options[trainList.options.length] = new Option(listOptionsB[index], index);
  }

  trn_optionsA.style.backgroundColor = "#dddddd";
  trn_optionsA.style.color = "#000000";
  trn_optionsB.style.backgroundColor = "#6b3c55";
  trn_optionsB.style.color = "#ffffff";
  trn_optionsC.style.backgroundColor = "#dddddd";
  trn_optionsC.style.color = "#000000";
  trn_optionsD.style.backgroundColor = "#dddddd";
  trn_optionsD.style.color = "#000000";
  trn_optionsE.style.backgroundColor = "#dddddd";
  trn_optionsE.style.color = "#000000";
  trn_optionsF.style.backgroundColor = "#dddddd";
  trn_optionsF.style.color = "#000000";
});

trn_optionsC.addEventListener("click", () => {
  let mytrnlist = trainList.options.length;
  while (mytrnlist--) {
    trainList.remove(mytrnlist);
  }

  for (index in listOptionsC) {
    trainList.options[trainList.options.length] = new Option(listOptionsC[index], index);
  }
  trn_optionsA.style.backgroundColor = "#dddddd";
  trn_optionsA.style.color = "#000000";
  trn_optionsB.style.backgroundColor = "#dddddd";
  trn_optionsB.style.color = "#000000";
  trn_optionsC.style.backgroundColor = "#6b3c55";
  trn_optionsC.style.color = "#ffffff";
  trn_optionsD.style.backgroundColor = "#dddddd";
  trn_optionsD.style.color = "#000000";
  trn_optionsE.style.backgroundColor = "#dddddd";
  trn_optionsE.style.color = "#000000";
  trn_optionsF.style.backgroundColor = "#dddddd";
  trn_optionsF.style.color = "#000000";
});

trn_optionsD.addEventListener("click", () => {
  let mytrnlist = trainList.options.length;
  while (mytrnlist--) {
    trainList.remove(mytrnlist);
  }

  for (index in listOptionsD) {
    trainList.options[trainList.options.length] = new Option(listOptionsD[index], index);
  }

  trn_optionsA.style.backgroundColor = "#dddddd";
  trn_optionsA.style.color = "#000000";
  trn_optionsB.style.backgroundColor = "#dddddd";
  trn_optionsB.style.color = "#000000";
  trn_optionsC.style.backgroundColor = "#dddddd";
  trn_optionsC.style.color = "#000000";
  trn_optionsD.style.backgroundColor = "#6b3c55";
  trn_optionsD.style.color = "#ffffff";
  trn_optionsE.style.backgroundColor = "#dddddd";
  trn_optionsE.style.color = "#000000";
  trn_optionsF.style.backgroundColor = "#dddddd";
  trn_optionsF.style.color = "#000000";
});

trn_optionsE.addEventListener("click", () => {
  let mytrnlist = trainList.options.length;
  while (mytrnlist--) {
    trainList.remove(mytrnlist);
  }

  for (index in listOptionsE) {
    trainList.options[trainList.options.length] = new Option(listOptionsE[index], index);
  }

  trn_optionsA.style.backgroundColor = "#dddddd";
  trn_optionsA.style.color = "#000000";
  trn_optionsB.style.backgroundColor = "#dddddd";
  trn_optionsB.style.color = "#000000";
  trn_optionsC.style.backgroundColor = "#dddddd";
  trn_optionsC.style.color = "#000000";
  trn_optionsD.style.backgroundColor = "#dddddd";
  trn_optionsD.style.color = "#000000";
  trn_optionsE.style.backgroundColor = "#6b3c55";
  trn_optionsE.style.color = "#ffffff";
  trn_optionsF.style.backgroundColor = "#dddddd";
  trn_optionsF.style.color = "#000000";
});

trn_optionsF.addEventListener("click", () => {
  let mytrnlist = trainList.options.length;
  while (mytrnlist--) {
    trainList.remove(mytrnlist);
  }

  for (index in listOptionsF) {
    trainList.options[trainList.options.length] = new Option(listOptionsF[index], index);
  }

  trn_optionsA.style.backgroundColor = "#dddddd";
  trn_optionsA.style.color = "#000000";
  trn_optionsB.style.backgroundColor = "#dddddd";
  trn_optionsB.style.color = "#000000";
  trn_optionsC.style.backgroundColor = "#dddddd";
  trn_optionsC.style.color = "#000000";
  trn_optionsD.style.backgroundColor = "#dddddd";
  trn_optionsD.style.color = "#000000";
  trn_optionsE.style.backgroundColor = "#dddddd";
  trn_optionsE.style.color = "#000000";
  trn_optionsF.style.backgroundColor = "#6b3c55";
  trn_optionsF.style.color = "#ffffff";
});
