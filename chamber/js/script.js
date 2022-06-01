document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
document.querySelector('#©').textContent = new Date(Date.now()).getFullYear();

const today = new Date(Date.now());

  const monthday = today.getDate()
  const weekday = today.getDay();
  const month = today.getMonth();
  const year = today.getFullYear();
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  const monthlist = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
  document.getElementById('date').textContent = (`${daylist[weekday]}, ${monthday} ${monthlist[month]} ${year}`);
if (weekday > 1) {
  let banner = document.getElementById("BannerID")
  if (banner) {
    banner.style.display = "none";
  }
}

function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = ((s - mins) / 60) % 24;
  var days = Math.floor(((s - mins) / 60) / 24);

  return days + '- Days, ' + hrs + '- Hrs, ' + mins + '- Min'; // + secs + '.' + ms;
}

function daysBetween(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = ((s - mins) / 60) % 24;
  var days = Math.floor(((s - mins) / 60) / 24);

  return days;
}

const visitsDisplay = document.querySelector(".visit");

let lastVisit = Number(window.localStorage.getItem("lastvisit-ls"));

if (lastVisit !== 0) {
  //  testday = new Date("5/29/2022")
	let difference = daysBetween(Date.now() - lastVisit);
  if (difference > 0){
    visitsDisplay.textContent = difference;
  }
  else {
  visitsDisplay.textContent = 0;
  }
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}


// store the new number of visits value
localStorage.setItem("lastvisit-ls", Date.now());
