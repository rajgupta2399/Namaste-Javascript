// problem with var variable
// function x() {
//   for (var a = 1; a <= 5; a++) {
//     setTimeout(function () {
//       console.log(a);
//     }, a * 1000);
//     console.log(a);
//   }
// }
// x();

// solution with let variable
function x() {
  for (let a = 1; a <= 5; a++) {
    setTimeout(function () {
      console.log(a);
    }, a * 1000);
    console.log(a);
  }
}
x();

// solution with var variable
function close() {
  for (let a = 1; a <= 5; a++) {
    function closure(a) {
      setTimeout(function () {
        console.log(a);
      }, a * 1000);
    }
    closure(a);
  }
}
close();
