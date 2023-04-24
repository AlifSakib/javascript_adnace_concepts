const Car = function (brand, price, stock) {
  this.brand = brand;
  this.price = price;
  this.stock = stock;
};

// New empty object {} is created

const m8 = new Car("BMW", 100000, 5);

console.log(m8);
