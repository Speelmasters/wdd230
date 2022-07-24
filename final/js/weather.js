
const days = document.querySelector('div.days')
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

function createCard(weather) {
   let card = document.createElement('div');
   let desc = document.createElement('h2');
   let high = document.createElement('h3');
   let weatherimg = document.createElement('img');

   card.classList.add("weathercard")

   var day = new Date(weather.dt_txt)
   desc.textContent = day.getDate()

   high.textContent = "Temp: " + weather.main.temp_max

   const iconsrc = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
   weatherimg.setAttribute('src', iconsrc);

   card.appendChild(desc)
   card.appendChild(high)
   card.appendChild(weatherimg)

   days.appendChild(card)

   
}


function displayResults(weatherData) {
   console.log(weatherData);

   // t.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
   // s.innerHTML = `<strong>${weatherData.list[0].wind.speed.toFixed(0)}</strong>`;

   var temp = weatherData.list[0].main.temp
   var speed = weatherData.list[0].wind.speed

   // if (temp<= 10 && speed > 4.8) {
   //    var f = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * (temp * (speed ** 0.16)))
   //    chill.innerHTML = f
   // }
   // else {
   //    chill.innerHTML = "N/A"
   // }

   const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
   const desc = weatherData.list[0].weather[0].description;
   
   for(var i = 4;i < 24;i+=8){
      createCard(weatherData.list[i])
   }


   
   // console.log(desc);
   // img.setAttribute('src', iconsrc);
   // img.setAttribute('alt', desc);
   // weatherDesc.textContent = desc;
}

apiFetch()