const footer_template = `
<div class="footer__container-text-1">
  <h2 class="footer__logo-name">
    <i class="fas fa-copy footer__logo-icon"></i>PORTFOLIO
  </h2>
  <h3 class="footer__mail">hireme@portfolio.com</h3>
  <p>221B Baker Street, Post office Box 353</p>
  <p>Park Road, USA - 215431</p>
</div>
<div class="footer__container-data">
  <div class="footer__container-text-2">
    <p>
      Copyright &copy;2020 All Rights Reserved | This template is made with
      <i class="fas fa-heart footer__container-text-2-ico"></i> by
      <a class="footer__container-text-2-link" href="https://colorlib.com"
        >Colorlib</a
      >
    </p>
  </div>

  <div class="footer__container-text-3">
    <p>Stay Connected</p>
    <a href="https://twitter.com" target="_blank"
      ><i class="fab fa-twitter"></i
    ></a>
    <a href="https://facebook.com" target="_blank"
      ><i class="fab fa-facebook-f"></i
    ></a>
    <a href="https://google.com" target="_blank"
      ><i class="fas fa-globe"></i
    ></a>
    <a href="https://instagram.com" target="_blank"
      ><i class="fab fa-instagram"></i
    ></a>
    <i class="fas fa-circle footer__container-text-3-circle"></i>
    <a href="#"><i class="fas fa-reply footer__container-text-3-arrow--white"></i></a>
  </div>
</div>

`;

function putFooter(selector) {
  const container = document.querySelector(selector);
  if (container) {
    container.innerHTML = footer_template;
  } else {
    console.warn('Esa clase no existe aún en la página');
  }
}

putFooter('.footer');
