
var a,b;

function setValues(){
	 a = Number(document.getElementById("a").value) ;
	 b = Number(document.getElementById("b").value) ;
}

function sum(){
	setValues();
	result = a + b;
	alert("The sum is" + " " + result);
	return result;
}
