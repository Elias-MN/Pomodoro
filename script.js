let alarm = document.getElementById("alarm");
let buttonStart = document.getElementById("start");
let time = document.getElementById("time");

let contador;
let dateStart;
let dateCurrent;
let differenceInMilliseconds;
let differenceInMinutes;
let remainderInMilliseconds;
let differenceInSeconds;

let minutesPomodoro = 25;
let millisecondsPomodoro = 1500000;


time.style.display = "none";

buttonStart.addEventListener("click", function ()
{
	dateStart = new Date();

	buttonStart.style.display = "none";
	time.style.display = "block";

	setTimeout(function () {
	  	alarm.play();
	  	setTimeout(function() {
		  	alarm.pause();
		}, 3000);
		buttonStart.style.display = "block";
		time.style.display = "none";

	}, millisecondsPomodoro);

	// Algunos navegadores reducen el intervalo cuando la pestaña está en segundo plano
	contador = setInterval(updateCountdown, 1000);

});


function updateCountdown() 
{
	dateCurrent = new Date();

	// Calcula la diferencia entre las dos fechas en milisegundos
	differenceInMilliseconds = dateStart.getTime() - dateCurrent.getTime();

	// Divide la diferencia en milisegundos entre el número de milisegundos en un minuto
	differenceInMinutes = Math.abs(Math.floor(differenceInMilliseconds / 60000));

	if (differenceInMinutes > minutesPomodoro) {
		clearInterval(contador);
		return;
	}

	// Calcula el número de milisegundos restantes
	remainderInMilliseconds = differenceInMilliseconds % 60000;

	// Divide el número de milisegundos restantes entre el número de milisegundos en un segundo
	differenceInSeconds = Math.abs(Math.round(remainderInMilliseconds / 1000));

	remainingMinutes = minutesPomodoro - differenceInMinutes;
	remainingSeconds = 60 - differenceInSeconds;

	switch(true) {
	  case remainingMinutes >= 23 && remainingMinutes < 24:
	    time.style.color = "#f1de59"; // Amarillo
	    break;
	  case remainingMinutes < 23:
	    time.style.color = "#eb8f8f"; // Rojo
	    break;
	}

	time.innerHTML = `${remainingMinutes}:${remainingSeconds}`;
};