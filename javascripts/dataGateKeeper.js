const loadElements = require('./xhrElements');
const loadCategories = require('./xhrCategories');
const data = require('./data');
const buildDomString = require('./domString');
const setBudget = require('./setBudgetEvent');
const addElementEvent = require('./elementEvent');

const whenFailToLoad = function () {
  console.log('XHR Fails~~~!');
};

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
  buildDomString.categoryDomString(data.getCategories());
  loadElements(whenElementsLoad,whenFailToLoad);
};

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).elements;
  data.setElements(elementsData);
  buildDomString.elementDomString(data.getElements());
  addElementEvent();
};

const initializer = () => {
  loadCategories(whenCategoriesLoad,whenFailToLoad);
  setBudget();
};

module.exports = initializer;
