//基本类型值
/*
 * Boolean
 * Number
 * String
 * Null
 * Undefined
 */

// 引用类型值 Object

function variable_scope_memory()
{
	d_print("<br><b>variable_scope_memory</b>");
	VariableTypePart();
	ScopePart();
	GCPart();
}

function VariableTypePart()
{
	var o = new Object();
	var o1 = o;
	
	o.tmp = 123;
	d_println("o.tmp");
	d_print(o.tmp); // 123
	
	d_println("o1.tmp");
	d_print(o1.tmp); // 123
	
	function Add(obj)
	{
		obj.name = "cozy";
	}
	Add(o1);
	d_println("o1.name");
	d_print(o1.name); // cozy
	
	function Test(obj)
	{
		obj.test = 42;
		obj = new Object();
		obj.test = 66;
	}
	Test(o1);
	d_println("o1.test");
	d_print(o1.test); // 42
	
	d_println(o1 instanceof Object); // true
	d_println(o1 instanceof Array); // false
	d_println(o1 instanceof RegExp); // false
}

function ScopePart()
{
	var color = "red";
	function ChangeColor()
	{
		var anotherColor = "green";
		function SwapColor()
		{
			var tempColor = anotherColor;
			anotherColor = color;
			color = tempColor;
			
			// 这里可以访问color anotherColor tempColor
		}
		SwapColor();
		// 这里可以访问color anotherColor
	};
	ChangeColor();
	// 这里只能访问color
	
	function test()
	{
		var q = "cozy";
		with(location)
		{
			var u = q + "123";
		}
		return u;
	}
	
	d_println(test()); // cozy123
	
	if(true)
	{
		var hehe = 42;
	}
	d_println(hehe); // 42 没有块级作用域
}

function GCPart()
{
	
}