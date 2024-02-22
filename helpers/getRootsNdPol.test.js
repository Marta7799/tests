const getRootsNdPol = require("./getRootsNdPol");

describe("Testing root computation of the second polynomial", () => {
  test("Two roots", () => {
    // (x-1)*(x-2) = x^2 - 2x -x + 2 = x^2 -3x +2
    const [x1, x2] = getRootsNdPol(1, -3, 2); // [1,2]
    expect(x1).toBe(1);
    expect(x2).toBe(2);
  });

  test("Single root", () => {
    // (x-1)*(x-1) = x^2 - 2x -x 1
    const [x1] = getRootsNdPol(1, -2, 1); // [1]

    expect(x1).toBe(1);
    expect(x2).toBeUndefined();
  });

  test("Zero roots", () => {});
  const [x1, x2] = getRootsNdPol(100, -2, 1); // []

  expect(x1).toBeUndefined();
  expect(x2).toBeUndefined();
});
