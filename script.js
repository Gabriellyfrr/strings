const botaoMostraPalavras= document.querySelector("#botao-palavrachave");
botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);
function mostraPalavrasChave(){
    const texto =document.querySelector('#entrada-de-texto').value
const campoResultado = querySelector('#resultado-palavrachave');
campoResultado.textContent = texto.split(" ")
campoResultado.textContent = palavras.join(", ");

