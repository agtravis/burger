'use strict';
const giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=krsGO7xfBLF7bCmtRs7tpOLC0UjdzxcH&q=`;
const burgers = document.getElementsByClassName('burger-li');
for (const burger of burgers) {
  const id = burger.children[1].id;
  const random = Math.floor(Math.random() * 20);
  const word = burger.dataset.word;
  const div = document.getElementById(id);
  $.ajax(giphyURL + word, {
    type: 'GET'
  }).then(function(response) {
    const src = response.data[random].images.fixed_width_small.url;
    const topBun = document.createElement('img');
    topBun.setAttribute('src', 'assets/img/top-bun.png');
    div.appendChild(topBun);
    const newImg = document.createElement('img');
    newImg.setAttribute('src', src);
    div.appendChild(newImg);
    const bottomBun = document.createElement('img');
    bottomBun.setAttribute('src', 'assets/img/bottom-bun.png');
    div.appendChild(bottomBun);
  });
}
