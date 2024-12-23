// 1) Assigned to variables

const greet = function () {
  console.log("Hello, world!");
};
greet(); // Outputs: Hello, world!

// 2) Passed as arguments

function sayHello() {
  return "Hello!";
}

function greet(fn) {
  console.log(fn());
}

greet(sayHello); // Outputs: Hello!

// 3) Returned from other functions

function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Outputs: 10
