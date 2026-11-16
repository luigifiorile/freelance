# Elementi visivi del sito di Luigi Fiorile

Questa cartella contiene solo gli elementi visivi. Il sito va costruito in codice (HTML, CSS, JS statici per GitHub Pages) usando questi file.

## Cosa c'è

- `tokens.css`: colori, font, misure, più le classi `.retino` e `.fumetto`.
- `logo/`: marchio su chiaro, marchio su scuro, favicon, avatar. Il nome accanto al marchio va scritto in testo con Bricolage Grotesque 800. Il nome "Luigi Fiorile" è provvisorio.
- `espressioni/`: dieci espressioni della stessa testa (calma, sorriso, risata, sorpresa, idea, dubbio, concentrazione, occhiolino, ops, fatto), una per file. In `espressioni/png/` le stesse immagini in PNG con fondo trasparente, alte 1200 px, per i post social.
- `testa/`: `testa-chiusa.svg`, `testa-a-meta.svg`, `testa-aperta.svg`, `calotta.svg`.
- `oggetti/`: un file per oggetto, più `oggetti-insieme.svg` come riferimento per la disposizione.
- `icone/`: le cinque icone dei servizi. Usano `currentColor`, quindi prendono il colore del testo.
- `onde/`: linea d'onda, divisore di sezione (entrambi in `currentColor`), mare a fasce.
- `interfacce/`: cinque schede interfaccia, una per servizio. Sono l'elemento visivo di ogni tappa del percorso. Non contengono testo.
- `metodo/`: cinque illustrazioni per la sezione "Come lavoro" (ascoltare, leggere il mare, costruire, mettere in acqua, seguire nel tempo).
- `illustrazioni/`: messaggio in bottiglia per i contatti, tavola in piedi per "Chi sono".
- `icone-ui/`: frecce su, giù, link esterno e play, in `currentColor`.

## Loghi di terze parti

I loghi di Claude, n8n, HubSpot e ChatGPT non sono ridisegnati. Si usano i file ufficiali, scaricati dai kit stampa di ciascuna azienda, dentro `logo/cornice-logo-esterno.svg` (cerchio con contorno spesso e ombra a retino).

Per portarli al colore del brand senza toccare il disegno, si rendono in nero via CSS: `filter: brightness(0);` sull'immagine del logo. Prima di pubblicare conviene controllare le linee guida di ciascun marchio: alcune ammettono solo le versioni monocromatiche fornite da loro.

In `oggetti/oggetti-insieme.svg` i quattro cerchi hanno solo il nome scritto e `oggetti/segnaposto-logo.svg` è il cerchio vuoto.

## Regole di stile

- Fondo `--carta`, tutto il resto in `--inchiostro` e `--schiuma`. `--mare` è l'unico accento.
- I disegni hanno contorno nero spesso e ombre a retino. Niente foto, niente sfumature.
- Dietro la testa c'è una scritta gigante in `--schiuma` (segnaposto: "LUIGI").
- I testi di interfaccia in evidenza sono in maiuscolo.
- Dalla testa escono oggetti, non il mare (il brief diceva il contrario: è superato). Le onde restano un elemento del brand: linee, divisori di sezione, mare a fasce.
- La palette marina del brief è superata: `--laguna` e `--sabbia` servono solo per forme e fondi.

## Animazione di apertura

Sezione bloccata per circa tre schermate di scroll (GSAP ScrollTrigger, pin e scrub).

1. Fermo: `testa-chiusa.svg` al centro, fumetto sopra, scritta gigante dietro.
2. Da 0 a 30%: il fumetto sparisce. Si passa a `testa-a-meta.svg`: la calotta sale di poco e ruota di 10 gradi, occhi spalancati, bocca a "o".
3. Da 30 a 80%: `testa-aperta.svg` scende fino a uscire dal bordo basso. `calotta.svg` sale fino in alto. Gli oggetti escono uno alla volta dal centro verso l'esterno, ruotando.
4. Da 80 a 100%: compare a sinistra l'elenco dei cinque servizi.

Per animare la calotta in modo continuo, usare `testa-aperta.svg` e `calotta.svg` come due livelli separati e cambiare solo l'espressione.

Con "riduci animazioni" attivo: nessun blocco dello scroll, si mostra subito lo stato aperto.

## Percorso tra i servizi

La struttura viene dal sito Shopify Editions (solo la struttura, non lo stile).

1. A sinistra un elenco fisso dei cinque servizi, con il numero e una riga di puntini. La voce attiva è in nero, le altre in grigio.
2. Ogni tappa si apre con il numero gigante in `--schiuma` e il titolo grande sopra.
3. Sotto: sottotitolo piccolo in grassetto, una frase grande, un link a pillola con la freccia esterna.
4. Accanto: la scheda interfaccia del servizio, ruotata di 3 gradi, e la scheda demo numerata ("1 / crm-follow-up").
5. A fine tappa: linea d'onda e link "Torna alla navigazione" con la freccia su.

Tra una tappa e l'altra, il divisore d'onda della tappa successiva sale dal basso e copre la precedente.

## Come lavoro

1. Ascoltare
2. Leggere il mare
3. Costruire
4. Mettere in acqua
5. Seguire nel tempo

## Servizi

1. CRM e automazioni
2. Gestionale interno
3. Vendite e assistenza clienti
4. Siti web e visibilità
5. Marketing

## Da decidere

- Nome definitivo del brand.
- Scritta gigante dietro la testa.
- Frase nel fumetto e testi delle sezioni.
