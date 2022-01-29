// ----------------------------------------------------------------------------------------------------------
//                                         Variáveis globais

let opcaoComida = {nome: "0", preco: 0};    
let opcaoBebida = {nome: "0", preco: 0};     
let opcaoSobremesa = {nome: "0", preco: 0};  


//-----------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------
//     Função para selecionar os itens, salvar suas informações de nome e preço e liberar o pedido

function selecionar(elemento) {
    const opcoesPedidos = elemento.parentNode.getElementsByClassName("opcoes")

    for (let i = 0; i < opcoesPedidos.length; i++) {             //Seleciona o item
        if (opcoesPedidos[i] === elemento) {
            elemento.classList.toggle("selecionado");
            let icone = elemento.querySelector('.check');
            icone.classList.toggle("escondido");
        } else {
            opcoesPedidos[i].classList.remove("selecionado");
            let icone = opcoesPedidos[i].querySelector('.check');
            icone.classList.add("escondido");
        }
    }

    if (elemento.classList.contains("selecionado") === true) {   //Salva as informações
        if (elemento.parentNode.classList.contains("comida") === true) {
            opcaoComida.nome = elemento.querySelector('h2').innerHTML;
            opcaoComida.preco = elemento.querySelector('.preco').innerHTML;
        } else if (elemento.parentNode.classList.contains("bebida") === true) {
            opcaoBebida.nome = elemento.querySelector('h2').innerHTML;
            opcaoBebida.preco = elemento.querySelector('.preco').innerHTML;
        } else {
            opcaoSobremesa.nome = elemento.querySelector('h2').innerHTML;
            opcaoSobremesa.preco = elemento.querySelector('.preco').innerHTML;
        }
    } else {
        const botao = document.querySelector(".botao");                                                                     //Para voltar a bloquear o botão caso o usuário, após selecionar
        const botao_texto = botao.querySelector("p"); botao_texto.innerHTML = "Selecione os 3 itens para fechar o pedido";  //os 3 itens necessários, desmarque novamente um deles.
        botao.classList.remove("liberado");
                                                                                                                           
        if (elemento.parentNode.classList.contains("comida") === true) {
            opcaoComida.nome = "0";
        } else if (elemento.parentNode.classList.contains("bebida") === true) {
            opcaoBebida.nome = "0";
        } else {
            opcaoSobremesa.nome = "0";
        }
    }

    if (opcaoComida.nome !== "0" && opcaoBebida.nome !== "0" && opcaoSobremesa.nome !== "0") {  //Libera para finalizar o pedido
        const botao = document.querySelector(".botao");
        botao.classList.add("liberado");
        const botao_texto = botao.querySelector("p"); botao_texto.innerHTML = "Fechar pedido";
    }
}

//-----------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------
//                                      Função para realização do pedido

function pedir(elemento){
    if (elemento.classList.contains(".liberado") === true) {
        
        document.querySelector(".confirmacao-do-pedido").classList.remove("escondido");
    }
}

//-----------------------------------------------------------------------------------------------------------
