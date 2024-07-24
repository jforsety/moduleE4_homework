/* Реализовать следующее консольное приложение подобно примеру, 
который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. 
Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.*/

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
} // метод, который определяет прибор как включенный в розетку

ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " включен!");
    this.isPlugged = true;
}

ElectricalAppliance.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
}

const lampa = new ElectricalAppliance('lampa', 30);
const computer = new ElectricalAppliance('computer', 1500);

console.log(lampa.getPowerUsed() + computer.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed());

computer.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed());