function filtrarProjetos(categoria) {
  const cards = document.querySelectorAll(".card-projeto");
  const contador = document.getElementById("contador-projetos");
  const botoes = document.querySelectorAll(".botao-filtro");

  let totalVisivel = 0;

  cards.forEach(function (card) {
    const categorias = card.dataset.categorias || "";

    if (categoria === "todos" || categorias.includes(categoria)) {
      card.classList.remove("oculto");
      totalVisivel++;
    } else {
      card.classList.add("oculto");
    }
  });

  botoes.forEach(function (botao) {
    const filtroBotao = botao.dataset.filtro;

    if (filtroBotao === categoria) {
      botao.classList.add("ativo");
    } else {
      botao.classList.remove("ativo");
    }
  });

  if (contador) {
    if (categoria === "todos") {
      contador.textContent = "Mostrando todos os projetos.";
    } else {
      contador.textContent = "Mostrando " + totalVisivel + " projeto(s) da categoria selecionada.";
    }
  }
}

function marcarPaginaAtual() {
  const linksMenu = document.querySelectorAll(".menu a");
  const paginaAtual = window.location.pathname.split("/").pop();

  linksMenu.forEach(function (link) {
    const destino = link.getAttribute("href");

    if (destino === paginaAtual || (paginaAtual === "" && destino === "index.html")) {
      link.classList.add("ativo");
    }
  });
}

function prepararFotoFallback() {
  const foto = document.getElementById("foto-perfil");
  const fallback = document.getElementById("foto-fallback");

  if (!foto || !fallback) {
    return;
  }

  foto.addEventListener("error", function () {
    foto.classList.add("oculta");
    fallback.classList.add("visivel");
  });
}

marcarPaginaAtual();
prepararFotoFallback();
