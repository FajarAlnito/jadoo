const header = document.querySelector('header').classList;

function shrinkNavbar () {
  header.add('bg-white');
  header.add('shadow-xl');
  header.remove('bg-transparent');
}

function unshrinkNavbar () {
  header.remove('bg-white');
  header.remove('shadow-xl');
  header.add('bg-transparent');
}

function handleNavbar () {
  if (window.pageYOffset > 50) {
    shrinkNavbar();
  } else {
    unshrinkNavbar();
  }
}

handleNavbar();
window.onscroll = handleNavbar;
