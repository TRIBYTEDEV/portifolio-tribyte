"use strict";

// Aplica o tema salvo antes da primeira pintura.
try {
  const savedTheme = localStorage.getItem("tribyte-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.dataset.theme = savedTheme;
  }
} catch (_) {}

// Executa antes da primeira pintura. A abertura roda a cada carregamento,
// exceto com movimento reduzido; a URL e a sessão não alteram essa decisão.
try {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const html = document.documentElement;
    html.classList.add("tb-intro-on");
    // Se a abertura não montou em 2 s (script.js ou recursos falharam), libera a página.
    window.setTimeout(() => {
      if (!document.getElementById("brand-intro")?.childElementCount) html.classList.remove("tb-intro-on");
    }, 2000);
    window.setTimeout(() => html.classList.remove("tb-intro-on"), 8000);
  }
} catch (_) {}
