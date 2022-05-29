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