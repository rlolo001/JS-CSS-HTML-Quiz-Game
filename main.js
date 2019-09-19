function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var correct = 0;


	if (question1 == "50") {
		correct++;
}
	if (question2 == "Washington D.C.") {
		correct++;
}
	if (question3 == "Albany") {
		correct++;
}

	if (question4 == "July 4th") {
		correct++;
    }

	var messages = ["Great job!", "Good job", "You can do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 4) {
		score = 1;
	}

	if (correct == 4) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}
