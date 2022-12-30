let alarm = document.getElementById("alarm");
let buttonStart = document.getElementById("start");
let time = document.getElementById("time");

let minutos;
let segundos;
let contador;

time.style.display = "none";

buttonStart.addEventListener("click", function ()
{
	minutos = 25;
	segundos = 0;
	buttonStart.style.display = "none";
	time.style.display = "block";

	setTimeout(function () {
	  	alarm.play();
	  	setTimeout(function() {
		  	alarm.pause();
		}, 3000);
		buttonStart.style.display = "block";
		time.style.display = "none";

	}, 1500000);
	contador = setInterval(updateCountdown, 1000);
});


function updateCountdown() 
{
	segundos--;
	if (segundos < 0) {
		segundos = 59;
		minutos--;
	}
	if (minutos < 0) {
		clearInterval(contador);
		return;
	}

	let now = new Date();
	console.log(minutos + ":" + segundos + " --- " + now);
	time.innerHTML = `${minutos}:${segundos < 10 ? "0" + segundos : segundos}`;
};