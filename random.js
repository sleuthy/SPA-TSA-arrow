console.log("Hey weirdo.");
//event listener on body
window.addEventListener("click", function(event){
	randomNumber();
});

// random number generator inside a function
function randomNumber(number){
	var random = Math.floor((Math.random() * 10) + 1);
	console.log(random);
// if statement to display left or right arrow inside a function
	if (random < 5) {
		arrow.innerHTML = `<div><img src="img/blue-right.png"></div>`
	} else if (random >= 5) {
		arrow.innerHTML = `<div><img src="red-arrow-left.png"></div>`
	}
}



