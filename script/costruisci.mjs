// Costruisce il sito statico in _sito/.
// Uso: node script/costruisci.mjs [lingua]   (predefinita: it)
// Nessuna dipendenza: solo Node (versione 20 o successiva).
import { readFile, writeFile, mkdir, rm, cp, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { home } from "../modelli/home.mjs";
import { nonTrovata } from "../modelli/non-trovata.mjs";

const radice = join(dirname(fileURLToPath(import.meta.url)), "..");
const uscita = join(radice, "_sito");
const lingua = process.argv[2] || "it";

const testi = JSON.parse(await readFile(join(radice, "contenuti", `${lingua}.json`), "utf8"));

// Elenco delle pagine: percorso (cartella) e funzione che genera l'HTML.
const pagine = [
  { percorso: "", file: "index.html", genera: home, inMappa: true },
  { percorso: "", file: "404.html", genera: nonTrovata, inMappa: false },
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
  .map((p) => `  <url><loc>${testi.sito.urlBase}${p.percorso}</loc><lastmod>${oggi}</lastmod></url>`)
  .join("\n");
await scrivi(
  join(uscita, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${voci}\n</urlset>\n`
);

console.log(`Sito costruito in _sito/ (${pagine.length} pagine, lingua: ${lingua}).`);
