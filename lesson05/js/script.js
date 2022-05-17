

const button = document.querySelector('button');
const input = document.getElementById('favchap');
const list = document.querySelector('ul');


// if(list == null){
//    console.log("null")
// }
// else {
//    console.log("not null")
// }


button.addEventListener('click', () => {
   const value = input.value;
   if(value.length > 0){
      const listitem = document.createElement('li');
      const listBtn = document.createElement('button');

      
      listitem.textContent = value;
      listBtn.textContent = "❌";
      listitem.append(listBtn);

      list.append(listitem);
      input.value = "";

      listBtn.addEventListener('click', () => {
         listBtn.parentElement
         list.removeChild(listBtn.parentElement);
         input.focus();
       });

      input.focus();
   }
   else {
      console.log("no text")
   }

});
