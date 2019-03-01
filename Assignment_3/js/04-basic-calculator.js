/*eslint-env browser*/

function displayTitle() {
    "use stict";
    window.alert("Welcome to Calculator Application!)");
    }

var firstNumber, secondNumber, operation;

function calculate(first, second, operator) {
    "use strict"
    var result;
	
    switch (operator) {
	    case "+":
		   result = first + second;
           window.alert(first + " + " + second + " = " + result);           
           break;
	    case "-":
           result = first - second;
           window.alert(first + " - " + second + " = " + result);           
           break;
         case "*":
		   result = first * second;
           window.alert(first + " * " + second + " = " + result);           
           break;
         case "/":
		   result = first / second;
           window.alert(first + " / " + second + " = " + result);           
           break;   
	    default: 
		   window.alert("You entered an invalid operation value. Please try again.");	   	
    } //end switch
} // end calculate();

function main() {
    "use strict"
    displayTitle();
    var y, calculateAgain = "y";
    while (calculateAgain.toLowerCase()=== "y") {
		// first number
		y = 0; 
		do {
		  if ( y !== 0) {
			  window.alert("You entered not a number, please try again!")
		  };
		  firstNumber = Number(window.prompt("Please enter first number:"));
		  y++;	
		} while (isNaN(firstNumber));
		
		
		//second number
		y = 0; 
		do {
		  if ( y !== 0) {
			  window.alert("You entered not a number, please try again!")
		  };
		  secondNumber = Number(window.prompt("Please enter second number:"));	
		  y++;	
		} while (isNaN(secondNumber));
		
        operation = window.prompt("Please enter '+' to add, '-' to substruct, '*' to multiply, '/' to devide:");
			
        calculate(firstNumber, secondNumber, operation);
        calculateAgain = window.prompt("Do you want to calculate again (y/n)?)");
    } // end of while calculateAgain;
	
    window.alert("Thanks for using Calculator!");
} // end of main(); 


main();