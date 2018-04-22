const printToDom = (domString,divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const categoryDomString = (categoryArray) => {
  const categoryData = categoryArray;
  let categoryDom = '';
  categoryDom += `<div class='container'>`;
  categoryDom += `<div class='row'>`;
  categoryDom +=  `<div class='col-sm-6'>`;
  for (let i = 0; i < categoryData.length; i++) {
    categoryDom += `<div class='row'>`;
    categoryDom +=  `<div class='col-sm-12'>`;
    categoryDom +=   `<div data-category-id='${categoryData[i].id}' class='category'>`;
    categoryDom +=    `<h2>${categoryData[i].categoryName}</h2>`;
    categoryDom +=    `<div id='element-holder-${categoryData[i].id}'></div>`;
    categoryDom +=   `</div>`;
    categoryDom +=  `</div>`;
    categoryDom += `</div>`;
  };
  categoryDom +=  `</div>`;
  categoryDom +=  `<div class='col-sm-4 col-sm-offset-2 border-around'><h2 class='text-center' id='budget-amount'>$0</h2></div>`;;
  categoryDom += `</div>`;
  categoryDom += `</div>`;
  printToDom(categoryDom,'category-holder');
};

const elementDomString = (elementArray) => {
  const elementData = elementArray;
  let elementDom = '';
  const allCategories = document.getElementsByClassName('category');
  for (let i = 1; i < allCategories.length + 1; i++) {
    elementDom = '';
    elementDom += `<div class='row'>`;
    for (let j = 0; j < elementData.length; j++) {
      if (elementData[j].categoryId * 1 === i) {
        elementDom +=  `<div class='col-sm-4'>`;
        elementDom +=   `<input type='checkbox' class='element-selections' id='category-${i}-${elementData[j].id}' disabled><span>${elementData[j].name}</span>`;
        elementDom +=  `</div>`;
      };
    };
    elementDom += `</div>`;
    printToDom(elementDom,`element-holder-${i}`);
  };
};

module.exports = {
  categoryDomString,
  elementDomString,
};
