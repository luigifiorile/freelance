// Pagina 404.
import { esc } from "./aiuti.mjs";
import { struttura } from "./struttura.mjs";

export function nonTrovata(t) {
  const p = t.pagine.nonTrovata;
  const corpo = `
<section class="sezione">
  <div class="contenitore">
    <h1 class="titolo-1">${esc(p.titoloPagina)}</h1>
    <p class="testo-grande">${esc(p.testo)}</p>
    <p><a class="pillola" href="./">${esc(t.comune.homeLink)}</a></p>
  </div>
</section>`;
  return struttura(t, {
    percorso: "",
    titolo: p.titolo,
    descrizione: p.descrizione,
    base: true,
    script: ["assets/js/menu.js"],
    corpo,
  });
}
