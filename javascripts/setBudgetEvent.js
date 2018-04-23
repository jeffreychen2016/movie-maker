const inputValidation = require('./inputValidation');
const data = require('./data');
const domString = require('./domString');

const elementSelections = document.getElementsByClassName('element-selections');

const lockInputField = (inputField) => {
  inputField.disabled = true;
};

const unlockInputField = (inputField) => {
  inputField.value = '';
  inputField.disabled = false;
};

const writeBudgetToList = (btnStatus) => {
  const budget = data.getRemainingBalance();

  if (btnStatus) {
    document.getElementById('budget-amount').innerHTML = `$${budget}`;
    // if nothing has been selected yet, then do not display any message
    if (data.getUniqueCategory().length < 1) {
      document.getElementById('result').innerHTML = '';
    } else {
      domString.printConclusion(data.getRemainingBalance(),data.getCompletenss());
    };
  } else {
    document.getElementById('budget-amount').innerHTML = `$0`;
    document.getElementById('result').innerHTML = '';
  };
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
    // status true when "set budget", false when "change budget"
    e.target.innerHTML = 'Change Budget';
    lockInputField(inputField);
    writeBudgetToList(true);
    enableElementSelections(elementSelections);
  } else {
    e.target.innerHTML = 'Set Budget';
    unlockInputField(inputField);
    writeBudgetToList(false);
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
