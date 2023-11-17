// 1
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

//2
let i = 0;
while (i <= 50) {
    console.log(i);
    i++;
}

//3
let person = ['Lewis', 'Charles', 'Carlos', 'George', 'Lando'];


console.log(person);

person.pop()
console.log(person)

person.shift()
console.log(person)

person.unshift('Alex');
console.log(person);

person.push('Valtteri');
console.log(person);

//4
let emptyArray = [];

for (let i = 1; i <= 10000; i++) {
  emptyArray.push(i * i);
}
console.log(emptyArray)

//5
let numberArray = [4, 12, 72, 526, 1438];
let sum = 0;
for (let i = 0; i < numberArray.length; i++) {
  sum += numberArray[i];
}
console.log(sum);

//6
let numbers = [7, 19, 22, 96, 104];
for (let i = 0; i < numbers.length; i++){
    let number=numbers[i];
    if (number % 2 === 0){
        console.log(number, "even")
    } else {
        console.log(number, "odd")
    }
}

//7
let names = ["LeBron", "Anthony", "Austin", "Cameron"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}

//8
let number = [7, 12, 15, 24, 27, 46, 77, 78];
let evenNumber = number.filter(num => num % 2 === 0);
console.log(evenNumber);