const homeFormEl = document.querySelector('.home-form__form');
const homeBtnEl = document.querySelector('.home-form__form-btn');

function catchForm() {
  homeFormEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
      to: this.email.value,
      subject: this.fullname.value,
      body: '<h1>Hola</h1>',
    };

    console.log(data);
    fetch('http://aprendeaprogramar.dev/api/utils/email', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  });
}

function reloadPage() {
  homeBtnEl.addEventListener('click', function () {
    setTimeout(function () {
      location.href = '/index.html';
    }, 1000);
  });
}

function main() {
  catchForm();
  reloadPage();
}

main();
