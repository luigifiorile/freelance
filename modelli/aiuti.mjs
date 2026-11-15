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
