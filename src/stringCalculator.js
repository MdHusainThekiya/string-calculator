class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n', 2);
      delimiter = new RegExp(parts[0][2]);
      numbers = parts[1];
    }

    const numberArray = numbers.split(delimiter).map(Number);

    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
