var b = 10;
function a() {
  c();
  function c() {
    console.log(b);
  }
}

a();
