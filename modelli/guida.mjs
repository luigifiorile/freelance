// Guida all'AI: pagina pilastro (guida-ai/) e articoli (guida-ai/<slug>/).
// I testi sono in contenuti/guida-ai/*.md; le etichette in it.json → guida.
import { esc, svg, compila, prefisso, segnaposto } from "./aiuti.mjs";
import { struttura, datiPersona } from "./struttura.mjs";
import { markdown } from "./markdown.mjs";

export const CARTELLA = "guida-ai";

// Data in italiano: "17 novembre 2026".
function data(iso, lingua) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(lingua === "it" ? "it-IT" : lingua, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

// Risolve i link speciali in percorsi relativi alla pagina.
function risolutore(t, articoli, percorsoPagina) {
  const r = prefisso(percorsoPagina);
  const slugs = new Set(articoli.map((a) => a.slug));
  const servizi = new Set(t.servizi.map((s) => s.id));
  const demo = new Set(t.servizi.map((s) => s.demo.id));
  return (url) => {
    const [tipo, resto = ""] = url.split(/:(.*)/s);
    if (/^https?$/.test(tipo) || url.startsWith("mailto:")) return { href: url, esterno: true };
    const [id, frammento] = resto.split("#");
    const hash = frammento ? `#${frammento}` : "";
    if (tipo === "guida") {
      if (id && !slugs.has(id)) return { mancante: true };
      return { href: `${r}${CARTELLA}/${id ? id + "/" : ""}${hash}` };
    }
    if (tipo === "servizio" && servizi.has(id)) return { href: `${r}servizi/${id}/${hash}` };
    if (tipo === "demo" && demo.has(id)) return { href: `${r}demo/${id}/${hash}` };
    if (tipo === "home") return { href: `${r}${hash}` || "./" };
    console.warn(`Link non riconosciuto in guida: ${url}`);
    return { mancante: true };
  };
}

function inBreve(g, voci) {
  if (!voci || !voci.length) return "";
  return `
  <aside class="in-breve" aria-labelledby="in-breve-titolo">
    <h2 class="etichetta" id="in-breve-titolo">${esc(g.inBreve)}</h2>
    <ul>${voci.map((v) => `<li>${esc(v)}</li>`).join("")}</ul>
  </aside>`;
}

function indiceArticolo(g, titoli) {
  if (titoli.length < 3) return "";
  return `
  <details class="indice-articolo">
    <summary class="etichetta">${esc(g.indice)}</summary>
    <ol>${titoli.map((h) => `<li><a href="#${h.id}">${esc(h.testo)}</a></li>`).join("")}</ol>
  </details>`;
}

function autore(t, g, r) {
  return `
  <aside class="autore" aria-label="${esc(g.autoreEtichetta)}">
    <img src="${r}brand/logo/marchio.svg" alt="" width="56" height="56">
    <div>
      <p class="etichetta">${esc(g.autoreEtichetta)}</p>
      <p><strong>${esc(t.sito.persona)}</strong>. ${esc(g.autoreBio)}${g.autoreBackground ? " " + (segnaposto(g.autoreBackground) ? `<span class="segnaposto">${esc(g.autoreBackground)}</span>` : esc(g.autoreBackground)) : ""}</p>
    </div>
  </aside>`;
}

// Invito finale informale: le varianti ruotano da un articolo all'altro (la pilastro usa la prima).
function invito(t, g, r, servizioId, n = 0) {
  const v = g.inviti[n % g.inviti.length];
  const s = t.servizi.find((x) => x.id === servizioId);
  const secondario = s
    ? `<a class="pillola" href="${r}servizi/${esc(s.id)}/">${esc(s.nome)} ${svg("icone-ui/freccia-esterna", "icona")}</a>`
    : "";
  return `
<section class="sezione-pagina invito" aria-labelledby="invito-titolo">
  ${svg("onde/divisore", "invito__onda")}
  <div class="contenitore">
    <h2 class="titolo-1" id="invito-titolo">${esc(v.titolo)}</h2>
    <p class="testo-grande">${esc(v.testo)}</p>
    <p class="invito__azioni">
      <a class="pillola pillola--mare" href="${r}#contatti">${esc(v.pulsante)}</a>
      ${secondario}
    </p>
  </div>
</section>`;
}

function datiBriciole(t, g, voci) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: voci.map((v, i) => ({ "@type": "ListItem", position: i + 1, name: v.nome, item: t.sito.urlBase + v.percorso })),
  };
}

function datiFaq(domande) {
  if (!domande.length) return [];
  return [{
    "@type": "FAQPage",
    mainEntity: domande.map((d) => ({ "@type": "Question", name: d.domanda, acceptedAnswer: { "@type": "Answer", text: d.risposta } })),
  }];
}

function datiArticolo(t, a, percorso, contenuto, extra = {}) {
  return {
    "@type": "Article",
    "@id": `${t.sito.urlBase}${percorso}#articolo`,
    headline: a.dati.titolo,
    description: a.dati.descrizione,
    inLanguage: t.sito.locale.replace("_", "-"),
    datePublished: a.dati.pubblicato,
    dateModified: a.dati.aggiornato || a.dati.pubblicato,
    author: { "@id": `${t.sito.urlBase}#persona` },
    publisher: { "@id": `${t.sito.urlBase}#persona` },
    mainEntityOfPage: t.sito.urlBase + percorso,
    image: `${t.sito.urlBase}assets/img/anteprima-social.png`,
    wordCount: a.parole,
    ...(contenuto.link.length ? { citation: contenuto.link } : {}),
    ...extra,
  };
}

function metaArticolo(t, g, a) {
  const minuti = Math.max(1, Math.round(a.parole / 220));
  const agg = a.dati.aggiornato || a.dati.pubblicato;
  return `<p class="articolo__meta">${esc(compila(g.di, { nome: t.sito.persona }))} · ${esc(g.aggiornato)} <time datetime="${esc(agg)}">${esc(data(agg, t.sito.lingua))}</time> · ${esc(compila(g.lettura, { n: minuti }))}</p>`;
}

function testaOg(a) {
  const agg = a.dati.aggiornato || a.dati.pubblicato;
  return `<meta property="article:published_time" content="${esc(a.dati.pubblicato)}">
  <meta property="article:modified_time" content="${esc(agg)}">`;
}

// ---------- Pagina pilastro ----------
export function guidaPilastro(t, pilastro, articoli) {
  const g = t.guida;
  const percorso = `${CARTELLA}/`;
  const r = prefisso(percorso);
  const contenuto = markdown(pilastro.corpo, risolutore(t, articoli, percorso));

  const capitoli = g.capitoli
    .map((c, i) => {
      const lista = articoli.filter((a) => a.dati.capitolo === c.id).sort((x, y) => Number(x.dati.ordine) - Number(y.dati.ordine));
      if (!lista.length) return "";
      return `
      <li class="capitolo">
        <p class="capitolo__numero" aria-hidden="true">${String(i + 1).padStart(2, "0")}</p>
        <div>
          <h3 class="capitolo__nome">${esc(c.nome)}</h3>
          <p class="secondario">${esc(c.descrizione)}</p>
          <ul class="capitolo__articoli">${lista.map((a) => `<li><a href="${r}${CARTELLA}/${esc(a.slug)}/">${esc(a.dati.titolo)}</a></li>`).join("")}</ul>
        </div>
      </li>`;
    })
    .join("");

  const corpo = `
<article class="articolo articolo--pilastro" aria-labelledby="articolo-titolo">
  <header class="pagina-testa">
    <div class="contenitore">
      <p class="etichetta pagina-testa__etichetta">${esc(g.etichetta)}</p>
      <h1 class="titolo-1" id="articolo-titolo">${esc(pilastro.dati.titolo)}</h1>
      <p class="testo-grande pagina-testa__frase">${esc(pilastro.dati.sottotitolo || "")}</p>
      ${metaArticolo(t, g, pilastro)}
    </div>
  </header>
  <div class="contenitore articolo__griglia">
    <div class="articolo__colonna">
      ${inBreve(g, pilastro.dati.inBreve)}
      <nav class="mappa-guida" aria-labelledby="mappa-titolo">
        <h2 class="titolo-2" id="mappa-titolo">${esc(g.mappaTitolo)}</h2>
        <ol class="capitoli">${capitoli}</ol>
      </nav>
      <div class="prosa">
${contenuto.html}
      </div>
      ${autore(t, g, r)}
    </div>
  </div>
</article>
${invito(t, g, r, null)}`;

  const briciole = [
    { nome: t.sito.brand, percorso: "" },
    { nome: g.nomeBreve, percorso },
  ];

  return struttura(t, {
    percorso,
    titolo: pilastro.dati.titoloSeo || pilastro.dati.titolo,
    descrizione: pilastro.dati.descrizione,
    classe: "pagina-guida",
    stili: ["assets/css/pagine.css", "assets/css/guida.css"],
    ogTipo: "article",
    testaExtra: testaOg(pilastro),
    dati: [
      datiPersona(t),
      datiArticolo(t, pilastro, percorso, contenuto, {
        hasPart: articoli.map((a) => ({ "@id": `${t.sito.urlBase}${CARTELLA}/${a.slug}/#articolo` })),
      }),
      datiBriciole(t, g, briciole),
      ...datiFaq(contenuto.domande),
    ],
    corpo,
  });
}

// ---------- Articolo ----------
export function guidaArticolo(t, a, articoli) {
  const g = t.guida;
  const percorso = `${CARTELLA}/${a.slug}/`;
  const r = prefisso(percorso);
  const contenuto = markdown(a.corpo, risolutore(t, articoli, percorso));
  const capitolo = g.capitoli.find((c) => c.id === a.dati.capitolo);

  // Altri articoli: prima quelli indicati in "correlati", poi lo stesso capitolo.
  const scelti = [];
  for (const s of a.dati.correlati || []) {
    const x = articoli.find((y) => y.slug === s);
    if (x && x !== a && !scelti.includes(x)) scelti.push(x);
  }
  for (const x of articoli.filter((y) => y.dati.capitolo === a.dati.capitolo && y !== a)) if (!scelti.includes(x)) scelti.push(x);
  const altri = scelti.slice(0, 4);

  const corpo = `
<article class="articolo" aria-labelledby="articolo-titolo">
  <header class="pagina-testa">
    <div class="contenitore">
      <nav class="briciole" aria-label="${esc(g.briciole)}">
        <ol>
          <li><a href="${r}">${esc(t.sito.brand)}</a></li>
          <li><a href="${r}${CARTELLA}/">${esc(g.nomeBreve)}</a></li>
          <li><span aria-current="page">${esc(a.dati.titoloBreve || a.dati.titolo)}</span></li>
        </ol>
      </nav>
      ${capitolo ? `<p class="etichetta pagina-testa__etichetta">${esc(capitolo.nome)}</p>` : ""}
      <h1 class="titolo-1" id="articolo-titolo">${esc(a.dati.titolo)}</h1>
      ${a.dati.sottotitolo ? `<p class="testo-grande pagina-testa__frase">${esc(a.dati.sottotitolo)}</p>` : ""}
      ${metaArticolo(t, g, a)}
    </div>
  </header>
  <div class="contenitore articolo__griglia">
    <div class="articolo__colonna">
      ${inBreve(g, a.dati.inBreve)}
      ${indiceArticolo(g, contenuto.titoli)}
      <div class="prosa">
${contenuto.html}
      </div>
      ${autore(t, g, r)}
      <nav class="continua" aria-labelledby="continua-titolo">
        <h2 class="titolo-2" id="continua-titolo">${esc(g.continuaTitolo)}</h2>
        <ul>
          ${altri.map((x) => `<li><a href="${r}${CARTELLA}/${esc(x.slug)}/">${esc(x.dati.titolo)}</a></li>`).join("")}
          <li><a href="${r}${CARTELLA}/">${svg("icone-ui/freccia-su", "icona icona--sinistra")} ${esc(g.tornaPilastro)}</a></li>
        </ul>
      </nav>
    </div>
  </div>
</article>
${invito(t, g, r, a.dati.servizio, Number(a.dati.ordine) || 0)}`;

  const briciole = [
    { nome: t.sito.brand, percorso: "" },
    { nome: g.nomeBreve, percorso: `${CARTELLA}/` },
    { nome: a.dati.titoloBreve || a.dati.titolo, percorso },
  ];

  return struttura(t, {
    percorso,
    titolo: a.dati.titoloSeo || compila(g.titoloPagina, { titolo: a.dati.titolo, brand: t.sito.brand }),
    descrizione: a.dati.descrizione,
    classe: "pagina-guida",
    stili: ["assets/css/pagine.css", "assets/css/guida.css"],
    ogTipo: "article",
    testaExtra: testaOg(a),
    dati: [
      datiPersona(t),
      datiArticolo(t, a, percorso, contenuto, { isPartOf: { "@id": `${t.sito.urlBase}${CARTELLA}/#articolo` } }),
      datiBriciole(t, g, briciole),
      ...datiFaq(contenuto.domande),
    ],
    corpo,
  });
}

// Per llms.txt e mappa del sito.
export function vociGuida(t, pilastro, articoli) {
  return [
    { percorso: `${CARTELLA}/`, titolo: pilastro.dati.titolo, descrizione: pilastro.dati.descrizione, aggiornato: pilastro.dati.aggiornato || pilastro.dati.pubblicato },
    ...articoli.map((a) => ({ percorso: `${CARTELLA}/${a.slug}/`, titolo: a.dati.titolo, descrizione: a.dati.descrizione, aggiornato: a.dati.aggiornato || a.dati.pubblicato })),
  ];
}

