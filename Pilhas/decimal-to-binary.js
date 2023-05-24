function decimalToBinary(decNumber) {
  const remStack = [];

  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (remStack.length > 0) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(120));
console.log(decimalToBinary(890));
console.log(decimalToBinary(15271627162));
