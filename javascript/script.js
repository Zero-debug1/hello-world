// Função para mudar a cor do fundo ao clicar no botão
function changeBackgroundColor() {
    // Gera uma cor aleatória
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Altera a cor de fundo do body
    document.body.style.backgroundColor = randomColor;
}
