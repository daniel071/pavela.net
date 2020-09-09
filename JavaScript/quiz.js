function validate(answer, resultID, number) {
  var x, text;

  // Get value from thing
  x = document.getElementById(number).value;

  // Check if answer is correct to number provided
  if (isNaN(x) || x != answer) {
    text = "❌ Incorrect!";
  } else {
    text = "✅ Correct!";
  }
  document.getElementById(resultID).innerHTML = text;
}
