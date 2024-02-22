class Calculator {
  cache = 0;
  add(...numbers) {
    // let totalSum = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     totalSum += numbers[i];
    // }
    // return totalSum;

    //     let totalSum = 0;
    //     for (let no of numbers) {
    //       totalSum += no;
    //     }
    //     return totalSum;

    return numbers.reduce((acc, curr) => (acc += curr), 0);
  }
  sub(...numbers) {
    return numbers.reduce((acc, curr) => (acc -= curr), 0);
  }
  memPlus(x) {
    return (this.cache += x);
  }
  memMinus(x) {
    return (this.cache -= x);
  }
  memClear() {
    this.cache = 0;
  }
  memResult() {
    return this.cache;
  }
}

module.exports = Calculator;
