//单行注释:
/*
* ...
* 多行注释
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
	StringPart();

// Boolean

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

//typeof

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

//NaN
	d_println("isNaN(1 / 0)");
	d_print(isNaN(1 / 0)); // true
	
	d_println("isNaN(NaN)");
	d_print(isNaN(NaN)); // true
	
	d_println("isNaN(10)");
	d_print(isNaN(10)); // false
	
	d_println("isNaN(\"10)\"");
	d_print(isNaN("10")); // false
	
	d_println("isNaN(\"cozy\")");
	d_print(isNaN("cozy")); // true
	
	d_println("isNaN(true)");
	d_print(isNaN(true)); // false
	
	
// number convert

	d_println("Number(\"Hello world\")");
	d_print(Number("Hello world")); // false
	
	d_println("Number(\"\")");
	d_print(Number("")); // 0
	
	d_println("Number(\"000011\")");
	d_print(Number("000011")); // 11
	
	d_println("Number(true)");
	d_print(Number(true)); // 1
	
// parser int
	d_println("parseInt(\"1234cozy\")");
	d_print(parseInt("1234cozy")); // 1234
	
	d_println("parseInt(\"\")");
	d_print(parseInt("")); // NaN
	
	d_println("parseInt(\"0xA\")");
	d_print(parseInt("0xA")); // 10 hex
	
	d_println("parseInt(22.5)");
	d_print(parseInt(22.5)); // 22
	
	d_println("parseInt(\"070\")");
	d_print(parseInt("070")); // 56 oct
	
	d_println("parseInt(\"70\")");
	d_print(parseInt("70")); // 70 
	
	d_println("parseInt(\"10\", 2)");
	d_print(parseInt("10", 2)); // 15 hex
	
	d_println("parseInt(\"10\", 8)");
	d_print(parseInt("10", 8)); // 15 hex
	
	d_println("parseInt(\"10\", 10)");
	d_print(parseInt("10", 10)); // 15 hex
	
	d_println("parseInt(\"10\", 16)");
	d_print(parseInt("10", 16)); // 15 hex
	
}

function StringPart()
{
	
}