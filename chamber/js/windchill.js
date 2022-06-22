var t = document.getElementById("temp").innerHTML
var s = document.getElementById("wind").innerHTML
var chill = document.getElementById("chill")


if (t <= 10 && s > 4.8){
   var f = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * (t * (s ** 0.16)))
   chill.innerHTML = f
}
else{
   chill.innerHTML = "N/A"
}


const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&units=imperial&appid=7f56b786e320679f5e272d9cac5919bb';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  
function displayResults(weatherData) {
    console.log(weatherData);

    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
    console.log(weatherData);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}
  
apiFetch();