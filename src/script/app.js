const toggle = document.querySelector('#toggle');
const navbarMobile = document.querySelector('.navbar-mobile');
const blur = document.querySelector('.blur');

toggle.addEventListener('click', function (e) {
  toggle.classList.toggle('active');

  if (toggle.className == '') {
    toggle.setAttribute('src', '/src/images/icon-close.svg');
    navbarMobile.classList.add('slidedown');
    navbarMobile.classList.remove('slideup');

    blur.classList.add('fadein');
    blur.classList.remove('fadeout');

    document.body.style.overflowY = 'hidden';

  } else {
    toggle.setAttribute('src', '/src/images/icon-hamburger.svg');
    navbarMobile.classList.remove('slidedown');
    navbarMobile.classList.add('slideup');

    blur.classList.add('fadeout');
    blur.classList.remove('fadein');

    document.body.style.overflowY = 'auto';
  }
})