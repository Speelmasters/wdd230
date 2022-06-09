function validateForm() {
   let x = document.forms["form2"]["fname"].value;
   if (x == "") {
     alert("Name must be filled out");
     return false;
   }
   return true;
 }

function checkAge() {
   let age = document.forms["form1"]["age"].value;
   if (!isNaN(age) && age > 0 && age < 100) {
      return true;
   }
   alert("Invalid age");
   return false;
}