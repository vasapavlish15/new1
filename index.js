// 1. Цикл `for`: Це найбільш загальний тип циклу `for`, який має ініціалізацію, умову продовження і крок ітерації. Він виконується, доки умова продовження виконується. Наприклад:
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Цей цикл виведе числа від 0 до 4. Змінна `i` ініціалізується значенням 0, умова продовження виконується, поки `i` менше 5, і на кожній ітерації `i` збільшується на 1.

// 2. Цикл `for...in`: Цей цикл використовується для перебору властивостей об'єкта. Він проходиться по всіх перераховуваних властивостях об'єкта. Наприклад:
const pers = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in pers) {
  console.log(key + ': ' + pers[key]);
}
// Цей цикл виведе назви властивостей об'єкта `person` разом з їх значеннями.

// 3. Цикл `for...of`: Цей цикл використовується для ітерації по значеннях перебираємих об'єктів, таких як масиви або рядки. Наприклад:
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}
// Цей цикл виведе всі числа з масиву `numbers`.

// 4. Цикл `forEach` (метод масиву): Це спеціальний метод масиву, який дозволяє виконувати певну функцію для кожного елемента масиву. Наприклад:
const colors = ['red', 'green', 'blue'];

colors.forEach(function(color) {
  console.log(color);
});
// Цей цикл виведе всі кольори з масиву `colors`.

// 1. Цикл `while`: Цей тип циклу виконується, доки задана умова є істинною. Умова перевіряється перед кожною ітерацією. Наприклад:

let iWhile = 0;

while (iWhile < 5) {
  console.log(iWhile);
  iWhile++;
}
// Цей цикл виведе числа від 0 до 4. Змінна `i` ініціалізується значенням 0, і поки `i` менше 5, цикл виконується і `i` збільшується на 1 на кожній ітерації.

// 2. Цикл `do...while`: Цей тип циклу подібний до циклу `while`, але умова перевіряється після кожної ітерації, тому код в тілі циклу виконується принаймні один раз незалежно від умови. Наприклад:
let iDoWhile = 0;

do {
  console.log(iDoWhile);
  iDoWhile++;
} while (iDoWhile < 5);
// Цей цикл також виведе числа від 0 до 4. Код в тілі циклу виконується спочатку, а потім умова `i < 5` перевіряється. Якщо умова є істинною, цикл продовжується.

// Ці два типи циклів `while` дають можливість виконувати певні дії, поки вказана умова є істинною. Вони корисні, коли точна кількість ітерацій не відома наперед, і умова може змінюватись під час виконання циклу.









class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    drive() {
      console.log(`Driving ${this.brand} ${this.model}`);
    }
  }
  
  class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
      super(brand, model);
      this.batteryCapacity = batteryCapacity;
    }
  
    charge() {
      console.log(`Charging ${this.batteryCapacity}`);
    }
  }
  
  const myElectricCar = new ElectricCar('Tesla', 'Model S', '100 kWh');
  myElectricCar.drive(); // Виведе: "Driving Tesla Model S"
  myElectricCar.charge(); // Виведе: "Charging Tesla Model S"
  
  // 1. Інкапсуляція: Інкапсуляція - це концепція, що дозволяє об'єднати дані (властивості) та методи, які працюють з цими даними, в один об'єкт. Інкапсуляція дозволяє приховати внутрішню реалізацію об'єкта і забезпечити доступ до нього лише через публічний інтерфейс. Наприклад:
  
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const person = new Person('John', 'Doe');
  console.log(person.getFullName()); // Виведе: "John Doe"
  console.log(person.firstName); // Виведе: "John" (доступ до приватного поля firstName)
  
  // У цьому прикладі клас `Person` має приватні властивості `firstName` та `lastName`. Метод `getFullName()` є публічним і повертає повне ім'я об'єкта `Person`. Приватні властивості можуть бути доступні лише в межах самого класу.
  
  // 2. Наслідування: Наслідування - це механізм, що дозволяє класам успадковувати властивості та методи інших класів. Клас, який успадковує, називається похідним класом або підкласом, а клас, який передає властивості та методи, - базовим класом або батьківським класом. Наприклад:
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Buddy');
  dog.speak(); // Виведе: "Buddy barks."
  
  // У цьому прикладі клас `Dog` успадковує властивості та методи з класу `Animal`. Він перевизначає (override) метод `speak()` для власної реалізації. Об'єкт `dog` створений на основі класу `Dog` та може викликати успадкований метод `speak()`.
  
  // 3. Поліморфізм: Поліморфізм дозволяє об'єктам різних класів мати однаковий інтерфейс (назву методу або властивості), але з різною реалізацією. Це дає змогу викликати однаковий метод на різних об'єктах, що можуть вести себе по-різному. Наприклад:
  
  class Shape {
    calculateArea() {
      // Реалізація розрахунку площі фігури
    }
  }
  
  class Circle extends Shape {
    calculateArea() {
      // Реалізація розрахунку площі кола
    }
  }
  
  class Square extends Shape {
    calculateArea() {
      // Реалізація розрахунку площі квадрата
    }
  }
  
  const circle = new Circle();
  const square = new Square();
  
  console.log(circle.calculateArea()); // Виведе площу кола
  console.log(square.calculateArea()); // Виведе площу квадрата
  
  // У цьому прикладі класи `Circle` та `Square` успадковують метод `calculateArea()` з базового класу `Shape`, але перевизначають його для власної реалізації. Завдяки поліморфізму, ми можемо викликати метод `calculateArea()` на об'єктах `circle` та `square`, і вони повернуть різні результати залежно від своєї реалізації.
  
  // Це лише кілька прикладів, як ООП можна застосовувати в JavaScript. Об'єктно-орієнтоване програмування відкриває широкі можливості для структурування коду, забезпечення повторного використання та зручного управління складними програмами.