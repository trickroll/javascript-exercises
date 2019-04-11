const ftoc = function(f_temp) {
	let ans = (f_temp - 32) * (5/9)
	return Math.round(ans * 10) / 10;
}

const ctof = function(c_temp) {
	let ans = c_temp * (9/5) + 32
	return Math.round(ans * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
