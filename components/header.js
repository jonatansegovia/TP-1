const header_template = `
<h2 class="header__logo-name">
  <i class="fas fa-copy header__logo-icon"></i>PORTFOLIO
</h2>
<i class="fas fa-bars header__menu-icon"></i>

<nav class="header-desktop__nav">
        <a href="/index.html">Home</a>
        <a href="/about.html">About</a>
        <a href="/services.html">Services</a>
        <a href="/portfolio.html">Portfolio</a>
        <a href="/page.html">Page</a>
        <a href="/contact.html">Contact</a>        
</nav>
<a href="/free-consultant.html" class="header-desktop__btn">Get Free Consultant</a>


<!-- Dropdown menu for Mobile -->
<nav class="header__menu-mobile">
  <ul>
    <li>
      <a class="header__menu-mobile-link" href="/index.html">Home</a>
    </li>
    <li>
      <a class="header__menu-mobile-link" href="/about.html">About</a>
    </li>
    <li>
      <a class="header__menu-mobile-link" href="/services.html"
        >Services</a
      >
    </li>
    <li>
      <a class="header__menu-mobile-link" href="/portfolio.html"
        >Portfolio</a
      >
    </li>
    <li class="header__menu-mobile-li">
      <a class="header__menu-mobile-link" href="/page.html">Page</a>
      <i class="fas fa-plus header__menu-mobile-link-ico"></i>
    </li>
    <li>
      <a class="header__menu-mobile-link" href="/contact.html">Contact</a>
    </li>
  </ul>
</nav>
`;

function putHeader(selector) {
  const container = document.querySelector(selector);
  if (container) {
    container.innerHTML = header_template;
  } else {
    console.warn('Esa clase no existe aún en la página');
  }
}

putHeader('.header');
