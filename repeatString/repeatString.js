const repeatString = function(word, num) {
	let ans = '';
	if (num<0){
		ans = "ERROR"
	} else {
		for (var i = 0; i < num; i++) {
			ans += word;
		}
	}
	return ans;
}

module.exports = repeatString
