function myFunction1(a, b) {
	return a * b;
}

function main() {
	q1 = myFunction1(1, 2);

	var x = function(a, b) {
		return a * b
	};
	q2 = x(q1, 2);

	var x2 = new Function("a", "b", "return a * b");

	var q3 = x2(q2, 2);

	document.write(q1);
	document.write(q2);
	document.write(q3);

	(function() {
		document.write('hello');
	})();
}