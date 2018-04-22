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
  categoryDom +=  `<div class='col-sm-4 col-sm-offset-2 border-around'>`;
  categoryDom +=    `<h2 class='text-center' id='budget-amount'>$0</h2>`;
  categoryDom +=    `<div id='cart-detail'></div>`;
  categoryDom +=    `<div id='result'></div>`;
  categoryDom +=  `</div>`;
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
        elementDom +=   `<input type='checkbox' class='element-selections element-category-${i}' id='category-${i}-${elementData[j].id}' data-element-id='${elementData[j].id}' disabled><span>${elementData[j].name}</span>`;
        elementDom +=  `</div>`;
      };
    };
    elementDom += `</div>`;
    printToDom(elementDom,`element-holder-${i}`);
  };
};

const cartDomString = (cartArray,budgetLeft,completeness) => {
  const remainingBudget = budgetLeft;
  console.log(completeness);
  let cartDom = '';
  const yesToMakeMovie = 'You can make the movie!';
  const noToMakeMovie = `You can not make the movie!`;
  cartArray.forEach((element) => {
    cartDom += `<p>${element.name}: ${element.cost}</p>`;
  });

  printToDom(`$${remainingBudget}`,'budget-amount');
  printToDom(cartDom,'cart-detail');

  if (remainingBudget < 0 || completeness < 100) {
    document.getElementById('result').classList.remove('yesMovie');
    document.getElementById('result').classList.add('noMovie');
    printToDom(noToMakeMovie,'result');
  } else {
    document.getElementById('result').classList.remove('noMovie');
    document.getElementById('result').classList.add('yesMovie');
    printToDom(yesToMakeMovie,'result');
  };
};

module.exports = {
  categoryDomString,
  elementDomString,
  cartDomString,
};
