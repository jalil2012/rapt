// Need to use toFixed() so the negative exponent doesn't show up for small numbers
function rgba(r, g, b, a) {
	return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a.toFixed(5) + ')';
}
