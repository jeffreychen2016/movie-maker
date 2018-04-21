const loadElements = (whenElementsLoad,whenFailToLoad) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load',whenElementsLoad);
  xhr.addEventListener('error',whenFailToLoad);
  xhr.open('GET','../db/movie-elements.json');
  xhr.send();
};

module.exports = loadElements;
