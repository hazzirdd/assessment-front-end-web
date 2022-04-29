//1
let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

//2
favColor = () => {
    alert(`Hayden's favorite color is blue!`)
}

favPlace = () => {
    alert(`Hayden's favorite place is Bear Lake!`)
}

favRitual = () => {
    alert(`Hayden's favorite ritual is getting Chick-Fil-A with his wife!`)
}

//3
color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)