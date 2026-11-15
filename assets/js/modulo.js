// Form contatti: finché l'indirizzo del servizio esterno è un segnaposto,
// il form non invia nulla e mostra un messaggio.
(function () {
  var modulo = document.querySelector(".modulo[data-non-attivo]");
  if (!modulo) return;
  var stato = modulo.querySelector(".modulo__stato");
  modulo.addEventListener("submit", function (e) {
    e.preventDefault();
    stato.textContent = stato.getAttribute("data-messaggio-non-attivo");
  });
})();
