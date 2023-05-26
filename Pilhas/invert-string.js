function verificaPalindromo(string) {
    // Remova os espaços em branco e converta para letras minúsculas
    const processedString = string.replace(/\s/g, "").toLowerCase();
  
    const pilha = [];
    let reversedString = "";
  
    // Preencha a pilha e construa a string invertida
    for (let i = 0; i < processedString.length; i++) {
      const char = processedString[i];
      pilha.push(char);
      reversedString = char + reversedString;
    }
  
    // Compare a string original com a string invertida
    return processedString === reversedString;
  }
  
  // Teste a função com diferentes strings
  console.log(verificaPalindromo("Ame a ema"));                    // Saída: true
  console.log(verificaPalindromo("Anotaram a data da maratona")); // Saída: true
  console.log(verificaPalindromo("Elephant"));                    // Saída: false
  console.log(verificaPalindromo("Hello, world!"));               // Saída: false
  