export const createTitle = (titleText, pageId) => {
  const title = document.createElement("div");
  const titleLink = document.createElement("a");
  const content = document.createTextNode(titleText);
  title.classList.add("title");
  title.appendChild(titleLink);
  titleLink.href = `https://en.wikipedia.org/?curid=${pageId}`;
  titleLink.target = "_blank";
  titleLink.appendChild(content);
  return title;
};

export const createImage = (img) => {
  const itemImage = document.createElement("div");
  itemImage.classList.add("itemImage");
  const image = document.createElement("img");
  image.src = img.image;
  image.alt = img.title;
  itemImage.appendChild(image);

  return itemImage;
};

export const createText = (description) => {
  const itemText = document.createElement("div");
  itemText.classList.add("itemText");
  const itemDescription = document.createElement("p");
  itemDescription.classList.add("itemDescription");
  const descriptionContent = document.createTextNode(description);
  itemDescription.appendChild(descriptionContent);
  itemText.appendChild(itemDescription);

  return itemText;
};

export const buildResults = (result) => {
  const results = [];
  if (result.hasOwnProperty("query")) {
    const objectEntries = Object.entries(result.query.pages);
    objectEntries.forEach(([key, value]) => {
      const id = key;
      const title = value.title;
      const description = value.extract;
      const image = value.thumbnail ? value.thumbnail.source : null;
      results.push({
        id: id,
        title: title,
        description: description,
        image: image,
      });
    });
  }
  return results;
};

export const buildSearch = (resultsArray) => {
  const itemsContainer = document.getElementById("resultItems");
  resultsArray.map((el) => {
    const resultItem = document.createElement("div");
    const itemContent = document.createElement("div");
    const title = createTitle(el.title, el.id);
    const itemText = createText(el.description);
    if (el.image) {
      const itemImage = createImage(el);
      itemContent.appendChild(itemImage);
    }
    itemContent.classList.add("itemContent");
    itemContent.appendChild(itemText);
    resultItem.classList.add("resultItem");
    resultItem.appendChild(title);
    resultItem.appendChild(itemContent);
    itemsContainer.appendChild(resultItem);
  });
};
