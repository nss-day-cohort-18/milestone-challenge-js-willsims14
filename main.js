
// Global Counters
var i = 0, j = 0;


// Event listener for submit button
document.getElementById("submitButton").addEventListener("click", getTreeInfo);

// Event listener for enter key
function checkForEnter(event){
	if(event.keyCode === 13){
		getTreeInfo();
	}
}

// Checks user input. If its valid it creates an object 
// 	that is passed to the createTree function.
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


// Creates the tree in an array and then logs each 
//	row of the array after the necesary characters
//	are added to that row.
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


