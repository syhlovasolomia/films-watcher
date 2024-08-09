'use strict';

const movieDataBase = {
    movies: [
        "Logan",
        "Justice League",
        "La La land",
        "Obsession",
        "Scott Pilgrim vs..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'drama';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDataBase.movies.sort();

movieDataBase.movies.forEach((film, i) => {
    movieList.innerHTML +=
        `<li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
        </li>
        `;
});