// Apertura: la testa che si apre (GSAP ScrollTrigger, pin e scrub).
// Fasi (da brand/LEGGIMI.md):
//   0–30%   il fumetto sparisce, la testa passa a "a metà" (sorpresa)
//   30–80%  testa aperta (felice) scende ed esce dal basso, la calotta sale,
//           gli oggetti escono uno alla volta dal centro, ruotando
//   80–100% compare a sinistra l'elenco dei cinque servizi
// Con "riduci animazioni": nessun blocco dello scroll, stato aperto subito.
(function () {
  var sezione = document.querySelector(".apertura");
  if (!sezione) return;
  var radice = document.documentElement;
  var scena = sezione.querySelector(".apertura__scena");
  var scritta = sezione.querySelector(".apertura__scritta");

  // La scritta gigante si riduce solo se non entra nella larghezza
  // (la parola è un segnaposto e può cambiare lunghezza).
  function adattaScritta() {
    if (!scritta) return; // la scritta gigante può essere vuota
    scritta.style.fontSize = "";
    var margine = parseFloat(getComputedStyle(radice).getPropertyValue("--margine")) || 16;
    var disponibile = scena.clientWidth - 2 * margine;
    if (scritta.scrollWidth > disponibile) {
      var attuale = parseFloat(getComputedStyle(scritta).fontSize);
      scritta.style.fontSize = Math.floor((attuale * disponibile) / scritta.scrollWidth) + "px";
    }
  }
  adattaScritta();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(adattaScritta);
  window.addEventListener("resize", adattaScritta);

  if (!window.gsap || !window.ScrollTrigger) {
    radice.classList.remove("movimento");
    return;
  }
  var gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);

  var testa = sezione.querySelector(".testa");
  var chiusa = sezione.querySelector(".testa__chiusa");
  var meta = sezione.querySelector(".testa__meta");
  var strati = sezione.querySelector(".testa__strati");
  var aperta = sezione.querySelector(".testa__aperta");
  var calotta = sezione.querySelector(".testa__calotta");
  var fumetto = sezione.querySelector(".apertura__fumetto");
  var area = sezione.querySelector(".apertura__area");
  var oggetti = gsap.utils.toArray(sezione.querySelectorAll(".oggetto"));
  var elenco = sezione.querySelector(".apertura__servizi");
  var voci = gsap.utils.toArray(elenco.querySelectorAll(".etichetta, li"));
  var ridotto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Posizione di un elemento rispetto alla scena, senza le trasformazioni.
  function posizione(el) {
    var s = scena.getBoundingClientRect();
    var r = el.getBoundingClientRect();
    return { x: r.left - s.left, y: r.top - s.top, w: r.width, h: r.height };
  }
  // Centro dell'apertura della testa: punto (220, 205) del disegno.
  function bocca() {
    var t = posizione(testa);
    return { x: t.x + t.w * 0.5, y: t.y + (t.h * 195) / 470 };
  }
  function centroOggetto(o) {
    var a = posizione(area);
    return { x: a.x + o.offsetLeft, y: a.y + o.offsetTop };
  }
  function altezzaTestata() {
    var h = document.querySelector(".testata");
    return h ? h.offsetHeight : 0;
  }

  // Posa della calotta in testa-a-meta.svg: translate(0 −78), rotate(−10).
  gsap.set(calotta, { yPercent: -32.5, rotation: -10 });
  gsap.set(strati, { rotation: -4 });
  gsap.set(oggetti, { xPercent: 0, yPercent: 0 });

  var tl = gsap.timeline({ defaults: { ease: "none" }, paused: ridotto });

  // 0–30%: il fumetto sparisce, la testa passa a "a metà".
  tl.fromTo(fumetto, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -24, duration: 0.12 }, 0)
    .fromTo(chiusa, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.1 }, 0.06)
    .fromTo(meta, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.1 }, 0.06)
    // A 30%: stessi livelli, espressione felice (testa aperta + calotta).
    .fromTo(strati, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.06 }, 0.27)
    .to(meta, { autoAlpha: 0, duration: 0.06 }, 0.27)
    // 30–80%: la testa scende ed esce, la calotta sale fino in alto.
    .to(strati, { rotation: 0, duration: 0.12, ease: "power1.out" }, 0.3)
    .fromTo(
      aperta,
      { y: 0 },
      {
        y: function () {
          var t = posizione(testa);
          return scena.clientHeight - (t.y + aperta.offsetTop) + 24;
        },
        duration: 0.48,
        ease: "power1.in",
      },
      0.32
    )
    .fromTo(
      calotta,
      { y: 0 },
      {
        y: function () {
          var t = posizione(testa);
          var h = calotta.offsetHeight;
          // Su desktop resta in alto, tagliata dal bordo; su mobile esce
          // del tutto, così non copre il testo sopra la testa.
          var cimaVoluta = window.innerWidth < 768 ? -1.2 * h : -0.3 * h;
          return cimaVoluta - (t.y + calotta.offsetTop) + 0.325 * h;
        },
        rotation: 8,
        duration: 0.44,
        ease: "power2.out",
      },
      0.32
    );

  // Gli oggetti escono uno alla volta dal centro verso l'esterno, ruotando.
  oggetti.forEach(function (o, i) {
    tl.fromTo(
      o,
      {
        autoAlpha: 0,
        scale: 0.2,
        rotation: i % 2 ? 160 : -160,
        x: function () { return bocca().x - centroOggetto(o).x; },
        y: function () { return bocca().y - centroOggetto(o).y; },
      },
      { autoAlpha: 1, scale: 1, rotation: 0, x: 0, y: 0, duration: 0.17, ease: "power2.out" },
      0.36 + i * 0.027
    );
  });

  // 80–100%: compare a sinistra l'elenco dei servizi.
  tl.set(elenco, { visibility: "visible" }, 0.8).fromTo(
    voci,
    { autoAlpha: 0, x: -20 },
    { autoAlpha: 1, x: 0, duration: 0.12, stagger: 0.015, ease: "power1.out" },
    0.8
  );

  if (ridotto) {
    // Stato aperto subito, senza blocco dello scroll.
    tl.progress(1);
    window.addEventListener("resize", function () {
      tl.invalidate().progress(1);
    });
    return;
  }

  window.ScrollTrigger.config({ ignoreMobileResize: true });
  window.ScrollTrigger.create({
    animation: tl,
    trigger: scena,
    pin: true,
    start: function () { return "top " + altezzaTestata() + "px"; },
    end: function () {
      var schermate = window.innerWidth < 768 ? 2 : 3;
      return "+=" + Math.round(scena.clientHeight * schermate);
    },
    scrub: 0.6,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  });

})();
