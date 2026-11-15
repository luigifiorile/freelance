// Anteprima locale: costruisce il sito e lo serve sotto /freelance/,
// come su GitHub Pages. Uso: node script/anteprima.mjs [porta]
// Porta predefinita 4321; se è occupata prova le successive.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const radice = join(dirname(fileURLToPath(import.meta.url)), "..");
const cartella = join(radice, "_sito");
let porta = Number(process.argv[2] || 4321);
const sotto = "/freelance/";

execFileSync(process.execPath, [join(radice, "script", "costruisci.mjs")], { stdio: "inherit" });

const tipi = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".png": "image/png",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

const server = createServer(async (req, res) => {
  const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (!url.startsWith(sotto)) {
    res.writeHead(302, { Location: sotto });
    return res.end();
  }
  let file = normalize(join(cartella, url.slice(sotto.length)));
  if (!file.startsWith(cartella)) {
    res.writeHead(403);
    return res.end();
  }
  try {
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");
    const dati = await readFile(file);
    res.writeHead(200, { "Content-Type": tipi[extname(file)] || "application/octet-stream" });
    res.end(dati);
  } catch {
    res.writeHead(404, { "Content-Type": tipi[".html"] });
    res.end(await readFile(join(cartella, "404.html")));
  }
});
server.on("error", (e) => {
  if (e.code === "EADDRINUSE" && porta < 4400) {
    porta += 1;
    server.listen(porta);
  } else throw e;
});
server.on("listening", () => console.log(`Anteprima: http://localhost:${porta}${sotto}`));
server.listen(porta);
