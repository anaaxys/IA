const nomes = ["Ana", "Estefany", "Adrieli", "Aime", "Emilli"];

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

const nome = aleatorio(nomes);
