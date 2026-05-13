function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function cipheredAlphabet(shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let _ = 0; _ < shift; _++) {
    const firsEle = alphabet.shift();
    alphabet.push(firsEle);
  }
  return alphabet;
}

function caesarCipher(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const punctuation = "?.,!";

  let indexArray = [];

  for (let i = 0; i < string.length; i++) {
    indexArray.push(
      alphabet
        .split("")
        .findIndex((value) => string.at(i).toLowerCase() === value),
    );
  }

  const newString = indexArray.map((index) =>
    cipheredAlphabet(shift).at(index),
  );

  return newString
    .map((value, index) => {
      if (string.at(index) === " " || punctuation.includes(string.at(index))) {
        return string.at(index);
      }
      if (string.at(index) === string.at(index).toUpperCase()) {
        return value.toUpperCase();
      }
      return value;
    })
    .join("");
}

function analyzeArray(array) {
  const length = array.length;
  const minMax = array.sort((a, b) => a - b);
  const average = array.reduce((prev, value) => prev + value, 0) / length;
  const object = {
    length: length,
    min: minMax.at(0),
    max: minMax.at(-1),
    average: average,
  };

  return object;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
