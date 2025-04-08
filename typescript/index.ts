// 1. Basic Types
// Declare variables of type string, number, and boolean. Assign values and log them.

const age: number = 22;
const myName: string = "Ilya";
const isIntern: boolean = true;

console.log(myName, age, isIntern);

// 2. Arrays and Tuples
// Create an array of numbers and a tuple with a string and a number. Print both

const numbers: number[] = [21, 17, 34, 42];
const friend: [string, number] = ["Mark", 19];

console.log(numbers);
console.log(friend);

// 3. Functions and Type Annotations
// Write a function that takes two numbers as parameters, adds them, and returns the result with type annotation

function sumTwoNumbers(a: number, b: number): number {
  return a + b;
}

console.log(sumTwoNumbers(1, 3));

// 4. Interfaces
// Define an interface Person with properties name: string and age: number. Create an object using this interface

interface Person {
  name: string;
  age: number;
}

const student: Person = {
  id: 1,
  name: "Sam",
  age: 21,
};

// 5. Optional and Readonly Properties
// Modify the Person interface to add an optional property email: string and a readonly property id: number.

interface Person {
  name: string;
  age: number;
  email?: string;
  readonly id: number;
}

// 6. Union Types
// Create a function that accepts a parameter that can be either a string or number and logs it.

function logger(variable: string | number): void {
  console.log(variable);
}

logger(21);
logger("twenty one");

// 7. Type Aliases
// Create a type alias UserID that can be a string or number. Use it to declare a variable.

type UserID = string | number;

const carID: UserID = "231uihwwd323n";

// 8. Enum
// Create an enum named Status with values Pending, InProgress, and Completed. Log one value

enum Status {
  PENDING = "Pending",
  INPROGRESS = "In progress",
  COMPLETED = "Completed",
}

console.log(Status.PENDING);

// 9. Classes and Constructors
// Create a class Car with properties brand: string and year: number. Add a constructor and a method to display car details.

class Car {
  brand: string;
  year: number;

  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }

  details(): void {
    console.log(`Brand: ${this.brand}, Year: ${this.year}`);
  }
}

const toyota = new Car("Toyota", 2022);
toyota.details();

// 10. Extending Classes
// Create a subclass ElectricCar that extends Car and adds a batteryCapacity: number property.

class ElectricCar extends Car {
  batteryCapacity: number;

  constructor(brand: string, year: number, batteryCapacity: number) {
    super(brand, year);

    this.batteryCapacity = batteryCapacity;
  }

  details(): void {
    console.log(
      `Brand: ${this.brand}, Year: ${this.year}, Battery Capacity: ${this.batteryCapacity}`
    );
  }
}

const tesla = new ElectricCar("Toyota", 2022, 200);
tesla.details();

// 11. Generics - Functions
// Create a generic function that takes an array of any type and returns its length.

function calcArrayLength<Type>(array: Type[]) {
  return array.length;
}

console.log(calcArrayLength<Number>([1, 2, 3, 4]));
console.log(calcArrayLength<String>(["1", "2", "3", "4"]));
console.log(calcArrayLength<String | Number>([1, 2, "3", "4"]));

// 12. Generics - Interfaces
// Create a generic interface Box<T> with a property value: T. Instantiate it with a string.

interface Box<T> {
  value: T;
}

const wrapper: Box<String> = {
  value: "lists",
};

// 13. Type Assertions
// Declare a variable as unknown and  use type assertion to treat it as a string.

const key: unknown = "2YdnswQI2nJ";
const carKey = <string>key;

// 14. Utility Types
// Use the Partial utility type to create a version of Person where all properties are optional.

const person1: Partial<Person> = {
  email: "person1@gmail.com",
};

// 15. Mapped Types
// Create a mapped type that makes all properties of Person optional.

type PersonMappedType = {
  [Property in keyof Person]?: Person[Property];
};

const person3: PersonMappedType = {
  name: "Mike",
};

// 16. Intersection Types
// Create two interfaces Employee and Manager. Use intersection types to merge them.

interface Employee {
  name: string;
  surname: string;
  post: string;
}

interface Manager {
  subordinates: string[];
  salary: string;
}

type Director = Employee & Manager;

const director: Director = {
  name: "Nicola",
  surname: "Smith",
  post: "SEO",
  subordinates: ["John Smith", "Teresa Blade"],
  salary: "2K",
};

// 17. Keyof Operator
// Create an object and use the keyof operator to get its keys.

interface Coffee {
  country: string;
  amount: number;
}

type X = keyof Coffee;

// 18. Record Type
// Create a Record<string, number> that maps employee names to their salaries.

const usersSalaries: Record<string, number> = {
  "John Smith": 560,
  "Sam Butcher": 720,
  "Emily Jordan": 1000,
};

// 19. Decorators
// Create a class decorator that logs when a class is instantiated.

function classLogger(constructor: any) {
  const newConstructor: any = function (...args: any) {
    console.log("instanciated");
    return new constructor(...args);
  };

  return newConstructor;
}

@classLogger
class ElectricCar2 extends Car {
  batteryCapacity: number;

  constructor(brand: string, year: number, batteryCapacity: number) {
    super(brand, year);

    this.batteryCapacity = batteryCapacity;
  }

  details(): void {
    console.log(
      `Brand: ${this.brand}, Year: ${this.year}, Battery Capacity: ${this.batteryCapacity}`
    );
  }
}

const honda = new ElectricCar2("honda", 2010, 200);
const honda1 = new ElectricCar2("honda", 2010, 200);
const honda2 = new ElectricCar2("honda", 2010, 200);

// 20. Type Guards
// Write a function that checks if a variable is a string or number using type guards

function changeVariable(variable: string | number) {
  if (typeof variable === "string") {
    console.log(variable.toUpperCase()); // compiler already knows that in this block of code variable will be string.
  } else {
    console.log(Math.pow(3, variable)); // because of no other variants, compiler says that variable here will be a number
  }
}
