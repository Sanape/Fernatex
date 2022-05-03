// When the user scrolls the page, execute showHeader
window.onscroll = function () {
  showHeader();
};

// Get the header
var header = document.getElementById('header');
var headertop = document.getElementById('headerTop');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function showHeader() {
  if (window.pageYOffset > sticky + 200) {
    header.classList.add('sticky');
    headertop.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
    headertop.classList.remove('sticky');
  }
}

var drawer = document.getElementById('drawer');
var greyArea = document.getElementById('greyArea');

function showDrawer() {
  if (window.screen.width < 991) {
    drawer.classList.add('visible');
    greyArea.classList.add('display');
  }
}

function closeDrawer() {
  drawer.classList.remove('visible');
  greyArea.classList.remove('display');
}
