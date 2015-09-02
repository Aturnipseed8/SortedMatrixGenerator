//* write a function that takes 2 inputs: 
// number of rows, number of columns

//Generate a multi-dimensional array with the specified number of rows and columns in the array populated with random numbers between 1 and 100.
//Sorts the array with natural numeric sorting. You will need to use/write/find a sort function as your argument to the JavaScript Array.sort() method for numbers to be sorted as numeric values.
//Returns the sorted multi-dimensional array

//code generator, create array

function matrixGenerator(rows, cols) {
var arr = [];
var size = rows * cols;
var nums = [];

// sort the array
function sortShenanigans(first, second) {
	if (first == second)
		return 0;
	if(first < second)
		return -1;
	else
		return 1;
	}

//add the random numbers to be sorted
for (var a = 0; a < size; a++) {
	nums[a] = math.ceil(Math.random() * 100);
}
nums.sort(sortShenanigans);


// create parameters for the rows and columns
	
for (var i = 0; i <rows; ++i) {
		var rowArr = [];
		matrix[i] = rowArr;

		for (var j = 0; i < cols; ++j){
			rowArr[j] = nums[(i * cols) + j];
			}
	}
	return arr;
}
//PRINT ARRAY

console.log(arr);