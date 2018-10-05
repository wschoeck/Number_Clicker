let plussieben = document.getElementById("plussieben");
let plusneun = document.getElementById("plusneun");
let pluszwei = document.getElementById("pluszwei");
let plus = document.getElementById("plus");
let counter = document.getElementById("counter");

let points = 0;
let ergebnis = 18;
let clicker = function(e) {

points = points + 7;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
  }

  counter.innerHTML = points;
}

let clickerneun = function(e) {

points = points + 9;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
  }

  counter.innerHTML = points;
}

let clickerzwei = function(e) {

points = points + 2;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");
  }

  counter.innerHTML = points;
}

let clickerplus = function(e) {

points = points + 0;

  if(points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");
    // neues level starten
    ergebnis = 16;
    points = 0;
  }

  counter.innerHTML = points;
}


plussieben.addEventListener("click", clicker);
plusneun.addEventListener("click", clickerneun);
pluszwei.addEventListener("click", clickerzwei);
plus.addEventListener("click", clickerplus);
