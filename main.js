
// Global Counters
var i = 0, j = 0;


// Event Listener
document.getElementById("submitButton").addEventListener("click", getTreeInfo);

function checkForEnter(event){
	console.log("KeyCode: ", event.keyCode);
	console.log("e.which: ", event.which);

	if(event.keyCode === 13){
		getTreeInfo();
	}
}

/*
 * If user enters more than 1 char
 * Event lsitener for enter button
 * If user doesnt enter a number
 *

*/

function getTreeInfo(){
	// Check for bad or absence of input
	if(userHeight = parseInt(document.getElementById("userHeight").value)){
		console.log("NUMBER");
	}else{
		alert("Most fields must have a value. Height must be an integer.")
		return;
	}

	if((userChar = document.getElementById("userChar").value).length == 0){
		alert("Must enter a character to build the tree.");
		return;
	}else{
		userChar = document.getElementById("userChar").value;
	}

	// Create object to hold:
	var userInfo = {
		height: userHeight,
		character: userChar
	}
	createTree(userInfo);
}



function createTree(parameters){
	// Local Variables
	var tempArray = [];
	var tempString = "";

	// Load array with initial spaces
	for(i = parameters.height; i > 0; i--){
		tempString += " ";
		tempArray.unshift(tempString)
	}
	// Reset the temporary string
	tempString = "";

	// To each row, add the necesary (user-specified) characters
	for(i = 1; i < tempArray.length + 1; i++){
		for(j = 0; j < (2 * i) - 1; j++){
			tempString += parameters.character;
		}
		tempArray[i - 1] += tempString;
		console.log(tempArray[i - 1]);
		// Reset the temporary string for the next row
		tempString = "";
	}
};


