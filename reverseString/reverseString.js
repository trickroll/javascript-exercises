const reverseString = function(word) {
	let ans = '';
	let i = 0;
	while (i<word.length){
		ans += word[word.length - 1 - i]
		i++;
	}
	return ans;
}

module.exports = reverseString
