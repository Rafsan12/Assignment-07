// 1. ES6 Destructuring
// Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.

const person = {
  name: "Rafsan Ahmed Raj",
  age: 25,
};

const { name, age } = person;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

// 2. ES6 Module
// Problem: Create a module that exports a function to calculate the area of a circle and import it into another file.

import { calculateArea } from "./circle.js";

const radius = 5;
const area = calculateArea(radius);

console.log(`Area of the circle: ${area}`);

// 3. ES6 Classes
// Problem: Create a class Rectangle with properties width and height and a method to calculate the area.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 5);
console.log(`Area of the rectangle: ${rectangle.calculateArea()}`);

// 4. Getter and Setter in ES6
// Problem: Create a class Person with a getter and setter for the fullName property.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person("Rafsan", "Ahmed");
console.log(person.fullName);

person.fullName = "Rafsan Ahmed";
console.log(person.fullName);

// 5. Class Expressions
// Problem: Create a class expression for a Circle with a method to calculate the circumference.

const Circle = class {
  constructor(radius) {
    this.radius = radius;
  }

  calculateCircumference() {
    return 2 * Math.PI * this.radius;
  }
};

const circle = new Circle(5);
console.log(`Circumference of the circle: ${circle.calculateCircumference()}`);

// 6. JavaScript Computed Properties
// Problem: Create an object with computed property names based on variables.

const key1 = "name";
const key2 = "age";

const person = {
  [key1]: "Rafsan",
  [key2]: 25,
};

console.log(person);

// 7. Inheritance
// Problem: Create a base class Animal and a derived class Dog that inherits from Animal.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();

// 8. New Target Operators
// Problem: Use new.target to create an abstract class Shape that cannot be instantiated directly.

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate an abstract class");
    }
  }

  calculateArea() {
    throw new Error("calculateArea method must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

try {
  const shape = new Shape();
} catch (error) {
  console.error(error.message);
}

const circle = new Circle(5);
console.log(`Area of the circle: ${circle.calculateArea()}`);

// 9. Static Methods
// Problem: Create a class MathUtil with a static method square to calculate the square of a number.

class MathUtil {
  static square(number) {
    return number * number;
  }
}

console.log(MathUtil.square(5));

// 10. Symbol
// Problem: Create an object with a symbol as a property key and demonstrate accessing it.

const uniqueKey = Symbol("uniqueKey");

const myObject = {
  [uniqueKey]: "Value associated with the symbol",
};

console.log(myObject[uniqueKey]);

console.log(Object.keys(myObject));
console.log(Object.getOwnPropertySymbols(myObject));
