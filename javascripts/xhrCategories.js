const loadCategories = (whenCategoriesLoad,whenFailToLoad) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load',whenCategoriesLoad);
  xhr.addEventListener('error',whenFailToLoad);
  xhr.open('GET','../db/categories.json');
  xhr.send();
};

module.exports = loadCategories;
