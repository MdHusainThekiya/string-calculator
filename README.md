# String Calculator TDD Kata

This project implements a **String Calculator** using **Test-Driven Development (TDD)** principles. The calculator can sum a string of comma-separated numbers, handle custom delimiters, and throw exceptions for negative numbers.

## Features

- Accepts a string of numbers separated by commas or new lines and returns their sum.
- Supports custom delimiters (e.g., `//[delimiter]\n[numbers]`).
- Throws an exception for negative numbers, showing all negative numbers in the error message.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd string-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. **Calculator Function**

   The main function is `add(numbers)` which accepts a string of numbers and returns their sum.

   Example usage:
   ```javascript
   const StringCalculator = require('./src/stringCalculator');
   const calculator = new StringCalculator();

   console.log(calculator.add("1,2,3")); // Output: 6
   console.log(calculator.add("//;\n1;2")); // Output: 3
   ```

## Testing

This project uses **Jest** for unit testing. To run the test suite:

```bash
npm test
```

### Example Test Cases

1. **Empty string** returns `0`.
2. **Single number** returns the number itself.
3. **Multiple numbers** are summed (e.g., `"1,2,3"` returns `6`).
4. **New lines between numbers** are treated as delimiters (e.g., `"1\n2,3"` returns `6`).
5. **Custom delimiter** can be specified (e.g., `"//;\n1;2"` returns `3`).
6. **Negative numbers** throw an exception (e.g., `"1,-2,3"` throws `"negative numbers not allowed: -2"`).

## Project Structure

```
string-calculator/
  ├── src/
  │   └── stringCalculator.js        # String Calculator class
  ├── tests/
  │   └── stringCalculator.test.js   # Unit tests using Jest
  ├── package.json                   # Project configuration and dependencies
  ├── README.md                      # Project documentation
```

## How to Contribute

1. Fork the project.
2. Create your feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.