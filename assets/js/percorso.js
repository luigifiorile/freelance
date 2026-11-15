// Percorso tra i servizi: voce attiva nell'elenco fisso e tappe che si
// coprono a vicenda (l'onda della tappa successiva sale sulla precedente).
(function () {
  var nav = document.querySelector(".percorso__nav");
  if (!nav) return;
  var radice = document.documentElement;
  var lista = nav.querySelector("ol");
  var link = Array.prototype.slice.call(nav.querySelectorAll("a[data-tappa]"));
  var tappe = link.map(function (a) { return document.getElementById(a.getAttribute("data-tappa")); });
  var testata = document.querySelector(".testata");
  var mobile = window.matchMedia("(max-width: 767px)");
  var ridotto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var attiva = -1;

  function altezzaFissa() {
    var h = testata ? testata.offsetHeight : 0;
    return mobile.matches ? h + nav.offsetHeight : h;
  }

  // Ogni tappa resta ferma quando il suo fondo arriva in basso allo schermo,
  // così la tappa successiva la copre. Se è più bassa dello schermo si ferma in alto.
  function posizionaTappe() {
    if (!radice.classList.contains("movimento") || ridotto) return;
    var alto = altezzaFissa();
    tappe.forEach(function (t) {
      var top = Math.min(alto, window.innerHeight - t.offsetHeight);
      t.style.setProperty("--tappa-top", top + "px");
    });
  }

  function aggiornaAttiva() {
    var soglia = window.innerHeight * 0.45;
    var indice = 0;
    tappe.forEach(function (t, i) {
      // La tappa successiva conta come attiva quando la sua onda supera la soglia.
      if (t.getBoundingClientRect().top <= soglia) indice = i;
    });
    if (indice === attiva) return;
    attiva = indice;
    link.forEach(function (a, i) {
      if (i === indice) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
    // Su mobile la voce attiva resta visibile nella riga che scorre.
    if (mobile.matches) {
      var a = link[indice];
      var sinistra = a.offsetLeft - 16;
      lista.scrollTo({ left: sinistra, behavior: ridotto ? "auto" : "smooth" });
    }
  }

  var inAttesa = false;
  function suScroll() {
    if (inAttesa) return;
    inAttesa = true;
    window.requestAnimationFrame(function () {
      inAttesa = false;
      aggiornaAttiva();
    });
  }

  posizionaTappe();
  aggiornaAttiva();
  window.addEventListener("scroll", suScroll, { passive: true });
  window.addEventListener("resize", function () {
    posizionaTappe();
    aggiornaAttiva();
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(posizionaTappe);
  if ("ResizeObserver" in window) {
    var osservatore = new ResizeObserver(posizionaTappe);
    tappe.forEach(function (t) { osservatore.observe(t); });
  }
})();
