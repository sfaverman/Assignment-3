/*eslint-env browser*/

/* Global variables */

var titleArray = ["Teacher", "Musician","Sciantist","Realtor"];

var cityArray = ["New York", "San Diego", "London", "Los Angeles", "Boston"]; 

var namesArray = ["Mark", "John", "Kevin", "Vaza", "Pavel", "Tom", "Victor"];


function tellFortune(numbChildren,partnerName,geoLoc,jobTitle) {
	"use strict";
	window.document.write("You will be a " + titleArray[jobTitle] + " in " + cityArray[geoLoc] + ", and married to " + namesArray[partnerName] + " with " + numbChildren + " kids.<br>");
}

// random number sample:
// Math.floor(Math.random() * 10); returns 0 to 9
function main() {
	window.document.write("<b>Fortune Teller 3 times:</b><br>")
	for (var i = 0; i < 3; i++) {
		   "use strict";
			var titleIndex, cityIndex,namesIndex, childenNumb;

			titleIndex = Math.floor(Math.random() * titleArray.length);
			cityIndex = Math.floor(Math.random() * cityArray.length);
			namesIndex = Math.floor(Math.random() * namesArray.length);
			childrenNumb = Math.floor(Math.random() * 6); // returns number 1 to 5

			tellFortune(childrenNumb,namesIndex,cityIndex,titleIndex);
	} // end of for loop 3 times
} // end of main();


main(); 


