function capturaTexto():string{
    let entrada = document.getElementById("entrada-texto") as HTMLTextAreaElement | null;
    return entrada.value;
}

function escreveSaida(texto:string):void{
    
    let saida = document.querySelector("aside");
    saida.innerHTML= "<textarea cols=\"50\" rows=\"20\" id=\"texto-saida\">"+texto+"</textarea><button onclick=\"copiar()\" id=\"botao-copiar\">Copiar</button>";
}

function codificar():void{
    let texto:string = capturaTexto().toLowerCase();
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
    escreveSaida(novoTexto);
    return;
}

function comparaString(inicioString: number, fimString: number, cmpString: string, texto: string): boolean {

    let resposta: boolean = false;
    if (texto.substring(inicioString, fimString) == cmpString) {
        resposta = true;
    }

    return resposta;
}

function descodificar():void{
    
    let texto:string = capturaTexto().toLowerCase();
    let novoTexto: string = "";

    for (let i: number = 0; i < texto.length; i) {
        switch (texto[i]) {
            case 'e':
                if (comparaString(i, i + 5, "enter", texto)) {
                    novoTexto = novoTexto + 'e';
                    i = i + 5
                } else {
                    novoTexto = novoTexto + texto[i];
                    i++
                }
                break
            case 'i':
                if (comparaString(i, i + 4, "imes", texto)) {
                    novoTexto = novoTexto + 'i';
                    i = i + 4;
                } else {
                    novoTexto = novoTexto + texto[i];
                    i++;
                }
                break
            case 'a':
                if (comparaString(i, i + 2, "ai", texto)) {
                    novoTexto = novoTexto + 'a';
                    i = i + 2;
                } else {
                    novoTexto = novoTexto + texto[i];
                    i++;
                }
                break
            case 'o':
                if (comparaString(i, i + 4, "ober", texto)) {
                    novoTexto = novoTexto + 'o';
                    i = i + 4;
                } else {
                    novoTexto = novoTexto + texto[i];
                    i++;
                }
                break
            case 'u':
                if (comparaString(i, i + 4, "ufat", texto)) {
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
    escreveSaida(novoTexto);
    return;
}

function copiar():void{
	let textoCopiado = document.getElementById("texto-saida") as HTMLTextAreaElement | null;	
	navigator.clipboard.writeText(textoCopiado.value);	
}


let botaoCodificar = document.getElementById("criptografar");
let botaoDescodificar = document.getElementById("descriptografar");

botaoCodificar.addEventListener("click",codificar);
botaoDescodificar.addEventListener("click",descodificar);
