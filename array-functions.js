// Own iteration of forEach
function forEach(array, callback) {
	for(var i = 0; i < array.length; i++) {
		callback(array[i], i, array);
	}
}

// Test forEach()
var arr = [1,2,3];

forEach(arr, function (val, index, array) {
	array[index] = val * 2;
});

console.log(arr);


// Own iteration of map()
function map(array, callback) {
	var newArr = [];
	for(var i = 0; i < array.length; i++) {
		newArr[i] = callback(array[i], i, array);
	}
	return newArr;
}

// test map() function
var mapArray = [1,2,3];
var doubleArray = map(mapArray, function(val) {
	return val * 2;
});

console.log(doubleArray);

// Own iteration of filter()
function filter(array, callback) {
	var newArr = [];
	for(var i = 0; i < array.length; i++) {
		if(callback(array[i],i,array)) {
			newArr.push(array[i]);
		}
	}
	return newArr;
}

// test filter() function
var filterArray = [1,2,3];
var filterResult = filter(filterArray, function(val) {
	return val > 1;
});

console.log(filterResult);































