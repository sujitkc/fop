function subtract() {
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  console.log("x = " + x + " y = " + y);
  document.getElementById("ans").innerText = x - y;
}

