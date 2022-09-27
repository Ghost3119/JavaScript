function rangeOfNumbers(startNum, endNum) {
  if (startNum - endNum === 0 ) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};