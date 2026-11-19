const listadiferenciais = document.querySelector("article ul");
listadiferenciais.onmouseover = function(){
    listadiferenciais.style.backgroundColor = "#f0f4f8";
    listadiferenciais.style.color = "#0066cc";
    listadiferenciais.style.padding = "20px";
    listadiferenciais.style.borderRadius = "10px";
};
const botaofechar = document.querySelector("#botao-fechar");
const anuncio = document.querySelector("#anuncio-chato");

botaofechar.addEventListener("contextmenu", function() {
    anuncio.remove();
});