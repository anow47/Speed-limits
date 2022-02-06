// This function calculate the speed of a car and tells the driver if the speed is normal, fast or too fast.
function speedLimit() {
  let speedLimit = document.getElementById("speed").value;

  if (speedLimit > 60 && speedLimit < 80) {
    message.innerHTML = "you are above the speed limits";
  } else if (speedLimit >= 80 && speedLimit < 100) {
    message.innerHTML = "take care your speed is high";
  } else if (speedLimit >= 100) {
    message.innerHTML = "warning your speed is dangerous";
  } else if (speedLimit === "") {
    message.innerHTML = "Field can't be empty";
  } else if (isNaN(speedLimit)) {
    message.innerHTML = "Speed must be a number";
  } else if (speedLimit < 0) {
    message.innerHTML = "Speed Can't be Negative";
  } else {
    message.innerHTML = "Your speed is fine";
  }
}