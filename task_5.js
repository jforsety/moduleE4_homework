//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance
{
    constructor(name, power)
    {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn()
    {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    getPowerUsed()
    {
        return this.isPlugged ? this.power : 0;
    }
}

const lampa = new ElectricalAppliance('lampa', 30);
const computer = new ElectricalAppliance('computer', 1500);

console.log(lampa.getPowerUsed() + computer.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed());

computer.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed());