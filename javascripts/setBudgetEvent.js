const inputValidation = require('./inputValidation');
const data = require('./data');

const elementSelections = document.getElementsByClassName('element-selections');

const lockInputField = (inputField) => {
  inputField.disabled = true;
};

const unlockInputField = (inputField) => {
  inputField.value = '';
  inputField.disabled = false;
};

const writeBudgetToList = (budget) => {
  document.getElementById('budget-amount').innerHTML = `$${budget}`;
};

const enableElementSelections = (elementSelections) => {
  for (let i = 0; i < elementSelections.length; i++) {
    elementSelections[i].disabled = false;
  };
};

const disableElementSelections = (elementSelections) => {
  for (let i = 0; i < elementSelections.length; i++) {
    elementSelections[i].disabled = true;
  };
};

const changeToChangeBudget = (e,budget) => {
  const inputField = document.getElementById('budget-input');

  if (e.target.innerHTML === 'Set Budget') {
    e.target.innerHTML = 'Change Budget';
    lockInputField(inputField);
    writeBudgetToList(budget);
    enableElementSelections(elementSelections);
  } else {
    e.target.innerHTML = 'Set Budget';
    unlockInputField(inputField);
    writeBudgetToList('0');
    disableElementSelections(elementSelections);
  };
};

const setMovieBudget = (e) => {
  // inputValidation will clear budget value very time when user enters a new value and validate it
  // if pass validation, then will assign the value the budget (data.setBudget)
  inputValidation();
  const budget = data.getBudget();
  if (budget) {
    changeToChangeBudget(e,budget);
  };
};

const setBudget = () => {
  const setBudgetBtn = document.getElementById('set-budget-btn');
  setBudgetBtn.addEventListener('click',setMovieBudget);
};

module.exports = setBudget;
