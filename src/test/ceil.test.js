import ceil from '../ceil.js';
describe('ceil()', () => {
  test('rounding a decimal number up to the nearest integer', () => {
    expect(ceil(7.002)).toBe(8);
  });
  test('rounds negative decimals toward zero', () => {
    expect(ceil(-5.006)).toBe(-5);
  });
  test('rounds up with decimal places', () => {
    expect(ceil(72.004, 2)).toBe(72.01);
  });
  test('rounds up with significant figures', () => {
    expect(ceil(6040, -2)).toBe(6100);
  });
  test('returns same value when number is already an integer', () => {
    expect(ceil(7)).toBe(7);
  });
  test('treats precision 0 as normal ceil', () => {
    expect(ceil(4.1, 0)).toBe(5);
    expect(ceil(4.9, 0)).toBe(5);
  });
  test('rounds numeric string values correctly', () => {
    expect(ceil("5.008")).toBe(6);
  });
  test('handles larger significant figures', () => {
    expect(ceil(1234, -3)).toBe(2000);
  });
  test('returns NaN for invalid number input', () => {
    expect(ceil(NaN)).toBeNaN();
  });
});
