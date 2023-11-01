export const catalogo = [
    { 
        id: "1", 
        marca: 'Instituto Recriar', 
        nome: 'Medalha de São Bento Frente',
        preco: 50, 
        imagem: 'product-01.jpeg', 
        religioso: true,
    }, 
    { 
        id: "2", 
        marca: 'Instituto Recriar', 
        nome: 'Casinha de Incenso', 
        preco: 50, 
        imagem: 'product-02.jpeg', 
        religioso: false,
    }, 
    { 
        id: "3", 
        marca: 'Instituto Recriar', 
        nome: 'Nossa Senhora', 
        preco: 150, 
        imagem: 'product-03.jpeg', 
        religioso: true,
    }, 
    { 
        id: "4", 
        marca: 'Instituto Recriar', 
        nome: 'Escultura de Nosso Senhor', 
        preco: 300, 
        imagem: 'product-04.jpeg', 
        religioso: true, 
    },
    { 
        id: "5", 
        marca: 'Instituto Recriar', 
        nome: 'Cruz de Nosso Senhor', 
        preco: 300, 
        imagem: 'product-05.jpeg', 
        religioso: true, 
    },
    { 
        id: "6", 
        marca: 'Instituto Recriar', 
        nome: 'Abajur de Garrafa', 
        preco: 30, 
        imagem: 'product-06.jpeg', 
        religioso: false, 
    },
    { 
        id: "7", 
        marca: 'Instituto Recriar', 
        nome: 'Porta Chaves', 
        preco: 30, 
        imagem: 'product-07.jpeg', 
        religioso: false, 
    }, 
    { 
        id: "8", 
        marca: 'Instituto Recriar', 
        nome: 'Cruz', 
        preco: 150, 
        imagem: 'product-08.jpeg', 
        religioso: true,
    },
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}


export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);

    const elementoArticle = document.createElement("article");
    const articleClasses = ["flex", "bg-sky-100", "rounded-lg", "p-1", "relative", "mb-2", "w-96",];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
    }

    const cartaoProdutoCarrinho = `
        
        <img src="./assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg">
        <div class="p-2 flex flex-col justify-between">
          <p class="text-sm">${produto.nome}</p>
          <p class="text-xs">Tamanho: 50cm x 50cm</p>
          <p class="text-lg">R$${produto.preco}</p>
        </div>
        <div class="flex items-end absolute bottom-0 right-3 text-lg">
            
            <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProduto}</p>
            
        </div>
    `;

    elementoArticle.innerHTML = cartaoProdutoCarrinho;

    containerProdutosCarrinho.appendChild(elementoArticle);

}