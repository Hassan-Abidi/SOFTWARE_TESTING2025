import capitalize from "../capitalize.js";
describe("capitalize()", () => {
  test("turns an all uppercase words into a proper capitalized one", () => {
    expect(capitalize("HASSAN")).toBe("Hassan");
  });
  test("now lowercase into capitalized", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("Makes only first letter capital and change all to lowercase", () => {
    expect(capitalize("nUKHbA")).toBe("Nukhba");
  });
  test("Single letters to change to capital", () => {
    expect(capitalize("h")).toBe("H");
    expect(capitalize("n")).toBe("N");
  });
  test("returns an empty string when input is empty", () => {
    expect(capitalize("")).toBe("");
  });
  test("converts non string values using toString()", () => { 
    expect(capitalize(1234)).toBe("1234");
    expect(capitalize(true)).toBe("True");
    expect(capitalize(false)).toBe("False");
  });
  test("handles null or undefined safely", () => {
    expect(capitalize(null)).toBe("Null");
    expect(capitalize(undefined)).toBe("Undefined");
  });
  test("only capitalizes the very first character, not words after spaces", () => {
    expect(capitalize("nukhba faraz")).toBe("Nukhba faraz");
  });
  test("Using symbols or punctuations like commas, fullstops etc", () => {
    expect(capitalize("!HASSAN")).toBe("!hassan");
    expect(capitalize("9Nukhba")).toBe("9nukhba");
  });
});