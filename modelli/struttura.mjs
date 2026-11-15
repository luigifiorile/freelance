// Struttura comune a tutte le pagine: <head>, testata, piè di pagina.
import { esc, prefisso, link, segnaposto } from "./aiuti.mjs";

function testata(t, r, inHome) {
  const base = inHome ? "" : `${r}`;
  const voci = t.comune.menu
    .map((v) => `<li><a href="${base}#${esc(v.ancora)}">${esc(v.testo)}</a></li>`)
    .join("");
  return `
<header class="testata">
  <a class="testata__marchio" href="${r || "./"}" ${inHome ? 'aria-current="page"' : ""}>
    <img src="${r}brand/logo/marchio.svg" alt="" width="40" height="40">
    <span class="testata__nome" data-brand>${esc(t.sito.brand)}</span>
  </a>
  <button class="testata__menu" type="button" aria-expanded="false" aria-controls="menu-principale" hidden>Menu</button>
  <nav class="testata__nav" id="menu-principale" aria-label="${esc(t.comune.menuEtichetta)}">
    <ul>${voci}</ul>
  </nav>
</header>`;
}

function piede(t, r) {
  const p = t.comune.piede;
  const email = segnaposto(t.sito.email)
    ? `<span class="segnaposto" data-segnaposto="${esc(t.sito.email)}">${esc(t.sito.email)}</span>`
    : `<a href="mailto:${esc(t.sito.email)}">${esc(t.sito.email)}</a>`;
  return `
<footer class="piede">
  <div class="piede__riga">
    <p class="piede__brand"><img src="${r}brand/logo/marchio.svg" alt="" width="32" height="32"> <span data-brand>${esc(t.sito.brand)}</span></p>
    <p class="piede__descrizione">${esc(p.descrizione)}</p>
  </div>
  <div class="piede__riga piede__riga--piccola">
    <p>${esc(t.sito.persona)} · ${esc(t.sito.citta)} · ${email}</p>
    <p>${esc(p.partitaIvaEtichetta)} <span${segnaposto(t.sito.partitaIva) ? ` class="segnaposto" data-segnaposto="${esc(t.sito.partitaIva)}"` : ""}>${esc(t.sito.partitaIva)}</span> · ${link(t.sito.urlPrivacy, p.privacy)}</p>
    <p><a class="piede__su" href="#inizio">${esc(p.torna)} <img src="${r}brand/icone-ui/freccia-su.svg" alt="" width="18" height="18"></a></p>
  </div>
</footer>`;
}

// pagina: { percorso, titolo, descrizione, corpo, classe, inHome, base, script }
export function struttura(t, pagina) {
  const r = prefisso(pagina.percorso);
  const url = t.sito.urlBase + pagina.percorso;
  // Solo la pagina 404 usa <base>: GitHub Pages la serve a qualsiasi profondità,
  // quindi i percorsi relativi non basterebbero. Si usa solo il percorso di
  // sito.urlBase (es. "/freelance/"), così funziona anche nell'anteprima locale.
  const base = pagina.base ? `<base href="${esc(new URL(t.sito.urlBase).pathname)}">\n  ` : "";
  const script = (pagina.script || [])
    .map((s) => `<script src="${r}${s}" defer></script>`)
    .join("\n  ");
  return `<!doctype html>
<html lang="${esc(t.sito.lingua)}">
<head>
  <meta charset="utf-8">
  ${base}<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(pagina.titolo)}</title>
  <meta name="description" content="${esc(pagina.descrizione)}">
  ${pagina.base ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${esc(url)}">`}
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${esc(t.sito.locale)}">
  <meta property="og:site_name" content="${esc(t.sito.brand)}">
  <meta property="og:title" content="${esc(pagina.titolo)}">
  <meta property="og:description" content="${esc(pagina.descrizione)}">
  <meta property="og:url" content="${esc(url)}">
  <meta name="theme-color" content="#EDEDED">
  <link rel="icon" href="${r}brand/logo/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="${r}assets/font/inter.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="${r}assets/font/bricolage-grotesque.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${r}assets/css/tokens.css">
  <link rel="stylesheet" href="${r}assets/css/base.css">
  ${script}
</head>
<body class="${esc(pagina.classe || "")}" id="inizio">
<a class="salta" href="#contenuto">${esc(t.comune.saltaAlContenuto)}</a>
${testata(t, r, pagina.inHome)}
<main id="contenuto" tabindex="-1">
${pagina.corpo}
</main>
${piede(t, r)}
</body>
</html>
`;
}
