// Menu principale su mobile: si apre e chiude con il pulsante "Menu".
// Senza JS il menu resta sempre visibile.
(function () {
  var testata = document.querySelector(".testata");
  if (!testata) return;
  var pulsante = testata.querySelector(".testata__menu");
  var nav = testata.querySelector(".testata__nav");
  if (!pulsante || !nav) return;

  function imposta(aperto) {
    testata.setAttribute("data-menu", aperto ? "aperto" : "chiuso");
    pulsante.setAttribute("aria-expanded", aperto ? "true" : "false");
  }

  pulsante.hidden = false;
  imposta(false);

  pulsante.addEventListener("click", function () {
    imposta(pulsante.getAttribute("aria-expanded") !== "true");
  });

  // Chiude dopo aver scelto una voce, o con Esc.
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) imposta(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && pulsante.getAttribute("aria-expanded") === "true") {
      imposta(false);
      pulsante.focus();
    }
  });
})();
