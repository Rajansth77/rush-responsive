// for menu item
function explore() {

  var x = document.getElementById("exploreMenu");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}

function travel() {

  var x = document.getElementById("travelMenu");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}

const first = document.querySelector('.slide');
console.log(first);

const slide = () => {
  const before = document.querySelector('.showing');
  if (before) {
    before
      .classList
      .remove('showing');
    const next = before.nextElementSibling;
    if (next) {
      next
        .classList
        .add('showing')
    } else {
      first
        .classList
        .add('showing');
    }
  } else {
    first
      .classList
      .add('showing');
  }
}
slide();
setInterval(slide, 1500);







// mobile navbar
function mobileExpand() {
  var x = document.getElementById("myMenu");
  x.style.display = x.style.display === "none" ? "block" : "none";

}

//for dropdown item
function mobileExplore() {
  var x = document.getElementById("myExplore");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function mobileTravel() {
  var x = document.getElementById("myTravel");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}