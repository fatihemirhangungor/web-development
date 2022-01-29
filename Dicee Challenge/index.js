var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

var random_number1 = Math.floor(Math.random() * 6) + 1;
var img1_src = "images/dice" + random_number1 + ".png";
image1.setAttribute("src", img1_src);

var random_number2 = Math.floor(Math.random() * 6) + 1;
var img2_src = "images/dice" + random_number2 + ".png";
image2.setAttribute("src", img2_src);

if (random_number1 > random_number2) {
  document.getElementById("result").innerHTML = "🚩 Player 1 wins!";
}
else if (random_number1 === random_number2) {
  document.getElementById("result").innerHTML = "Draw!";
}
else {
  document.getElementById("result").innerHTML = "Player 2 wins! 🚩";
}
