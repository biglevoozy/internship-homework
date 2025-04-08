// 1. Basic Types
// Declare variables of type string, number, and boolean. Assign values and log them.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var age = 22;
var myName = "Ilya";
var isIntern = true;
console.log(myName, age, isIntern);
// 2. Arrays and Tuples
// Create an array of numbers and a tuple with a string and a number. Print both
var numbers = [21, 17, 34, 42];
var friend = ["Mark", 19];
console.log(numbers);
console.log(friend);
// 3. Functions and Type Annotations
// Write a function that takes two numbers as parameters, adds them, and returns the result with type annotation
function sumTwoNumbers(a, b) {
    return a + b;
}
console.log(sumTwoNumbers(1, 3));
var student = {
    id: 1,
    name: "Sam",
    age: 21,
};
// 6. Union Types
// Create a function that accepts a parameter that can be either a string or number and logs it.
function logger(variable) {
    console.log(variable);
}
logger(21);
logger("twenty one");
var carID = "231uihwwd323n";
// 8. Enum
// Create an enum named Status with values Pending, InProgress, and Completed. Log one value
var Status;
(function (Status) {
    Status["PENDING"] = "Pending";
    Status["INPROGRESS"] = "In progress";
    Status["COMPLETED"] = "Completed";
})(Status || (Status = {}));
console.log(Status.PENDING);
// 9. Classes and Constructors
// Create a class Car with properties brand: string and year: number. Add a constructor and a method to display car details.
var Car = /** @class */ (function () {
    function Car(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    Car.prototype.details = function () {
        console.log("Brand: ".concat(this.brand, ", Year: ").concat(this.year));
    };
    return Car;
}());
var toyota = new Car("Toyota", 2022);
toyota.details();
// 10. Extending Classes
// Create a subclass ElectricCar that extends Car and adds a batteryCapacity: number property.
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(brand, year, batteryCapacity) {
        var _this = _super.call(this, brand, year) || this;
        _this.batteryCapacity = batteryCapacity;
        return _this;
    }
    ElectricCar.prototype.details = function () {
        console.log("Brand: ".concat(this.brand, ", Year: ").concat(this.year, ", Battery Capacity: ").concat(this.batteryCapacity));
    };
    return ElectricCar;
}(Car));
var tesla = new ElectricCar("Toyota", 2022, 200);
tesla.details();
// 11. Generics - Functions
// Create a generic function that takes an array of any type and returns its length.
function calcArrayLength(array) {
    return array.length;
}
console.log(calcArrayLength([1, 2, 3, 4]));
console.log(calcArrayLength(["1", "2", "3", "4"]));
console.log(calcArrayLength([1, 2, "3", "4"]));
var wrapper = {
    value: "lists",
};
// 13. Type Assertions
// Declare a variable as unknown and  use type assertion to treat it as a string.
var key = "2YdnswQI2nJ";
var carKey = key;
// 14. Utility Types
// Use the Partial utility type to create a version of Person where all properties are optional.
var person1 = {
    email: "person1@gmail.com",
};
var person3 = {
    name: "Mike",
};
var director = {
    name: "Nicola",
    surname: "Smith",
    post: "SEO",
    subordinates: ["John Smith", "Teresa Blade"],
    salary: "2K",
};
// 18. Record Type
// Create a Record<string, number> that maps employee names to their salaries.
var usersSalaries = {
    "John Smith": 560,
    "Sam Butcher": 720,
    "Emily Jordan": 1000,
};
// 19. Decorators // ! Needs to be done
// Create a class decorator that logs when a class is instantiated.
function classLogger(ctr) {
    console.log("Class is initialized");
}
var ElectricCar2 = function () {
    var _classDecorators = [classLogger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Car;
    var ElectricCar2 = _classThis = /** @class */ (function (_super) {
        __extends(ElectricCar2_1, _super);
        function ElectricCar2_1(brand, year, batteryCapacity) {
            var _this = _super.call(this, brand, year) || this;
            _this.batteryCapacity = batteryCapacity;
            return _this;
        }
        ElectricCar2_1.prototype.details = function () {
            console.log("Brand: ".concat(this.brand, ", Year: ").concat(this.year, ", Battery Capacity: ").concat(this.batteryCapacity));
        };
        return ElectricCar2_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ElectricCar2");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ElectricCar2 = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ElectricCar2 = _classThis;
}();
var honda = new ElectricCar2("honda", 2010, 200);
// 20. Type Guards
// Write a function that checks if a variable is a string or number using type guards
function changeVariable(variable) {
    if (typeof variable === "string") {
        console.log(variable.toUpperCase()); // compiler already knows that in this block of code variable will be string.
    }
    else {
        console.log(Math.pow(3, variable)); // because of no other variants, compiler says that variable here will be a number
    }
}
