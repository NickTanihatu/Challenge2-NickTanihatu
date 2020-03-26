var hourHand = document.getElementById('hr'); /*/ JS variabelen verbinden met HTML Id's /*/
var minuteHand = document.getElementById('mn'); /*/ JS variabelen verbinden met HTML Id's /*/
var secondHand = document.getElementById('sc'); /*/ JS variabelen verbinden met HTML Id's /*/
	
/*/ functies van de klok /*/
function animationClock() {
	var date = new Date();	/*/ huidige datum ophalen /*/
	var hour = date.getHours();	/*/ huidige uur ophalen /*/ 
	var minute = date.getMinutes();	/*/ huidige minuut ophalen /*/
	var second = date.getSeconds();	/*/ huidige seconde ophalen /*/
		
	var hourDeg = hour * 30;
	var minuteDeg = minute * 6;
	var secondDeg = second * 6;
		
	hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';	/*/ roteren op basis van het uur /*/ 
	minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';	/*/ roteren op basis van de minuut /*/ 
	secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';	/*/ roteren op basis van de seconde /*/ 
		
	setTimeout(animationClock, 1000); /*/ functie animationClock aanroepen na 1000 ms /*/
		
	
	/*/ ochtend achtergrondkleur en verschijning zon /*/ 
	if (hour >= 6 && hour < 12) { 
		document.body.style.backgroundColor = "#68a4ff";
		document.getElementById("moon").style.display = "none";
		document.getElementById("star").style.display = "none";
	}
	
	/*/ middag achtergrondkleur en verschijning zon/*/ 
	else if (hour >= 12 && hour < 18) {
		document.body.style.backgroundColor = "#5CBBFC";
		document.getElementById("moon").style.display = "none";
		document.getElementById("star").style.display = "none";
	}
	
	/*/ avond achtergrondkleur en verschijning maan/*/ 
	else {
		document.body.style.backgroundColor = "#131862";
		document.getElementById("sun").style.display = "none";
		document.getElementById("bird").style.display = "none";
	}
	
};
animationClock();
	
	
	
	