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
