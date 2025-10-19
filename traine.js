const loadPostFormElement = document.querySelector(".load-post-form");
const postIdInputElement = document.querySelector("#post-id");
const resultElement = document.querySelector(".result");
loadPostFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`http://localhost:3000/posts/${postIdInputElement.value}`)
    .then((response) => {
      console.log("response: ", response);
      if (!response.ok) {
        const errorMessage =
          response.status === 404 ? "Post doesn't find" : "ERROR";
        throw new Error(errorMessage);
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
      const { title, views } = json;
      resultElement.innerHTML = `<p>${title} , просмотров: ${views}</p>`;
    })
    .catch((error) => {
      resultElement.innerHTML = error.message;
    });
});
