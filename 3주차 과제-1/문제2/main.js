const button = document.getElementById("changeBtn");

function changeText() {
  const textContainer = document.getElementById("textContainer");
  //  if (textContainer.textContent !== "Hello, JavaScript!") {
  textContainer.textContent = "Hello, JavaScript!";
  //  }
}

button.addEventListener("click", changeText);
