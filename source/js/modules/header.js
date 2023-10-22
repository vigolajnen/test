const menu = document.querySelector('.menu');
const menuBtn = menu.querySelector('#menu-button span');
const menuList = menu.querySelector('#menu-list');

function toggleNavCity() {
  menuList.classList.toggle('hidden');
}

if (window.location.pathname.includes('spb')) {
  menuBtn.innerText = 'Санкт-Петербург';
} else {
  menuBtn.innerText = 'Самара';
}


window.onscroll = function() {onHeaderSticky()};

const header = document.querySelector("header");
const sticky = header.offsetTop;

function onHeaderSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
