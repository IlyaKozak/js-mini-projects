const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function removeTemperatureSymbols() {
  celsiusInput.classList.remove('celsius');
  fahrenheitInput.classList.remove('fahrenheit');
  kelvinInput.classList.remove('kelvin');
}

function addTemperatureSymbols() {
  celsiusInput.classList.add('celsius');
  fahrenheitInput.classList.add('fahrenheit');
  kelvinInput.classList.add('kelvin');
}

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function celsiusToFahrenheitAndKelvin() {
  const cTemp = parseFloat(celsiusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;


  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp); 
  if (!isNaN(cTemp)) {
    addTemperatureSymbols();  
  } else {
    removeTemperatureSymbols();
  }
}

function fahrenheitToCelsiusAndKelvin() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = (fTemp + 459.67) * (5 / 9);

  celsiusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
  if (!isNaN(fTemp)) {
    addTemperatureSymbols();  
  } else {
    removeTemperatureSymbols();
  }
}

function kelvinToCelsiusAndFahrenheit() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = (9 / 5) * (kTemp - 273) + 32;

  celsiusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
  if (!isNaN(kTemp)) {
    addTemperatureSymbols();  
  } else {
    removeTemperatureSymbols();
  }
}

function main() {
  celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
  fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
  kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit);
}

main();