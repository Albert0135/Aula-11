/**
 * Gerencia uma lista de tarefas, adicionando e removendo tarefas.
 *
 * @returns {void}
 */
function gerenciarTarefas() {
    const tarefas = [];

    tarefas.push("Estudar JavaScript", "Fazer exercícios", "Ler um livro");
    tarefas.pop();

    console.log("Lista final de tarefas:", tarefas);
}

gerenciarTarefas();