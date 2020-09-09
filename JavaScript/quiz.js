function validate(answer, questionID) {
  var x, text;

	// Get element of question area
	var epicQuestion = document.getElementById(questionID);

  // Get value from thing
  x = epicQuestion.getElementsByClassName("number")[0].value;

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
  epicQuestion.getElementsByClassName("result")[0].innerHTML = text;

	// Provide explanation to answer
	var explanation =  epicQuestion.getElementsByClassName("hideExplanation")[0];
	explanation.classList.add("showExplanation")
}
