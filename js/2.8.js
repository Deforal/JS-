//1
console.log('#1');
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
function sortF(a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
}
console.log(people.sort(sortF));
//2
console.log('#2');
function isPositive(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr1.push(-1)
        } else {
            arr1.push(1)
        }
    }
    return arr1;
};
function isMale(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].gender === "female") {
            arr1.push(-1)
        } else {
            arr1.push(1)
        }
    }
    return arr1;
};
function filter(arr, callback) {
    let arr1 = callback(arr);
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i - count] === -1) {
            arr.splice(i, 1)
            arr1.splice(i, 1)
            i--
        } 
    }
    return arr;
};

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people1, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
//3
console.log('#3');
const timer = (deadline) => {
    if (isNaN(+deadline)) { // + − приводим значение к number, если это NaN,
        console.log('Передано некорректное число'); // выводим сообщение
        return; // выходим из функции
    }

    let time = 3;
    const interval = setInterval(() => {
        console.log(Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('Время истекло!')
    }, deadline * 1000)
};

const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
timer(30);
//4
console.log('#4');
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})
//5
console.log('#5');
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(sayHi)

