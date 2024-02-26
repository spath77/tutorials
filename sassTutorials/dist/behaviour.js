const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);

let position = 0;
let verticalPosition = 0;
let step = 80;

function handleKeyPress(e) {
  if (e.key === "ArrowLeft") {
    position = position - step;
    ball.style.backgroundColor = "blue";
  }
  if (e.key === "ArrowRight") {
    position = position + step;
    ball.style.backgroundColor = "#ff652f";
  }
  if (e.key === "ArrowUp") {
    verticalPosition = verticalPosition - step;
    ball.style.backgroundColor = "blue";
  }
  if (e.key === "ArrowDown") {
    verticalPosition = verticalPosition + step;
    ball.style.backgroundColor = "#ff652f";
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // update the ball's position
}

function refresh() {
  ball.style.left = position + "px";
  ball.style.top = verticalPosition + "px";
}
