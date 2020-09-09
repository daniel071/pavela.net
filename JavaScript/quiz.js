function validate(answer, resultID, number) {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById(number).value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x != answer) {
    text = "❌ Incorrect!";
  } else {
    text = "✅ Correct!";
  }
  document.getElementById(resultID).innerHTML = text;
}
