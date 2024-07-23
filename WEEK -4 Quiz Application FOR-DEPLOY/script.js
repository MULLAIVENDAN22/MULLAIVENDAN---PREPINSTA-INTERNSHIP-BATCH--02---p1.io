let timer = 150;
let score = 0;
let correctAnswers = ["B", "B", "B", "B", "D", "A", "A", "D", "A", "B"];

// Start the timer
setInterval(() => {
  timer--;
  document.getElementById("timer").innerHTML = `Time: ${timer} sec`;
  if (timer === 0) {
    submitQuiz();
  }
}, 1000);

// Add event listeners to the radio buttons
document.querySelectorAll("input[type='radio']").forEach((radio) => {
  radio.addEventListener("click", (e) => {
    const questionNumber = e.target.name.replace("answer", "");
    const correctAnswer = correctAnswers[questionNumber - 1];
    if (e.target.id === correctAnswer) {
      score++;
      document.getElementById("score").innerHTML = `Score: ${score}/10`;
      e.target.parentNode.querySelector(".result").innerHTML = "&#x2714;"; // Green tick
      e.target.parentNode.querySelector(".result").classList.add("correct");
    } else {
      e.target.parentNode.querySelector(".result").innerHTML = "&#x2718;"; // Red cross
      e.target.parentNode.querySelector(".result").classList.add("incorrect");
    }
    // Lock the options
    e.target.parentNode.classList.add("locked");
    e.target.disabled = true;
  });
});

// Submit quiz function
function submitQuiz() {
  alert(`Congratulations! Your score is ${score}/10.`);
  if (score >= 7) {
    alert("Well done! You passed the quiz.");
  } else {
    alert(`Sorry, you didn't pass the quiz. Your score is ${score}/10.`);
  }
}