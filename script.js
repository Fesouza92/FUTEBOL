const questionsDB = {
  copa: [
    {
      topic: "Copa do Mundo",
      question: "Quem marcou os dois gols do Brasil na final da Copa de 2002 contra a Alemanha?",
      options: ["Rivaldo", "Ronaldo Fenômeno", "Ronaldinho Gaúcho", "Cafu"],
      answer: 1,
      explanation: "Ronaldo marcou os dois gols da vitória por 2 a 0 sobre a Alemanha.",
      hint: "Foi o artilheiro isolado daquela edição com 8 gols."
    },
    {
      topic: "Copa do Mundo",
      question: "Quem detém o recorde de mais gols em uma única Copa do Mundo (13 gols em 1958)?",
      options: ["Pelé", "Sándor Kocsis", "Just Fontaine", "Gerd Müller"],
      answer: 2,
      explanation: "O francês Just Fontaine marcou 13 gols em 6 jogos na Copa de 1958.",
      hint: "Lendário atacante da seleção francesa."
    },
    {
      topic: "Copa do Mundo",
      question: "Qual seleção venceu a primeira edição da Copa do Mundo FIFA em 1930?",
      options: ["Brasil", "Argentina", "Itália", "Uruguai"],
      answer: 3,
      explanation: "Jogando em casa, o Uruguai venceu a Argentina por 4 a 2 na final.",
      hint: "Também foi o país-sede do torneio em 1930."
    },
    {
      topic: "Copa do Mundo",
      question: "Qual jogador é o maior artilheiro da história das Copas masculinas (16 gols)?",
      options: ["Ronaldo Fenômeno", "Miroslav Klose", "Lionel Messi", "Pelé"],
      answer: 1,
      explanation: "O alemão Miroslav Klose marcou 16 gols entre 2002 e 2014.",
      hint: "Bateu o recorde durante a Copa de 2014 no Brasil."
    },
    {
      topic: "Copa do Mundo",
      question: "Em que ano o Brasil conquistou o tricampeonato mundial no México?",
      options: ["1962", "1970", "1974", "1994"],
      answer: 1,
      explanation: "Em 1970, o Brasil venceu a Itália por 4 a 1 no Estádio Azteca.",
      hint: "Considerada por muitos a maior seleção de todos os tempos."
    }
  ],
  brasil: [
    {
      topic: "Futebol Brasileiro",
      question: "Qual clube é o maior campeão do Campeonato Brasileiro (Série A) unificado?",
      options: ["Santos", "São Paulo", "Palmeiras", "Flamengo"],
      answer: 2,
      explanation: "O Palmeiras lidera o ranking histórico do Brasileirão com 12 títulos.",
      hint: "Clube alviverde da capital paulista."
    },
    {
      topic: "Futebol Brasileiro",
      question: "Qual clube detém o recorde de mais títulos da Copa do Brasil?",
      options: ["Cruzeiro", "Grêmio", "Flamengo", "Corinthians"],
      answer: 0,
      explanation: "O Cruzeiro é o maior campeão da Copa do Brasil, com 6 troféus.",
      hint: "Gigante de Minas Gerais conhecido como Raposa."
    },
    {
      topic: "Futebol Brasileiro",
      question: "Quem é o maior artilheiro do Brasileirão na era dos pontos corridos (desde 2003)?",
      options: ["Fred", "Diego Souza", "Gabigol", "Roberto Dinamite"],
      answer: 0,
      explanation: "Fred marcou 158 gols na era dos pontos corridos.",
      hint: "Ídolo histórico do Fluminense."
    },
    {
      topic: "Futebol Brasileiro",
      question: "Qual foi o primeiro clube brasileiro a conquistar a Copa Libertadores?",
      options: ["Botafogo", "Santos", "Palmeiras", "São Paulo"],
      answer: 1,
      explanation: "O Santos de Pelé venceu a Libertadores pela primeira vez em 1962.",
      hint: "Clube paulista do litoral."
    },
    {
      topic: "Futebol Brasileiro",
      question: "Qual estádio recebeu a final da Copa do Mundo de 1950 e da Copa de 2014?",
      options: ["Morumbis", "Mineirão", "Maracanã", "Mané Garrincha"],
      answer: 2,
      explanation: "O Maracanã, no Rio de Janeiro, foi palco de ambas as decisões.",
      hint: "O templo do futebol no Rio de Janeiro."
    }
  ],
  europa: [
    {
      topic: "Futebol Europeu",
      question: "Qual clube detém o maior número de títulos da UEFA Champions League?",
      options: ["AC Milan", "Bayern de Munique", "Liverpool", "Real Madrid"],
      answer: 3,
      explanation: "O Real Madrid é o maior campeão disparado da Champions League, com 15 títulos.",
      hint: "Clube espanhol famoso pelas viradas no Santiago Bernabéu."
    },
    {
      topic: "Futebol Europeu",
      question: "Qual clube inglês venceu a Premier League de forma invicta em 2003-04?",
      options: ["Manchester United", "Chelsea", "Arsenal", "Liverpool"],
      answer: 2,
      explanation: "Liderado por Thierry Henry, o Arsenal ficou conhecido como 'Os Invencíveis'.",
      hint: "Clube de Londres conhecido como Gunners."
    },
    {
      topic: "Futebol Europeu",
      question: "Quem é o maior artilheiro da história da UEFA Champions League?",
      options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"],
      answer: 1,
      explanation: "Cristiano Ronaldo lidera a artilharia histórica com 140 gols.",
      hint: "Atacante português apelidado de 'Mr. Champions'."
    },
    {
      topic: "Futebol Europeu",
      question: "Em que ano o Barcelona de Guardiola conquistou o 'Sexteto' (6 títulos)?",
      options: ["2008", "2009", "2011", "2015"],
      answer: 1,
      explanation: "Em 2009, o Barcelona venceu todos os seis campeonatos oficiais que disputou.",
      hint: "Primeiro ano completo de Guardiola no time principal."
    },
    {
      topic: "Futebol Europeu",
      question: "Qual seleção europeia conquistou mais títulos da Eurocopa até hoje?",
      options: ["Alemanha", "Espanha", "França", "Itália"],
      answer: 1,
      explanation: "A Espanha isolou-se como maior campeã ao vencer seu 4º título em 2024.",
      hint: "Venceu em 1964, 2008, 2012 e 2024."
    }
  ]
};

let currentTheme = "";
let activeQuestions = [];
let currentIdx = 0;
let score = 0;

function startQuiz(theme) {
  currentTheme = theme;
  currentIdx = 0;
  score = 0;

  if (theme === "geral") {
    const all = [...questionsDB.copa, ...questionsDB.brasil, ...questionsDB.europa];
    activeQuestions = all.sort(() => Math.random() - 0.5).slice(0, 8);
  } else {
    activeQuestions = [...questionsDB[theme]];
  }

  document.getElementById("menu-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const current = activeQuestions[currentIdx];
  document.getElementById("progress").textContent = `${currentIdx + 1} / ${activeQuestions.length}`;
  document.getElementById("topic-label").textContent = current.topic;
  document.getElementById("question").textContent = current.question;

  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";
  document.getElementById("feedback").style.display = "none";
  document.getElementById("hint-box").style.display = "none";
  document.getElementById("hint-btn").style.display = "inline-block";
  document.getElementById("next-btn").style.display = "none";

  current.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => selectOption(index, btn);
    optionsEl.appendChild(btn);
  });
}

function showHint() {
  const hintBox = document.getElementById("hint-box");
  hintBox.textContent = `💡 Dica: ${activeQuestions[currentIdx].hint}`;
  hintBox.style.display = "block";
  document.getElementById("hint-btn").style.display = "none";
}

function selectOption(selectedIndex, btn) {
  const current = activeQuestions[currentIdx];
  const allButtons = document.querySelectorAll(".option-btn");

  allButtons.forEach(b => b.disabled = true);
  document.getElementById("hint-btn").style.display = "none";

  const feedbackEl = document.getElementById("feedback");
  if (selectedIndex === current.answer) {
    btn.classList.add("correct");
    score++;
    feedbackEl.innerHTML = `<strong>✅ Correto!</strong> ${current.explanation}`;
  } else {
    btn.classList.add("wrong");
    allButtons[current.answer].classList.add("correct");
    feedbackEl.innerHTML = `<strong>❌ Incorreto.</strong> ${current.explanation}`;
  }

  feedbackEl.style.display = "block";
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentIdx++;
  if (currentIdx < activeQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  const total = activeQuestions.length;
  document.getElementById("final-score").textContent = `${score} / ${total}`;
  const msgEl = document.getElementById("result-msg");
  const ratio = score / total;

  if (ratio === 1) msgEl.textContent = "Golaço! Você gabaritou a categoria!";
  else if (ratio >= 0.7) msgEl.textContent = "Mandou muito bem! Conhece muito do assunto.";
  else if (ratio >= 0.4) msgEl.textContent = "Na trave! Dá para melhorar na próxima rodada.";
  else msgEl.textContent = "Foi para a arquibancada! Que tal tentar novamente?";
}

function restartCurrentTheme() {
  startQuiz(currentTheme);
}

function goToMenu() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("menu-screen").style.display = "block";
}
