function pesquisar() {
    const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Converte para minúsculo para comparação
    const section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        const tituloMinusculo = dado.titulo.toLowerCase();
        const descricaoMinusculo = dado.descricao.toLowerCase();

        if (tituloMinusculo.includes(termoPesquisa) || descricaoMinusculo.includes(termoPesquisa)) {
            // Se o termo foi encontrado no título ou descrição, adiciona o resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (resultados === "") {
        // Se nenhum resultado foi encontrado, exibe uma mensagem
        resultados = "<p>Nenhum resultado encontrado. Tente novamente com outros termos.</p>";
    }

    section.innerHTML = resultados;
}