const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

const calculator = new Calculator();

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay(
      previousOperandTextElement,
      currentOperandTextElement
    );
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.dataset.operation);
    calculator.updateDisplay(
      previousOperandTextElement,
      currentOperandTextElement
    );
  });
});

equalsButton.addEventListener('click', () => {
  calculator.compute(true);
  calculator.updateDisplay(
    previousOperandTextElement,
    currentOperandTextElement
  );
});

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay(
    previousOperandTextElement,
    currentOperandTextElement
  );
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay(
    previousOperandTextElement,
    currentOperandTextElement
  );
});
