let myMath = require('../src/sum');
test('1+1=2', () => {
  expect(myMath.sum(1, 1)).toBe(2);
});
test('1+1=2', () => {
  expect(myMath.sum(1, -1)).toBe(0);
});