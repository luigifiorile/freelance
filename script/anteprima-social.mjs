// Genera assets/img/anteprima-social.png (1200 × 630), l'immagine che i social
// mostrano quando qualcuno condivide il sito. Si compone con gli SVG di brand/
// e i testi di contenuti/it.json, senza disegni nuovi.
// Va rilanciato a mano quando cambiano nome del brand o frase di apertura.
// Richiede Playwright (non serve per costruire o pubblicare il sito):
//   node script/anteprima-social.mjs
import { readFile, writeFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const radice = join(dirname(fileURLToPath(import.meta.url)), "..");
const t = JSON.parse(await readFile(join(radice, "contenuti", "it.json"), "utf8"));
const url = (p) => pathToFileURL(join(radice, p)).href;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="${url("brand/tokens.css")}">
<style>
@font-face{font-family:"Inter";src:url("${url("assets/font/inter.woff2")}");font-weight:100 900}
@font-face{font-family:"Bricolage Grotesque";src:url("${url("assets/font/bricolage-grotesque.woff2")}");font-weight:200 800}
html,body{margin:0;width:1200px;height:630px;overflow:hidden;background:var(--carta);color:var(--inchiostro)}
.gigante{position:absolute;left:0;right:0;top:40px;text-align:center;font:800 330px/0.85 var(--font-titoli);color:var(--schiuma);white-space:nowrap}
.testa{position:absolute;right:90px;bottom:-6px;width:330px}
.marchio{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:16px;font:800 44px/1 var(--font-titoli)}
.marchio img{width:64px;height:64px}
.frase{position:absolute;left:72px;top:190px;width:600px;font:500 38px/1.2 var(--font-testi);text-transform:uppercase;color:var(--mare)}
.onda{position:absolute;left:0;bottom:0;width:1200px}
</style></head><body>
${t.sito.scrittaGigante ? `<div class="gigante">${esc(t.sito.scrittaGigante)}</div>` : ""}
<div class="marchio"><img src="${url("brand/logo/marchio.svg")}" alt=""><span>${esc(t.sito.brand)}</span></div>
<p class="frase">${esc(t.home.apertura.titolo)}</p>
<img class="onda" src="${url("brand/onde/mare-a-fasce.svg")}" alt="">
<img class="testa" src="${url("brand/testa/testa-chiusa.svg")}" alt="">
</body></html>`;

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const browser = await chromium.launch();
const pagina = await browser.newPage({ viewport: { width: 1200, height: 630 } });
// Una pagina aperta da file può caricare font e SVG locali.
const temporaneo = join(radice, "_anteprima-social.html");
await writeFile(temporaneo, html);
await pagina.goto(pathToFileURL(temporaneo).href, { waitUntil: "load" });
await pagina.evaluate(() => document.fonts.ready);
await pagina.screenshot({ path: join(radice, "assets", "img", "anteprima-social.png") });
await browser.close();
await rm(temporaneo);
console.log("Creata assets/img/anteprima-social.png");
