export const clearInputField = () => {
    const input = document.getElementById("searchInput");
    const clear = document.getElementById("clearText");
    clear.classList.add("none");
    return input.value = "";
}

export const getSearchTerm = () => {
    const input = document.getElementById("searchInput");
    const term = input.value;
  
    return term;
  };

export const getCharsByWidth = () => {
    let numberOfChars = 0;
    const width = window.innerWidth || document.body.clientWidth;
    if (width <= 400) {
      numberOfChars = 50;
    } else if (width > 400 && width <= 900) {
      numberOfChars = 100;
    } else {
      numberOfChars = 200;
    }
    return numberOfChars;
  };

  export const removeChildren = () => {
    const itemsContainer = document.getElementById("resultItems");
    while(itemsContainer.firstChild) {
        itemsContainer.removeChild(itemsContainer.lastChild);
    }
}

export const numberOfResults = (number) => {
    const resultItems = document.getElementById("resultItems");
    resultItems.classList.add("resultsNumber");
    const emptyResult = document.createTextNode("No results for this term");
    const oneResult = document.createTextNode(`Displaying ${number} result`);
    const content = document.createTextNode(`Displaying ${number} results`);
    if(number === 0) {
        resultItems.appendChild(emptyResult);
    }
    else if(number === 1) {
      resultItems.appendChild(oneResult);
  }
    else {
        resultItems.appendChild(content);
    }
}