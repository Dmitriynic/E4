//E4.3 Задание 2
console.log('');
str = 'two';
const objTwo = {
	'one': 1,
	'two': 2,
	'three': 3,
}

function taskTwo(str, obj) {
	for(let key in obj) {
		if(key === str) {
			return true;
		}
	}
	return false;
}

console.log('E4.3 Task 2\n');
console.log(taskTwo(str, objTwo));