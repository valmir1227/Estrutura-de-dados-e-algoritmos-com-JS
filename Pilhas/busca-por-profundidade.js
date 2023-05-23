// Definição do grafo de exemplo
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
  };
  
  function buscaProfundidade(graph, start) {
    const visited = new Set();
    const stack = [start];
  
    while (stack.length > 0) {
      const node = stack.pop();
  
      if (!visited.has(node)) {
        console.log(node);
        visited.add(node);
  
        const neighbors = graph[node];
        for (let neighbor of neighbors) {
          stack.push(neighbor);
        }
      }
    }
  }
  
  buscaProfundidade(graph, 'A');
  