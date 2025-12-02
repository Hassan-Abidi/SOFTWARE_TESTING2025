import add from '../add.js';
//Majority of the tests are self written and in all test files a couple are done using
//AI to see what kind of comparisons can be made.
describe('add()', () => {
  test('adds two positive integers', () => {
    expect(add(10, 4)).toBe(14);
  });
  test('adds a positive and a negative integer', () => {
    expect(add(16, -4)).toBe(12);
  });
  test('adds two negative integers', () => {
    expect(add(-5, -3)).toBe(-8);
  });
  test('adds two floating point numbers', () => {
    expect(add(0.1, 0.4)).toBeCloseTo(0.5, 5);
  });
  test('adds integer and foating point number', () => {
    expect(add(15, 0.75)).toBeCloseTo(15.75, 5);
  });
  test('handles large floating point numbers', () => {
    expect(add(1.2345e6, 0.0005)).toBeCloseTo(1234500.0005, 5);
  });
  test('returns 0 when both arguments are 0', () => {
    expect(add(0, 0)).toBe(0);
  });
  test('returns same number when adding zero', () => {
    expect(add(72, 0)).toBe(72);
    expect(add(0, 72)).toBe(72);
  });
  test('handles adding -0 and +0', () => {
    expect(Object.is(add(-0, 0), 0)).toBe(true);
  });
  test('adds numeric strings using JavaScript concatenation', () => {
    expect(add('16', '4')).toBe('164');  
  });
  test('adds number and numeric string using concatenation rules', () => {
    expect(add(5, '15')).toBe('515');
    expect(add('15', 5)).toBe('155');
  });
  test('adds booleans treated as numbers', () => {
    expect(add(true, false)).toBe(1);
    expect(add(true, true)).toBe(2);
  });
  test('adds very large integers', () => {
    expect(add(9007199254740991, 1)).toBe(9007199254740992);
  });
  test('adds numbers in scientific notation', () => {
    expect(add(1e3, 2e3)).toBe(3000);
  });
  test('adds infinity values correctly', () => {
    expect(add(Infinity, 1)).toBe(Infinity);
    expect(add(-Infinity, -5)).toBe(-Infinity);
  });
  test('returns NaN when any argument is NaN', () => {
    expect(add(NaN, 5)).toBeNaN();
    expect(add(5, NaN)).toBeNaN();
  });
});
