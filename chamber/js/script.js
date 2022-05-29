document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;
document.querySelector('#©').textContent = new Date(Date.now()).getFullYear();

const today = new Date(Date.now());

  const monthday = today.getDate()
  const weekday = today.getDay();
  const month = today.getMonth();
  const year = today.getFullYear();
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  const monthlist = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
  document.getElementById('date').textContent = (`${daylist[weekday]}, ${monthday} ${monthlist[month]} ${year}`);
if (day > 1) {
  document.getElementById("BannerID").style.display = "none"
}