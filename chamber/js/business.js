

var json;
var ready = false;

async function printJSON() {
   const response = await fetch("business.json");
   json = await response.json();
   console.log(json);
   ready = true;
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
//   if (checkbox.checked) {
//     console.log("Checkbox is checked..");
//   } else {
//     console.log("Checkbox is not checked..");
//   }

   if (checkbox.checked) {
      document.getElementsByClassName
      $('#items div').removeClass('list').addClass('grid');
      console.log("Checkbox is checked..");
   }
   else if(!checkbox.checked) {
      $('#items div').removeClass('grid').addClass('list');
      console.log("Checkbox is not checked..");
   }
});