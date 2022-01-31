// ----------------------------------------------------------------------------------------------------------
//                                         Variáveis globais

let opcaoComida = {nome: "0", preco: "0"};    
let opcaoBebida = {nome: "0", preco: "0"};     
let opcaoSobremesa = {nome: "0", preco: "0"}; 
let total

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
        const botao = document.querySelector(".botao-fazer-pedido");                                                        //Para voltar a bloquear o botão caso o usuário, após selecionar
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
        const botao = document.querySelector(".botao-fazer-pedido");
        botao.classList.add("liberado");
        const botao_texto = botao.querySelector("p"); botao_texto.innerHTML = "Fechar pedido";
    }
}

//-----------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------
//                                       Função que realiza do pedido

function fazerPedido(elemento){
    if (elemento.classList.contains("liberado") === true) {
        document.querySelector(".nome-da-comida").innerHTML = opcaoComida.nome;
        document.querySelector(".preco-da-comida").innerHTML = opcaoComida.preco;
        document.querySelector(".nome-da-bebida").innerHTML = opcaoBebida.nome;
        document.querySelector(".preco-da-bebida").innerHTML = opcaoBebida.preco;
        document.querySelector(".nome-da-sobremesa").innerHTML = opcaoSobremesa.nome;
        document.querySelector(".preco-da-sobremesa").innerHTML = opcaoSobremesa.preco;

        opcaoComida.preco = opcaoComida.preco.replace(",",".");             //Troca "," por "."
        opcaoBebida.preco = opcaoBebida.preco.replace(",","."); 
        opcaoSobremesa.preco = opcaoSobremesa.preco.replace(",",".");
        opcaoComida.preco = parseFloat(opcaoComida.preco);                  //Transforma o input string em float    
        opcaoBebida.preco = parseFloat(opcaoBebida.preco); 
        opcaoSobremesa.preco = parseFloat(opcaoSobremesa.preco);
        total = opcaoComida.preco + opcaoBebida.preco + opcaoSobremesa.preco;

        document.querySelector(".valor-total").innerHTML ="R$ " + total.toFixed(2).toString().replace(".",",");

        document.querySelector(".confirmacao-do-pedido").classList.remove("escondido");
    }
}

//-----------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------
//                                    Função para confirmação do pedido

function confirmarPedido(){
    let mensagem = "Olá, gostaria de fazer o *pedido*:" + "\n*- Prato*: " + opcaoComida.nome + "\n*- Bebida*: " + 
                   opcaoBebida.nome + "\n*- Sobremesa*: " + opcaoSobremesa.nome + "\n*Total*: R$ *" + total.toFixed(2) + "*";
    window.open("https://wa.me/5521981950344?text=" + encodeURIComponent(mensagem));
}

//-----------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------
//                                     Função para cancelar o pedido

function cancelarPedido(){
    document.querySelector(".confirmacao-do-pedido").classList.add("escondido");
    
    opcaoComida.preco = opcaoComida.preco.toFixed(2).toString(); opcaoComida.preco = opcaoComida.preco.replace(".",",");
    opcaoBebida.preco = opcaoBebida.preco.toFixed(2).toString(); opcaoBebida.preco = opcaoBebida.preco.replace(".",",");
    opcaoSobremesa.preco = opcaoSobremesa.preco.toFixed(2).toString(); opcaoSobremesa.preco = opcaoSobremesa.preco.replace(".",",");
}
//-----------------------------------------------------------------------------------------------------------