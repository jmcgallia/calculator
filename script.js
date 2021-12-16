// Calculate function. Returns false if an incorrect operator was given, or numberOne or numberTwo weren't numbers
function calculate(numberOne, numberTwo, operator) {

    if ((type(numberOne) !== Number) || (type(numberTwo) !== Number)) {
        
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
            return numberOne / numberTwo;
        break;

        case '%':
            return numberOne % numberTwo;
        break;

        default:
            return false;
    }
}