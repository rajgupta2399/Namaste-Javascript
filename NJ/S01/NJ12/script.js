// callback function
setTimeout(function () {
  console.log("callback Function 5 sec timer");
}, 5000);

function x(y) {
  console.log("x called");
  y();
}

x(function () {
  console.log("y called");
});

// closures with eventListener

function closures() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}

closures();
