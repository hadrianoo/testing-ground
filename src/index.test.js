import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test.skip("capitalize first letter", () => {
  expect(capitalize("cat")).toBe("Cat");
});

describe.skip("reverse string", () => {
  test("numbers", () => {
    expect(reverseString("121345")).toBe("543121");
  });
  test("letters", () => {
    expect(reverseString("zxc")).toBe("cxz");
  });
});

describe.skip("calculator", () => {
  test("add", () => {
    expect(calculator.add(1, 2)).toEqual(3);
  });
  test("subtract", () => {
    expect(calculator.subtract(2, 1)).toEqual(1);
  });
  test("subtract return < 0", () => {
    expect(calculator.subtract(3, 4)).toEqual(-1);
  });
  test("divide", () => {
    expect(calculator.divide(4, 2)).toEqual(2);
  });
  test("multiply", () => {
    expect(calculator.multiply(4, 2)).toEqual(8);
  });
});

describe.skip("cesar cipher", () => {
  test("shift by 3", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });
  test("shift another by 3", () => {
    expect(caesarCipher("def", 3)).toBe("ghi");
  });
  test("shift by 2 but end of alphabet", () => {
    expect(caesarCipher("xyz", 2)).toBe("zab");
  });

  test("shift by 3 with UPPER letters", () => {
    expect(caesarCipher("Adrian", 3)).toBe("Dguldq");
  });

  test("shift by 3 with UPPER letters 2", () => {
    expect(caesarCipher("AdrIanx", 3)).toBe("DguLdqa");
  });

  test("shift by 3 spaces >' '<", () => {
    expect(caesarCipher("Space cAt", 3)).toBe("Vsdfh fDw");
  });

  test("shift by 3 punctuation ?!,.", () => {
    expect(caesarCipher("S?pace, cAt!", 3)).toBe("V?sdfh, fDw!");
  });
});

describe("test analyze array", () => {
  test("length test", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ length: 6 });
  });
  test("min test", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ min: 1 });
  });
  test("max test", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ max: 8 });
  });
  test("average test", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ average: 4 });
  });
});
