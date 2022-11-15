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

function populateDisplay(){
	display.textContent += '0';
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
let divideBtn = document.querySelector('.divide');
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');

//event listeners
zeroBtn.addEventListener("click",populateDisplay)
