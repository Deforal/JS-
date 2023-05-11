//1
console.log('#1');
let string;
string = "this little string will be BIG"
console.log(string.toUpperCase());
//2
console.log('#2');
let arr = ['Яблоко', 'Груша', 'Слово', 'Воск', 'Шило'];
console.log(arr);
string = prompt('Введите одну или первую букву слов').toLowerCase()
function arrStartsWith(arr, str) {
    let arr1 = [];
    let lowitem;
    for (item of arr) {
        lowitem = item.toLowerCase();
        if (String(lowitem.startsWith(str)) === 'true') {
            arr1.push(item);
        }
    }
    return arr1;
}
console.log(arrStartsWith(arr, string));
//3
console.log('#3');
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));
//4
console.log('#4');
arr = [52, 53, 49, 77, 21, 32];
let maxN = 0;
let minN = Infinity;
for (el of arr) {
    if (el > maxN) {
        maxN = el;
    };
    if (el < minN) {
        minN = el;
    };
}
console.log(`Минимальное = ${minN}, максимальное = ${maxN}`);
//5
console.log('#5');
function randomNum() {
    num = Math.round(Math.random() * 10);
    return num;
}
console.log(randomNum());
arr = []
for (let i = 0; i < 20; i++) {
    num = Math.round(Math.random() * 10);
    arr.push(num);
}
console.log(arr);
//6
console.log('#6');
arr = []
number = Math.round(Number(prompt('Введите число')))
for (let i = 0; i < Math.floor(number / 2); i++) {
    num = Math.round(Math.random() * (number));
    arr.push(num);
}
console.log(arr);
//7
console.log('#7');
arr = []
number1 = Math.round(Number(prompt('Введите первое число')))
number2 = Math.round(Number(prompt('Введите второе число')))
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(number1, number2));
//8
console.log('#8');
let currentDate = new Date('May 08, 2023 12:15:35')
console.log(currentDate.toDateString());
//9
console.log('#9');
currentDate.setDate(currentDate.getDate() + 73)
console.log(currentDate);
//10
console.log('#10');
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC'
};
const weekday = {
    weekday: 'long'
}
currentMonth = currentDate.toLocaleString('ru', options)
currentTime = currentDate.toLocaleTimeString('ru')
let currentWeekday = currentDate.toLocaleString('ru', weekday)
console.log(`Дата: ${currentMonth} - это ${currentWeekday}`);
console.log(`Время: ${currentTime}`);
