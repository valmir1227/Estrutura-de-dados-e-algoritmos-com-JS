class PriorityQueue {
  constructor() {
    this.queue = []; // Cria um array para armazenar os elementos da fila com prioridade
  }

  enqueue(element, priority) {
    const queueElement = { element, priority }; // Cria um objeto com o elemento e sua prioridade
    let added = false; // Variável para indicar se o elemento foi adicionado à fila

    for (let i = 0; i < this.queue.length; i++) {
      if (queueElement.priority < this.queue[i].priority) {
        // Verifica se a prioridade do elemento é menor que o elemento atual
        this.queue.splice(i, 0, queueElement); // Insere o elemento na posição correta da fila
        added = true; // Define a flag added como true
        break; // Sai do loop, pois o elemento foi adicionado
      }
    }

    if (!added) {
      this.queue.push(queueElement); // Se o elemento não foi adicionado no loop, insere no final da fila
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty"; // Retorna uma mensagem se a fila estiver vazia
    }
    return this.queue.shift().element; // Remove e retorna o elemento com a maior prioridade (primeiro da fila)
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty"; // Retorna uma mensagem se a fila estiver vazia
    }
    return this.queue[0].element; // Retorna o elemento com a maior prioridade (primeiro da fila)
  }

  isEmpty() {
    return this.queue.length === 0; // Verifica se a fila está vazia
  }

  size() {
    return this.queue.length; // Retorna o tamanho da fila
  }
}

// Exemplo de uso
const priorityQueue = new PriorityQueue(); // Cria uma instância da fila com prioridade
priorityQueue.enqueue("Task 1", 2); // Adiciona um elemento com prioridade 2
priorityQueue.enqueue("Task 2", 1); // Adiciona um elemento com prioridade 1
priorityQueue.enqueue("Task 3", 3); // Adiciona um elemento com prioridade 3

console.log(priorityQueue.dequeue()); // Remove e retorna o elemento com a maior prioridade (Task 2)
console.log(priorityQueue.front()); // Retorna o elemento com a maior prioridade (Task 1)
console.log(priorityQueue.size()); // Retorna o tamanho da fila (2)

