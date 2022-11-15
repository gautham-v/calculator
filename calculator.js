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
	console.log(e);
	if (e.type === 'click'){
		input = e.currentTarget.value;
	}
	else{
		input = e.key;
		console.log(input);
		if (input === 'Backspace'){
			backspace();
		}
		else if (input === 'Enter'){
			input = '=';
		}
		else if (input === 'Escape'){
			clearDisplay();
		}
	}
	
	console.log(e.type);
	const numbers = [0,1,2,3,4,5,6,7,8,9];
	const operators = ['-','+','*','/'];

	let result = '';
	//append and display input for first number 
	if(input in numbers && operator === ''){
		answerDisplay.textContent += input;
		firstNum += input;
	}
	//append and display input for second number 
	else if(input in numbers && operator !== ''){
		answerDisplay.innerHTML = secondNum;
		answerDisplay.textContent += input;
		secondNum += input;
	}
	//user enters a decimal
	else if(input === '.' && !answerDisplay.textContent.includes(input)){
		answerDisplay.textContent += input;
		//making first num a decimal
		if (operator === ''){
			firstNum += input;
		}
		//making second num a decimal
		else{
			secondNum += input;
		}
	}
	//update dispaly when input is an operator
	else if (operators.includes(input)){
		inputDisplay.innerHTML = '';
		inputDisplay.textContent += ' ' + answerDisplay.textContent + ' ' + input;
		operator = input;
	}
	//perform operation and diplay results when input is =
	else if (input === '=' && operator !== ''){
		firstNum = Number(firstNum);
		secondNum = Number(secondNum);
		//check for dividing by 0
		if (operator === '/' && secondNum === 0){
			alert('Bleep Bloop! Can\'t divide by 0!');
			//answerDisplay.textContent += 'Bleep Bloop! Can\'t divide by 0!';
			clearDisplay();
		}
		else{
			result = operate(operator,firstNum,secondNum);
			inputDisplay.textContent += ' ' + secondNum + ' ' + '=';
			answerDisplay.innerHTML = '';
			answerDisplay.textContent += Number(result.toFixed(3));
			firstNum = result;
			operator = '';
			secondNum = '';
		}
		
	}
	console.log(result);
}

function clearDisplay(){
	answerDisplay.innerHTML = '';
	inputDisplay.innerHTML = '';
	firstNum = '';
	secondNum = '';
	operator = '';
	console.log(answerDisplay.innerHTML);
}

function backspace(){
	const displayNum = Number(answerDisplay.innerHTML);
	if (displayNum == firstNum){
		answerDisplay.innerHTML = answerDisplay.innerHTML.slice(0,-1);
		firstNum = String(firstNum).slice(0,-1);
	}
	else if (displayNum == secondNum){
		answerDisplay.innerHTML = answerDisplay.innerHTML.slice(0,-1);
		secondNum = secondNum.slice(0,-1);
	}
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
deleteBtn.addEventListener("click",backspace);
equalsBtn.addEventListener("click",populateDisplay);

//key event listener
document.addEventListener('keydown', populateDisplay);

var firstNum = '';
var secondNum = '';
var operator = '';