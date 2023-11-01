import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo){
    
        const cartaoProduto = `
        <div class="border-solid w-52 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.religioso ? 'religioso' : 'decoracao'}" id="card-produto-${produtoCatalogo.id}">
        <img src="./assets/img/${produtoCatalogo.imagem}" alt="Produto 1 do Recriar" class="group-hover:scale-110 duration-300 my-3 rounded-lg">
        <p class="text-sm">${produtoCatalogo.marca}</p>
        <p class="text-sm">${produtoCatalogo.nome}</p>
        <p class="text-sm">R$${produtoCatalogo.preco}</p>
            <button id="adicionar-${produtoCatalogo.id}" class="bg-blue-900 hover:bg-sky-500 text-white"><i class="fa-solid fa-cart-plus"></i></button>
        </div>
        `;
        
        document.getElementById("container-produto").innerHTML += cartaoProduto;
    }   
    
    for (const produtoCatalogo of catalogo) {
       document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
   }
}