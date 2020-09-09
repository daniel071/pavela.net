function validate(answer, resultID, number, questionID) {
  var x, text;

	// Get element of question area
	var epicQuestion = document.getElementById(questionID);

  // Get value from thing
  x = document.getElementById(number).value;

  // Check if answer is correct to number provided
  if (isNaN(x) || x != answer) {
    text = "❌ Incorrect!";
		epicQuestion.classList.remove("correctQuestion")
		epicQuestion.classList.add("incorrectQuestion")

  } else {
    text = "✅ Correct!";
		epicQuestion.classList.remove("incorrectQuestion")
		epicQuestion.classList.add("correctQuestion")
  }
  document.getElementById(resultID).innerHTML = text;

	// Provide explanation to answer
	explanation = document.getElementById("explanation")
	explanation.classList.add("showExplanation")
}
