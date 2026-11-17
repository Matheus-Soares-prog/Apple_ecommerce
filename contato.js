
 const div = document.getElementById("meucarrinho");
const botao = document.getElementById("carrinho");
botao.onclick = function(){
const aviso = document.createElement("p");
aviso.textContent = "Produto adicionado ao carrinho com sucesso!";
div.appendChild(aviso);
}

