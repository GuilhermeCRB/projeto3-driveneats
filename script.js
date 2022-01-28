function selecionar(elemento) {
    const opcoesPedidos = elemento.parentNode.getElementsByClassName("opcoes")

    for (var i = 0; i < opcoesPedidos.length; i++) {
        if (opcoesPedidos[i] === elemento) {
            elemento.classList.toggle("selecao");
            var icone = elemento.querySelector('.check');
            icone.classList.toggle("escondido");
        } else {
            opcoesPedidos[i].classList.remove("selecao");
            var icone = opcoesPedidos[i].querySelector('.check');
            icone.classList.add("escondido");
        }
    }
}
