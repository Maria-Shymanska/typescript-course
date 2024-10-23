// Опис простих (скалярних) типів, їх називають склярними, тому що це прості типи, які містять одне значення.
// boolean: логічний тип даних, який може приймати значення true або false.Приклад:

// let isDone: boolean = false;

// number: числовий тип даних для цілих та дійсних чисел. Приклад:

// let decimal: number = 6;     // десяткові
// let float: number = 3.14;    // речові або число з плаваючою крапкою
// let hex: number = 0xf00d;    // шістнадцяткове
// let binary: number = 0b1010; // двійкове
// let octal: number = 0o744;   // вісімкове

// string: текстовий тип даних для символів та рядків. Приклад:
// let color: string = "blue";


// null та undefined: два спеціальні типи, що відповідають значенням null і undefined відповідно. Приклад:

// let empty: null = null;
// let notParam: undefined = undefined;


// Також не обов'язково вказувати тип даних, якщо ви передаєте його явно.

// const num = 10;
// const str = "Some string";
// const bool = true;
// const empty = null;
// const notParam = undefined;

// Складні типи

// У JavaScript, а отже, і у TypeScript тип Object використовується для зберігання колекції даних або більш складних структур. Він є структурою даних, яка може містити дані різних типів.



// Існує тип даних object:
// let user: { name: string; age: number } = {
//   name: "Tom",
//   age: 30,
// };

// Array

// Масиви в TypeScript — це структури, які є впорядкованим набором елементів. Для оголошення масиву в TypeScript використовується конструкція з квадратними дужками [] або загальний тип Array.

// let arrString: string[];

// Крім того, масиви в TypeScript можуть бути багатовимірними. Наприклад:
// let mixed: (number | string)[] = [1, "two"];

// Масиви також можуть містити елементи різних типів. Наприклад:

// let mixed: (number | string)[] = [1, "two"];


//Ми також можемо вказати тип масиву через узагальнення (generic):

// let numbers: Array<number> = [1, 2, 3, 4, 5];

// Це демонструє всю силу суворої типізації.
// Але іноді нам це не потрібно, і тоді ми можемо скористатися типом даних any:


// let arrAny: any[];

// arrAny = [123, 'TEXT', { name: 'Tom' }, [1, 2, 3]];

// export {};


// в яких випадках може вживатися тип any?

// Наприклад, коли ми працюємо з бібліотекою на JavaScript, що може повертати різні типи даних,
// або в ситуаціях, коли конкретний тип даних не має значення в контексті нашого коду.


// let data: any = fetchData();

// Тип unknown у TypeScript багато в чому схожий на any,
// але він забезпечує більше безпеки під час роботи зі змінними
// Тип unknown підходить для сценаріїв, коли ви не знаєте точного типу даних, але все ж таки хочете підтримувати сувору перевірку типів. Змінні цього типу слід перевіряти перед їх використанням.

// Tuple

// У TypeScript це тип даних, що дозволяє визначити масив з фіксованою кількістю елементів,
// типи яких відомі, але не обов'язково повинні бути однаковими.

// Він створюється як масив, але замість значень ми передаємо типи даних,
// наприклад, [string, number].

// let tupleType: [string, boolean];
// tupleType = ["hello", true]; // OK
// tupleType = [true, "hello"]; // Error. Неправильні типи
// tupleType = ["hello", true, true]; // Error. Більше значень ніж у tuple

// export {};

// Enum

// Ця структура настільки широко використовується, що в TypeScript вирішили додати її як тип даних.
// Цей тип називається enum і, згідно з хорошими практиками програмування, імена змінних цього типу мають починатися з великої літери.

// enum Role {ADMIN, USER};

// Union Type

// Union Type у TypeScript дозволяє вказати, що значенням може бути один із кількох типів. Це дуже зручно, коли хочемо визначити змінну, яка може приймати різні типи даних. Типи перераховуються через вертикальну риску |

// let mixedType: string | number | boolean;


// let mixedType: string | number | boolean;

// mixedType = "string"; // OK
// mixedType = 10; // OK
// mixedType = true; // OK
// mixedType = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'.

// export {};


// Типи для методів та функцій

// Return type — це тип даних, який функція повертає під час її виклику.
// TypeScript дозволяє вказувати тип значення, що повертається для функцій,
// що допомагає зробити ваш код більш зрозумілим і безпечним.

// function greet(): string {
//   return "Hello, world!";
// }

// let result = greet();


// Для стрілочних функцій схожий синтаксис.

// const greet = (): string => {
//   return "Hello, world!";
// };

// let result = greet();

// Custom Types або типи даних користувача, дозволяє визначити нам власні структури даних.

// У TypeScript ви можете визначити власні типи за допомогою ключового слова type. Розглянемо простий приклад:


// Різниця між Type та Interface

// TypeScript надає два основних способи визначення типів у вашому коді: за допомогою type та interface.

// Type та interface у багатьох аспектах дуже схожі, і у багатьох випадках ви можете використовувати їх взаємозамінно.

// Давайте опишемо interface:

// interface Animal {
//   name: string;
// }














