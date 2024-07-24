/* Написать, функцию, которая принимает в качестве аргумента объект
 и выводит в консоль все ключи и значения только собственных свойств. 
 Данная функция не должна возвращать значение.*/


const person = {
    city: "Moscow",
    timeZone: "+3",
    year: 19
};

getObjectValues(person);

function getObjectValues(obj) {
    for (var key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}