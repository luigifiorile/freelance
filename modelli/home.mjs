// Home: apertura, percorso tra i servizi, come lavoro, chi sono, contatti.
import { esc, link, segnaposto, svg } from "./aiuti.mjs";
import { struttura, datiPersona, datiServizioProfessionale } from "./struttura.mjs";

// Disposizione finale degli oggetti, presa da brand/oggetti/oggetti-insieme.svg.
// I tre loghi (Claude, n8n, HubSpot) sono stati tolti: senza di loro gli oggetti
// occupano solo la parte sinistra del disegno, quindi il riquadro di riferimento
// è ristretto a 520 × 500 unità. Non è testo: vale per tutte le lingue.
const OGGETTI = [
  { file: "tavola-da-surf", x: 110, y: 110, r: -30, s: 1 },
  { file: "portatile", x: 330, y: 90, r: 14, s: 1 },
  { file: "fumetto-chat", x: 230, y: 250, r: -8, s: 1 },
  { file: "grafico", x: 80, y: 300, r: 12, s: 0.95 },
  { file: "imbuto", x: 420, y: 250, r: -14, s: 1 },
  { file: "ingranaggio", x: 180, y: 400, r: 20, s: 0.8 },
  { file: "kite", x: 330, y: 410, r: -22, s: 0.9 },
];

const due = (n) => String(n).padStart(2, "0");

const LARGHEZZA = 520;
const ALTEZZA = 500;

function oggetto(o) {
  // Ogni oggetto misura 180 × 200 unità.
  const larghezza = (180 * o.s * 100) / LARGHEZZA;
  const stile = `left:${((o.x * 100) / LARGHEZZA).toFixed(3)}%;top:${((o.y * 100) / ALTEZZA).toFixed(3)}%;width:${larghezza.toFixed(3)}%;--r:${o.r}deg`;
  return `<div class="oggetto" style="${stile}"><div class="oggetto__forma"><img src="brand/oggetti/${o.file}.svg" alt="" width="180" height="200"></div></div>`;
}

function apertura(t) {
  const a = t.home.apertura;
  const voci = t.servizi
    .map(
      (s) => `<li><a href="#servizio-${esc(s.id)}"><span class="apertura__num">${due(s.numero)}</span> ${esc(s.nome)}</a></li>`
    )
    .join("");
  return `
<section class="apertura" id="apertura" aria-labelledby="apertura-titolo">
  <div class="apertura__scena">
    ${t.sito.scrittaGigante ? `<p class="scritta-gigante apertura__scritta" aria-hidden="true">${esc(t.sito.scrittaGigante)}</p>` : ""}
    <h1 class="apertura__titolo testo-apertura" id="apertura-titolo">${esc(a.titolo)}</h1>
    <div class="apertura__palco">
      <div class="apertura__campo" aria-hidden="true">
        <div class="apertura__area">${OGGETTI.map(oggetto).join("")}</div>
      </div>
      <div class="apertura__personaggio">
        <p class="fumetto apertura__fumetto${segnaposto(t.sito.fumetto) ? " segnaposto" : ""}">${esc(t.sito.fumetto)}</p>
        <div class="testa" aria-hidden="true">
          <img class="testa__strato testa__chiusa" src="brand/testa/testa-chiusa.svg" alt="" width="400" height="470">
          <img class="testa__strato testa__meta" src="brand/testa/testa-a-meta.svg" alt="" width="400" height="550">
          <div class="testa__strati">
            <img class="testa__aperta" src="brand/testa/testa-aperta.svg" alt="" width="400" height="310">
            <div class="testa__calotta">${svg("testa/calotta", "testa__calotta-svg")}</div>
          </div>
        </div>
      </div>
      <nav class="apertura__servizi" aria-labelledby="apertura-elenco">
        <p class="etichetta" id="apertura-elenco">${esc(a.elencoEtichetta)}</p>
        <ol>${voci}</ol>
      </nav>
    </div>
  </div>
</section>`;
}

function tappa(t, s) {
  const h = t.home.servizi;
  const titoloId = `servizio-${s.id}-titolo`;
  return `
<article class="tappa" id="servizio-${esc(s.id)}" aria-labelledby="${titoloId}" style="--n:${s.numero}">
  <div class="tappa__onda" aria-hidden="true">${svg("onde/divisore", "tappa__onda-fondo")}${svg("onde/linea", "tappa__onda-linea")}</div>
  <header class="tappa__testa">
    <p class="tappa__numero" aria-hidden="true">${s.numero}</p>
    <h3 class="tappa__titolo titolo-1" id="${titoloId}"><span class="nascosto">${s.numero}. </span>${esc(s.nome)}</h3>
  </header>
  <div class="tappa__corpo">
    <div class="tappa__testo">
      <p class="tappa__sottotitolo">${esc(s.sottotitolo)}</p>
      <p class="tappa__frase">${esc(s.frase)}</p>
      <a class="pillola" href="servizi/${esc(s.id)}/">${esc(h.scopri)}<span class="nascosto">: ${esc(s.nome)}</span> ${svg("icone-ui/freccia-esterna", "icona")}</a>
    </div>
    <div class="tappa__visivo">
      <img class="tappa__interfaccia" src="brand/interfacce/${esc(s.interfaccia)}.svg" alt="${esc(s.interfacciaAlt)}" width="480" height="340" loading="lazy">
      <a class="scheda-demo" href="demo/${esc(s.demo.id)}/">
        <span class="scheda-demo__numero">${s.numero} / ${esc(s.demo.id)}</span>
        <span class="scheda-demo__nome">${esc(s.demo.nome)}</span>
        <span class="scheda-demo__azione">${svg("icone-ui/play", "icona")} ${esc(h.provaDemo)}</span>
      </a>
    </div>
  </div>
  <footer class="tappa__fine">
    ${svg("onde/linea", "tappa__fine-onda")}
    <a class="tappa__torna" href="#navigazione-servizi">${svg("icone-ui/freccia-su", "icona")} ${esc(h.tornaNav)}</a>
  </footer>
</article>`;
}

function percorso(t) {
  const h = t.home.servizi;
  const voci = t.servizi
    .map(
      (s) => `<li><a href="#servizio-${esc(s.id)}" data-tappa="servizio-${esc(s.id)}"><span class="percorso__num">${due(s.numero)}</span><span class="percorso__puntini" aria-hidden="true"></span><span class="percorso__nome">${esc(s.nome)}</span></a></li>`
    )
    .join("");
  return `
<section class="percorso" id="servizi" aria-labelledby="servizi-titolo">
  <div class="contenitore percorso__intro">
    <h2 class="titolo-1" id="servizi-titolo">${esc(h.titolo)}</h2>
    <p class="testo-grande">${esc(h.intro)}</p>
  </div>
  <div class="percorso__griglia">
    <nav class="percorso__nav" id="navigazione-servizi" aria-label="${esc(h.navEtichetta)}" tabindex="-1">
      <ol>${voci}</ol>
    </nav>
    <div class="percorso__tappe">
      ${t.servizi.map((s) => tappa(t, s)).join("")}
    </div>
  </div>
</section>`;
}

function comeLavoro(t) {
  const c = t.home.comeLavoro;
  const passi = c.passi
    .map(
      (p, i) => `
      <li class="passo">
        <img class="passo__immagine" src="brand/metodo/${esc(p.immagine)}.svg" alt="" width="300" height="300" loading="lazy">
        <p class="passo__numero etichetta">${due(i + 1)}</p>
        <h3 class="passo__nome titolo-2">${esc(p.nome)}</h3>
        <p class="passo__testo">${esc(p.testo)}</p>
      </li>`
    )
    .join("");
  return `
<section class="sezione come-lavoro" id="come-lavoro" aria-labelledby="come-lavoro-titolo">
  ${svg("onde/divisore", "sezione__onda")}
  <div class="contenitore">
    <h2 class="titolo-1" id="come-lavoro-titolo">${esc(c.titolo)}</h2>
    ${c.intro ? `<p class="testo-grande come-lavoro__intro">${esc(c.intro)}</p>` : ""}
    <ol class="passi">${passi}</ol>
  </div>
</section>`;
}

function chiSono(t) {
  const c = t.home.chiSono;
  return `
<section class="sezione chi-sono" id="chi-sono" aria-labelledby="chi-sono-titolo">
  <div class="contenitore chi-sono__griglia">
    <div class="chi-sono__testo">
      <h2 class="titolo-1" id="chi-sono-titolo">${esc(c.titolo)}</h2>
      ${c.paragrafi.map((p, i) => `<p class="${i === 0 ? "testo-grande" : ""}">${esc(p)}</p>`).join("\n      ")}
    </div>
    <div class="chi-sono__visivo">
      <img class="chi-sono__testa" src="brand/testa/testa-chiusa.svg" alt="${esc(c.ritrattoAlt)}" width="400" height="470" loading="lazy">
      <img class="chi-sono__tavola" src="brand/illustrazioni/tavola-in-piedi.svg" alt="" width="200" height="400" loading="lazy">
    </div>
  </div>
</section>`;
}

function contatti(t) {
  const c = t.home.contatti;
  // Prenotazione su Cal.com: un link al servizio esterno, nessuno script
  // e nessun form sul sito. Finché il link è un segnaposto, non è cliccabile.
  const prenota = segnaposto(t.sito.urlPrenotazione)
    ? `<span class="pillola pillola--mare segnaposto" data-segnaposto="${esc(t.sito.urlPrenotazione)}">${esc(c.prenota)}</span>`
    : `<a class="pillola pillola--mare" href="${esc(t.sito.urlPrenotazione)}" target="_blank" rel="noopener">${esc(c.prenota)} ${svg("icone-ui/freccia-esterna", "icona")}<span class="nascosto"> (${esc(c.nuovaScheda)})</span></a>`;
  const email = segnaposto(t.sito.email)
    ? `<span class="segnaposto">${esc(t.sito.email)}</span>`
    : `<a href="mailto:${esc(t.sito.email)}">${esc(t.sito.email)}</a>`;
  return `
<section class="sezione contatti" id="contatti" aria-labelledby="contatti-titolo">
  <div class="contenitore contatti__griglia">
    <div class="contatti__testo">
      <h2 class="titolo-1" id="contatti-titolo">${esc(c.titolo)}</h2>
      <p class="testo-grande">${esc(c.intro)}</p>
      <img class="contatti__bottiglia" src="brand/illustrazioni/messaggio-in-bottiglia.svg" alt="" width="400" height="300" loading="lazy">
    </div>
    <div class="prenota">
      <p class="prenota__azione">${prenota}</p>
      <p class="prenota__nota">${esc(c.prenotaNota)}</p>
      <p class="prenota__email">${esc(c.oppure)} ${email}</p>
    </div>
  </div>
</section>`;
}

export function home(t) {
  const corpo = `${apertura(t)}
${percorso(t)}
${comeLavoro(t)}
${chiSono(t)}
${contatti(t)}`;
  return struttura(t, {
    percorso: "",
    titolo: t.pagine.home.titolo,
    descrizione: t.pagine.home.descrizione,
    inHome: true,
    classe: "pagina-home",
    stili: ["assets/css/home.css"],
    script: ["assets/vendor/gsap.min.js", "assets/vendor/ScrollTrigger.min.js", "assets/js/apertura.js", "assets/js/percorso.js"],
    dati: [datiPersona(t), datiServizioProfessionale(t)],
    corpo,
  });
}
