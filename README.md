# Sito freelance di Luigi Fiorile

Sito personale da freelance: strumenti AI e digitali su misura per liberi professionisti e piccole imprese.

Il sito è statico (HTML, CSS, JS) e viene pubblicato su GitHub Pages. Le regole di lavoro e le decisioni prese sono in `CLAUDE.md`. I segnaposto ancora da riempire sono in `docs/da-completare.md`.

## Vedere il sito in locale

Serve solo Node (versione 20 o successiva), senza installare nulla:

```bash
node script/anteprima.mjs
```

Poi apri http://localhost:4321/freelance/ nel browser (se la porta 4321 è occupata, il comando ne sceglie un'altra e la scrive nel terminale). I testi si cambiano in `contenuti/it.json`; dopo una modifica riavvia il comando.

## Pubblicazione

A ogni push su `main` una GitHub Action costruisce il sito e lo pubblica. Una sola volta, in Impostazioni → Pages del repository, la sorgente va impostata su "GitHub Actions".

## Contenuto

- `contenuti/`: i testi del sito (`it.json`; poi `en.json`).
- `modelli/`: i modelli delle pagine.
- `contenuti/guida-ai/`: gli articoli della Guida AI, uno per file Markdown (vedi `docs/guida-ai.md`).
- `assets/`: stili, script, font e GSAP.
- `script/`: costruzione del sito e anteprima locale.

- `brand/`: tutti gli elementi visivi in SVG, i token di stile e le istruzioni.
  - `brand/LEGGIMI.md`: regole di stile, struttura del percorso tra i servizi, animazione di apertura.
  - `brand/tokens.css`: colori, font e misure come variabili CSS.
  - `brand/logo/`, `brand/testa/`, `brand/oggetti/`, `brand/icone/`, `brand/onde/`, `brand/interfacce/`, `brand/metodo/`, `brand/illustrazioni/`, `brand/icone-ui/`.
- `docs/brief-claude-design.md`: il brief originale del progetto.

## Da fare

- Costruire le pagine partendo da `brand/LEGGIMI.md`.
- Inserire i loghi ufficiali di Claude, n8n e HubSpot al posto dei segnaposto.
- Decidere nome del brand, scritta gigante dell'apertura e testi definitivi.
