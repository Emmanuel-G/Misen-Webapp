const button2 = document.getElementById("predict_btn");
const MPLAYER2 = "http://localhost:5000/predict_mplayer";

button2.addEventListener("click", event => {
  event.preventDefault();
  document.getElementById("predict_btn").style.backgroundColor = "red";
  const formData = new FormData(predict_form);
  const getplayer = formData.get("getplayer");
  const recResult = formData.get("recResult");

  const pred_player = { getplayer, recResult };
  console.log(pred_player);

  fetch(MPLAYER2, {
    method: "POST",
    body: JSON.stringify(pred_player),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("aaa").innerHTML = `${data
        .map(result => {
          return result.a;
        })
        .join("")}`;
      document.getElementById("bbb").innerHTML = `${data
        .map(result => {
          return result.b;
        })
        .join("")}`;
      document.getElementById("ccc").innerHTML = `${data
        .map(result => {
          return result.c;
        })
        .join("")}`;
      document.getElementById("ddd").innerHTML = `${data
        .map(result => {
          return result.d;
        })
        .join("")}`;

      document.getElementById("aaa2").innerHTML = `${data
        .map(result => {
          return result.e;
        })
        .join("")}`;
      document.getElementById("bbb2").innerHTML = `${data
        .map(result => {
          return result.f;
        })
        .join("")}`;
      document.getElementById("ccc2").innerHTML = `${data
        .map(result => {
          return result.g;
        })
        .join("")}`;
      document.getElementById("ddd2").innerHTML = `${data
        .map(result => {
          return result.h;
        })
        .join("")}`;

      document.getElementById("aaa3").innerHTML = `${data
        .map(result => {
          return result.i;
        })
        .join("")}`;
      document.getElementById("bbb3").innerHTML = `${data
        .map(result => {
          return result.j;
        })
        .join("")}`;
      document.getElementById("ccc3").innerHTML = `${data
        .map(result => {
          return result.k;
        })
        .join("")}`;
      document.getElementById("ddd3").innerHTML = `${data
        .map(result => {
          return result.l;
        })
        .join("")}`;

      document.getElementById("lastTrn_date").innerHTML = `${new Date(
        data[12].m
      ).toDateString()}`;
    })
    .then(() => {
      document.getElementById("predict_btn").style.backgroundColor = "#dddddd";
    });
});
