# Elementi visivi del sito di Luigi Fiorile

Questa cartella contiene solo gli elementi visivi. Il sito va costruito in codice (HTML, CSS, JS statici per GitHub Pages) usando questi file.

## Cosa c'è

- `tokens.css`: colori, font, misure, più le classi `.retino` e `.fumetto`.
- `logo/`: marchio su chiaro, marchio su scuro, favicon, avatar. Il nome accanto al marchio va scritto in testo con Bricolage Grotesque 800. Il nome "Luigi Fiorile" è provvisorio.
- `testa/`: `testa-chiusa.svg`, `testa-a-meta.svg`, `testa-aperta.svg`, `calotta.svg`.
- `oggetti/`: un file per oggetto, più `oggetti-insieme.svg` come riferimento per la disposizione.
- `icone/`: le cinque icone dei servizi. Usano `currentColor`, quindi prendono il colore del testo.
- `onde/`: linea d'onda, divisore di sezione (entrambi in `currentColor`), mare a fasce.
- `interfacce/`: cinque schede interfaccia, una per servizio. Sono l'elemento visivo di ogni tappa del percorso. Non contengono testo.
- `metodo/`: cinque illustrazioni per la sezione "Come lavoro" (ascoltare, leggere il mare, costruire, mettere in acqua, seguire nel tempo).
- `illustrazioni/`: messaggio in bottiglia per i contatti, tavola in piedi per "Chi sono".
- `icone-ui/`: frecce su, giù, link esterno e play, in `currentColor`.

## Loghi di terze parti

Decisione del 17/11/2026: i loghi non vengono usati nell'apertura. `oggetti/segnaposto-logo.svg` è un cerchio vuoto. Dentro vanno i loghi ufficiali di Claude, n8n e HubSpot, scaricati dai kit stampa di ciascuna azienda e usati senza modifiche. In `oggetti-insieme.svg` i tre cerchi hanno solo il nome scritto.

## Regole di stile

- Fondo `--carta`, tutto il resto in `--inchiostro` e `--schiuma`. `--mare` è l'unico accento.
- I disegni hanno contorno nero spesso e ombre a retino. Niente foto, niente sfumature.
- Dietro la testa può esserci una scritta gigante in `--schiuma`. Per ora nessuna (18/11/2026).
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

1. Ascoltare (`01-ascoltare.svg`)
2. Leggere i dati (`02-leggere-il-mare.svg`)
3. Costruire (`03-costruire.svg`)
4. Testare (`04-mettere-in-acqua.svg`)
5. Formare, finché il cliente non diventa indipendente (`05-seguire-nel-tempo.svg`)

Nomi aggiornati il 18/11/2026; le illustrazioni restano le stesse.

## Servizi

Dal 18/11/2026 i servizi sono tre (vedi `CLAUDE.md`):

1. Go to market e automazioni
2. Visibilità del sito web e advertising
3. Gestionale e reporting su misura

Le icone e le interfacce non più usate (`03-vendite`, `05-marketing`) restano nel repository.

## Da decidere

- Nome definitivo del brand.
- Scritta gigante dietro la testa.
- Frase nel fumetto e testi delle sezioni.
