function rysujChoinkę(value) {

		console.log(value);
	
	for (i = 0; i < value; i++) {
		var star = '';
		
		for (j = 0; j < (i*2)-1; j++) {
			var star = star + '*';
		}
		console.log(star);
	}

}

rysujChoinkę(15)