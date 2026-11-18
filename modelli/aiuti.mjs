// Funzioni di supporto condivise dai modelli.

// Protegge il testo prima di inserirlo nell'HTML.
export function esc(valore) {
  return String(valore ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Un segnaposto è un testo tra parentesi quadre, per esempio "[EMAIL]".
export function segnaposto(valore) {
  return /^\[.*\]$/.test(String(valore ?? "").trim());
}

// Restituisce il prefisso relativo per tornare alla radice del sito
// partendo da una pagina. "servizi/crm/" -> "../../", "" -> "".
export function prefisso(percorsoPagina) {
  const livelli = percorsoPagina.split("/").filter(Boolean).length;
  return "../".repeat(livelli);
}

// Link che, se l'indirizzo è ancora un segnaposto, diventa testo semplice
// segnato come segnaposto, così non porta a una pagina rotta.
export function link(url, testo, attributi = "") {
  if (segnaposto(url)) {
    return `<span class="segnaposto" data-segnaposto="${esc(url)}">${esc(testo)}</span>`;
  }
  return `<a href="${esc(url)}"${attributi ? " " + attributi : ""}>${esc(testo)}</a>`;
}

// ---------- SVG del repository ----------
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const cartellaBrand = join(dirname(fileURLToPath(import.meta.url)), "..", "brand");

// Inserisce un SVG di brand/ direttamente nella pagina.
// Le forme non cambiano: si tolgono solo width/height della radice
// (le misure le decide il CSS) e si aggiungono classe e aria-hidden.
// Serve per gli SVG in currentColor (onde, icone) e per la calotta.
export function svg(nome, classe = "", extra = "") {
  const sorgente = readFileSync(join(cartellaBrand, `${nome}.svg`), "utf8").trim();
  return sorgente.replace(/^<svg([^>]*)>/, (_, attr) => {
    const pulito = attr.replace(/\s(width|height)="[^"]*"/g, "");
    return `<svg${pulito} class="${classe}" aria-hidden="true" focusable="false"${extra ? " " + extra : ""}>`;
  });
}

// Sostituisce {chiave} in un testo.
export function compila(testo, valori) {
  return String(testo).replace(/\{(\w+)\}/g, (_, k) => (k in valori ? valori[k] : `{${k}}`));
}

// ---------- Versione dei file (contro la cache del browser) ----------
import { createHash } from "node:crypto";

const radiceProgetto = join(dirname(fileURLToPath(import.meta.url)), "..");
const versioni = new Map();

// Restituisce un codice breve che cambia quando cambia il contenuto del file.
// Si aggiunge agli indirizzi di CSS e JS ("?v=..."): così dopo una pubblicazione
// il browser non mescola una pagina nuova con uno script vecchio rimasto in cache.
export function versione(percorso) {
  if (!versioni.has(percorso)) {
    // tokens.css viene copiato da brand/ durante la costruzione del sito.
    const sorgente = percorso === "assets/css/tokens.css" ? "brand/tokens.css" : percorso;
    let codice = "";
    try {
      codice = createHash("sha1").update(readFileSync(join(radiceProgetto, sorgente))).digest("hex").slice(0, 8);
    } catch {
      codice = "";
    }
    versioni.set(percorso, codice);
  }
  return versioni.get(percorso);
}
