const min = (a, b) => {
    if (a > b) {
        return b;
    }
    else if (a < b) {
        return a;
    }
    else {
        return "Числа одинаковы";
    }
}
console.log(min(5, 5))
const even = (a) => {
    a = prompt("Введите число")
    if (a % 2 === 0) {
        return "Число четное";
    }
    else {
        return "Числа нечетное";
    }
}
console.log(even(5));
function square1(a) {
    a = prompt("Задайте число");
    console.log(a**2);
} 
square1()
function square2(a) {
    a = prompt("Задайте число");
    return a**2;
} 
square2()
function age(age) {
    age = prompt("Сколько вам лет?");
    if (age < 0) {
        console.log("Fuck you");
    } else if (age < 12) {
        console.log("Привет, друг");
    } else if (age >= 13 && age <= 120) {
        console.log("Добро пожаловать!");
    } else {
        console.log ("Полегче с цифрами! Тебе не столько лет");
    }
} 
age()
function number(num1, num2) {
    do {
        num1 = prompt("Введите первое число");
        num2 = prompt("Введите второе число");
        if (String(Number(num1)) === "NaN") {
            console.log("Первое число некорректно, попробуй еще раз");
        };
        if (String(Number(num2)) === "NaN") {
            console.log("Второе число некорректно, попробуй еще раз");
        };
    } while (String(Number(num1)) === "NaN" || String(Number(num2)) === "NaN");
    console.log(num1 * num2)
} 
number()
const cube = () => {
    a = prompt("Введите число!--")
    if (String(Number(a)) === "NaN") {
        console.log("Число некорректно, попробуй еще раз");
    } else {
        console.log(`${a} в кубе равняется ${a**3}`)
    }
}

const circle1 = {
    radius: 15,
    getArea() {
        return this.radius * (3.14**2);
    },
    getPerimeter() {
        return 2 * 3.14 * this.radius
    }
}
const circle2 = {
    radius: 30,
    getArea() {
        return this.radius * (3.14**2);
    },
    getPerimeter() {
        return 2 * 3.14 * this.radius
    }
}