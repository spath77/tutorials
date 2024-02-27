const ball = document.getElementById("ball");
const smallBall = document.getElementById("smallBall");
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
  smallBall.style.left = position + "px";
  smallBall.style.top = verticalPosition + "px";
}

document.addEventListener("mousemove", function (e) {
  let left = e.pageX; //e.pageX or e.offsetX
  let top = e.pageY; //e.pagey or e.offsety
  ball.style.left = left - 20 + "px";
  ball.style.top = top - 120 + "px";
  smallBall.style.left = left - 30 + "px";
  smallBall.style.top = top - 130 + "px";
  document.getElementById("coordx").innerHTML = left;
  document.getElementById("coordy").innerHTML = top;
  ball.style.backgroundColor = `rgba(${left % 255}, ${top % 255}, ${
    (left + top) % 255
  },.8)`;
  smallBall.style.backgroundColor = `rgb(
  ${(left + 10) % 255},
  ${top % 255},
  ${left % 255})`;
});
