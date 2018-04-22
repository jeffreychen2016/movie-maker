const categoriesSelectedArray = [];

const getUniqueCategorySelected = (e) => {
  const categorySelected = e.target.classList[1];
  if (e.target.checked) {
    categoriesSelectedArray.push(categorySelected);
  } else {
    categoriesSelectedArray.splice(categoriesSelectedArray.indexOf(categorySelected),1);
  };

  const uniqueCategory = Array.from(new Set(categoriesSelectedArray));
  return uniqueCategory;
};

const updateProgressBar = (e) => {
  const allCategoriesCounts = document.getElementsByClassName('category').length;
  const categoryCounts = getUniqueCategorySelected(e).length;
  const progressBar = document.getElementById('progress-bar');

  const percentage = categoryCounts / allCategoriesCounts * 100;
  progressBar.style.width = `${percentage}%`;
  progressBar.innerHTML = `${percentage}%`;
};

const addElementEvent = () => {
  const elementSelections = document.getElementsByClassName('element-selections');
  for (let i = 0; i < elementSelections.length; i++) {
    elementSelections[i].addEventListener('change',updateProgressBar);
  };
};

module.exports = addElementEvent;
