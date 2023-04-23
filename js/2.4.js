let i = 0;
while (i < 3) {
    console.log(i)
    i++
}
i = 0
while (i < 6) {
    console.log(i)
    i++
}
i = 7
while (i < 23) {
    console.log(i)
    i++
}
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for (let item in obj) {
    console.log(`${item} - зарплата ${obj[item]} долларов`);
}
let n = 1000;
i = 0
do {
    n /= 2;
    i++
} while (n > 50) 
console.log(`Получилось число- ${n}`)
console.log(`Количество итеграций равно - ${i}`)
i = 1;
count= 1;
first = 3;
while (count <=31) {
    if (i === 8) {
        i = 1;
    }
    if (i === first) {
        console.log(`Сегодня пятница, ${count}-е число. Необходимо сдать отчет`)
    }
    i++;
    count++;
}