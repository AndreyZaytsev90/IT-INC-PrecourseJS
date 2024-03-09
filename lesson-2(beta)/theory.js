/*for (let i = 1; i < 10; i++) {
    console.log(i);
}*/

/*let numbers = [1, 2, 3, 4, 5]; // Пример массива чисел
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    console.log(number);
}*/

let objects = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}]; // Пример массива объектов
for (let i = 0; i < objects.length; i++) {
    const object = objects[i]
    console.log(object.name);
}

for (let i = objects.length-1; i >= 0 ; i--) {
    const object = objects[i]
    console.log(object.name);
}