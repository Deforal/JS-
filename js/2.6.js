//1
console.log(`#1`);
let arr = [1, 5, 4, 10, 0, 3];
for (item of arr) {
    if (item === 10) {
        break;
    }
    console.log(item);
};
//2
console.log(`#2`);
console.log(`Номер числа 4 равен ${arr.indexOf(4) + 1}`);
//3
console.log(3);
arr = [1, 3, 5, 10, 20];
console.log(arr.join(''));
//4
console.log(4);
arr = [];
let var1;
var1= [];
for (let i = 0; i < 3; i++) {
    var1.push(1);
};
console.log(var1);
for (let i = 0; i <= 2; i++) {
    arr[i] = var1;
};
console.log(arr);
//5
console.log(5);
arr =[1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);
//6
console.log(6);
arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
for (item of arr) {
    if (String(typeof item) === 'string') {
        arr.splice(arr.indexOf(item), 1);
    };
};
arr.reverse();
console.log(arr);
//7
console.log(7);
let number = prompt();
let index =  arr.indexOf(Number(number));
if (index > 0) {
    console.log(index);
} else {
    console.log(`Такого числа нет`);
};
//8
console.log(8);
let string = 'abcdef';
arr = string.split('');
arr.reverse();
string = arr.join('');
console.log(string);
//9
console.log(9);
arr = [
    [1, 2, 3],
    [4, 5, 6]
];
let newarr = [];
for (item of arr) {
    for (el of item) {
        newarr.push(el);
    }
}
console.log(newarr);
//10
console.log(`#10`);
arr = [1, 3, 5, 3, 77, 33, 12, 45, 37, 76, -150]
arr = arr.reduce((a, b) => a + b)
console.log(arr);
arr = [1, 3, 5, 3, 77, 33, 12, 45, 37, 76, -150];
//11
console.log(`#11`);
function squares(array) {
    let array1 = [];
    for (item of array) {
        item = item**2;
        array1.push(item);
    };
    return array1;
};
console.log(squares(arr));
//12
console.log(`#12`);
arr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
function LengthW(array) {
    let array1 = [];
    for (item of array) {
        array1.push(item.length);
    };
    return array1;
}
console.log(LengthW(arr));
//13
console.log(`#13`);
function posToNeg(array) {
    let array1 = [];
    for (item of array) {
        array1.push(-item);
    };
    return array1;
}
arr = [1, 3, 5, 3, 77, 33, 12, 45, 37, 76];
console.log(posToNeg(arr));
