const counter = document.querySelector('.counter-link');
let count = 3;

function backToHome() {
  setInterval(() => {
    counter.innerText = 'HOME IN' + ' ' + count;
    count--;
  }, 1000);
}

function main() {
  backToHome();
}

main();
