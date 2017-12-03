var diagValue = document.getElementById('diagValue');
var heightValue = document.getElementById('heightValue');
var widthValue = document.getElementById('widthValue');
var ratioValue = document.getElementById('ratioValue');
var calculate = document.getElementById('calculate');

calculate.onclick = function() {
  var diag = diagValue.value;
  console.log("Diag: ", diag);
  var ratio = ratioValue.value.split(':');
  var widthRatio = ratio[0];
  var heightRatio = ratio[1];
  console.log("Ratio: ", widthRatio, ":", heightRatio);
  var diagRatio = Math.sqrt(Math.pow(widthRatio, 2) + Math.pow(heightRatio, 2));
  console.log("DiagRatio: ", diagRatio);
  var mulitplier = diag / diagRatio;
  console.log("Multiplier: ", mulitplier);
  var height = heightRatio * mulitplier;
  var width = widthRatio * mulitplier;
  heightValue.innerHTML = Math.round(height * 100) / 100;
  widthValue.innerHTML = Math.round(width * 100) / 100;
  console.log("Height: ", heightValue.innerHTML);
  console.log("Width: ", widthValue.innerHTML);
};
