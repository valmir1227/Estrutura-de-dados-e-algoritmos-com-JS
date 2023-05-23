class Editor {
    constructor() {
      // Propriedade para armazenar o texto atual
      this.text = '';
  
      // Pilha de desfazer para armazenar as ações realizadas
      this.undoStack = [];
  
      // Pilha de refazer para armazenar as ações desfeitas
      this.redoStack = [];
    }
  
    // Método para inserir texto no editor
    insert(text) {
      // Adiciona o texto à propriedade 'text'
      this.text += text;
  
      // Cria um objeto representando a ação de inserção e adiciona à pilha de desfazer
      this.undoStack.push({ action: 'insert', text });
  
      // Limpa a pilha de refazer, já que uma nova ação foi executada
      this.redoStack = [];
    }
  
    // Método para excluir o último caractere do texto no editor
    delete() {
      // Verifica se há algum texto para excluir
      if (this.text.length > 0) {
        // Obtém o último caractere a ser excluído
        const deletedText = this.text.slice(-1);
  
        // Atualiza o texto removendo o último caractere
        this.text = this.text.slice(0, -1);
  
        // Cria um objeto representando a ação de exclusão e adiciona à pilha de desfazer
        this.undoStack.push({ action: 'delete', text: deletedText });
  
        // Limpa a pilha de refazer, já que uma nova ação foi executada
        this.redoStack = [];
      }
    }
  
    // Método para desfazer a última ação realizada
    undo() {
      // Verifica se há ações para desfazer
      if (this.undoStack.length > 0) {
        // Obtém a última ação realizada
        const lastAction = this.undoStack.pop();
  
        // Verifica o tipo de ação realizada
        if (lastAction.action === 'insert') {
          // Desfaz a inserção removendo a quantidade de caracteres inseridos do texto atual
          this.text = this.text.slice(0, -lastAction.text.length);
  
          // Adiciona a ação desfeita à pilha de refazer
          this.redoStack.push(lastAction);
        } else if (lastAction.action === 'delete') {
          // Desfaz a exclusão adicionando o texto excluído de volta ao final do texto atual
          this.text += lastAction.text;
  
          // Adiciona a ação desfeita à pilha de refazer
          this.redoStack.push(lastAction);
        }
      }
    }
  
    // Método para refazer a última ação desfeita
    redo() {
      // Verifica se há ações desfeitas para refazer
      if (this.redoStack.length > 0) {
        // Obtém a última ação desfeita
        const lastUndoAction = this.redoStack.pop();
  
        // Verifica o tipo de ação desfeita
        if (lastUndoAction.action === 'insert') {
          // Refaz a inserção adicionando o texto inserido de volta ao final do texto atual
          this.text += lastUndoAction.text;
  
          // Adiciona a ação refazida à pilha de desfazer
          this.undoStack.push(lastUndoAction);
        } else if (lastUndoAction.action === 'delete') {
          // Refaz a exclusão removendo a quantidade de caracteres excluídos do final do texto atual
          this.text = this.text.slice(0, -lastUndoAction.text.length);
  
          // Adiciona a ação refazida à pilha de desfazer
          this.undoStack.push(lastUndoAction);
        }
      }
    }
  }
  
  // Exemplo de uso do histórico de editores de texto
  const editor = new Editor();
  editor.insert('Hello');
  editor.insert(', ');
  editor.insert('world!');
  console.log(editor.text); // Hello, world!
  editor.delete();
  console.log(editor.text); // Hello, world
  editor.undo();
  console.log(editor.text); // Hello, world!
  editor.redo();
  console.log(editor.text); // Hello, world
  