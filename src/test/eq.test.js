import eq from "../eq.js";
describe("eq()", () => {
  test("returns true for the very same values", () => {
    expect(eq(42, 42)).toBe(true);
    expect(eq("a", "a")).toBe(true);
    expect(eq(true, true)).toBe(true);
  });
  test("returns false for different values", () => {
    expect(eq(1, 2)).toBe(false);
    expect(eq("a", "b")).toBe(false);
    expect(eq(true, false)).toBe(false);
  });
  test("compares object references, not object content", () => {
    const obj = { a: 1 };
    const sameRef = obj;
    const otherObj = { a: 1 };
    expect(eq(obj, sameRef)).toBe(true);
    expect(eq(obj, otherObj)).toBe(false);
  });
  test("treats NaN as equal to NaN", () => {
    //as function mentions Nan,Nan to be true so
    expect(eq(NaN, NaN)).toBe(true);
  });
  test("string and number can be considered equal because of double equal to", () => {
    expect(eq("1", 1)).toBe(true);   
    expect(eq(0, false)).toBe(true);
  });
  test("null and undefined are considered equal due to double equal to", () => {
    expect(eq(null, undefined)).toBe(true);
  });
  test("distinguishes clearly different types/values", () => {
    expect(eq(1, "2")).toBe(false);
    expect(eq([], {})).toBe(false);
    expect(eq(true, "true")).toBe(false);
  });
  test("treats +0 and -0 as equal", () => {
    expect(eq(0, -0)).toBe(true);
    expect(eq(-0, 0)).toBe(true);
  });
});