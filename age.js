let userinput = document.getElementById("date");
let result = document.getElementById("result");
let date = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0];

function calculateage() {
  let birthdate = new Date(userinput.value);

  let d1 = birthdate.getDate();
  let m1 = birthdate.getMonth() + 1;
  let y1 = birthdate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  if (isNaN(birthdate.getTime())) {
    result.innerHTML = "Invalid Date";
  }
  else if(y1 > y2 || (y1 === y2 && m1 > m2) || (y1 === y2 && m1 === m2 && d1 > d2)){
    result.innerHTML = "Invalid Date";
  }
  else if(d1 === d2 && m1 === m2 && y1 === y2){
    result.innerHTML="Happy birthday!";
  }
  else {
    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getdaysinmonths(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years,<span>${m3}</span> months and <span>${d3}</span> days old`;
  }
}
function getdaysinmonths(month, year) {
  return new Date(year, month, 0).getDate();
}
if (userinput.value != null) {
  userinput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      calculateage();
    }
  });
}
