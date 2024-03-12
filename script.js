function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

  if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    alert("Please enter valid weight and height values.");
    return;
  }

  var bmi = weight / (height * height);
  document.getElementById("result").textContent = "Your BMI: " + bmi.toFixed(2);
}
function resetForm() {
  document.getElementById("bmiForm").reset();
  document.getElementById("result").textContent = "";
}
