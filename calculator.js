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
	let result = 0;

	if (operator === '+'){
		result = add(a,b);
	}
	else if (operator === '-'){
		result = subtract(a,b);
	}
	else if (operator === '*'){
		result = multiply(a,b);
	}
	else if (operator === '/'){
		result = divide(a,b);
	}
	return result;
}

function populateDisplay(e){
	input = e.currentTarget.value;

	const numbers = [0,1,2,3,4,5,6,7,8,9];
	const operators = ['-','+','*','/'];
	const functionals = ['clear','delete','='];

	let result = '';
	console.log('hell0');
	if(input in numbers && operator === ''){
		console.log('hellonum');
		console.log(input);
		answerDisplay.textContent += input;
		firstNum += input;
	}
	else if(input in numbers && operator !== ''){
		answerDisplay.textContent = input;
		secondNum += input;
	}
	else if (operators.includes(input)){
		inputDisplay.innerHTML = '';
		inputDisplay.textContent += ' ' + answerDisplay.textContent + ' ' + input;
		operator = input;
	}
	else if (input === '='){
		firstNum = Number(firstNum);
		secondNum = Number(secondNum);
		result = operate(operator,firstNum,secondNum);
		inputDisplay.textContent += ' ' + secondNum + ' ' + '=';
		answerDisplay.innerHTML = '';
		answerDisplay.textContent += result;
		firstNum = result;
		operator = '';
		secondNum = '';
	}
	console.log(result);
}

function clearDisplay(){
	answerDisplay.innerHTML = '';
	inputDisplay.innerHTML = '';
	firstNum = '';
	secondNum = '';
	operator = '';
}

//query selectors
var display = document.querySelector('#display');
var inputDisplay = display.querySelector('.input');
var answerDisplay = display.querySelector('.answer');
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
clearBtn.addEventListener("click",clearDisplay);
deleteBtn.addEventListener("click",clearDisplay);
equalsBtn.addEventListener("click",populateDisplay);

var firstNum = '';
var secondNum = '';
var operator = '';