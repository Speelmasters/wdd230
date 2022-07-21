
const items = document.querySelector('.items div');

var json;

async function printJSON() {
   const response = await fetch("business.json");
   json = await response.json();
   console.log(json);

   for (var i = 0; i < json.length; i++) {
      createItems(json[i]);
   }
}

printJSON();

function removeItems() {
   var e = document.getElementsByClassName("items");

   //e.firstElementChild can be used.
   var child = e.lastElementChild;
   while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
   }
}


var checkbox = document.getElementById("slidercheck");

checkbox.addEventListener('change', e => {

   if (checkbox.checked) {
      items.classList.remove("list");
      items.classList.add("grid");      
      console.log("Checkbox is checked..");
   }
   else if(!checkbox.checked) {
      items.classList.remove("grid");
      items.classList.add("list");
      console.log("Checkbox is not checked..");
   }
});


function createItems(item) {
   let card = document.createElement('section');
   let h2 = document.createElement('h2');
   let p1 = document.createElement('p');
   let p2 = document.createElement('p');
   let p3 = document.createElement('p');
   let p4 = document.createElement('p');
   let logo = document.createElement('img');

   p1.classList.add("address")
   p2.classList.add("phone")
   
   h2.textContent = item.name;

   p1.textContent = item.address;
   p2.textContent = item.phone;
   p3.textContent = item.url;
   p4.textContent = item.level;

   logo.setAttribute('src', item.image);
   logo.setAttribute('alt', 'Logo of ' + item.name);
   logo.setAttribute('loading', 'lazy');
 
   // Add/append the section(card) with the h2 element
   card.appendChild(logo);
   card.appendChild(h2);
   card.appendChild(p1);
   card.appendChild(p2);
   card.appendChild(p3);
   card.appendChild(p4);
 
   // Add/append the existing HTML div with the cards class with the section(card)
   document.querySelector('div.list').appendChild(card);
}