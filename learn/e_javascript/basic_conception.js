//annotation:
/*
* ...
* annotations
* ...
*/

function VariablePart()
{
    var v1 = 42; // local
    var v2 = 42; // global
    var v3 = 0,
           v4 = 0,
           v5 = 0; //multi var
}

function TypePart()
{
	TypeOfPart();
	NumberPart();

	document.write(null == undefined); // true
	document.write("<br>");

	document.write(Boolean("not empty")); // true
	document.write("<br>");

	document.write(Boolean("")); // false
	document.write("<br>");

	document.write(Boolean(123)); // true
	document.write("<br>");

	document.write(Boolean(0)); //false
	document.write("<br>");

	document.write(Boolean(NaN)); // false
	document.write("<br>");

	document.write(Boolean({})); // true
	document.write("<br>");

	document.write(Boolean(null)); // false
	document.write("<br>");

	document.write(Boolean(undefined)); // false;
	document.write("<br>");
}

function TypeOfPart()
{
	// typeof()
	var v1; 
	var v2 = true;
	var v3 = "str";
	var v4 = 123;
	var v5 = null; 
	var v6 = {}; 
	var v7 = function() { return 42 }; 

	document.write(typeof(v1)); // "undefined"
	document.write("<br>");

	document.write(typeof(v2)); // "boolean"
	document.write("<br>");

	document.write(typeof(v3)); // "string"
	document.write("<br>");

	document.write(typeof(v4)); // "number"
	document.write("<br>");

	document.write(typeof(v5)); // "object"
	document.write("<br>");

	document.write(typeof(v6)); // "object"
	document.write("<br>");

	document.write(typeof(v7)); // "function"
	document.write("<br>");
}

function NumberPart()
{
	var i1 = 55; // integer
	var o1 = 070; // 56 oct
	var o2 = 079; // 79 
	var o3 = 08; // 8

	var  h1 = 0xA; // 10 hex
	var h2 = 0x1f; // 31 hex

	var f1 = 1.1;
	var f2 = 0.1;
	var f3 = .1;

	var f4 = 1.; // parse to 1
	var f5 = 10.0; // parse to 10

	var f6 = 3.125e7; // 31250000

	document.write(Number.MIN_VALUE);
	document.write("<br>");

	document.write(Number.MAX_VALUE);
	document.write("<br>");

	var r = Number.MAX_VALUE + Number.MAX_VALUE; //Infinity
	document.write(isFinite(r)); // false;
	document.write("<br>");

	var n = 1 / 0; // NaN(not a number)
}

function basic_conception()
{
	VariablePart();
	TypePart();
}