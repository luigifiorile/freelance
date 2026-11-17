// Convertitore Markdown minimo per gli articoli della guida, senza dipendenze.
// Supporta: intestazione YAML semplice, ## e ### (con id), paragrafi, elenchi
// puntati e numerati, citazioni (>), tabelle, blocchi ``` (esempi di prompt),
// grassetto, corsivo, codice, link e segnaposto [[...]].
//
// Link speciali, risolti in percorsi relativi dal modello:
//   [testo](guida:slug)           articolo della guida ("guida:" da solo = pagina pilastro)
//   [testo](guida:slug#ancora)
//   [testo](servizio:id)          pagina servizio
//   [testo](demo:id)              pagina demo
//   [testo](home:#contatti)       sezione della home
import { esc } from "./aiuti.mjs";

// ---------- Intestazione ----------
// Formato: chiave: valore, oppure chiave: seguita da righe "- voce".
export function leggiIntestazione(sorgente) {
  const m = sorgente.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { dati: {}, corpo: sorgente };
  const dati = {};
  let lista = null;
  for (const riga of m[1].split("\n")) {
    if (!riga.trim()) continue;
    const voce = riga.match(/^\s*-\s+(.*)$/);
    if (voce && lista) {
      dati[lista].push(voce[1].trim());
      continue;
    }
    const kv = riga.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    if (kv[2] === "") {
      lista = kv[1];
      dati[lista] = [];
    } else {
      lista = null;
      dati[kv[1]] = kv[2].trim();
    }
  }
  return { dati, corpo: sorgente.slice(m[0].length) };
}

// ---------- Id per i titoli ----------
export function ancora(testo) {
  return String(testo)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

// ---------- Testo in linea ----------
function inLinea(testo, risolvi) {
  const pezzi = [];
  const tieni = (html) => `\u0000${pezzi.push(html) - 1}\u0000`;
  let s = String(testo);
  // codice
  s = s.replace(/`([^`]+)`/g, (_, c) => tieni(`<code>${esc(c)}</code>`));
  // segnaposto [[...]]
  s = s.replace(/\[\[([^\]]+)\]\]/g, (_, c) => tieni(`<span class="segnaposto">[${esc(c)}]</span>`));
  // link [testo](url)
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, url) => {
    const { href, esterno, mancante } = risolvi(url);
    // Articolo non ancora pubblicato: resta testo, niente link rotti.
    if (mancante) return tieni(inLinea(t, risolvi));
    const attr = esterno ? ' rel="noopener"' : "";
    return tieni(`<a href="${esc(href)}"${attr}>${inLinea(t, risolvi)}</a>`);
  });
  s = esc(s);
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^\w*])\*([^*\n]+)\*(?=[^\w*]|$)/g, "$1<em>$2</em>");
  s = s.replace(/(^|[^\w])_([^_\n]+)_(?=[^\w]|$)/g, "$1<em>$2</em>");
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => pezzi[Number(i)]);
}

// Testo semplice (per indice, dati strutturati): toglie la sintassi in linea.
export function testoSemplice(testo) {
  return String(testo)
    .replace(/\[\[([^\]]+)\]\]/g, "[$1]")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/[*_`]/g, "");
}

// ---------- Blocchi ----------
// Restituisce { html, titoli: [{livello, testo, id}], domande: [{domanda, risposta}], link: [url esterni] }
export function markdown(sorgente, risolvi) {
  const righe = sorgente.replace(/\r/g, "").split("\n");
  const out = [];
  const titoli = [];
  const domande = [];
  const linkEsterni = new Set();
  const idUsati = new Set();
  let i = 0;
  let inFaq = false;
  let domandaCorrente = null;

  const risolviTraccia = (url) => {
    const r = risolvi(url);
    if (r.esterno) linkEsterni.add(r.href);
    return r;
  };
  const riga = (t) => inLinea(t, risolviTraccia);
  const idUnico = (t) => {
    let base = ancora(t) || "sezione";
    let id = base;
    for (let n = 2; idUsati.has(id); n++) id = `${base}-${n}`;
    idUsati.add(id);
    return id;
  };
  const chiudiDomanda = () => {
    if (domandaCorrente && domandaCorrente.risposta.length) domande.push({ domanda: domandaCorrente.domanda, risposta: domandaCorrente.risposta.join(" ") });
    domandaCorrente = null;
  };

  while (i < righe.length) {
    const r = righe[i];

    if (!r.trim()) { i++; continue; }

    // blocco ``` (esempio di prompt)
    if (r.startsWith("```")) {
      const etichetta = r.slice(3).trim();
      const contenuto = [];
      i++;
      while (i < righe.length && !righe[i].startsWith("```")) contenuto.push(righe[i++]);
      i++;
      out.push(`<figure class="prompt">${etichetta ? `<figcaption class="etichetta">${esc(etichetta)}</figcaption>` : ""}<pre>${esc(contenuto.join("\n"))}</pre></figure>`);
      continue;
    }

    // titoli
    const h = r.match(/^(#{2,3})\s+(.*)$/);
    if (h) {
      const livello = h[1].length;
      const testo = h[2].trim();
      const id = idUnico(testoSemplice(testo));
      if (livello === 2) {
        chiudiDomanda();
        inFaq = /^domande frequenti/i.test(testoSemplice(testo));
        titoli.push({ livello, testo: testoSemplice(testo), id });
      } else if (inFaq) {
        chiudiDomanda();
        domandaCorrente = { domanda: testoSemplice(testo), risposta: [] };
      }
      out.push(`<h${livello} id="${id}">${riga(testo)}</h${livello}>`);
      i++;
      continue;
    }

    // tabella
    if (r.trim().startsWith("|") && righe[i + 1] && /^\s*\|[\s:|-]+\|\s*$/.test(righe[i + 1])) {
      const celle = (x) => x.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const testa = celle(r);
      i += 2;
      const corpo = [];
      while (i < righe.length && righe[i].trim().startsWith("|")) corpo.push(celle(righe[i++]));
      out.push(
        `<div class="tabella-scorre"><table class="tabella"><thead><tr>${testa.map((c) => `<th scope="col">${riga(c)}</th>`).join("")}</tr></thead><tbody>${corpo
          .map((rr) => `<tr>${rr.map((c, j) => (j === 0 ? `<th scope="row">${riga(c)}</th>` : `<td>${riga(c)}</td>`)).join("")}</tr>`)
          .join("")}</tbody></table></div>`
      );
      continue;
    }

    // citazione
    if (r.startsWith(">")) {
      const contenuto = [];
      while (i < righe.length && righe[i].startsWith(">")) contenuto.push(righe[i++].replace(/^>\s?/, ""));
      const paragrafi = contenuto.join("\n").split(/\n\s*\n/).map((p) => `<p>${riga(p.replace(/\n/g, " "))}</p>`);
      out.push(`<blockquote>${paragrafi.join("")}</blockquote>`);
      continue;
    }

    // elenchi
    const puntato = /^\s*[-*]\s+/;
    const numerato = /^\s*\d+\.\s+/;
    if (puntato.test(r) || numerato.test(r)) {
      const tipo = puntato.test(r) ? "ul" : "ol";
      const re = tipo === "ul" ? puntato : numerato;
      const voci = [];
      while (i < righe.length && (re.test(righe[i]) || (/^\s{2,}\S/.test(righe[i]) && voci.length))) {
        if (re.test(righe[i])) voci.push(righe[i].replace(re, ""));
        else voci[voci.length - 1] += " " + righe[i].trim();
        i++;
      }
      out.push(`<${tipo}>${voci.map((v) => `<li>${riga(v)}</li>`).join("")}</${tipo}>`);
      if (domandaCorrente) domandaCorrente.risposta.push(voci.map(testoSemplice).join("; "));
      continue;
    }

    // paragrafo
    const par = [];
    while (i < righe.length && righe[i].trim() && !/^(#{2,3}\s|```|>|\s*[-*]\s+|\s*\d+\.\s+|\|)/.test(righe[i])) par.push(righe[i++].trim());
    if (!par.length) { par.push(r.trim()); i++; }
    const testo = par.join(" ");
    out.push(`<p>${riga(testo)}</p>`);
    if (domandaCorrente) domandaCorrente.risposta.push(testoSemplice(testo));
  }
  chiudiDomanda();

  return { html: out.join("\n"), titoli, domande, link: [...linkEsterni] };
}

// Conta le parole (per il tempo di lettura).
export function parole(sorgente) {
  return testoSemplice(sorgente).split(/\s+/).filter(Boolean).length;
}
