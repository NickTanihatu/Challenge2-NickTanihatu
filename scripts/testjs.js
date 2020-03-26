	
	var today = new Date();
	
	document.getElementById('clock').innerHTML = today.getHours() +" : "+ today.getMinutes() +" : "+ today.getSeconds(); 
	//document.getElementById('clock').innerHTML = today.getDate();
	
	// var birthdayNick = new Date(2000, 16, 3); // 16 maart 2000
	// console.log(birthdayNick.getDay());