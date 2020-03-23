	/*/ JS variabelen verbinden met HTML Id's /*/
	var hourHand = document.getElementById('hr');
	var minuteHand = document.getElementById('mn');
	var secondHand = document.getElementById('sc');
	
	/*/ functies van de klok /*/
	function animationClock() {
		var date = new Date();	/*/ huidige datum ophalen /*/
		var hour = date.getHours() % 12;	/*/ huidige uur ophalen /*/ 
		var minute = date.getMinutes();	/*/ huidige minuut ophalen /*/
		var second = date.getSeconds();	/*/ huidige seconde ophalen /*/
		
		var hourDeg = hour * 30;
		var minuteDeg = minute * 6;
		var secondDeg = second * 6;
		
		hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';	/*/ roteren op basis van het uur /*/ 
		minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';	/*/ roteren op basis van de minuut /*/ 
		secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';	/*/ roteren op basis van de seconde /*/ 
		
		setTimeout(animationClock, 1000); /*/ functie animationClock aanroepen na 1000 ms /*/
		
	
		if (hour >= 6 && hour < 12) {
		document.body.style.backgroundColor = "#1237";
		
	}
	
	else if (hour >= 12 && hour < 18) {
		document.body.style.backgroundColor = "purple";
	}
	
	else {
		document.body.style.backgroundColor = "#131862";
	}
	};
	
	animationClock();
	
	
	