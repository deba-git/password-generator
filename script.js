// DOM manipulation

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {});

generateEl.addEventListener("click", () => {
  const length = parseInt(lengthEl.value);
  const checkLower = lowercaseEl.checked;
  const checkUpper = uppercaseEl.checked;
  const checkNumber = numbersEl.checked;
  const checkSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    checkLower,
    checkUpper,
    checkNumber,
    checkSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  //  Need to do : 1.initialize a password variable
  // 2. filter out unchecked
  // 3. loop over length call generator password
  // 4. add the final password to return result.el

  // 1.filterout unckecked
  let generatedPassword = "";

  const typesCount = upper + lower + number + symbol;
  // console.log("number of types", typesCount);
  // 2.filter out not selected type
  const typesArray = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
//   console.log("type of arr", typesArray);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i = i + typesCount) {
    typesArray.forEach((type) => {
      const funcName = Object.keys(type)[0];
    //   console.log("function Name", funcName);

      generatedPassword = generatedPassword + randomFunc[funcName]();
    });
  }
   // if we don't use slice , then minimum password would be 4   
      const finalPassword = generatedPassword;
      // const finalPassword = generatedPassword.slice(0,length);
      return finalPassword ; 
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbol = "!@#$%^&*(){}[]=<>/,.";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(getRandomSymbol());
