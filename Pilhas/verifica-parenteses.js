function verificaParenteses(expressao) {
  const pilha = [];

  // Percorra a expressão
  for (let i = 0; i < expressao.length; i++) {
    // ...
    const caractere = expressao[i];

    // Verifique os casos para cada caractere
    if (caractere === "(" || caractere === "{" || caractere === "[") {
      pilha.push(caractere);
    } else if (caractere === ")" || caractere === "}" || caractere === "]") {

      if (pilha.length === 0) {
        return false;
      }

    const topo = pilha.pop();

    if (
      (caractere === ")" && topo !== "(") ||
      (caractere === "}" && topo !== "{") ||
      (caractere === "]" && topo !== "[")
    ) {
      return false;
    }
  }
}

  // Verifique se a pilha está vazia
  return pilha.length === 0;
}

// Teste a função com diferentes expressões
console.log(verificaParenteses("((2 + 3) * 5)"));  // Saída: true
console.log(verificaParenteses("((2 + 3) * 5"));   // Saída: false
console.log(verificaParenteses(")("));             // Saída: false
console.log(verificaParenteses(""));   // true