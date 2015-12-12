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
	OperatePart();
	StatementPart();
	FunctionPart();
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
	ObjectPart();

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
	var str1 = "123";
	var str2 = '456';
	// var str3 = "789' // 错误
	var str4 = "str with unicode\u03a3";
	d_println("str4.length");
	d_print(str4.length); // 17
	
	var lang = "123" + "456"; // "123456
	
	var age = 11;
	var ageStr = age.toString(); // "11"
	
	var found = true;
	var fountStr = found.toString(); //"true"
	
	var num = 10;
	d_println("num.toString()");
	d_print(num.toString()); // "10"
	d_println("num.toString(2)");
	d_print(num.toString(2)); // "1010"
	d_println("num.toString(8)");
	d_print(num.toString(8)); // "12"
	d_println("num.toString(10)");
	d_print(num.toString(10)); // "10"
	d_println("num.toString(16)");
	d_print(num.toString(16)); // "a"
	
	
	var value1 = 10;
	d_println("String(value1)");
	d_print(String(value1)); // "10"
	
	d_println("String(null)");
	d_print(String(null)); // "null"
	
	d_println("String(undefined)");
	d_print(String(undefined)); // "undefined"
}

function ObjectPart()
{
	var o = new Object();
	var o1 = {};
}

function OperatePart()
{
	var age = 41;
	age++; // age = 42
	--age; // age = 41;
	
	var s1 = "2";
	var s2 = "z";
	var s3 = false;
	var s4 = 1.1;
	var s5 = {
		valueOf : function()
		{
			return 42;
		}	
	};
	
	s1++; // 3
	s2++; //NaN
	s3++; // 1
	s4--; //0.1xxxx
	s5--; //-2
	
	var oldValue = -64;
	var newValue = oldValue << 5; // -2048
	var newValue1 = oldValue >> 5; // -2
	var newValue2 = oldValue >>> 5; // 134217726
	
	var str = "str" + 5 + 2; // str52
	var str1 = "str" + (5 + 2) // str7
	
	null == undefined // true
	"NaN" == NaN; // false
	5 == NaN; // false
	NaN == NaN; // false
	NaN != NaN; // true
	false == 0; // true
	true == 1; // true
	true == 2; // false
	undefined == 0; // false
	null == 0; // false
	"5" == 5; // true
	"5" === 5; // false //类型不同
}

function StatementPart()
{
	var o = {
		hehe:function()
		{
			return -1;
		},
		test:-1,
	};
	for (var key in o) {
		d_println("o.PropName");
		d_print(key);
	}
	
	
	var num = 0;
	
	restart:
	for(var i = 0; i < 10; ++i)
	{
		
		for(var j = 0; j < 10; ++j)
		{
			if(i == 5 && j == 5)
			{
				break restart;
			}
			++num;
		}
	}
	
	d_println("num");
	d_print(num); // 55
	
	var o1 = {
		hehe1 : 1,
		hehe2 : 2,
	};
	with(o1)
	{
		d_println("with(o1) hehe1");
		d_print(hehe1);
		d_println("with(o1) hehe2");
		d_print(hehe2);
	}
	
	switch("helloworld")
	{
		case "hello" + "world":
			d_println("helloworld");
			break;
		default:
			d_println("default");
	}
}

function FunctionPart()
{
	function f1()
	{
		d_println("f1 here");
	};
	
	f1();
	
	function f2()
	{
		d_println("arguments.length");
		d_print(arguments.length)
	};
	
	f2(); // 0
	f2(1); // 1
	f2(1, 2, 3); // 3
	
	function f3()
	{
		d_println("typeof(arguments[0])");
		d_print(typeof(arguments[0]))
		
		d_println("typeof(arguments[1])");
		d_print(typeof(arguments[1]))
	};
	
	f3(); // undefined undefined
	f3(1); // number undefined
	f3(1, 2, 3); // number number
	
	function f4()
	{
		d_println("f4 first");
	};
	
	function f4(a)
	{
		d_println("f4 second");
	};
	f4(); // "f4 second"
	f4(1); // "f4 second"
}