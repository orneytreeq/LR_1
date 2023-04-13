let str = prompt('введите строку');
var stack = "";
	if ((!str.includes("("))&&(!str.includes(")"))){
		alert("строка не содержит скобок");
	} else{
		for (var i = 0; i < str.length; i++) {
			if ((str[i]==")")&&(stack=="")){
				stack="-1";
				break;
			} else if (str[i]==")"){
				stack = stack.slice(0, -1);
			} else if (str[i]=="("){
				stack = stack+"(";
			}
		}
		if (stack!=""){
			alert("круглые скобки расставлены НЕВЕРНО");
		} else{
			alert("круглые скобки расставлены ВЕРНО");
		}
	}



