$(document).ready(function () {
  Even.backToTop();
  Even.mobileNavbar();
  Even.toc();
  Even.fancybox();
});

Even.responsiveTable();
Even.flowchart();
Even.sequence();

if (window.hljs) {
  hljs.initHighlighting();
  Even.highlight();
} else {
  Even.chroma();
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("init_toc");

// Get the <span> element that closes the modal
var span = document.getElementById("toc-close");
var body = document.querySelector("body");

// var toc_link = Array.from(document.getElementsByClassName("toc-link"));

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  body.style.overflow = "hidden";
  // openNav();
  var toc_link = Array.from(document.getElementsByClassName("toc-link"));
  // console.log(toc_link)
  toc_link.forEach((ele) => {
    // console.log(ele);
    ele.onclick = (e) => {
      // console.log("hello");
      modal.style.display = "none";
      body.style.overflow = "auto";
      // closeNav();
    };
  });
};

// toc_link.forEach(
//   ele => {
//     ele.onclick = e => {
//       console.log("hello");
//       modal.style.display = "none";
//     }
//   }
// )

// toc_link.onclick = function() {
//   console.log('hello')
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  body.style.overflow = "auto";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }
};

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
