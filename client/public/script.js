const menu_btn1 = document.getElementById("menu_btn1");
const predictMenu = document.getElementById("menu_btn2");
const menu_btn3 = document.getElementById("menu_btn3");

const update_form = document.getElementById("update_form");
const train_form = document.getElementById("train_form");
const predict_form = document.getElementById("predict_form");

const button1 = document.getElementById("update_btn");
const button6 = document.getElementById("train_btn");
const xtrainBtn = document.getElementById("xtrain_btn");
const rollbackBtn = document.getElementById("rollback_btn");

const MPLAYER1 = "http://localhost:5000/update_mplayer";
const MPLAYER5 = "http://localhost:5000/rollback";
const MPLAYER4 = "http://localhost:5000/train_mplayer";
const MPLAYER3 = "http://localhost:5000/load_all";
const MPLAYER6 = "http://localhost:5000/misen_match";
const MPLAYER7 = "http://localhost:5000/current_version";
const MPLAYER8 = "http://localhost:5000/xtrain";

predictMenu.addEventListener("click", () => {
  document.getElementById("mplayer_update").style.display = "none";
  document.getElementById("mplayer_train").style.display = "none";
  document.getElementById("mplayer_predict").style.display = "block";
  menu_btn1.style.backgroundColor = "#dddddd";
  menu_btn3.style.backgroundColor = "#dddddd";
  predictMenu.style.backgroundColor = "#55AD6B";
});

menu_btn1.addEventListener("click", () => {
  document.getElementById("mplayer_update").style.display = "block";
  document.getElementById("mplayer_predict").style.display = "none";
  document.getElementById("mplayer_train").style.display = "none";
  menu_btn1.style.backgroundColor = "#55AD6B";
  menu_btn3.style.backgroundColor = "#dddddd";
  predictMenu.style.backgroundColor = "#dddddd";
});

menu_btn3.addEventListener("click", () => {
  document.getElementById("mplayer_train").style.display = "block";
  document.getElementById("mplayer_update").style.display = "none";
  document.getElementById("mplayer_predict").style.display = "none";
  menu_btn1.style.backgroundColor = "#dddddd";
  menu_btn3.style.backgroundColor = "#55AD6B";
  predictMenu.style.backgroundColor = "#dddddd";
});

fetch(MPLAYER6)
  .then(response => response.json())
  .then(infodata => {
    infodata.sort((a, b) => (a.misenCode > b.misenCode ? 1 : -1));
    document.getElementById("md_players").innerHTML = `${infodata
      .map(misenMatch)
      .join("")}`;
    hideUndefined();
  });

function hideUndefined() {
  let winD = document.getElementsByClassName("misen_predx");
  let winP = document.getElementsByClassName("misen_datax");

  for (let i = 0; i < winD.length; i++) {
    if (winD[i].innerHTML == "undefined") {
      winD[i].style.color = "#dddddd";
    }
  }

  for (let j = 0; j < winP.length; j++) {
    if (winP[j].innerHTML == "undefined") {
      winP[j].style.color = "#dddddd";
    }
  }
}

function misenMatch(misendata) {
  return `
    <div class="misen_slot">
      <div class="misen_title">
        <div class="misen_code">${misendata.misenCode.toUpperCase()}</div>
        <div class="misen_ver">${misendata.misenSeqn}</div>
      </div>
      <div class="misen_label">
        <div class="misen_predy">D</div>
        <div class="misen_datay">A</div>
        <div class="misen_datay">B</div>
        <div class="misen_datay">C</div>
      </div>
      <div class="misen_data1">
        <div class="misen_predx">${misendata[`D${misendata.misenSeqn - 3}`]}</div>
        <div class="misen_datax">${misendata[`A${misendata.misenSeqn - 3}`]}</div>
        <div class="misen_datax">${misendata[`B${misendata.misenSeqn - 3}`]}</div>
        <div class="misen_datax">${misendata[`C${misendata.misenSeqn - 3}`]}</div>
      </div>
      <div class="misen_data1">
        <div class="misen_predx">${misendata[`D${misendata.misenSeqn - 2}`]}</div>
        <div class="misen_datax">${misendata[`A${misendata.misenSeqn - 2}`]}</div>
        <div class="misen_datax">${misendata[`B${misendata.misenSeqn - 2}`]}</div>
        <div class="misen_datax">${misendata[`C${misendata.misenSeqn - 2}`]}</div>
      </div>
      <div class="misen_data1">
        <div class="misen_predx">${misendata[`D${misendata.misenSeqn - 1}`]}</div>
        <div class="misen_datax">${misendata[`A${misendata.misenSeqn - 1}`]}</div>
        <div class="misen_datax">${misendata[`B${misendata.misenSeqn - 1}`]}</div>
        <div class="misen_datax">${misendata[`C${misendata.misenSeqn - 1}`]}</div>
      </div>
      <div class="misen_data1">
        <div class="misen_predx">${misendata[`D${misendata.misenSeqn}`]}</div>
        <div class="misen_datax">${misendata[`A${misendata.misenSeqn}`]}</div>
        <div class="misen_datax">${misendata[`B${misendata.misenSeqn}`]}</div>
        <div class="misen_datax">${misendata[`C${misendata.misenSeqn}`]}</div>
      </div>
      <div class="misen_data1">
        <div class="misen_predx">${misendata[`D${misendata.misenSeqn + 1}`]}</div>
        <div class="misen_datax">${misendata[`A${misendata.misenSeqn + 1}`]}
          <div class=misen_conf" style="height: 2px; width: ${
            misendata.P1_conf
          }%; background-color: ${misendata.P1_conf < 51 ? `yellow` : `red`};"></div>
        </div>
        <div class="misen_datax">${misendata[`B${misendata.misenSeqn + 1}`]}
          <div class=misen_conf" style="height: 2px; width: ${
            misendata.P2_conf
          }%; background-color: ${misendata.P2_conf < 51 ? `yellow` : `red`};"></div>
        </div>
        <div class="misen_datax">${misendata[`C${misendata.misenSeqn + 1}`]}
          <div class=misen_conf" style="height: 2px; width: ${
            misendata.P3_conf
          }%; background-color: ${misendata.P3_conf < 51 ? `yellow` : `red`};"></div>
        </div>
      </div>
    </div>
  `;
}

rollbackBtn.addEventListener("click", event => {
  event.preventDefault();
  document.getElementById("rollback_btn").style.backgroundColor = "red";
  const formData = new FormData(update_form);
  const get_player = formData.get("mplayer");

  const mplayer_update = { get_player };

  fetch(MPLAYER5, {
    method: "POST",
    body: JSON.stringify(mplayer_update),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("update_status").innerHTML = `${data}`;
    })
    .then(() => {
      document.getElementById("rollback_btn").style.backgroundColor = "#dddddd";
    });
});

button6.addEventListener("click", event => {
  event.preventDefault();
  document.getElementById("prev_train").innerHTML = `Training in progress...`;
  button6.style.backgroundColor = "red";
  button6.disabled = true;
  const startTime = Math.floor(Date.now() / 1000);

  function startTimeCounter() {
    let now = Math.floor(Date.now() / 1000);
    let diff = now - startTime;
    let min = Math.floor(diff / 60);
    let sec = Math.floor(diff % 60);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById(
      "train_timer"
    ).innerHTML = `${min}:${sec}<br/><span>TIME LAPSED</span>`;
    if (button6.disabled) {
      setTimeout(startTimeCounter, 500);
    }
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  startTimeCounter();
  const formData = new FormData(train_form);
  const name_player = formData.get("mplayer");
  const mplayer_train = { name_player };

  fetch(MPLAYER4, {
    method: "POST",
    body: JSON.stringify(mplayer_train),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("prev_train").innerHTML = data.message;
    })
    .then(() => {
      button6.style.backgroundColor = "#dddddd";
      button6.disabled = false;
    });
});

button1.addEventListener("click", event => {
  event.preventDefault();
  document.getElementById("update_btn").style.backgroundColor = "red";
  const formData = new FormData(update_form);
  const get_player = formData.get("mplayer");

  const mplayer_update = { get_player };

  fetch(MPLAYER1, {
    method: "POST",
    body: JSON.stringify(mplayer_update),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("update_status").innerHTML = `${data}`;
    })
    .then(() => {
      document.getElementById("update_btn").style.backgroundColor = "#dddddd";
    });
});

xtrainBtn.addEventListener("click", event => {
  event.preventDefault();
  document.getElementById("prev_train").innerHTML = `Training in progress...`;
  xtrainBtn.style.backgroundColor = "red";
  xtrainBtn.disabled = true;
  const startTime = Math.floor(Date.now() / 1000);

  function startTimeCounter() {
    let now = Math.floor(Date.now() / 1000);
    let diff = now - startTime;
    let min = Math.floor(diff / 60);
    let sec = Math.floor(diff % 60);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById(
      "train_timer"
    ).innerHTML = `${min}:${sec}<br/><span>TIME LAPSED</span>`;
    if (xtrainBtn.disabled) {
      setTimeout(startTimeCounter, 500);
    }
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  startTimeCounter();
  const formData = new FormData(train_form);
  const name_player = formData.get("mplayer");
  const mplayer_train = { name_player };

  fetch(MPLAYER8, {
    method: "POST",
    body: JSON.stringify(mplayer_train),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("prev_train").innerHTML = data.message;
    })
    .then(() => {
      xtrainBtn.style.backgroundColor = "#dddddd";
      xtrainBtn.disabled = false;
    });
});
