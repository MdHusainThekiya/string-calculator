const StringCalculator = require('../src/stringCalculator');

describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('returns 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    test('returns the number itself if only one number is provided', () => {
        expect(calculator.add("1")).toBe(1);
    });

    test('returns the sum of two numbers', () => {
        expect(calculator.add("1,2")).toBe(3);
    });

    test('returns the sum of multiple numbers', () => {
        expect(calculator.add("1,2,3")).toBe(6);
    });

    test('handles new lines as delimiters', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    test('supports custom delimiters', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    test('throws an exception when a negative number is provided', () => {
        expect(() => calculator.add("1,-2,3")).toThrow('negative numbers not allowed: -2');
    });

    test('throws an exception listing all negative numbers', () => {
        expect(() => calculator.add("1,-2,-3")).toThrow('negative numbers not allowed: -2, -3');
    });
});
