console.log("hello world");

let form = document.querySelector('form#contact');
let rubberDuck = document.querySelector('#rubber-duck')

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully');
}

duckCompliment = (event) => {
	alert('the duck thinks you are pretty great')
}



form.addEventListener('submit', handleSubmit);
rubberDuck.addEventListener('mouseover', duckCompliment);