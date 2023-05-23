function inverterString(string) {
    const stack = [];
    let invertedString = '';
  
    for (let i = 0; i < string.length; i++) {
      stack.push(string[i]);
    }
  
    while (stack.length > 0) {
      invertedString += stack.pop();
    }
  
    return invertedString;
  }
  
  // Exemplo de uso da função de inversão de string
  const originalString = 'Hello, world!';
  
  const invertedString = inverterString(originalString);

  console.log(invertedString);
  