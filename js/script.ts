function codificar(texto: string): string {

    let novoTexto: string = "";

    for (let i: number = 0; i < texto.length; i++) {
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
    return novoTexto;
}

function comparaString(inicioString: number, fimString: number, cmpString: string, texto: string): boolean {

    let resposta: boolean = false;
    if (texto.substring(inicioString, fimString) == cmpString) {
        resposta = true;
    }

    return resposta;
}

function decodificar(texto: string): string {

    let novoTexto: string = "";

    for (let i: number = 0; i < texto.length; i) {
        switch (texto[i]) {
            case 'e':
                if (comparaString(i, i + 5, "enter", mensagem)) {
                    novoTexto = novoTexto + 'e';
                    i = i + 5
                } else {
                    novoTexto = novoTexto + texto[i];
                    i++
                }
                break
            case 'i':
                if (comparaString(i, i + 4, "imes", mensagem)) {
                    novoTexto = novoTexto + 'i';
                    i = i + 4;
                } else {
                    novoTexto = novoTexto + texto[i];
                    i++;
                }
                break
            case 'a':
                if (comparaString(i, i + 2, "ai", mensagem)) {
                    novoTexto = novoTexto + 'a';
                    i = i + 2;
                } else {
                    novoTexto = novoTexto + texto[i];
                    i++;
                }
                break
            case 'o':
                if (comparaString(i, i + 4, "ober", mensagem)) {
                    novoTexto = novoTexto + 'o';
                    i = i + 4;
                } else {
                    novoTexto = novoTexto + texto[i];
                    i++;
                }
                break
            case 'u':
                if (comparaString(i, i + 4, "ufat", mensagem)) {
                    novoTexto = novoTexto + 'u';
                    i = i + 4;
                } else {
                    novoTexto = novoTexto + texto[i];
                    i++;
                }
                break
            default:
                novoTexto = novoTexto + texto[i];
                i++;
                break;
        }
    }
    return novoTexto;
}

let mensagem: string = prompt("Digite um texto:");

console.log(decodificar(mensagem));
