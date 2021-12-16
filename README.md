# This is a calculator made for Project Odin. Made with HTML, CSS, and JavaScript.

Overview of how the calculator will actually work to guide my coding with:

variables: 
current-operator = ''
current-number = '' => will be printed in main display upon changing
current-equation-operator = The operator to be used in the equation
current-equation-number = The number on the left side of the equation
current-equation => The entire equation, including the number and operator, ready to be printed. looks like '5 + ..', '69 - ..', etc.
current-equation-complete => returns true if the current-equation has both the left-side number and an operator.

# Number buttons:
if (number button is clicked on) => That number is appended to current-number string

# Equal button:
if ((equal button is clicked on) && (current-equation is complete) && (current-number is '')) => Do nothing / reprint current number

if ((equal button is clicked on) && (current-equation is complete) && (current-number ! '')) => Evaluate the 'equation + current number'. Update the current-number w/ the answer. Set current-equation to ''

if ((equal button is clicked on) && (current-equation ! complete) && (current-number is '')) => Do nothing / reprint current number

# Operator buttons:
if ((operation button is clicked on) && (current-equation- is complete ) && (current-number is '' ) => Change the operator in the equation to whatever operator was clicked on.

if ((operation button is clicked on) && (current-equation is complete) && (current number is not '')) => Change the operator in the equation to whatever operator was clicked on

if ((operation button is clicked on) && (current-equation is not complete) && (current number is '') => Do nothing

if ((operation button is clicked on) && (current-equation is not complete) && (current number is not '') => Add the equation-operator to the equation-number for the full equation

# Clear button is clicked:
Wipe the equations and current number

# +/- button is clicked:
Switch the sign of the current number (multiply by -1)
