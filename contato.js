
 const div = document.getElementById("meucarrinho");
const botao = document.getElementById("carrinho");
botao.onclick = function(){
const aviso = document.createElement("p");
aviso.textContent = "Produto adicionado ao carrinho com sucesso!";
div.appendChild(aviso);
}
const seletorModelo = document.getElementById("modelo");

seletorModelo.onchange = function() {
    seletorModelo.style.borderColor = "#0066cc";
    seletorModelo.style.backgroundColor = "#f0f7ff";
    seletorModelo.style.fontWeight = "600";
};
const campoNome = document.getElementById("nome");

campoNome.oninput = function() {
    campoNome.style.borderColor = "#0066cc";
    campoNome.style.backgroundColor = "#f0f7ff";
};