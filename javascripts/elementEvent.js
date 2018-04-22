const data = require('./data');
const domString = require('./domString');

const categoriesSelectedArray = [];
const itemsSelectedArray = [];

const addElementToCart = (e) => {
  const itemIDSelected = e.target.dataset.elementId;
  const elementsData = data.getElements();
  elementsData.forEach((element) => {
    if (itemIDSelected * 1 === element.id) {
      itemsSelectedArray.push({id: element.id,name: element.name, cost: element.cost,});
    };
  });

  data.setCart(itemsSelectedArray);
};

const removeElementFromCart = (e) => {
  const itemIDSelected = e.target.dataset.elementId;
  const elementsInCart = data.getCart();
  elementsInCart.forEach((element) => {
    if (itemIDSelected * 1 === element.id * 1) {
      elementsInCart.splice(elementsInCart.indexOf(element),1);
    };
  });

  data.setCart(elementsInCart);
};

const getUniqueCategorySelected = (e) => {
  const categorySelected = e.target.classList[1];
  if (e.target.checked) {
    categoriesSelectedArray.push(categorySelected);
    addElementToCart(e);
  } else {
    // remove first occurence of category from array
    // the progress bar increase/decrease by category, not the elements
    // so only the unique category matters
    categoriesSelectedArray.splice(categoriesSelectedArray.indexOf(categorySelected),1);
    removeElementFromCart(e);
  };
  const uniqueCategory = Array.from(new Set(categoriesSelectedArray));
  data.setUniqueCategory(uniqueCategory);
  return uniqueCategory;
};

const updateProgressBar = (e) => {
  const allCategoriesCounts = document.getElementsByClassName('category').length;
  const categoryCounts = getUniqueCategorySelected(e).length;
  const progressBar = document.getElementById('progress-bar');

  const percentage = categoryCounts / allCategoriesCounts * 100;
  progressBar.style.width = `${percentage}%`;
  progressBar.innerHTML = `${percentage}%`;
  data.setCompleteness(percentage);
  domString.cartDomString(data.getCart(),data.getRemainingBalance(),data.getCompletenss());
};

const addElementEvent = () => {
  const elementSelections = document.getElementsByClassName('element-selections');
  for (let i = 0; i < elementSelections.length; i++) {
    elementSelections[i].addEventListener('change',updateProgressBar);
  };
};

module.exports = addElementEvent;
