function stringChop(str, size) {
  // your code here
	if (str === 'null') {
		return [];
	}
	let iterations = Math.floor(str.length / size);
	let index = 0;
	let res = [];
	for (let i = 0; i < iterations; i++) {
		res.push(str.slice(index,index+size));
		index += size;
	}

	if (str.length - index > 0) {
		res.push(str.slice(index,str.length));
	}

	
	return res;
}
// stringChop("12345",2);
// stringChop("abc",5);
// Do not change the code below

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
