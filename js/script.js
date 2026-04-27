let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// CARRINHO
function addCarrinho(nome, preco){
    let item = carrinho.find(p=>p.nome===nome);

    if(item){
        item.qtd++;
    } else {
        carrinho.push({nome, preco, qtd:1});
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    toast("Adicionado ao carrinho 🛒");
}

// FAVORITOS
function toggleFav(nome, el){
    if(favoritos.includes(nome)){
        favoritos = favoritos.filter(f=>f!==nome);
        el.textContent="🤍";
    } else {
        favoritos.push(nome);
        el.textContent="❤️";
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// TOAST
function toast(msg){
    let t = document.getElementById("toast");
    if(!t) return;

    t.textContent = msg;
    t.style.opacity = 1;

    setTimeout(()=> t.style.opacity = 0, 1500);
}
function finalizarCompra() {
    let mensagem = document.getElementById("mensagem-compra");

msg.innerText = "Compra finalizada com sucesso via " + pagamento + " 👑";

// mostra (desliza)
msg.classList.add("show");

// esconde depois
setTimeout(() => {
    msg.classList.remove("show");
}, 3000);
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let pagamento = document.getElementById("pagamento").value;

    if(carrinho.length === 0){
        alert("Seu carrinho está vazio!");
        return;
    }

    if(pagamento === ""){
        alert("Selecione uma forma de pagamento!");
        return;
    }

    let msg = document.getElementById("mensagem-compra");

msg.innerText = "Compra finalizada com sucesso via " + pagamento + " 👑";
msg.style.display = "block";

setTimeout(() => {
    msg.style.display = "none";
}, 3000);

    localStorage.removeItem("carrinho");
    location.reload();
}