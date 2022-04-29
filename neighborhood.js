//1
const randoRest = document.querySelector('#rando-rest')
//2
let restaurants = ['Salt City Burger', 'Chick-Fil-A', 'Itto Sushi', 'McDonalds', 'Subway']

randomRestGen = () => {
let rando = restaurants[Math.floor(Math.random()*restaurants.length)];
alert(rando, restaurants[rando]);
}

//3
randoRest.addEventListener('click', randomRestGen);
