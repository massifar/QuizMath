var questions = [
	{
		question: " if x = 0 and y = 2x + 2 ==>  y = ?",
		answer: 2
	},
	{
		question: " if x = 2 and x + y = 3 ==> y = ?",
		answer:  1
	},
	{
		question: " if  10 / x + 20 = 22 ==> x =  ?",
		answer: 5
	},
	{
		question: " if  (x + y + z) = 6 and (x + y) = 3 ==> z = ?",
		answer: 3
	},
	{
		question: " if  x/y = 2 and y = 2 ==> x = ?",
		answer: 4
	},
	{
		question: " if (x * y) = 6 and (x * z) = 0 ==> z = ?",
		answer: 0
	},
	{
		question: " if (x * y * z) = 20 and (x * z) = 10 ==> y = ?",
		answer: 2
	}
]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}
