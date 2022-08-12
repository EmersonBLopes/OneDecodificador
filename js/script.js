function codificar(texto) {
    var novoTexto = "";
    console.log(texto);
    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                novoTexto = novoTexto + "enter";
                break;
            case 'i':
                novoTexto = novoTexto + "imes";
                break;
            case 'a':
                novoTexto = novoTexto + "ai";
                break;
            case 'o':
                novoTexto = novoTexto + "ober";
                break;
            case 'u':
                novoTexto = novoTexto + "ufat";
                break;
            default:
                novoTexto = novoTexto + texto[i];
                break;
        }
    }
    return texto;
}
var mensagem = prompt("Digite um texto:");
var mensagemCodificada = codificar(mensagem.toLowerCase());
alert(mensagemCodificada);
/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/ 
