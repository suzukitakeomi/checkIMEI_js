function checkIMEI(imei){
	if(!/^\d{15}$/.test(imei)){
		return 0;
	}
	let sum = 0;
	for(let i = 0; i < 14; i++){
		let num = parseInt(imei.charAt(i), 10);
		if(i % 2 === 1){
			num *= 2;
			if(num > 9) num -= 9;
		}
		sum += num;
	}
	let checkDigit = (10 - (sum % 10)) % 10;
	return checkDigit === parseInt(imei.charAt(14), 10) ? 1 : 0;
}
