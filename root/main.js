/**
 * @author Daniel Büchner Q1b
 * @author Dilara Öczan Q1b
 */

const quizSolution = [2, 0, 0, 1, 0, 1, 2, 1];
const sectionQuizSolution = [1, 3, 6];

(() => {
	setUpSectionQuiz();
})();


function quiz() {
	const answers = getAnswers();
	const labels = getLabels()
	const answerIndex = [];

	for (let answer of answers) {
		answerIndex.push(answer.indexOf(true));
	}


	console.log(JSON.stringify(answerIndex), JSON.stringify(quizSolution));
	if (JSON.stringify(answerIndex) == JSON.stringify(quizSolution)) {
		openPopup(0)
	} else {

		openPopup(1);

		let counter = 0;

		for (let i = 0; i < quizSolution.length; i++) {
			labels[i][answerIndex[i]].style.color = "red";
			labels[i][quizSolution[i]].style.color = "lime";

			if (answerIndex[i] == quizSolution[i]) counter++;
		}

		document.getElementById("score").innerHTML = `Richtige Antworten: ${counter}/${quizSolution.length}`;
	}
}

function getAnswers() {
	const answers = []
	for (let i = 0; i < quizSolution.length; i++) {
		answers.push([
			document.getElementsByName(`${i}`)[0].checked,
			document.getElementsByName(`${i}`)[1].checked,
			document.getElementsByName(`${i}`)[2].checked
		]);
	}
	return answers;
}

function getLabels() {
	let labels = [];
	for (let i = 0; i < quizSolution.length; i++) {
		labels.push([
			document.getElementsByTagName("label")[i * 3 + 0],
			document.getElementsByTagName("label")[i * 3 + 1],
			document.getElementsByTagName("label")[i * 3 + 2]
		]);
	}
	return labels;
}

function openPopup(type) {
	const popup = document.getElementsByClassName("popup")[type];
	popup.classList.add("active");

	if (type == 1) return

	const confetti = document.getElementsByClassName("confetti")[0];
	confetti.classList.add("active");
}

function closePopup(type) {
	const popup = document.getElementsByClassName("popup")[type];
	const confetti = document.getElementsByClassName("confetti")[0];

	popup.classList.remove("active");
	confetti.classList.remove("active");
}

/**
 * Section quiz für Zuckeraustauschstoffe
 */

function sectionQuiz() {
	const cards = document.getElementsByClassName("card");
	const answers = [];

	let counter = 0;
	for (let card of cards) {
		if (card.classList.contains("active")) answers.push(counter);
		counter++;
	}

	if (answers.length == 0) return;

	if (JSON.stringify(answers) == JSON.stringify(sectionQuizSolution)) {
		// const confetti = document.getElementsByClassName("confetti")[0];
		// confetti.classList.add("active");

		// setTimeout(() => {
		// 	confetti.classList.remove("active");
		// }, 1000);

		alert("SUPER, ALLES RICHTIG!");
	} else for (let i = 0; i < cards.length; i++) {
		if (answers.includes(i)) {
			cards[i].style.color = "red";
		}
		if (sectionQuizSolution.includes(i))
			cards[i].style.color = "lime";
	}
}


/**
 * Section quiz für Zuckeraustauschstoffe
 */

function setUpSectionQuiz() {
	const cards = document.getElementsByClassName("card");

	for (let card of cards) {
		card.addEventListener("click", () => {
			if (card.classList.contains("active")) card.classList.remove("active");
			else card.classList.add("active");
		});
	}
}