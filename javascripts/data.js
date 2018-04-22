let categories = [];
let elements = [];
let budget = 0;
let cart = [];
let uniqueCategory = [];
let completeness = 0;

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

const getBudget = () => {
  return budget;
};

const setBudget = (budgetInput) => {
  budget = budgetInput;
};

const getCart = () => {
  return cart;
};

const setCart = (elementAddToCart) => {
  cart = elementAddToCart;
};

const getRemainingBalance = () => {
  let totalCost = 0;
  const totalBudget = getBudget();
  const elementsInCart = getCart();
  elementsInCart.forEach((element) => {
    totalCost += element.cost * 1;
  });

  const remainingBalance = totalBudget - totalCost;
  return remainingBalance;
};

const getUniqueCategory = () => {
  return uniqueCategory;
};

const setUniqueCategory = (uniqueCategoryArray) => {
  uniqueCategory = uniqueCategoryArray;
};

const getCompletenss = () => {
  return completeness;
};

const setCompleteness = (completenessPercentage) => {
  completeness = completenessPercentage;
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
  setBudget,
  getBudget,
  setCart,
  getCart,
  getRemainingBalance,
  setUniqueCategory,
  getUniqueCategory,
  setCompleteness,
  getCompletenss,
  // classifyCategory,
};
