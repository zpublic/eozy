function reference_types()
{
	d_print("<br><b>reference_types</b>")
	
	ObjectTypePart();
	ArrayTypeObject();
	DateTypePart();
	RegExpTypePart();
}

function ObjectTypePart()
{
	var p = new Object();
	p.name = "cozy";
	p.age = 42;
	
	var p1 = {}; // p1 = new Object();
	
	var p2 = {
		name : "cozy",
		age : 42,
		"ext" : "test",
	};
	p["he he"] = "hehe";
	
	d_println("p2.name");
	d_print(p2.name);// cozy
	
	d_println("p[\"he he\"]");
	d_print(p["he he"]); // hehe
}

function ArrayTypeObject()
{
	var arr1 = new Array();
	var arr2 = new Array(10); // 包含10项
	var arr3 = new Array( 1, 2, 3, 4 ); // 包含4项 1 2 3 4
	var arr4 = Array();
	var arr5 = ["1", "2", "3"]; // 包含"1" "2" "3";
	var arr6 = [];
	
	d_println("arr5.length");
	d_print(arr5.length); // 3
	
	d_println("arr6.length");
	d_print(arr6.length); // 3
	
	arr5.length = 2;
	d_println("arr5.length");
	d_print(arr5.length); // 2
	
	d_println("arr5[2]");
	d_print(arr5[2]); // undefined
	
	arr5.length = 4;
	d_println("arr5.length");
	d_print(arr5.length); // 4
	
	d_println("arr5[2]");
	d_print(arr5[2]); // undefined
	d_println("arr5[3]");
	d_print(arr5[3]); // undefined
	
	d_println("Array.isArray(arr5)");
	d_print(Array.isArray(arr5)); // true	
	
	var colors = ["red", "blue", "green"];
	d_println(colors.toString()); // red,blue,green
	d_println(colors.valueOf()); // red,blue,green
	d_println(colors); // red,blue,green
	d_println(colors.join("||")); // red||blue||green
	
	var arr = [];
	arr.push(1);
	d_println(arr); // 1
	arr.push(2);
	d_println(arr); // 1,2
	arr.pop();
	d_println(arr); // 1
	
	var que = [];
	que.push(1);
	que.push(2);
	d_println(que); // 1,2
	que.shift();
	d_println(que); // 2
	que.unshift(42);
	d_println(que); // 42,2
	que.push(1, 2, 3);
	d_println(que); // 42,2,1,2,3
	
	var sarr = [0, 1, 5, 10, 15];
	sarr.reverse();
	d_println(sarr); // 15,10,5,1,0
	sarr.sort();
	d_println(sarr); // 0,1,10,15,5
	sarr.sort(function(a, b){ if(a < b) return -1; else if(a >b) return 1; else return 0;});
	d_println(sarr); // 0,1,5,10,15
	
	var farr1 = [0, 1, 2];
	var farr2 = farr1.concat(3, [4, 5]);
	d_println(farr2); //0,1,2,3,4,5
	
	var sarr1 = farr2.slice(1,4);
	d_println(sarr1); //1,2,3
	
	var removed = farr2.splice(0, 1); // 从开头删除一项
	d_println(farr2); //1,2,3,4,5
	d_println(removed); //0
	
	removed = farr2.splice(1, 0, 42, 233); // 从位置1插入两项
	d_println(farr2); //1,42,233,2,3,4,5
	d_println(removed); //空
	
	removed = farr2.splice(1, 1, 42, 233); // 插入两项 删除一项
	d_println(farr2); //1,42,233,233,2,3,4,5
	d_println(removed); //42
	
	var fidx = farr2.indexOf(233);
	var lidx = farr2.lastIndexOf(233);
	d_println(fidx); //2
	d_println(lidx); //3
	
	var numbers = [1, 2, 3, 4 ,5, 4 ,3 ,2 ,1];
	var everyResult = numbers.every(function(item, index, array){return (item > 2);});
	d_println(everyResult); // false
	
	var someResult = numbers.some(function(item, index, array){return (item > 2);});
	d_println(someResult); // true
	
	var filterResult = numbers.filter(function(item, index, array){return (item > 2);});
	d_println(filterResult); // 3,4,5,4,3
	
	var mapResult = numbers.map(function(item, index, array){return item * 2;});
	d_println(mapResult); // 2,4,6,8,10,8,6,4,2
	
	var values = [1, 2, 3, 4 ,5];
	var sum = values.reduce(function(prev, cur, index, array){
		return prev + cur;
	});
	d_println(sum); // 15;
}

function DateTypePart()
{
	var now = new Date(); //当前时间
	var someDate = new Date("May 25, 2004"); //2004年5月25
	var y2k = new Date(Date.UTC(2000, 0)); // 2000年1月1日
	var allFive = new Date(Date.UTC(2005, 4, 5, 17, 55, 55)); // 2005年4月25日17点55分55秒
	
	var start = Date.now();
	var end = +Date.now();
	//do something
	var dis = end - start;
}

function RegExpTypePart()
{
	
}