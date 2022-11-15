function add(a,b){
	return a + b;
}

function subtract(a,b){
	return a - b;
}

function multiply(a,b){
	return a*b;
}

function divide(a,b){
	return a/b;
}

function operate(operator,a,b){
	if (operator = 'add'){
		add(a,b);
	}
	else if (operator = 'subtract'){
		subtract(a,b);
	}
	else if (operator = 'multiply'){
		multiply(a,b);
	}
	else if (operator = 'divide'){
		divide(a,b);
	}
}

function populateDisplay(e){
	input = e.currentTarget.value;

	const numbers = [0,1,2,3,4,5,6,7,8,9];
	const operators = ['-','+','*','/'];
	const functionals = ['clear','delete','='];
	
	if(input in numbers || operators.includes(input)){
		display.textContent += input;
		if (input in numbers){
			firstNum += input;
		}
	}
	console.log(firstNum);
}

//query selectors
let display = document.querySelector('.display');
let zeroBtn = document.querySelector('.zero');
let oneBtn = document.querySelector('.one');
let twoBtn = document.querySelector('.two');
let threeBtn = document.querySelector('.three');
let fourBtn = document.querySelector('.four');
let fiveBtn = document.querySelector('.five');
let sixBtn = document.querySelector('.six');
let sevenBtn = document.querySelector('.seven');
let eightBtn = document.querySelector('.eight');
let nineBtn = document.querySelector('.nine');
let dotBtn = document.querySelector('.dot');
let plusBtn = document.querySelector('.plus');
let minusBtn = document.querySelector('.minus');
let multiplyBtn = document.querySelector('.multiply');
let divideBtn = document.querySelector('.divide');
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');
let equalsBtn = document.querySelector('.equals');

//event listeners
zeroBtn.addEventListener("click",populateDisplay);
oneBtn.addEventListener("click",populateDisplay);
twoBtn.addEventListener("click",populateDisplay);
threeBtn.addEventListener("click",populateDisplay);
fourBtn.addEventListener("click",populateDisplay);
fiveBtn.addEventListener("click",populateDisplay);
sixBtn.addEventListener("click",populateDisplay);
sevenBtn.addEventListener("click",populateDisplay);
eightBtn.addEventListener("click",populateDisplay);
nineBtn.addEventListener("click",populateDisplay);
dotBtn.addEventListener("click",populateDisplay);
plusBtn.addEventListener("click",populateDisplay);
minusBtn.addEventListener("click",populateDisplay);
multiplyBtn.addEventListener("click",populateDisplay);
divideBtn.addEventListener("click",populateDisplay);
clearBtn.addEventListener("click",populateDisplay);
deleteBtn.addEventListener("click",populateDisplay);
equalsBtn.addEventListener("click",populateDisplay);

var firstNum = '';