const MATH_OPERATIONS = {
  plus: '+',
  minus: '-',
  divide: '÷',
  multiply: '*',
  sqrt: 'sqrt',
  pow: '^'
};

class Calculator {
  constructor() {
    this.readyToReset = false;
    this.clear();
  }

  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operation = null;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (this.readyToReset) {
      this.readyToReset = false;
      this.operation = null;
      if (number === '.') this.currentOperand = '0.';
      else this.currentOperand = number;
      return;
    }
    if (number === 'minus') {
      this.currentOperand = '-';
      return;
    }
    if (number === '.' && this.currentOperand === '-') {
      this.currentOperand = '-0.';
      return;
    }
    if (number === '.' && this.currentOperand === '') {
      this.currentOperand = '0.';
      return;
    }
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.operation && operation === 'sqrt') return;
    if (this.readyToReset) this.readyToReset = false;
    if (this.currentOperand === '' && operation === 'sqrt') {
      this.clear();
      return;
    }
    if (
      this.currentOperand === '-' &&
      operation === 'minus' &&
      this.previousOperand === ''
    ) {
      this.currentOperand = '';
      this.operation = null;
      return;
    }
    if (this.currentOperand === '-' && operation === 'minus') {
      this.currentOperand = '';
      return;
    }
    if (this.currentOperand === '.' || this.currentOperand === '-') return;
    if (operation === 'sqrt') {
      this.operation = operation;
      this.readyToReset = true;
      this.compute();
      return;
    }
    if (
      (this.currentOperand === '' || this.currentOperand === '-') &&
      operation === 'minus'
    ) {
      this.appendNumber(operation);
      return;
    }
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute(isEquals) {
    let computation;
    const current = parseFloat(this.currentOperand);
    if (this.operation === 'sqrt') {
      computation = Math.sqrt(current);
    } else {
      const prev = parseFloat(this.previousOperand);
      if (Number.isNaN(prev) || Number.isNaN(current)) return;
      switch (this.operation) {
        case 'plus':
          computation = prev + current;
          break;
        case 'minus':
          computation = prev - current;
          break;
        case 'divide':
          computation = prev / current;
          break;
        case 'multiply':
          computation = prev * current;
          break;
        case 'pow':
          computation = prev ** current;
          break;
        default:
          return;
      }
    }
    // Floating point precision handling
    computation = Math.round(computation * 10 ** 12) / 10 ** 12;

    this.currentOperand = computation;
    this.operation = null;
    this.previousOperand = '';
    if (isEquals) this.readyToReset = true;
  }

  getDisplayNumber(number) {
    if (number === '-') return number;
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (Number.isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay(previousOperandTextElement, currentOperandTextElement) {
    if (Number.isNaN(this.currentOperand)) {
      previousOperandTextElement.innerText = '';
      currentOperandTextElement.innerText = 'Invalid Calculation';
      this.clear();
      return;
    }
    currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation) {
      previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${MATH_OPERATIONS[this.operation]}`;
    } else {
      previousOperandTextElement.innerText = this.previousOperand;
    }
  }
}
