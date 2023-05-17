var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector("nav");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}