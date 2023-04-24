// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map(item => item.name)




// console.log(names)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(users) {
//     users.sort((a, b) => a.age - b.age)
// }

// sortByAge(arr);

// console.log(arr)

// теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// function getAverageAge(users) {
//     let maxSum = null
//     let maxUsers = null
//     for (let i = 0; i < users.length; i++) {
//         maxSum += users[i].age
//         maxUsers = i
//     }
//     let avAge = maxSum / (maxUsers + 1)

//     return avAge
// }

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// function unique(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++)
//         if (!result.includes(arr[i])) {
//             result.push(arr[i])
//         }

//     return result
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert(unique(strings)); // кришна, харе, :-O

// let users = [
//     { id: 'john', name: "John Smith", age: 20 },
//     { id: 'ann', name: "Ann Smith", age: 24 },
//     { id: 'pete', name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);

// function groupById(array) {
//     return arrey.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {})
// }
// console.log(usersById)

/*
// после вызова у нас должно получиться:
  
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// function unique(arr) {
//     let arrSet = new Set(arr)
//     for (let i = 0; i < arrSet.length; i++) {
//         arrSet.add(i)
//     }
//     return arrSet
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values))

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function makeStandart(arr) {
//     let trueValue = null
//     let result = null
//     let setArr = new Set()
//     let finalArr = []
//     for (let i = 0; i < arr.length; i++) {
//         trueValue = arr[i]
//         result = arr[i].split('')
//         result = result.sort()
//         result = result.join('')
//         result = result.toUpperCase()
//         setArr.add(result)
//         if (setArr.size > finalArr.length) {
//             finalArr.push(trueValue)
//         }
//     }
//     return finalArr
// }

// let filtrArr = makeStandart(arr)


// console.log(filtrArr)

// alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];

// let allMessages = new WeakSet(messages)

// weak нужны для создания дополнительных хранилищь
// с временными данными для оптимизации памяти

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function sumSalaries(salaries) {
//     let sum = 0
//     for (let value of Object.values(salaries)) {
//         sum += value
//     }
//     return sum
// }

// console.log(sumSalaries(salaries))

// alert( sumSalaries(salaries) ); // 650

// let user = {
//     name: 'John',
//     age: 30
// };

// function count(obj) {
//     let count = Object.keys(obj)
//     return count.length
// }

// console.log(count(user))

// alert( count(user) ); // 2

// let user = {
//     name: "John",
//     years: 30
// };

// let { name, years: age, isAdmin = false } = user


// console.log(name, age, isAdmin)

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries) {
//     let top = null
//     for (let [key, value] of Object.entries(salaries)) {
//         if (top < value) {
//             top = value
//         }
//     }
//     return top
// }

// console.log(topSalary(salaries))

// let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
//     let needDate = date
//     return needDate.setDate(needDate.getDate() - days)
// }

// console.log(getDateAgo(date, 3))

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1)
//     date.setDate(date.getDate() - 1)
//     return date.getDate()
// }

// console.log(getLastDayOfMonth(2012, 0))
// console.log(getLastDayOfMonth(2012, 1))
// console.log(getLastDayOfMonth(2013, 1))

// function getSecondsToday() {
//     let now = new Date()
//     let today = [now.getFullYear()]
//     today.push(now.getMonth())
//     today.push(now.getDate())
//     let dayX = new Date(today)
//     let a = +now
//     let b = +dayX
//     let result = a - b
//     result = result / 1000
//     result = Math.round(result)
//     let min = result / 60
//     let hours = min / 60
// }

// getSecondsToday()

// function getSecondsToTomorrow() {
//     let now = new Date()
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
//     let result = (tomorrow - now) / 1000
//     return Math.round(result)
// }

// getSecondsToTomorrow()

// function formatDate(date) {
//     let now = new Date()
//     let checkDate = new Date(date)
//     let dif = (now - checkDate) / 1000
//     if (dif < 1) {
//         alert("прямо сейчас")
//     } else if (dif < (1 * 60)) {
//         alert(`${Math.round(dif)} сек. назад`)
//     } else if (dif < (1 * 60 * 60)) {
//         alert(`${Math.round(dif)/60} мин. назад`)
//     } else if (dif >= (1 * 60 * 60)) {
//         let date = new Date(dif)
//         alert(date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes)
//     }

// }

// formatDate(2022, 11, 15)

// let user = {
//     name: "Василий Иванович",
//     age: 35
// };

// let json = JSON.stringify(user)

// console.log(JSON.parse(json))

// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//     place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert(JSON.stringify(meetup, function replacer(key, value) {
//     if (kay === meetup) {
//         delete kay
//     }
// }));

// /* в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
// */

// function sumTo(num) {
//     let sum = 0
//     for (let i = 0; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }

// function sumTo(num) {
//     if (num == 1) {
//         return num
//     } else {
//         return num + sumTo(num - 1);
//     }
// }
// console.log(sumTo(5))

// function factorial(n) {
//     if (n == 1) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }

// console.log(factorial(5))

// function fib(n) {
//     return (n - 1) + (n - 2)
// }

// console.log(fib(7))

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function inBetween(a, b) {
//     let arrBetween = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= a && arr[i] <= b) {
//             arrBetween.push(arr[i])
//         }

//     }
//     return arrBetween
// }



// function printList(list){

// }

// function makeCounter() {

//     function counter() {
//         return counter.count++;
//     };

//     counter.count = 0;


//     return counter;
// }

// let counter = makeCounter();

// alert(counter())

// alert(counter())

// alert(counter())

// alert(decrease())


// function printNumbers(from, to) {
//     let now = from

//     function counter(from, to) {
//         if (now <= to) {
//             alert(now)
//             now++
//         }
//     }
//     setInterval(counter, 1000, now, to)

// }

// (printNumbers(2, 10))

// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__: head
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed
// };

// Function.prototype.defer = function(ms) {
//     setTimeout(this.ms)
// }

// class Clock{
//   timer = null

//   constructor(hours){

//     this.hours = hours
//   }
//    date = new Date()

//     get hours(){
//       if (hours < 10){
//          hours = '0' + hours
//         }
//     }




// }

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendedClock extends Clock{

//     precision(timer){
//       this.
//     }
//   }

// class UsersCreat {
//     constructor() {

//     }

//     bildInfo() {
//         this.name = prompt("Введите имя")
//         this.surname = prompt("Введите фамилию")
//         this.age = prompt("Введите возраст")
//     }

// }

// class ExtendedUsers extends UsersCreat {
//     сonstructor() {

//     }
//     addCity() {
//         this.city = prompt("Введите город")
//     }
// }
// let user1 = new UsersCreat()

// let user2 = new ExtendedUsers()

// user2.bildInfo()

// user1.bildInfo()
// user2.addCity()

// console.log(user1)
// console.log(user2)

// class FormatError extends SyntaxError {
//     constructor(message, name, stack) {
//         super(message)
//         this.name = "FormatError"
//     }
// }

// let err = new FormatError("ошибка форматирования")

// async function loadJson(url) {
//     let response = await fetch(url)

//     if (response.status == 200) {
//         let json = await response.json()
//         return json
//     }
//     throw new Error(response.status)
// }

// loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

// let user = {
//     name: "John"
// };

// function wrap(target) {
//     return new Proxy(value, {
//         get(value) {
//             if (value === undefined) {
//                 set(value)
//             }
//             return (value)
//         }
//     });
// }

// user = wrap(user);

// alert(user.name);
// alert(user.age);

// function calculate(calc) {
//     calc = prompt("Введите выражение")
//     alert(eval(calc))
// }

// calculate()