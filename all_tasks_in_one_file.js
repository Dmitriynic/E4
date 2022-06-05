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

//E4.3 Задание 3
console.log('');

const objThree = Object.create(null);
console.log('E4.3 Task 3\n');
console.log(objThree);

//E4.4
console.log('');

function DeviceSocket(name) {
	this.name = name
}

DeviceSocket.prototype.enable = function() {
	console.log('The device is turned on');
}

DeviceSocket.prototype.disable = function() {
	console.log('The device is turned off');
}

function Lamp(name, power) {
	this.name = name,
	this.power = power
}

function Computer(name, power) {
	this.name = name,
	this.power = power
}

Lamp.prototype = new DeviceSocket()
Computer.prototype = new DeviceSocket()

Lamp.prototype.enable = function() {
	console.log('The lamp is turned on');
}
Lamp.prototype.disable = function() {
	console.log('The lamp is turned off');
}
Computer.prototype.enable = function() {
	console.log('The computer is turned on');
}
Computer.prototype.disable = function() {
	console.log('The computer is turned off');
}

const lamp = new Lamp('lampOne', 100);
const computer = new Computer('computerOne', 200);

console.log('E4.4\n')
console.log(lamp);
console.log(lamp.name);
console.log(lamp.power + computer.power);
console.log(computer);
computer.disable();

//E4.5
console.log('');

class DeviceSocketTwo {
	constructor(name) {
		this.name = name
	}

	enable() {
		console.log('The device is turned on');
	}

	disable() {
		console.log('The device is turned off');
	}

}

class LampTwo extends DeviceSocket {
	constructor(name, power) {
		super(name),
		this.power = power
	}

	enable() {
		console.log('The lampTwo is turned on');
	}

	disable() {
		console.log('The lampTwo is turned off');
	}
}

class ComputerTwo extends DeviceSocket {
	constructor(name, power) {
		super(name),
		this.power = power
	}

	enable() {
		console.log('The computerTwo is turned on');
	}

	disable() {
		console.log('The computerTwo is turned off');
	}
}

const lampTwo = new LampTwo('lampTwo', 500);
const computerTwo = new ComputerTwo('computerTwo', 1000);

console.log('E4.5\n');
console.log(lampTwo);
console.log(lampTwo.name);
console.log(lampTwo.power + computerTwo.power);
console.log(computerTwo);
computerTwo.disable();
