let categories = [];
let elements = [];

// const category1 = [];
// const category2 = [];
// const category3 = [];
// const category4 = [];

const setCategories = (categoriesData) => {
  categories = categoriesData;
};

const getCategories = () => {
  return categories;
};

const setElements = (elementsData) => {
  elements = elementsData;
};

const getElements = () => {
  return elements;
};

// const classifyCategory = () => {
//   const allCategories = document.getElementsByClassName('category');
//   const allElements = getElements();
//   for (let i = 0; i < allCategories.length; i++) {
//     allElements.forEach((element) => {
//       if (element.categoryId * 1 === allCategories[i].id * 1) {
//         if (element.categoryId * 1 === 1) {
//           category1.push(element);
//         } else if (element.categoryId * 1 === 2) {
//           category2.push(element);
//         } else if (element.categoryId * 1 === 3) {
//           category3.push(element);
//         } else {
//           category4.push(element);
//         };
//       };
//     });
//   };
// };

module.exports = {
  setCategories,
  getCategories,
  setElements,
  getElements,
  // classifyCategory,
};
