let password = '12345';
let check = prompt("Введите пароль")
if (check === password) {
    console.log("Верно")
} else {
    console.log("НеВерно")
};

let number = 2;
0 < number && number < 10 ? console.log("верно") : console.log("неверно");

let d = 5;
let e = 150;
e > 100 || d > 100 ? console.log("верно") : console.log("неверно");
let a = '2'
let b = "3"
a = Number(a)
b = Number(b)
alert(a + b)
let monthNumber = Number(prompt('Напишите номер месяца')); 
switch (monthNumber) {
    case 1: case 2: case 12:
        console.log('Это зима')
        break;
    case 3: case 4: case 5:
        console.log('Это весна')
        break;
    case 6: case 7: case 8:
        console.log('Это лето')
        break;
    case 9: case 10: case 11:
        console.log('Это осень')
        break;
    default:
        console.log('Такого месяца не существует')
        break;
}

if (monthNumber === 1 || monthNumber ===  2 || monthNumber ===  12) {
    console.log('Это зима');
} else if (monthNumber === 3 || monthNumber ===  4 || monthNumber ===  5) {
    console.log('Это весна');
} else if (monthNumber === 6 || monthNumber ===  7 || monthNumber ===  8) {
    console.log('Это лето');
} else if (monthNumber === 9 || monthNumber ===  10 || monthNumber ===  11) {
    console.log('Это осень');
} else {
    console.log('Такого месяца не существует');
}