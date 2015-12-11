//annotation:
/*
* ...
* annotations
* ...
*/


function basic_conception()
{
	d_print("<b>basic_conception</b>");
	VariablePart();
	TypePart();
}

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

	d_println("null == undefined");
	d_print(null == undefined); // true

	d_println("Boolean(\"not empty\")");
	d_print(Boolean("not empty")); // true

	d_println("Boolean(\"\")");
	d_print(Boolean("")); // false

	d_println("Boolean(123)");
	d_print(Boolean(123)); // true

	d_println("Boolean(0)");
	d_print(Boolean(0)); //false

	d_println("Boolean(NaN)");
	d_print(Boolean(NaN)); // false

	d_println("Boolean({})");
	d_print(Boolean({})); // true

	d_println("Boolean(null)");
	d_print(Boolean(null)); // false

	d_println("Boolean(undefined)");
	d_print(Boolean(undefined)); // false;
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

	d_println("typeof(v1)");
	d_print(typeof(v1)); // "undefined"

	d_println("typeof(v2)");
	d_print(typeof(v2)); // "boolean"

	d_println("typeof(v3)");
	d_print(typeof(v3)); // "string"
	
	d_println("typeof(v4)");
	d_print(typeof(v4)); // "number"

	d_println("typeof(v5)");
	d_print(typeof(v5)); // "object"

	d_println("typeof(v6)");
	d_print(typeof(v6)); // "object"

	d_println("typeof(v7)");
	d_print(typeof(v7)); // "function"
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

	d_println("Number.MIN_VALUE");
	d_print(Number.MIN_VALUE);

	d_println("Number.MAX_VALUE");
	d_print(Number.MAX_VALUE);

	var r = Number.MAX_VALUE + Number.MAX_VALUE; //Infinity
	d_println("isFinite(Number.MAX_VALUE + Number.MAX_VALUE)");
	d_print(isFinite(r)); // false;

	var n = 1 / 0; // NaN(not a number)
}
