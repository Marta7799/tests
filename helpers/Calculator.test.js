const Calculator = require("./Calculator");

describe("Calculator testing", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test("sum testing", () => {
    const res1 = calc.add(1, 2, 3, 4, 5);
    expect(res1).toBe(15);

    const res2 = calc.add(1);
    expect(res2).toBe(1);
  });

  test("sub testing", () => {
    const res1 = calc.sub(1, 2, 3, 4, 5);
    expect(res1).toBe(-15);

    const res2 = calc.sub(1);
    expect(res2).toBe(-1);
  });

  test("mem+", () => {
    calc.memPlus(100);
    calc.memPlus(200);
    calc.memPlus(300);

    const result = calc.memResult();
    expect(result).toBe(600);
  });

  test("mem-", () => {
    calc.memMinus(100);
    calc.memMinus(200);
    calc.memMinus(300);

    const result = calc.memResult();
    expect(result).toBe(-600);
  });

  test("mem-clear and mem-result", () => {
    expect(calc.memResult()).toBe(0);
    calc.memPlus(10);
    expect(calc.memResult()).not.toBe(0);
    calc.memClear();
    expect(calc.memResult()).toBe(0);
  });
});
