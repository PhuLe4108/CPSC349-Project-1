//Homepage script
function homeButtonClicked() {
  let content = document.getElementById("home-button").textContent;
  const result = `${content} button clicked`;
  alert(result);
}

function ScoreButtonClicked() {
  let content = document.getElementById("score-button").textContent;
  const result = `${content} button clicked`;
  alert(result);
}
//
var quiz1Score;
var quiz2Score;
var quiz3Score;
//
function quiz1Score() {
  quiz1Score = document.getElementById("quiz1Score").value;
  alert("Quiz 1 Score: " + quiz1Score);
}
function quiz2Score() {
  quiz2Score = document.getElementById("quiz2Score").value;
  alert("Quiz 2 Score: " + quiz2Score);
}
function quiz3Score() {
  quiz3Score = document.getElementById("quiz3Score").value;
  alert("Quiz 3 Score: " + quiz3Score);
}
