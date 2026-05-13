function capitalize(string) {
  if (string === "") return "";
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => {
    if (b === 0) return NaN;
    return a / b;
  },
  multiply: (a, b) => a * b,
};

function cipheredAlphabet(shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < shift; i++) {
    const firsEle = alphabet.shift();
    alphabet.push(firsEle);
  }
  return alphabet;
}

function caesarCipher(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipherAlph = cipheredAlphabet(shift);

  return string
    .split("")
    .map((char, index) => {
      if (!alphabet.includes(char.toLowerCase())) {
        return char;
      }
      const ciperChar = cipherAlph.at(
        alphabet.findIndex((value) => char.toLowerCase() === value),
      );
      if (char === char.toUpperCase()) {
        return ciperChar.toUpperCase();
      }
      return ciperChar;
    })
    .join("");
}

function analyzeArray(array) {
  const length = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const average = array.reduce((prev, value) => prev + value, 0) / length;

  return {
    length,
    min,
    max,
    average,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
