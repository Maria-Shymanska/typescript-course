// let user: { name: string; age: number } = {
//     age: 30,
// };

// let userNameLikeNumber: { name: string; age: number } = {
//   name: 10,
//   age: 30,
// };

// export {};

// type User = {
//   name: string;
//   age: number;
// };

// let user: User = {
//   name: "Tom",
//   age: 30,
// };

// let userJack: User = {
//   name: "Jack",
//   age: 25,
// };

// export { };


// Тут User — це наш власний тип, який ми створили для представлення користувача.
//  Ми можемо використовувати цей тип скрізь, і ми використали його для двох змінних: user та userJack.
// Крім того, ми можемо використати interface для визначення об'єкта:

// interface User {
//   name: string;
//   age: number;
// }

// let user: User = {
//   name: "Tom",
//   age: 30,
// };

// export {};


// Array

// Масиви в TypeScript — це структури, які є впорядкованим набором елементів. Для оголошення масиву в TypeScript використовується конструкція з квадратними дужками [] або загальний тип Array.

// let arrString: string[];

// Крім того, масиви в TypeScript можуть бути багатовимірними. Наприклад:
// let mixed: (number | string)[] = [1, "two"];

//Ми також можемо вказати тип масиву через узагальнення (generic):

// let numbers: Array<number> = [1, 2, 3, 4, 5];


