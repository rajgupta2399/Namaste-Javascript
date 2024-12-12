// callback function
console.log("start js");

setTimeout(function () {
  console.log("SettimeOut Callback");
}, 5000);

fetch("https://dummyjson.com/products").then(function cbF() {
  console.log("Fetch Api Call");
});

console.log("end js");
