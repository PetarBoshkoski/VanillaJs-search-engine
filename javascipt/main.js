import { request } from "./requests.js";
import { buildResults, buildSearch } from "./builds.js";
import { clearInputField, getSearchTerm, getCharsByWidth, removeChildren, numberOfResults } from "./data.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    init();
  }
});

const init = () => {
  const input = document.getElementById("searchInput");
  input.focus();
};

document.getElementById("submitButton").addEventListener("click", (event) => {
  const searchTerm = getSearchTerm();
  const numberChars = getCharsByWidth();
  event.preventDefault();
  removeChildren();
  const api = request(
    `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=16&prop=pageimages|extracts&exchars=${numberChars}&exintro&explaintext&exlimit=max&format=json&origin=*`
  );
  api.then((result) => {
    const resultArray = buildResults(result);
    numberOfResults(resultArray.length);
    buildSearch(resultArray);
  });
});

document.getElementById("clearText").addEventListener("click", () => {
    clearInputField();
})


document.getElementById("searchInput").addEventListener("input", (event) => {
    const clear = document.getElementById("clearText");
    if(event.target.value != "") {
        clear.classList.remove("none");
    }
    else {
        clear.classList.add("none");
    }
})