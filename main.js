/* TO DO
 *	- If text inputs are blank, alert()
 *	- Event Listener on Submit button
 *	- Event Listener on enter button
 *	- Create the object to pass to the function
 *
 */

var i = 0, j = 0;

var userHeight = 0;
var userChar = "*";

var userInfo = {
	height: userHeight,
	character: userChar
}


document.getElementById("submitButton").addEventListener("click", function(){
	var tempArray = [];
	var tempString = "";
	var lengthOfLastLine = 0;

	userHeight = parseInt(document.getElementById("userHeight").value);
	userChar = document.getElementById("userChar").value;

	userInfo.height = userHeight;
	userInfo.character = userChar;

	console.log("Height: ", userInfo.height);
	console.log("Char: ", userInfo.character);
	console.log("LengthOfLast: ", lengthOfLastLine);

	// Load array with initial spaces
	for(i = userInfo.height; i > 0; i--){
		tempString += " ";
		console.log(tempString + " > i: " + i);
		tempArray.unshift(tempString)
	}

	tempString = "";

	// To each row, add the necesary characters
	for(i = 1; i < tempArray.length + 1; i++){
		for(j = 0; j < (2 * i) - 1; j++){
			tempString += userChar;

		}
		tempArray[i - 1] += tempString;
		tempString = "";
		console.log(tempArray[i - 1]);
	}



});




















console.log("------------");
console.log("      *");			// 6 (+ 1)
console.log("     ***");		// 5 (+ 3)
console.log("    *****");		// 4 (+ 5)
console.log("   *******");		// 3 (+ 7)
console.log("  *********");		// 2 (+ 9)
console.log(" ***********");	// 1 (+ 11)
console.log("*************");	// 0 (+ 13)





