const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName("hidden"));

    for (const produto of produtosEscondidos) {
        produto.classList.remove("hidden");
    }
}

function esconderReligioso() {
    exibirTodos();
    const produtosReligiosos = Array.from(catalogoProdutos.getElementsByClassName('religioso'));

    for (const produto of produtosReligiosos) {
        produto.classList.add("hidden");
    }
}

function esconderDecoracao() {
    exibirTodos();
    const produtosDecoracaos = Array.from(catalogoProdutos.getElementsByClassName('decoracao'));
    
    for (const produto of produtosDecoracaos) {
        produto.classList.add("hidden");
    }
}

export function inicializarFiltros() {
    document.getElementById("exibir-todos").addEventListener("click", exibirTodos);
    document.getElementById("exibir-religioso").addEventListener("click", esconderDecoracao);
    document.getElementById("exibir-decoracao").addEventListener("click", esconderReligioso);
}