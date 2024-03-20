
// cramos la fuicion para encriptar el texto

function encriptar(){
    let texto = document.getElementById("texto").value 
    let tituloMensaje = document.getElementById("titulo-mensaje")
    let parrafo = document.getElementById("parrafo")
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto // reemplaza las vocales con los textos agregados
        .replace(/e/gi, "enteeeer")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if(texto.lenght !=0){ //
        document.getElementById("texto").value=textoCifrado;
        tituloMensaje.textContent = "Texto encriptado al 100%";
        parrafo.textContent = "";
        muneco.src= "./img/encriptado.png";
    }else{
        muneco.src = "./img/dibujo.png"; // jugamos con las imagenes 
        tituloMensaje.textContent ="¡¡¡No hay ningun mensaje!!!";
        parrafo.textContent= "Ingresa el texto que quieras encriptar o desincriptar";
    }
}



function desencriptar(){ //misma funcion que la anterior pero para hacer lo contrario
    let texto = document.getElementById("texto").value
    let tituloMensaje = document.getElementById("titulo-mensaje")
    let parrafo = document.getElementById("parrafo")
    let muneco = document.getElementById("muneco")

    let textoCifrado = texto // ahora rreemplazamos los textos agregados x las voacaels
        .replace(/enteeeer/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if(texto.lenght != 0){
        document.getElementById("texto").value = textoCifrado
        tituloMensaje.textContent = "Texto desencriptado existosamente"
        parrafo.textContent = "";
        muneco.src ="./img/desencriptado.png";
    }else{
        muneco.src= "./img/dibujo.png"
        tituloMensaje.textContent = "¡¡¡ningun mensaje encontrado!!!"
        parrafo.textContent = "Ingresa el texto que quieras encriptar o desincriptar"
    }
}