// Costruisce il sito statico in _sito/.
// Uso: node script/costruisci.mjs [lingua]   (predefinita: it)
// Nessuna dipendenza: solo Node (versione 20 o successiva).
import { readFile, writeFile, mkdir, rm, cp, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { home } from "../modelli/home.mjs";
import { nonTrovata } from "../modelli/non-trovata.mjs";
import { servizio } from "../modelli/servizio.mjs";
import { demo } from "../modelli/demo.mjs";
import { guidaPilastro, guidaArticolo, vociGuida, CARTELLA } from "../modelli/guida.mjs";
import { leggiIntestazione, parole } from "../modelli/markdown.mjs";

const radice = join(dirname(fileURLToPath(import.meta.url)), "..");
const uscita = join(radice, "_sito");
const lingua = process.argv[2] || "it";

const testi = JSON.parse(await readFile(join(radice, "contenuti", `${lingua}.json`), "utf8"));

// Guida AI: un file Markdown per articolo in contenuti/guida-ai/ (indice.md è la pagina pilastro).
// I file che iniziano con "_" sono bozze e non vengono pubblicati.
const cartellaGuida = join(radice, "contenuti", CARTELLA);
const fileGuida = (await readdir(cartellaGuida)).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
const documenti = [];
for (const f of fileGuida) {
  const { dati, corpo } = leggiIntestazione(await readFile(join(cartellaGuida, f), "utf8"));
  for (const chiave of ["titolo", "descrizione", "pubblicato"]) {
    if (!dati[chiave]) throw new Error(`${f}: manca "${chiave}" nell'intestazione`);
  }
  documenti.push({ slug: f === "indice.md" ? "" : f.replace(/\.md$/, ""), dati, corpo, parole: parole(corpo) });
}
const pilastro = documenti.find((d) => d.slug === "");
const articoli = documenti.filter((d) => d.slug !== "").sort((a, b) => Number(a.dati.ordine || 99) - Number(b.dati.ordine || 99));

// Elenco delle pagine: percorso (cartella) e funzione che genera l'HTML.
const pagine = [
  { percorso: "", file: "index.html", genera: home, inMappa: true },
  { percorso: "", file: "404.html", genera: nonTrovata, inMappa: false },
  ...testi.servizi.map((s) => ({ percorso: `servizi/${s.id}/`, file: "index.html", genera: (t) => servizio(t, s), inMappa: true })),
  ...testi.servizi.map((s) => ({ percorso: `demo/${s.demo.id}/`, file: "index.html", genera: (t) => demo(t, s), inMappa: true })),
  { percorso: `${CARTELLA}/`, file: "index.html", genera: (t) => guidaPilastro(t, pilastro, articoli), inMappa: true, aggiornato: pilastro.dati.aggiornato || pilastro.dati.pubblicato },
  ...articoli.map((a) => ({ percorso: `${CARTELLA}/${a.slug}/`, file: "index.html", genera: (t) => guidaArticolo(t, a, articoli), inMappa: true, aggiornato: a.dati.aggiornato || a.dati.pubblicato })),
];

async function scrivi(percorsoFile, contenuto) {
  await mkdir(dirname(percorsoFile), { recursive: true });
  await writeFile(percorsoFile, contenuto);
}

// Copia solo gli SVG di brand/ (non LEGGIMI.md).
async function copiaSvg(da, a) {
  for (const voce of await readdir(da, { withFileTypes: true })) {
    const sorgente = join(da, voce.name);
    if (voce.isDirectory()) await copiaSvg(sorgente, join(a, voce.name));
    else if (voce.name.endsWith(".svg")) {
      await mkdir(a, { recursive: true });
      await cp(sorgente, join(a, voce.name));
    }
  }
}

await rm(uscita, { recursive: true, force: true });
await mkdir(uscita, { recursive: true });

for (const p of pagine) {
  await scrivi(join(uscita, p.percorso, p.file), p.genera(testi));
}

await cp(join(radice, "assets"), join(uscita, "assets"), { recursive: true });
await cp(join(radice, "brand", "tokens.css"), join(uscita, "assets", "css", "tokens.css"));
await copiaSvg(join(radice, "brand"), join(uscita, "brand"));

// Mappa del sito. Gli URL assoluti vengono tutti da sito.urlBase.
const oggi = new Date().toISOString().slice(0, 10);
const voci = pagine
  .filter((p) => p.inMappa)
  .map((p) => `  <url><loc>${testi.sito.urlBase}${p.percorso}</loc><lastmod>${p.aggiornato || oggi}</lastmod></url>`)
  .join("\n");
await scrivi(
  join(uscita, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${voci}\n</urlset>\n`
);

// llms.txt (proposta llmstxt.org): un indice in Markdown per gli assistenti AI.
// Viene letto solo alla radice del dominio: servirà quando il sito avrà il dominio definitivo.
const g = testi.guida;
const righeLlms = [
  `# ${testi.sito.brand}`,
  "",
  `> ${testi.pagine.home.descrizione}`,
  "",
  g.llmsIntro,
  "",
  `## ${g.nomeBreve}`,
  "",
  ...vociGuida(testi, pilastro, articoli).map((v) => `- [${v.titolo}](${testi.sito.urlBase}${v.percorso}): ${v.descrizione}`),
  "",
  "## Servizi",
  "",
  ...testi.servizi.map((s) => `- [${s.nome}](${testi.sito.urlBase}servizi/${s.id}/): ${s.descrizione}`),
  "",
];
await scrivi(join(uscita, "llms.txt"), righeLlms.join("\n"));

console.log(`Sito costruito in _sito/ (${pagine.length} pagine, lingua: ${lingua}).`);
