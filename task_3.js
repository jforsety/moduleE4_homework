/* Написать функцию, которая создает пустой объект, но без прототипа.*/

const myObj = newObject();

function newObject() {
    return new Object();
}