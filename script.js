let totalCarrinho = 0;
const contadorElemento = document.getElementById("contador-carrinho");
const botoesCarrinho = document.querySelectorAll(".btn-carrinho");
const botoesCarrinhoRetirar = document.querySelectorAll(
  ".btn-carrinho-retirar",
);
const mensagemCarrinho = document.getElementById("mensagem-carrinho");
const mensagemCarrinhoRetirar = document.getElementById(
  "mensagem-carrinho-retirar",
);

// Adicionar ao carrinho
botoesCarrinho.forEach((botao) => {
  botao.addEventListener("click", () => {
    totalCarrinho++;
    contadorElemento.textContent = totalCarrinho;

    mensagemCarrinho.style.display = "block";
    setTimeout(() => {
      mensagemCarrinho.style.display = "none";
    }, 2000);
  });
});

// Retirar do carrinho (só executa se o número for maior que 0)
botoesCarrinhoRetirar.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (totalCarrinho > 0) {
      totalCarrinho--;
      contadorElemento.textContent = totalCarrinho;

      mensagemCarrinhoRetirar.style.display = "block";
      setTimeout(() => {
        mensagemCarrinhoRetirar.style.display = "none";
      }, 2000);
    }
  });
});

// Pesquisa de livros
const campoBusca = document.getElementById("campo-busca");
const cardsLivros = document.querySelectorAll(".card");

campoBusca.addEventListener("input", () => {
  const termo = campoBusca.value.toLowerCase();

  cardsLivros.forEach((card) => {
    const titulo = card.querySelector("h3").textContent.toLowerCase();
    const autor = card.querySelector(".autor").textContent.toLowerCase();

    if (titulo.includes(termo) || autor.includes(termo)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

// Tema Claro e Escuro
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("tema-escuro");
});
