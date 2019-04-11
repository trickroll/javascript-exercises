const sumAll = function() {
	let ans = 0;
	
	if (arguments[0] < 0 || Number.isInteger(arguments[0]) == false || arguments[1] < 0 || Number.isInteger(arguments[1]) == false) {
		ans = "ERROR"
	} else {
		for (i= Math.min(arguments[0],arguments[1]); i <= Math.max(arguments[0],arguments[1]); i++){
			ans += i;
		}
	}

	return ans;
}

module.exports = sumAll
