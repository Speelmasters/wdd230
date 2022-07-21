const t = document.getElementById("temp");
const s = document.getElementById("wind");
const chill = document.getElementById("chill");
const img = document.querySelector("#weatherimg");
const weatherDesc = document.getElementById("weatherDesc");

if (!weatherDesc) {
   console.log("works");
}

if (t <= 10 && s > 4.8) {
   var f = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * (t * (s ** 0.16)))
   chill.innerHTML = f
}
else {
   chill.innerHTML = "N/A"
}


const url = 'https://api.openweathermap.org/data/2.5/forecast?zip=83814&units=imperial&appid=7f56b786e320679f5e272d9cac5919bb';

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

   t.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
   s.innerHTML = `<strong>${weatherData.list[0].wind.speed.toFixed(0)}</strong>`;

   var temp = weatherData.list[0].main.temp
   var speed = weatherData.list[0].wind.speed

   if (temp<= 10 && speed > 4.8) {
      var f = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * (temp * (speed ** 0.16)))
      chill.innerHTML = f
   }
   else {
      chill.innerHTML = "N/A"
   }

   console.log(weatherData);
   const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
   const desc = weatherData.list[0].weather[0].description;
   console.log(desc);
   img.setAttribute('src', iconsrc);
   img.setAttribute('alt', desc);
   weatherDesc.textContent = desc;
}

apiFetch();