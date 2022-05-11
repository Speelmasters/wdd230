document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;
document.querySelector('#©').textContent = new Date(Date.now()).getFullYear();

const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();
  const year = today.getFullYear();
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  const monthlist = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];

  document.querySelector('#date').textContent = (`${daylist[day]}, ${day} ${monthlist[month]} ${year}`);