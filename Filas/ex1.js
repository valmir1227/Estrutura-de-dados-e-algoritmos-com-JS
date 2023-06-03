// Implementação da classe Queue
class Queue {
    constructor() {
      this.queue = []; // Cria um array para armazenar os elementos da fila
    }
  
    enqueue(element) {
      this.queue.push(element); // Adiciona o elemento ao final da fila
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty"; // Retorna uma mensagem se a fila estiver vazia
      }
      return this.queue.shift(); // Remove e retorna o elemento do início da fila
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty"; // Retorna uma mensagem se a fila estiver vazia
      }
      return this.queue[0]; // Retorna o elemento do início da fila, sem removê-lo
    }
  
    isEmpty() {
      return this.queue.length === 0; // Verifica se a fila está vazia
    }
  
    size() {
      return this.queue.length; // Retorna o tamanho da fila
    }
  }
  
  // Exercício: Processamento de Tarefas
  // Imagine que você tem uma lista de tarefas e deseja processá-las em ordem usando uma fila.
  // Implemente um código que leia as tarefas e as coloque em uma fila. Em seguida, processe as tarefas uma por uma,
  // removendo-as da fila e exibindo o nome de cada tarefa processada.
  
  // Criando uma instância da fila
  const taskQueue = new Queue();
  
  // Lendo as tarefas e adicionando-as à fila
  const tasks = ["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4", "Tarefa 5"];
  tasks.forEach((task) => taskQueue.enqueue(task));
  
  // Processando as tarefas uma por uma
  while (!taskQueue.isEmpty()) {
    const task = taskQueue.dequeue(); // Remove e retorna a próxima tarefa da fila
    console.log(`Processando a tarefa: ${task}`);
  }
  
  // Saída esperada:
  // Processando a tarefa: Tarefa 1
  // Processando a tarefa: Tarefa 2
  // Processando a tarefa: Tarefa 3
  // Processando a tarefa: Tarefa 4
  // Processando a tarefa: Tarefa 5
  