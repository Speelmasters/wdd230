var json;

async function printJSON() {
   const response = await fetch("temples.json");
   json = await response.json();
   console.log(json);

   for (var i = 0; i < json.length; i++) {
      createItems(json[i]);
   }
}

printJSON();




function createItems(item) {
   let card = document.createElement('div');
   let h2 = document.createElement('h2');
   let desc = document.createElement('div');
   let address = document.createElement('p');
   let phone = document.createElement('p');
   let p1 = document.createElement('p');
   let p2 = document.createElement('p');
   let p3 = document.createElement('p');

   p1.textContent = "Services"
   p2.textContent = "History"
   p3.textContent = "Temple Closure"

   let services = document.createElement('ul');
   for (let i = 0; i < item.services.length; i++){
      let node = document.createTextNode(item.services[i])
      let listitem = document.createElement('li')
      listitem.appendChild(node)
      services.appendChild(listitem);
   }

   let history = document.createElement('ul');
   for (let i = 0; i < item.services.length; i++){
      let node = document.createTextNode(item.history[i])
      let listitem = document.createElement('li')
      listitem.appendChild(node)
      history.appendChild(listitem);
   }

   let templeclosure = document.createElement('ul');
   for (let i = 0; i < item.services.length; i++){
      let node = document.createTextNode(item.templeclosure[i])
      let listitem = document.createElement('li')
      listitem.appendChild(node)
      templeclosure.appendChild(listitem);
   }

   let button = document.createElement('button');
   let temple = document.createElement('img');

   card.classList.add("card")
   h2.classList.add("card-title")
   desc.classList.add("card-desc")


   h2.textContent = item.name;

   address.textContent = item.address;
   phone.textContent = item.phone;
   // p2.textContent = item.phone;
   // p3.textContent = item.url;
   // p4.textContent = item.level;
   var liked = window.localStorage.getItem(item.name)
   if (liked == null || liked == "false"){
      button.textContent = "Like"
      localStorage.setItem(item.name, "false");
   }
   else {
      button.textContent = "Dislike"
   }

   temple.setAttribute('src', item.image);
   temple.setAttribute('alt', 'Image of ' + item.name + " temple");
   temple.setAttribute('loading', 'lazy');

   // Add/append the section(card) with the h2 element

   card.appendChild(h2);
   card.appendChild(temple);
   card.appendChild(desc);

   desc.appendChild(button);
   desc.appendChild(address);
   desc.appendChild(phone);
   desc.appendChild(p1);
   desc.appendChild(services);
   desc.appendChild(p2);
   desc.appendChild(history);
   desc.appendChild(p3);
   desc.appendChild(templeclosure);

   // Add/append the existing HTML div with the cards class with the section(card)
   document.querySelector('div.cards').appendChild(card);

   // var checkbox = document.getElementById("slidercheck");

   button.addEventListener('click', e => {

      if (window.localStorage.getItem(item.name) == "true") {
         button.textContent = "Like"
         localStorage.setItem(item.name, "false");
         console.log("true")
      }
      else {
         button.textContent = "Dislike"
         localStorage.setItem(item.name, "true");
         console.log("false")
      }
      console.log(item.name)
   });
}


function initMap() {
   // The location of Uluru
   const uluru = { lat: 38.983466, lng: -77.096854 };
   // The map, centered at Uluru
   const map = new google.maps.Map(document.getElementById("map"), {
     zoom: 4,
     center: uluru,
   });
   // The marker, positioned at Uluru
   const marker = new google.maps.Marker({
     position: uluru,
     map: map,
   });
 }
 
 window.initMap = initMap;