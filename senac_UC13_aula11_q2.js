/**
 * Gerencia um estoque, permitindo atualizar e visualizar informações.
 *
 * @returns {void}
 */
function gerenciarEstoque() {

    const estoque = ["Item1", "Item2", "Item3", "Item4"];
    estoque[1] = "Item2 Atualizado";

    console.log("Número total de itens no estoque:", estoque.length);
}

gerenciarEstoque();