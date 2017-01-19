/* TO DO
 *	- If text inputs are blank, alert()
 *	- Event Listener on Submit button
 *	- Event Listener on enter button
 *	- Create the object to pass to the function
 *
 */



var height = 7;
var char = '*';
var i, j, k;


var finalString = "";



// var userStuff = {
// 	height: 7,
// 	character: '*'
// };


// Add 6 spaces
// Add a '*'
// Add a '\n'

// Add 5 spaces
// Add a '*'
// Add a '\n'


function makeTree(){
	var tree = "";
	var rowTree = "";

	// For Each Row
	for(i = 1; i < height + 1; i++){



		// For each number of space characters in this row
		for(j = 1; j < (height) - i; j++){
			tree += "-";
			rowTree += "-";

		}
			// For each number of asterisk (*) characters in this row ((0 + 1) + i)
			for(k = 0; k < (i + 2); k++){
				tree += "*";
				rowTree += "*";
			}


			console.log("Row: --> ", rowTree);
		

	}




	return tree;
}



//  function createTreeString() {
//  	var treeString = "    *\n"
//  	for(var i = 0; i < 6; i++){
//  		for(var j = 0; j <= i + 2; j++){
//  			treeString += '*';
//  		}
//  		treeString += "\n"
//  	}
//  	return treeString;
// }

// var x = createTreeString();

var y = makeTree();



console.log("------------");
console.log("      *");			// 6 (+ 1)
console.log("     ***");		// 5 (+ 3)
console.log("    *****");		// 4 (+ 5)
console.log("   *******");		// 3 (+ 7)
console.log("  *********");		// 2 (+ 9)
console.log(" ***********");	// 1 (+ 11)
console.log("*************");	// 0 (+ 13)


// console.log("TreeString: \n", x);
console.log(y);


