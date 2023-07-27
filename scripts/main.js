let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/lty_v3.png") {
    myImage.setAttribute("src", "images/lty_ace.jpg");
  } else {
    myImage.setAttribute("src", "images/lty_v3.png");
  }
};
