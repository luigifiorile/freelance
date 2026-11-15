// Struttura comune a tutte le pagine: <head>, testata, piè di pagina.
import { esc, prefisso, link, segnaposto, svg } from "./aiuti.mjs";

function testata(t, r, inHome) {
  const base = inHome ? "" : r || "./";
  const voci = t.comune.menu
    .map((v) => `<li><a href="${base}#${esc(v.ancora)}">${esc(v.testo)}</a></li>`)
    .join("");
  return `
<header class="testata">
  <a class="testata__marchio" href="${r || "./"}"${inHome ? ' aria-current="page"' : ""}>
    <img src="${r}brand/logo/marchio.svg" alt="" width="40" height="40">
    <span class="testata__nome">${esc(t.sito.brand)}</span>
  </a>
  <button class="testata__menu" type="button" aria-expanded="false" aria-controls="menu-principale" hidden>Menu</button>
  <nav class="testata__nav" id="menu-principale" aria-label="${esc(t.comune.menuEtichetta)}">
    <ul>${voci}</ul>
  </nav>
</header>`;
}

function testoSegnaposto(valore) {
  return segnaposto(valore)
    ? `<span class="segnaposto">${esc(valore)}</span>`
    : esc(valore);
}

function piede(t, r) {
  const p = t.comune.piede;
  const email = segnaposto(t.sito.email)
    ? testoSegnaposto(t.sito.email)
    : `<a href="mailto:${esc(t.sito.email)}">${esc(t.sito.email)}</a>`;
  return `
<footer class="piede">
  <div class="piede__riga">
    <p class="piede__brand"><img src="${r}brand/logo/marchio.svg" alt="" width="32" height="32"> <span>${esc(t.sito.brand)}</span></p>
    <p class="piede__descrizione">${esc(p.descrizione)}</p>
  </div>
  <div class="piede__riga piede__riga--piccola">
    <p>${esc(t.sito.persona)} · ${esc(t.sito.citta)} · ${email}</p>
    <p>${esc(p.partitaIvaEtichetta)} ${testoSegnaposto(t.sito.partitaIva)} · ${link(t.sito.urlPrivacy, p.privacy)}</p>
    <p><a class="piede__su" href="#inizio">${esc(p.torna)} ${svg("icone-ui/freccia-su", "icona")}</a></p>
  </div>
</footer>`;
}

// Dati strutturati comuni: la persona e il servizio professionale.
export function datiPersona(t) {
  const persona = {
    "@type": "Person",
    "@id": `${t.sito.urlBase}#persona`,
    name: t.sito.persona,
    url: t.sito.urlBase,
    workLocation: { "@type": "Place", name: t.sito.citta },
  };
  if (!segnaposto(t.sito.email)) persona.email = `mailto:${t.sito.email}`;
  return persona;
}
export function datiServizioProfessionale(t) {
  return {
    "@type": "ProfessionalService",
    "@id": `${t.sito.urlBase}#attivita`,
    name: t.sito.brand,
    url: t.sito.urlBase,
    description: t.pagine.home.descrizione,
    image: `${t.sito.urlBase}assets/img/anteprima-social.png`,
    logo: `${t.sito.urlBase}brand/logo/favicon.svg`,
    address: { "@type": "PostalAddress", addressLocality: t.sito.citta, addressCountry: t.sito.paese },
    areaServed: { "@type": "Country", name: "Italia" },
    founder: { "@id": `${t.sito.urlBase}#persona` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.home.servizi.titolo,
      itemListElement: t.servizi.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.nome, url: `${t.sito.urlBase}servizi/${s.id}/` },
      })),
    },
  };
}

// pagina: { percorso, titolo, descrizione, corpo, classe, inHome, base, stili, script, dati }
export function struttura(t, pagina) {
  const r = prefisso(pagina.percorso);
  const url = t.sito.urlBase + pagina.percorso;
  // Solo la pagina 404 usa <base>: GitHub Pages la serve a qualsiasi profondità,
  // quindi i percorsi relativi non basterebbero. Si usa solo il percorso di
  // sito.urlBase (es. "/freelance/"), così funziona anche nell'anteprima locale.
  const base = pagina.base ? `<base href="${esc(new URL(t.sito.urlBase).pathname)}">\n  ` : "";
  const stili = ["assets/css/tokens.css", "assets/css/base.css", ...(pagina.stili || [])]
    .map((s) => `<link rel="stylesheet" href="${r}${s}">`)
    .join("\n  ");
  const script = ["assets/js/menu.js", ...(pagina.script || [])]
    .map((s) => `<script src="${r}${s}" defer></script>`)
    .join("\n  ");
  const immagineSocial = `${t.sito.urlBase}assets/img/anteprima-social.png`;
  const dati = pagina.dati
    ? `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": pagina.dati }).replace(/</g, "\\u003c")}</script>`
    : "";
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
  <meta property="og:image" content="${esc(immagineSocial)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(t.comune.anteprimaSocialAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#EDEDED">
  <link rel="icon" href="${r}brand/logo/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="${r}assets/font/inter.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="${r}assets/font/bricolage-grotesque.woff2" as="font" type="font/woff2" crossorigin>
  <script>document.documentElement.classList.add("js",matchMedia("(prefers-reduced-motion: reduce)").matches?"movimento-ridotto":"movimento")</script>
  ${stili}
  ${script}
  ${dati}
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
