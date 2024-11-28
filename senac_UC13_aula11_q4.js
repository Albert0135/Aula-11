/**
 * Exibe cada palavra de um array em ordem reversa.
 *
 * @param {string[]} palavras - Lista de palavras a ser exibida.
 *
 * @returns {void}
 */
function exibirPalavrasReverso(palavras) {

    for (let i = palavras.length - 1; i >= 0; i--) {
        console.log(palavras[i]);
    }
}

exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);