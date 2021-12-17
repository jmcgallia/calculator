////////////////////////
// Helping Functions //
//////////////////////

// Calculate function. Returns NaN if an incorrect operator was given, or numberOne or numberTwo weren't numbers
// An incorrect input can also be 0 for numberTwo for division and %, which return NaN
function calculate(numberOne, numberTwo, operator) {

    if ((typeof(numberOne) !== 'number') || (typeof(numberTwo) !== 'number')) {
        return NaN;
    }

    switch (operator) {

        case '+':
            return numberOne + numberTwo;
        break;

        case '-':
            return numberOne - numberTwo;
        break;

        case '*':
            return numberOne * numberTwo;
        break;

        case '/':
            if (numberTwo === 0) {
                return "Universe succesfully destroyed.";
            } else {
                return numberOne / numberTwo;
            }
        break;

        case '%':
            if (numberTwo === 0) {
                return "Universe succesfully destroyed.";
            } else {
                return numberOne % numberTwo;
            }
        break;

        default:
            return NaN;
    }
}

// Print to the main calculator screen display
function mainDisplayPrint(string) {
    mainDisplay.innerText = string;
}

// Print to the calculator sub-display
function subDisplayPrint(string) {
    subDisplay.innerText = string;
}

// Returns the state of the equation.
// '456' => 'HN' (Has number)
// '456 +' => 'HNHS' (Has number has sign)
// '' => 'NNNS' (No number no sign)
function equationState() {

    if ((equationNumber !== '') && (equationOperator === '')) {
        return 'HN'
    }

    else if ((equationNumber !== '') && (equationOperator !== '')) {
        return 'HNHS'
    }

    else if ((equationNumber === '') && (equationOperator === '')) {
        return 'NNNS'
    }

    else {
        console.log("Some kind of error in equationState()");
        return("ERROR");
    }

}

///////////////////////////////
// EVENT LISTENER FUNCTIONS //
/////////////////////////////

// What to do when user clicks on a number
// buttonPressed is a string parameter
function onNumberEntered(buttonPressed) {

    state = equationState();

    if ((state === 'HN') || (state === 'NNNS')) {
        current_number += buttonPressed;
        equationNumber += buttonPressed;
    }

    else {
        current_number += buttonPressed;
    }

    mainDisplayPrint(current_number);
    subDisplayPrint(`${equationNumber} ${equationOperator}`);

}

// What to do when user clicks on an operator
// buttonPressed is a string parameter
function onOperatorEntered(buttonPressed) {
    console.log(buttonPressed);

    state = equationState();
    console.log(state);
    if ((state === 'HN') && current_number !== '') {
        subDisplayPrint(`${current_number} ${buttonPressed}`);
        equationOperator = buttonPressed;
        current_number = ''
        mainDisplayPrint(current_number);
    }

    else if ((state === 'HNHS') && current_number !== '') {
        console.log("here");
        current_number = calculate(parseFloat(equationNumber),parseFloat(current_number),equationOperator)
        mainDisplayPrint(current_number);
        // Reset the states so it is 'HN'. number in 'HN' is the answer.
        equationNumber = current_number;
        current_number = '';
        equationOperator = buttonPressed
        subDisplayPrint(current_number);
    }

    else if ((state === 'HNHS') && (current_number === '')) {
        subDisplayPrint(`${equationNumber} ${buttonPressed}`);
        equationOperator = buttonPressed;
    }


    
}

// What to do when user clicks on the equals sign
function onEqualsEntered() {
    state = equationState();

    if (state === 'HNHS') {
        current_number = calculate(parseFloat(equationNumber),parseFloat(current_number),equationOperator)
        mainDisplayPrint(current_number);
        // Reset the states so it is 'HN'. number in 'HN' is the answer.
        equationNumber = current_number;
        equationOperator = ''
        subDisplayPrint(current_number);
    }
}

// Reset the state machine when user clicks on the clear sign
function onClearEntered() {
    equationNumber = '';
    equationOperator = '';
    current_number = '';
    mainDisplayPrint('');
    subDisplayPrint('');
}

function onChangeSignEntered() {

    state = equationState();

    if (state === 'HN')  {
        let newNum = parseFloat(current_number) * -1; 
        current_number = newNum.toString();
        equationNumber = newNum.toString();
        subDisplayPrint(equationNumber);
        mainDisplayPrint(current_number);
    }
/*
    if ((state === 'HNHS') && (current_number !== '') {
        let newNum = parseFloat(current_number) * -1
        current_number *= -1;
        mainDisplayPrint()
    }*/
    
}
///////////////////////////////////
// Get elements for all buttons //
/////////////////////////////////

buttons = document.querySelectorAll(".button-text");
mainDisplay = document.querySelector(".main-display");
subDisplay = document.querySelector(".sub-display");

///////////////////////////////////////////////
// Add appropriate listener for each button //
/////////////////////////////////////////////

buttons.forEach(function(element) {

    let buttonPressed = element.innerText;
    let numbers = ['1','2','3','4','5','6','7','8','9','0','.'];
    let operators = ['+','-','/','*','%'];

    if (numbers.includes(buttonPressed)) {
        element.addEventListener("click", function() {
            onNumberEntered(buttonPressed);
        });
    } else if (operators.includes(buttonPressed)) {
        element.addEventListener("click", function() {
            onOperatorEntered(buttonPressed);
        })
    } else if (buttonPressed === '=') {
        element.addEventListener("click", function() {
            onEqualsEntered();
        })
    } else if (buttonPressed === 'C') {
        element.addEventListener("click", function() {
            onClearEntered();
        })
    } else if (buttonPressed === '+/-') {
        element.addEventListener("click", function() {
            onChangeSignEntered();
        })
    } else {
        console.log(`${buttonPressed} does not have an event listener yet.`);
    }
});




/////////////////
// States /// //
///////////////

// The operator used in the equation
let equationOperator = ''
// The number on the left-hand side of the equation
let equationNumber = ''
// Whether or not the equation is 'complete'
let equationComplete = false;
// The current number being on the main display
current_number = ''







/* calculate function tests 
console.log(calculate(1,5,'+'));
console.log(calculate(1,-50,'+'));
console.log(calculate(1,-50,'-'));
console.log(calculate(1000,2000,'-'));
console.log(calculate(5,5,'*'));
console.log(calculate(-5,5,'*'));
console.log(calculate(5,0,'/'));
console.log(calculate(10,2,'/'));
console.log(calculate(7,5,'/'));
console.log(calculate(2,5,'/'));
console.log(calculate(5,0,'%'));
console.log(calculate(10,2,'%'));
console.log(calculate(7,5,'%'));
console.log(calculate(2,5,'%'));
console.log(calculate('waDSASD',5,'%'));
console.log(calculate(2,'SADASDA','%'));
console.log(calculate('AAA','4','%'));
console.log(calculate(0,0,'+'));
  */