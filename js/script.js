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