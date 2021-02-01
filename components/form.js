const formEl = document.querySelector('.contact-form__form');
const btnEl = document.querySelector('.contact-form__form-btn');

function catchForm() {
  formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
      to: this.email.value,
      subject: this.subject.value,
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
  btnEl.addEventListener('click', function () {
    setTimeout(function () {
      location.href = '/index.html';
      btnEl.reset();
    }, 1000);
  });
}

function main() {
  catchForm();
  reloadPage();
}

main();
