//E4.3 Задание 1
const prot = {
	a: '123'
}
const obj = Object.create(prot);
obj.b = '456';
obj.c = '789';

function taskOne(obj) {
	for (let key in obj) {
		if(obj.hasOwnProperty(key))
			console.log(key + ' : ' +obj[key]);
	}
};
console.log('E4.3 Task 1\n');
taskOne(obj);