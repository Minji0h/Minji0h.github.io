window.onscroll = function() {menuScrollFunction()};
        
var header = document.getElementById("header");
var sticky = header.offsetTop;

function menuScrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}