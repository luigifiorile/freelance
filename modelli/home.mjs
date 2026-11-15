// Home: apertura, percorso tra i servizi, come lavoro, chi sono, contatti.
import { esc, link, segnaposto, svg } from "./aiuti.mjs";
import { struttura, datiPersona, datiServizioProfessionale } from "./struttura.mjs";

// Disposizione finale degli oggetti, presa da brand/oggetti/oggetti-insieme.svg
// (riquadro di riferimento 680 × 500). Non è testo: vale per tutte le lingue.
const OGGETTI = [
  { file: "tavola-da-surf", x: 110, y: 110, r: -30, s: 1 },
  { file: "portatile", x: 330, y: 90, r: 14, s: 1 },
  { file: "segnaposto-logo", logo: "Claude", x: 520, y: 120, r: -10, s: 0.95 },
  { file: "fumetto-chat", x: 230, y: 250, r: -8, s: 1 },
  { file: "grafico", x: 80, y: 300, r: 12, s: 0.95 },
  { file: "imbuto", x: 420, y: 250, r: -14, s: 1 },
  { file: "segnaposto-logo", logo: "n8n", x: 590, y: 290, r: 10, s: 0.95 },
  { file: "ingranaggio", x: 180, y: 400, r: 20, s: 0.8 },
  { file: "kite", x: 330, y: 410, r: -22, s: 0.9 },
  { file: "segnaposto-logo", logo: "HubSpot", x: 500, y: 420, r: -6, s: 0.95 },
];

const due = (n) => String(n).padStart(2, "0");

function oggetto(o) {
  // Gli oggetti misurano 180 × 200 unità, i loghi 120 × 120.
  const larghezza = ((o.logo ? 120 : 180) * o.s * 100) / 680;
  const stile = `left:${((o.x * 100) / 680).toFixed(3)}%;top:${((o.y * 100) / 500).toFixed(3)}%;width:${larghezza.toFixed(3)}%;--r:${o.r}deg`;
  const contenuto = o.logo
    ? `<img src="brand/oggetti/segnaposto-logo.svg" alt="" width="120" height="120"><span class="oggetto__logo">Logo<br>${esc(o.logo)}</span>`
    : `<img src="brand/oggetti/${o.file}.svg" alt="" width="180" height="200">`;
  return `<div class="oggetto${o.logo ? " oggetto--logo" : ""}" style="${stile}"><div class="oggetto__forma">${contenuto}</div></div>`;
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
    <p class="scritta-gigante apertura__scritta" aria-hidden="true">${esc(t.sito.scrittaGigante)}</p>
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
    <p class="testo-grande come-lavoro__intro">${esc(c.intro)}</p>
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
  const f = c.campi;
  const attivo = !segnaposto(t.sito.urlForm);
  const azione = attivo ? ` action="${esc(t.sito.urlForm)}" method="post"` : ` data-non-attivo`;
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
    <form class="modulo"${azione}>
      <div class="modulo__campo">
        <label for="campo-nome">${esc(f.nome)}</label>
        <input id="campo-nome" name="nome" type="text" autocomplete="name" required>
      </div>
      <div class="modulo__campo">
        <label for="campo-email">${esc(f.email)}</label>
        <input id="campo-email" name="email" type="email" autocomplete="email" required>
      </div>
      <div class="modulo__campo">
        <label for="campo-messaggio">${esc(f.messaggio)}</label>
        <p class="modulo__aiuto" id="aiuto-messaggio">${esc(f.messaggioAiuto)}</p>
        <textarea id="campo-messaggio" name="messaggio" rows="5" aria-describedby="aiuto-messaggio" required></textarea>
      </div>
      <div class="modulo__scelta">
        <input id="campo-privacy" name="privacy" type="checkbox" required>
        <label for="campo-privacy">${esc(f.privacyPrima)}${link(t.sito.urlPrivacy, f.privacyLink)}${esc(f.privacyDopo)}</label>
      </div>
      <button class="pillola pillola--mare" type="submit">${esc(c.invia)}</button>
      <p class="modulo__stato" role="status" data-messaggio-non-attivo="${esc(c.nonAttivo)}"></p>
      <p class="modulo__alternativa">${esc(c.oppure)} ${email}</p>
    </form>
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
    script: ["assets/vendor/gsap.min.js", "assets/vendor/ScrollTrigger.min.js", "assets/js/apertura.js", "assets/js/percorso.js", "assets/js/modulo.js"],
    dati: [datiPersona(t), datiServizioProfessionale(t)],
    corpo,
  });
}
