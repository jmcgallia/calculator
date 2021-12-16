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
                return NaN;
            } else {
                return numberOne / numberTwo;
            }
        break;

        case '%':
            if (numberTwo === 0) {
                return NaN;
            } else {
                return numberOne % numberTwo;
            }
        break;

        default:
            return NaN;
    }
}

// What to do when user clicks on a number
// buttonPressed is a string parameter
function onNumberEntered(buttonPressed) {
    console.log(buttonPressed);
}

// What to do when user clicks on an operator
// buttonPressed is a string parameter
function onOperatorEntered(buttonPressed) {
    console.log(buttonPressed);
}

function onEqualsEntered() {
    console.log("Equals was entered.");
}

function onClearEntered() {
    console.log("Clear was entered.")
}

/* Get elements for all buttons */
buttons = document.querySelectorAll(".button-text");
console.table(buttons);

// Add appropriate listener for each button
buttons.forEach(function(element) {

    let buttonPressed = element.innerText;
    let numbers = ['1','2','3','4','5','6','7','8','9','0'];
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
    } else {
        console.log(`${buttonPressed} does not have an event listener yet.`);
    }
});


















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