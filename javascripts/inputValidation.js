const data = require('./data');

const inputValidation = () => {
  // clear the Budget before each validation
  // otherwise after first successful valiation, the following validation will always be successful
  const budget = document.getElementById('budget-input').value;
  data.setBudget();
  if (budget === '' || isNaN(budget)) {
  } else {
    data.setBudget(budget);
  };
};

module.exports = inputValidation;
