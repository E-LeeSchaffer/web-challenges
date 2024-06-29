console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const article = document.createElement("article");
const content = document.createElement("p");
const footer = document.createElement("footer");
const userName = document.createElement("span");
const copiedlikeButton = document.createElement("button");

article.classList.add("post");
content.classList.add("post__content");
footer.classList.add("post__footer");
userName.classList.add("post__username");
copiedlikeButton.classList.add("post__button");

content.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
userName.textContent = "@username";
copiedlikeButton.textContent = "♥ Like";

article.append(content, footer);
footer.append(userName, copiedlikeButton);

document.body.append(article);

copiedlikeButton.addEventListener("click", handleLikeButtonClick);
