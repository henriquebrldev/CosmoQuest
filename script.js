let pontos = 0;
let perguntaAtual = 0;

const perguntas = [
  {
    pergunta: "Qual é o terceiro planeta a partir do Sol?",
    opcoes: [
      { texto: "🌍 Terra", valor: "terra" },
      { texto: "🔴 Marte", valor: "marte" },
      { texto: "♀️ Vênus", valor: "venus" }
    ],
    resposta: "terra"
  },

  {
    pergunta: "Qual planeta é conhecido como Planeta Vermelho?",
    opcoes: [
      { texto: "🌍 Terra", valor: "terra" },
      { texto: "🔴 Marte", valor: "marte" },
      { texto: "🪐 Saturno", valor: "saturno" }
    ],
    resposta: "marte"
  },

  {
    pergunta: "Qual planeta é famoso pelos seus anéis?",
    opcoes: [
      { texto: "🪐 Saturno", valor: "saturno" },
      { texto: "🔴 Marte", valor: "marte" },
      { texto: "🌍 Terra", valor: "terra" }
    ],
    resposta: "saturno"
  }
];

const botao = document.getElementById("explorar");
const planetas = document.getElementById("planetas");

botao.addEventListener("click", function() {
  planetas.innerHTML = `
    <div class="card" data-planeta="terra">
      <h2>🌍 Terra</h2>
      <p>Nosso planeta!</p>
    </div>

    <div class="card" data-planeta="marte">
      <h2>🔴 Marte</h2>
      <p>O Planeta Vermelho.</p>
    </div>

    <div class="card" data-planeta="saturno">
      <h2>🪐 Saturno</h2>
      <p>Famoso por seus anéis.</p>
    </div>

    <div id="informacao"></div>
  `;

  const cards = document.querySelectorAll(".card");
  const informacao = document.getElementById("informacao");

  cards.forEach(function(card) {
    card.addEventListener("click", function() {
      const planeta = card.dataset.planeta;

      if (planeta === "terra") {
        informacao.innerHTML = `
          <h2>🌍 Terra</h2>
          <p>A Terra é o terceiro planeta a partir do Sol.</p>
        `;
      }

      if (planeta === "marte") {
        informacao.innerHTML = `
          <h2>🔴 Marte</h2>
          <p>Marte é conhecido como o Planeta Vermelho.</p>
        `;
      }

      if (planeta === "saturno") {
        informacao.innerHTML = `
          <h2>🪐 Saturno</h2>
          <p>Saturno é um gigante gasoso famoso por seus anéis.</p>
        `;
      }
    });
  });
});


const quiz = document.getElementById("quiz");
const pergunta = document.getElementById("pergunta");

quiz.addEventListener("click", function() {
  pontos = 0;
  perguntaAtual = 0;
  mostrarPergunta();
});


function mostrarPergunta() {
  const atual = perguntas[perguntaAtual];

  pergunta.innerHTML = `
    <h2>🚀 Pergunta ${perguntaAtual + 1}</h2>
    <p>${atual.pergunta}</p>

    <button onclick="responder('${atual.opcoes[0].valor}')">
      ${atual.opcoes[0].texto}
    </button>

    <button onclick="responder('${atual.opcoes[1].valor}')">
      ${atual.opcoes[1].texto}
    </button>

    <button onclick="responder('${atual.opcoes[2].valor}')">
      ${atual.opcoes[2].texto}
    </button>

    <div id="resultado"></div>
  `;
}


function responder(resposta) {
  const resultado = document.getElementById("resultado");
  const atual = perguntas[perguntaAtual];

  if (resposta === atual.resposta) {
    pontos = pontos + 1;

    resultado.innerHTML = `
      🎉 Correto!
      <br><br>
      ⭐ Pontos: ${pontos}
    `;
  } else {
    resultado.innerHTML = `
      ❌ Resposta incorreta!
      <br><br>
      ⭐ Pontos: ${pontos}
    `;
  }

  perguntaAtual = perguntaAtual + 1;

  if (perguntaAtual < perguntas.length) {
    setTimeout(mostrarPergunta, 1000);
  } else {
    setTimeout(function() {
      pergunta.innerHTML = `
        <h2>🏆 Quiz terminado!</h2>
        <p>Você fez <strong>${pontos}</strong> de ${perguntas.length} pontos.</p>
        <p>🚀 Continue explorando o espaço!</p>
      `;
    }, 1000);
  }
}