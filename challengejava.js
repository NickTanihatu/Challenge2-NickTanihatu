
	//var today = new Date();
	
	//document.getElementById('clock').innerHTML = today.getHours() +" : "+ today.getMinutes() +" : "+ today.getSeconds(); 
	//document.getElementById('clock').innerHTML = today.getDate();
	
	// var birthdayNick = new Date(2000, 16, 3); // 16 maart 2000
	// console.log(birthdayNick.getDay());
	
	var hourHand = document.getElementById('hr');
	var minuteHand = document.getElementById('mn');
	var secondHand = document.getElementById('sc');
	
	function initClock() {
		var date = new Date();
		var hour = date.getHours() % 12;
		var minute = date.getMinutes();
		var second = date.getSeconds();
		
		var hourDeg = hour * 30;
		var minuteDeg = minute * 6;
		var secondDeg = second * 6;
		
		hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
		minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
		secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';
		
		setTimeout(initClock, 1000);
		
	
		if (hour >= 6 && hour < 12) {
		document.body.style.backgroundColor = "#1237";
		
	}
	
	else if (hour >= 12 && hour < 18) {
		document.body.style.backgroundColor = "red";
	}
	
	else {
		document.body.style.backgroundColor = "#131862";
	}
	};
	
	initClock();
	
	
	