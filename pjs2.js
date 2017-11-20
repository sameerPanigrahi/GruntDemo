function composeb(binaryF1, binaryF2) {
	return function(a1, a2, a3) {
		return binaryF2(binaryF1(a1, a2), a3);
	};
}

function limit(f1, c) {
	var i = 0;
	return function(a1, a2) {
		if (i >= c) {
			return "limit reaced";
		} else {
			i++;
			return f1(a1, a2);
		}

	};
}

function from(a1) {
	return function() {
		return a1++;
	};
}

function to(generator_f, end) {
	var i = 0;
	return function() {
		if (i < end) {
			i++;
			return generator_f();
		} else
			return undefined;
	};
}

function to2(generator_f, end){
	return limit(generator_f, end);
}

function fromTo(a,b){
	return to(from(a),b);
}


function element(arr, fromTo_f){
	return function(){
		return arr[fromTo_f()];
	};
}