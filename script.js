function countCharacters() {
    // Obtém o valor do campo de entrada
    var inputText = document.getElementById("textInput").value;

    // Conta o número de caracteres
    var charCount = inputText.length;

    // Atualiza o texto mostrando o número de caracteres
    document.getElementById("charCount").textContent = "" + charCount;

    // Muda a cor de fundo com base no número de caracteres
    var backgroundColor = '';
    if (charCount >= 0 && charCount <= 10) {
        backgroundColor = 'black';
    } else if (charCount >= 11 && charCount <= 20) {
        backgroundColor = 'red';
    } else if (charCount >= 21 && charCount <= 30) {
        backgroundColor = 'yellow';
    } else {
        backgroundColor = 'green';
    }
    document.body.style.backgroundColor = backgroundColor;
}

function clearPlaceholder() {
    // Remove o placeholder quando o usuário clica no campo de entrada
    document.getElementById("textInput").placeholder = "";
}