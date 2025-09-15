// const animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walks");
//   }
// };

// const dog = {
//   barks: true
// };

// // устанавливаем animal как прототип
// dog.__proto__ = animal;

// console.log(dog.eats); // true (нашёлся в прототипе)
// dog.walk();            // "Animal walks"

// let person = {
//     say() { console.log('Hello')},
//     eat: true
// }

// const alex = {
//     name: 'Alex',
//     age: 30
// }

// alex.__proto__ = person;

// alex.say();
// console.log(alex.eat);

// console.log(alex.name);
// console.log(alex.age);

// new WeakMap();

// function cacheFn(fn){
//     const map = new Map();

//     return (...args) => {
//         const key = JSON.stringify(args);

//         if(map.has(key)){
//             console.log("// get from cache");

//             return map.get(key);
//         }

//         const result = fn(...args);
//         console.log('// calc');
//         map.set(key, result);
//         return result;
//     }
// }

// const sum = (a, b) => a + b;
// const sumCache = cacheFn(sum);

// console.log(sumCache(1, 2)); // calc
// console.log(sumCache(2, 4)); // calc
// console.log(sumCache(1, 2)); // get from cache

// let user1 = { name: "Alice" };
// let user2 = { name: "Bob" };

// const visitedUsers = new WeakSet();

// // Добавляем пользователей
// visitedUsers.add(user1);
// visitedUsers.add(user2);

// console.log(visitedUsers.has(user1)); // true

// // Удаляем ссылку на user1
// user1 = null;
// console.log(visitedUsers.has(user1)); // true
// // Теперь объект {name: "Alice"} будет удалён GC из WeakSet автоматически

// let user = { name: "Charlie" };

// const userMeta = new WeakMap();

// // Привяжем скрытые данные к объекту
// userMeta.set(user, { visits: 5 });

// console.log(userMeta.get(user)); // { visits: 5 }

// // Если "забыть" user
// user = null;

// // Объект { name: "Charlie" } и его метаданные будут удалены сборщиком мусора

const logger = store => next => action => {
	console.log('dispatching', action);
	return next(action);
};

logger();

console.log('Hotfix input');
