// Homework 1

function today (a){
	
	var now = new Date();
	var notnow = "Неверный тип данных";{
		typeof a==='number' ? console.log(now) : console.log(notnow);
    }
}

undefined
today(1)
VM4408:5 Sat Mar 02 2019 14:42:14 GMT+0200 (Восточная Европа, стандартное время)
undefined
today('e')
VM4408:5 Неверный тип данных
undefined


// Homework 2

var letters = [];
	var str = "Backend Is A Service"; {
	var arr = str.split(' ');
		console.log(arr);
			for(i=0; i<arr.length; i++) {
            letters.push(arr[i].charAt(0));
				console.log(letters);
            }
    }

(4) ["Backend", "Is", "A", "Service"]
VM7594:7 ["B"]
VM7594:7 (2) ["B", "I"]
VM7594:7 (3) ["B", "I", "A"]
VM7594:7 (4) ["B", "I", "A", "S"]