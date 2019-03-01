/*eslint-env browser*/
//STEP 1
function halfNumber(number) {
    "use strict";
    var halfNumb = Number(number) / 2;
    window.console.log("Half of " + number + " is " + halfNumb);
}
function squareNumber(number) {
    "use strict";
    var sqNumb = Number(number) ** 2;
    window.console.log("The result of squaring the number " + number + " is " + sqNumb);
}
function percentOf(numb1,numb2) {
    "use strict";
    var percOf = Number(numb1) / ( Number(numb2) / 100 );
    window.console.log(numb1 + " is " + percOf +"% of " + numb2);
}
function findModulus(numb1,numb2) {
    "use strict";
    var modulus; 
    numb1 = Number(numb1);
    numb2 = Number(numb2);
    if ( numb1 > numb2 ) { 
        modulus = Number(numb1) % Number(numb2);
       } else if ( numb2 >= numb1) {
        modulus = Number(numb2) % Number(numb1);
       }
    window.console.log(modulus + " is the modulus of " + numb1 + " and " + numb2 + ".");
} // end of findModulus()

function sumInput(numbers) {
    "use strict";
    var sum = 0;
    window.console.log("The sum of: ");
    for (var i = 0; i < arguments.length; i++) {
        sum += Number(arguments[i]);
        window.console.log(arguments[i]);
    }
    window.console.log("is " + sum);
}
function sumInputArray(array) {
    "use strict";
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
		sum += Number(array[i]);
    }
    window.console.log("The sum is " + sum);
}

function collectNumbers() {
    "use strict";
	var inpNumbers = window.prompt("Enter numbers delimitted by commas");
	console.log("You entered: " + inpNumbers);
	var strArray = inpNumbers.split(",");
	//console.log("strArray: " + strArray[0] + "," strArray[1]);
	//console.log("varaible strArray[0] is " + typeof strArray[0]);
	
	for (var i = 0; i < strArray.length; i++) { 
	if ( isNaN(strArray[i])) {
		window.alert("You entered: " + strArray + " Please enter only numbers list");
		return; //ask user again
		}
	}
	sumInputArray(strArray);	
	needInput = false;
}

halfNumber(30);
halfNumber(50);
halfNumber(15);
	
//STEP 2	

squareNumber(2);
squareNumber(3);
	
//STEP 3	

percentOf(10,50);
percentOf(25,100);
percentOf(7,140);
	
//STEP 4

findModulus(4,10);
findModulus(20,7);

//STEP 5
	
/* test sumInput function */	
sumInput(15, 20, 15);
sumInput(2, 5, 11, 42, 7);

var needInput = true;
while (needInput) {
   collectNumbers();
}

