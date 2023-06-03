class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "A fila está vazia";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "A fila está vazia";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("A fila está vazia");
      } else {
        console.log("Fila:", this.items.join(", "));
      }
    }
  }
  
  // Exemplo de uso da fila
  const fila = new Queue();
  fila.enqueue(10);
  fila.enqueue(20);
  fila.enqueue(30);
  fila.print(); // Fila: 10, 20, 30
  console.log("Tamanho da fila:", fila.size()); // Tamanho da fila: 3
  console.log("Elemento da frente:", fila.front()); // Elemento da frente: 10
  console.log("Elemento removido:", fila.dequeue()); // Elemento removido: 10
  fila.print(); // Fila: 20, 30
  