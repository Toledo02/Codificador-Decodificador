let imagemExibida = true; // Variável para controlar se a imagem foi exibida ou não

function codificar() {
    let texto = document.getElementById("inputText").value;
    let textoCodificado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Oculta a imagem e o texto padrão, e mostra a área de resultado e o botão de copiar
    if (imagemExibida) {
        document.getElementById("imagePlaceholder").style.display = "none";
        imagemExibida = false; // Garante que a imagem não volte
    }
    document.getElementById("placeholderText").style.display = "none";
    document.getElementById("outputText").style.display = "block";
    document.getElementById("copyButton").style.display = "block";

    // Mostra o texto codificado
    document.getElementById("outputText").value = textoCodificado;

    // Limpa o campo de entrada e redefine o placeholder
    document.getElementById("inputText").value = "";
    document.getElementById("inputText").placeholder = "Digite seu texto aqui";
}

function decodificar() {
    let texto = document.getElementById("inputText").value;
    let textoDecodificado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Oculta a imagem e o texto padrão, e mostra a área de resultado e o botão de copiar
    if (imagemExibida) {
        document.getElementById("imagePlaceholder").style.display = "none";
        imagemExibida = false; // Garante que a imagem não volte
    }
    document.getElementById("placeholderText").style.display = "none";
    document.getElementById("outputText").style.display = "block";
    document.getElementById("copyButton").style.display = "block";

    // Mostra o texto decodificado
    document.getElementById("outputText").value = textoDecodificado;

    // Limpa o campo de entrada e redefine o placeholder
    document.getElementById("inputText").value = "";
    document.getElementById("inputText").placeholder = "Digite seu texto aqui";
}

function copiarTexto() {
    // Seleciona o texto na área de resultado
    let textoResultado = document.getElementById("outputText");
    textoResultado.select();
    textoResultado.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    // Limpa o campo de saída e mostra a mensagem "Nenhuma mensagem encontrada"
    document.getElementById("outputText").value = "";
    document.getElementById("placeholderText").style.display = "block";
    document.getElementById("outputText").style.display = "none";
    document.getElementById("copyButton").style.display = "none";

}
