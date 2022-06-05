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