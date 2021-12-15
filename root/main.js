/**
 * @author Daniel Büchner Q1b
 * @author Dilara Öczan 1c
 */

const solution = [0];


function quiz() {
	const answers = getAnswers();
	const labels = getLabels()
	const answerIndex = [];

	for (let answer of answers) {
		answerIndex.push(answer.indexOf(true));
	}

	if (JSON.stringify(answerIndex) == JSON.stringify(solution)) {
		alert("SUPER, ALLES RICHTIG!");
	} else for (let i = 0; i < solution.length; i++) {
		labels[i][answerIndex[i]].style.color = "red";
		labels[i][solution[i]].style.color = "lime";
	}
}

function getAnswers() {
	const answers = []
	for (let i = 0; i < solution.length; i++) {
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
	for (let i = 0; i < solution.length; i++) {
		labels.push([
			document.getElementsByTagName("label")[i * 3 + 0],
			document.getElementsByTagName("label")[i * 3 + 1],
			document.getElementsByTagName("label")[i * 3 + 2]
		]);
	}
	return labels;
}

