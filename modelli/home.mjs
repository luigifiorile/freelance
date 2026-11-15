// Home: apertura, percorso tra i servizi, come lavoro, chi sono, contatti.
// In questa tappa ci sono solo le sezioni vuote: si riempiono nelle tappe successive.
import { esc } from "./aiuti.mjs";
import { struttura } from "./struttura.mjs";

function sezione(id, titolo, testo) {
  return `
<section class="sezione" id="${id}" aria-labelledby="${id}-titolo">
  <div class="contenitore">
    <h2 class="titolo-1" id="${id}-titolo">${esc(titolo)}</h2>
    <p class="testo-grande">${esc(testo)}</p>
  </div>
</section>`;
}

export function home(t) {
  const h = t.home;
  const corpo = `
<section class="apertura-provvisoria" aria-labelledby="apertura-titolo">
  <h1 class="nascosto" id="apertura-titolo">${esc(h.apertura.titoloNascosto)}</h1>
  <p class="scritta-gigante" aria-hidden="true" data-scritta-gigante>${esc(t.sito.scrittaGigante)}</p>
</section>
${sezione("servizi", h.servizi.titolo, h.servizi.intro)}
${sezione("come-lavoro", h.comeLavoro.titolo, h.comeLavoro.intro)}
${sezione("chi-sono", h.chiSono.titolo, h.chiSono.testo)}
${sezione("contatti", h.contatti.titolo, h.contatti.intro)}
`;
  return struttura(t, {
    percorso: "",
    titolo: t.pagine.home.titolo,
    descrizione: t.pagine.home.descrizione,
    inHome: true,
    classe: "pagina-home",
    script: ["assets/js/menu.js"],
    corpo,
  });
}
