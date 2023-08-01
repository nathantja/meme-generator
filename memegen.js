const form = document.querySelector("#memeForm")
const memeContainer = document.querySelector("#memeContainer");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const imageLink = event.target.imageLink.value;
  const topText = event.target.topText.value;
  const bottomText = event.target.bottomText.value;
  generateMeme(imageLink, topText, bottomText);
  form.reset();
  });

function generateMeme(imageLink, topText, bottomText) {
  const memeDiv = document.createElement("div");
  memeDiv.classList.add("memeDiv");

  const memeImage = document.createElement("img");
  memeImage.classList.add("memeImage");
  memeImage.setAttribute("src", imageLink);
  memeDiv.appendChild(memeImage);

  const topTextDiv = document.createElement("div");
  topTextDiv.classList.add("memeText", "topText");
  topTextDiv.textContent = topText
  memeDiv.appendChild(topTextDiv);

  const bottomTextDiv = document.createElement("div");
  bottomTextDiv.classList.add("memeText", "bottomText");
  bottomTextDiv.textContent = bottomText
  memeDiv.appendChild(bottomTextDiv);

  const removeButton = document.createElement("button");
  removeButton.classList.add("removeButton");
  removeButton.textContent = "Remove";
  memeDiv.appendChild(removeButton);

  memeContainer.appendChild(memeDiv);
}

memeContainer.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});