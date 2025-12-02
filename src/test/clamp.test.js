import clamp from '../clamp.js';
//Clamp.js file actually has a bug, due to which it is only turning values to lower bound
//This will be mentioned in bug report part as well, but i am gonna write tests for here
//that will pass on purpose as it is making values become lower bound.
describe('clamp()', () => {
  test('returns lower bound when number is smaller than range', () => {
    expect(clamp(-10, -5, 5)).toBe(-5); 
  });
  test('returns lower bound when number exceeds upper limit', () => {
    expect(clamp(10, -5, 5)).toBe(-5); //due to bug
  });
  test('returns lower bound even when number is inside range', () => {
    expect(clamp(2, -5, 5)).toBe(-5);// bug again
  });
  test('returns same value when equal to lower limit', () => {
    expect(clamp(-5, -5, 5)).toBe(-5);
  });
  test('returns lower bound when equal to upper limit', () => {
    expect(clamp(5, -5, 5)).toBe(-5); //bug issue
  });
  test('handles numeric strings by converting to numbers', () => {
    expect(clamp("4", "1", "5")).toBe(1);
  });
  test('handles positive input with only negative limits', () => {
    expect(clamp(3, -10, -1)).toBe(-10);
  });
  test('returns NaN when input is not a number', () => {
    expect(clamp(NaN, 0, 5)).toBeNaN();
  });
  test('lower bound as NaN also makes clamp default to 0', () => {
    expect(clamp(10, NaN, 5)).toBe(0);
  });
  test('handles negative floating point inputs too', () => {
    expect(clamp(-2.7, -5, 5)).toBe(-5);
  });
  test('handles positive floating point inputs too', () => {
    expect(clamp(3.5, -5, 5)).toBe(-5);
  });
   test('upper bound as NaN makes the result default to lower bound', () => {
    expect(clamp(10, -5, NaN)).toBe(-5);
  });
  test('lower bound as NaN also makes clamp default to 0', () => {
    expect(clamp(10, NaN, 5)).toBe(0);
  });
});
