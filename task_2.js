/*Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/


const person = {
    city: "Moscow",
    timeZone: "+3",
    year: 19
};


function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}

console.log(isProperty(person, "city"))
