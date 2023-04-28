// const Car = function (brand, price, stock) {
//   this.brand = brand;
//   this.price = price;
//   this.stock = stock;
// };

// New empty object {} is created
// Function is called and this = {}
// enpty objeect is linkd to prototype
// object is returned

// const m8 = new Car("BMW", 100000, 5);

// Car.prototype.totalProfit = function () {
//   return this.price * this.stock;
// };

// console.log(m8.totalProfit());
// console.log(m8 instanceof Car);

// console.log(m8.__proto__);

// const arr = [1, 1, 5, 7, 9, 2, 7, 8, 3, 5, 5];
// console.log(arr);

// class CarCl{

// }

// const carEl = class {
//   constructor(brand, price, stock) {
//     this.brand = brand;
//     this.price = price;
//     this.stock = stock;
//   }

//   // instance method
//   totalProfit() {
//     return this.price * this.stock;
//   }

//   // static method
//   static hello() {
//     console.log("Hello World");
//   }
// };

// const m8 = new carEl("BMW", 100000, 5);
// console.log(m8.totalProfit());
// console.log(m8.__proto__);

// Object.create();

// const CarsProto = {
//   totalProfit() {
//     return this.price * this.stock;
//   },

//   creator(brand, price, stock) {
//     this.brand = brand;
//     this.price = price;
//     this.stock = stock;
//   },
// };

// const m8 = Object.create(CarsProto);

// console.log(m8);

const shohag = {
  company: "Shohag",
  serialCode: "SH-001",
  bookings: [],

  book(name, id) {
    console.log(
      `${name} booked a seat in ${this.company} ${this.serialCode} ${id}`
    );
    this.bookings.push({
      name,
      bus: `${this.company} ${this.serialCode} ${id}`,
    });
  },
};

shohag.book("AlifSakib", 23);
console.log(shohag.bookings);

const book = shohag.book;
// book("Sakib", 20);
book.call(shohag, "Sakib", 20);
console.log(shohag.bookings);

const hanif = {
  company: "Hanif",
  serialCode: "HN-001",
  bookings: [],
};

book.call(hanif, "Jamil", 12);

// Today no code
// Tomorrow no code
// Day after tomorrow no code

// Class Inheritance

const Person = function (name, birthyear) {
  this.name = name;
  this.birthyear = birthyear;
};

Person.prototype.calculateAge = function (year) {
  return year - this.birthyear;
};

const alif = new Person("Alif", 1998);
console.log(alif.calculateAge(2021));

const Student = function (name, birthyear, subject) {
  // this.name = name;
  // this.birthyear = birthyear;
  Person.apply(this, [name, birthyear]);
  this.subject = subject;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function () {
  return `My name is ${this.name} and I study ${this.subject}`;
};

const sakib = new Student("Sakib", 1998, "CSE");
console.log(sakib.intro());
console.log(sakib.calculateAge(2023));
