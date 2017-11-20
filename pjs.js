/* jshint esversion: 6 */
function add(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}

function mul(a, b) {
	return a * b;
}

function identityf(argVal) {
	return function() {
		return argVal;
	};
}

function addf(argVal1) {
	return function(argVal2) {
		return argVal1 + argVal2;
	};
}

function liftf(argVal) {
	if (argVal.name == "add" || argVal.name == "sub" || argVal.name == "mul") {
		return function(first) {
			return function(second) {
				return argVal(first, second);
			};
		};
	}
}

function curry(binary, arg1) {
	return function(arg2) {
		if (binary.name == "add" || binary.name == "sub" || binary.name == "mul") {
			return binary(arg1, arg2);
		}
	};
}

function twice(binaryF){
	return function(arg1){
		return binaryF(arg1, arg1);
	};
}

function reverse(binaryF){
	return function(arg1, arg2){
		return binaryF(arg2, arg1);
	};
}

function reverse2(binaryF){
	return function(...argVals){
		return binaryF(...argVals.reverse());
	};
}

function composeu(f1, f2){
	return function(argVal1){
		return f2(f1(argVal1));
	};
}

var doubl = twice(add);
var square = twice(mul);