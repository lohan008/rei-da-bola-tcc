let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// 🛒 NOVA FUNÇÃO (IR PRA TELA DE TAMANHO)
function addCarrinho(nome, preco,imagem){
    let produto = {nome, preco,imagem};

    localStorage.setItem("produtoTemp", JSON.stringify(produto));

    window.location.href = "tamanho.html";
}

// ❤️ FAVORITOS
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

// 🔔 TOAST
function toast(msg){
    let t = document.getElementById("toast");
    if(!t) return;

    t.textContent = msg;
    t.style.opacity = 1;

    setTimeout(()=> t.style.opacity = 0, 1500);
}


