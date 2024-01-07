let homePoints = document.getElementById("pointshome");
let guestPoints = document.getElementById("pointsguest");
let gameSaveHome = document.getElementById("gamesavehome");
let gameSaveGuest = document.getElementById("gamesaveguest");

let homeCount = 0;
let guestCount = 0;
let homeScore = 0;
let guestScore = 0;

function addonehome() {
  homeCount += 1;
  homePoints.textContent = homeCount;
}
function addoneguest() {
  guestCount += 1;
  guestPoints.textContent = guestCount;
}

function addtwohome() {
  homeCount += 2;
  homePoints.textContent = homeCount;
}

function addtwoguest() {
  guestCount += 2;
  guestPoints.textContent = guestCount;
}

function addthreehome() {
  homeCount += 3;
  homePoints.textContent = homeCount;
}

function addthreeguest() {
  guestCount += 3;
  guestPoints.textContent = guestCount;
}

function save() {
  homeScore += homeCount;
  guestScore += guestCount;
  gameSaveHome.textContent = `Home: ${homeScore}`;
  gameSaveGuest.textContent = `Guest: ${guestScore}`;
  homeCount = 0;
  guestCount = 0;
  homePoints.textContent = homeCount;
  guestPoints.textContent = guestCount;
}

function newgame() {
  homeScore = 0;
  guestScore = 0;
  homeCount = 0;
  guestCount = 0;
  homePoints.textContent = homeCount;
  guestPoints.textContent = guestCount;
  gameSaveHome.textContent = `Home: ${homeScore}`;
  gameSaveGuest.textContent = `Guest: ${guestScore}`;
}
