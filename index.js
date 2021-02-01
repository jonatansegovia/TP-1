const routeImgCdn =
  'https://cdn.contentful.com/spaces/yxaiy4lwwzjs/environments/master/entries/6g5DexORNuzf0JkJFjpJdF?access_token=_pwnw9LcmCQbN_pK3voIPHV9AVbjikSDq3DQHuz-6JE';

const putContent = (content) => {
  const heroElTitle = document.querySelector('.hero__title');
  heroElTitle.innerText = content;
};

function obtainContent() {
  fetch(routeImgCdn)
    .then(function (r) {
      return r.json();
    })
    .then(function (d) {
      putContent(d.fields.title);
    });
}

function main() {
  obtainContent();
  putContent();
}

main();
