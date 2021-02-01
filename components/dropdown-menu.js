function dropDownMenu() {
  const iconMenu = document.querySelector('.header__menu-icon');
  const header = document.querySelector('.header__menu-mobile');

  iconMenu.addEventListener('click', function () {
    header.classList.toggle('header__menu-mobile-initial');
  });

  header.addEventListener('click', function () {
    header.classList.toggle('header__menu-mobile-initial');
  });
}

function main() {
  dropDownMenu();
}

main();
