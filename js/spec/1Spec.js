const euler1 = require("../1.js");
const sumToI = i => i * (i + 1) / 2;

describe("Sum to i = ", () => {
  it("finds all sums up to i = 100 correctly", () => {
    for (var i = 0; i <= 100; i++) {
      let answer = 0;
      for (let j = 0; j <= i; j++) {
        answer += j;
      }
      expect(sumToI(i)).toBe(answer);
    }
  });
  it("finds all sums up to i = 10 correctly", () => {
    for (var i = 0; i <= 10; i++) {
      let answer = 0;
      for (let j = 0; j <= i; j++) {
        answer += j;
      }
      expect(sumToI(i)).toBe(answer);
    }
  });
});
describe("Euler 1 ", () => {
  testInputs = [10, 100];
  testAnswers = [23, 2318];
  it(" works for test1 ", () => {
    testInputs.forEach((input, idx) =>
      expect(euler1(input)).toBe(testAnswers[idx])
    );
  });
  it(" works for n = 1 ", () => {
    expect(euler1(1)).toBe(0);
  });
  it(" works for n = 3 ", () => {
    expect(euler1(3)).toBe(0);
  });
  it(" works for n = 4 ", () => {
    expect(euler1(4)).toBe(3);
  });
  it(" works for n = 5 ", () => {
    expect(euler1(5)).toBe(3);
  });
  it(" works for n = 6 ", () => {
    expect(euler1(6)).toBe(8);
  });
  it(" works for n = 7 ", () => {
    expect(euler1(7)).toBe(14);
  });
  it("doesn't exceed JS safe number ranges", () => {
    for (let i = 1; i < 10; i++) {
      let answer = euler1(10 ** i);
      expect(Number.isSafeInteger(answer)).toBe(true);
      expect(answer).toBeLessThan(Number.MAX_SAFE_INTEGER);
    }
  });
});
