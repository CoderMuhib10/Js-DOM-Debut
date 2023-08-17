// var a= document.querySelector("h1")
// a.innerHTML="Hi I'm Muhib"
// a.style.color="salmon"
// a.style.backgroundColor="blueviolet"

var a = document.querySelector("h1");
var i = 0;
a.addEventListener("click", function () {
  if (i == 0) {
    a.style.color = "yellow";
    i++;
  } else {
    a.style.color = "red";
    i--;
  }
});

var b = document.querySelector(".bulb");
var btn = document.querySelector("button");
var i = 0;
btn.addEventListener("click", function () {
  if (i == 0) {
    b.style.backgroundColor = "white";
    b.style.boxShadow =
      "0 0 5px yellow,0 0 25px yellow,0 0 50px yellow,0 0 100px yellow,0 0 200px yellow";
    btn.innerHTML = "OF";
    i++;
  } else {
    b.style.backgroundColor = "yellow";
    b.style.boxShadow = "none";
    btn.innerHTML = "ON";
    i--;
  }
});
