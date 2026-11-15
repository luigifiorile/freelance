# CLAUDE.md — sito freelance di Luigi Fiorile

Questo file riassume tutto quello che serve per lavorare sul sito. Va aggiornato ogni volta che si prende una decisione.

Ordine di priorità delle fonti, se non coincidono:
1. Le decisioni registrate in questo file (sezione "Decisioni già prese").
2. `brand/LEGGIMI.md` e `brand/tokens.css`.
3. `docs/brief-claude-design.md` (brief originale, in parte superato).

Se una richiesta contraddice LEGGIMI.md o questo file, va segnalato prima di procedere.

Si lavora in italiano.

## Chi sono e a chi mi rivolgo

- Luigi Fiorile, freelance con sede a Milano. Costruisce strumenti AI e digitali su misura per il business del cliente, più consulenza su processi, vendite e marketing.
- Background: consulenza (Accenture) e Chief of Staff in una startup.
- Clienti: liberi professionisti e PMI italiane, comprese micro imprese e startup. Persone pratiche, spesso non tecniche, con poco tempo. Devono capire in pochi secondi cosa faccio e come posso aiutarle.
- Metafora del brand: lo shaper, l'artigiano che costruisce la tavola su misura. L'onda è il business del cliente: io la leggo e costruisco lo strumento per cavalcarla.
- Personalità: umana, calma, concreta. Il protagonista è il cliente. Una persona, non un'agenzia.

## Servizi (nomi da LEGGIMI.md)

1. CRM e automazioni
2. Gestionale interno
3. Vendite e assistenza clienti
4. Siti web e visibilità
5. Marketing

Ogni servizio ha una pagina (modello unico) e una demo statica (modello unico). Offerta su tre livelli: diagnosi iniziale, progetto su misura, manutenzione mensile. Prezzi: `[PREZZO]`.

## Struttura del sito

Home (pagina lunga):
1. Apertura: la testa che si apre (GSAP ScrollTrigger, pin e scrub).
2. Percorso tra i cinque servizi (struttura Shopify Editions Winter '26, non lo stile).
3. Come lavoro: ascoltare, leggere il mare, costruire, mettere in acqua, seguire nel tempo.
4. Chi sono: breve, con la testa e la tavola in piedi.
5. Contatti: messaggio in bottiglia e form semplice.

Altre pagine: cinque pagine servizio, cinque pagine demo.

La struttura dei file e la gestione dei testi sono descritte nella sezione "Architettura" (da completare dopo l'ok al piano).

## Regole di stile

- Solo colori e font di `brand/tokens.css`. Fondo `--carta`, tutto in `--inchiostro` e `--schiuma`. `--mare` è l'unico accento (testo di apertura, link attivi, un pulsante per pagina).
- `--laguna` e `--sabbia` solo per forme e fondi, mai per testi.
- Testi secondari in `--scoglio`. Le voci non attive dell'elenco servizi usano `--scoglio` (non `--linea`, che non ha contrasto sufficiente).
- Font: Bricolage Grotesque (700, 800) per titoli e scritte giganti; Inter (400–700) per i testi. Ospitati nel repository.
- Testi di interfaccia in evidenza in maiuscolo. Etichette: `--etichetta`, maiuscolo, spaziatura 0.08em.
- Disegni: contorno nero spesso, ombre a retino. Niente foto, niente sfumature. Il retino di `tokens.css` (`.retino`) è un motivo a puntini, non una sfumatura: si può usare.
- Solo gli SVG del repository. Non ridisegnarli: si possono inserire inline e aggiungere id o gruppi per animarli, senza cambiare le forme. Se manca un elemento visivo, chiederlo.
- Le schede interfaccia non contengono testo (valgono per italiano e inglese).
- Loghi di Claude, n8n e HubSpot: restano segnaposto (`brand/oggetti/segnaposto-logo.svg`) finché Luigi non li scarica dai kit stampa ufficiali.
- Dai siti di riferimento (huyml.co/about, Shopify Editions Winter '26) si prende solo la struttura. Mai codice, immagini, font o testi.
- I layout devono reggere testi più lunghi o più corti del 30%.

## Regole di scrittura

- Prima persona singolare, mai plurale. Una persona, non un'agenzia. Il protagonista è il cliente.
- Frasi brevi, titoli semplici e piani, niente slogan forzati, niente gergo tecnico se non serve.
- Non sembrare scritto da un'AI. Non dare per scontato che il lettore conosca il contesto.
- "Lead" è maschile: "un lead", "i lead".
- Non inventare clienti, numeri, recensioni o risultati.
- Dove manca un testo definitivo: segnaposto chiaro tra parentesi quadre (es. `[TESTO DA SCRIVERE]`, `[PREZZO]`) e voce in `docs/da-completare.md`.

## Regole tecniche

- Sito statico HTML, CSS, JS. Niente framework pesanti. Pubblicato su GitHub Pages in sottocartella (`luigifiorile.github.io/freelance/`): solo percorsi relativi per pagine, stili, script e immagini. Gli URL assoluti servono solo dove li richiede lo standard (canonical, sitemap, anteprima social) e partono da un'unica variabile.
- Font ospitati nel repository, non collegati a Google Fonts.
- Una sola libreria esterna: GSAP con ScrollTrigger, copiata nel repository. Altre librerie solo dopo aver chiesto.
- Form contatti: nessuna funzione lato server, servizio esterno con segnaposto. Nessuna chiave o credenziale nel repository.
- Nessun tracciamento, nessun cookie, nessuno script di terze parti senza chiedere.
- "Riduci animazioni": nessun blocco dello scroll, stato aperto subito.
- Accessibilità WCAG AA, tutto navigabile da tastiera, testo alternativo per le illustrazioni che portano significato (le decorative hanno `alt=""` o `aria-hidden`).
- Link e pulsanti alti almeno 44 px.
- Sotto i 768 px: l'elenco fisso dei servizi diventa una riga di voci in alto che scorre in orizzontale; l'apertura è verticale (testo sopra la testa, elenco sotto).
- Velocità: SVG dove possibile, niente immagini pesanti.
- Motori di ricerca: HTML semantico, titolo e descrizione per pagina, anteprima social, dati strutturati (persona che offre servizi professionali), mappa del sito.
- Testi separati dal codice, per aggiungere l'inglese senza rifare le pagine.

## Come lavorare

- Branch di lavoro, commit piccoli, una pull request a ogni tappa. Mai scrivere su `main` senza chiedere.
- Niente foto o video personali nel repository.
- Prima di consegnare una tappa: server locale, screenshot a 1440 px e 375 px (guardarli), prova da tastiera, prova con "riduci animazioni", console senza errori.
- A fine tappa riferire: cosa è stato fatto, come vedere l'anteprima, cosa deve controllare Luigi, quali segnaposto restano.
- Aggiornare `docs/da-completare.md` a ogni tappa.

## Decisioni già prese

- Stile molto vicino a huyml.co/about: fondo grigio chiaro, tutto in nero e bianco, un solo accento blu (`--mare`). Scritta gigante bianca dietro la testa, fumetto nero in maiuscolo sopra, elenchi piccoli a sinistra.
- La palette marina del brief è superata: laguna e sabbia servono solo per forme e fondi.
- Dalla testa escono oggetti, non il mare (il brief diceva il contrario: vale questa decisione). Le onde restano un elemento del brand: linee, divisori di sezione, mare a fasce.
- Testa: fumetto in bianco e nero, contorno spesso, ombre a retino, vista di tre quarti, solo testa senza collo, AirPod nell'orecchio. Forma approvata, non va modificata.
- L'espressione cambia mentre la testa si apre: calma (`testa-chiusa.svg`), sorpresa (`testa-a-meta.svg`), felice (`testa-aperta.svg`: occhi a scintilla e sorriso largo).
- Oggetti che escono: tavola da surf, kite, portatile, fumetto di chat, grafico, imbuto, ingranaggio, più i loghi di Claude, n8n e HubSpot (segnaposto).
- Animazione di apertura come in LEGGIMI.md: pin per circa tre schermate; 0–30% il fumetto sparisce e la testa passa a "a metà"; 30–80% la testa scende ed esce dal basso, la calotta sale in alto, gli oggetti escono uno alla volta ruotando; 80–100% compare a sinistra l'elenco dei servizi. Testa aperta e calotta sono due livelli separati, cambia solo l'espressione.
- Scritta gigante ("LUIGI"), nome del brand ("Luigi Fiorile") e frase nel fumetto sono segnaposto, tenuti in un'unica variabile ciascuno.
- Percorso tra i servizi: struttura di Shopify Editions Winter '26, non lo stile. Elenco fisso a sinistra con numero e riga di puntini (attiva in nero, le altre in grigio); tappe con numero gigante in `--schiuma` e titolo grande; sottotitolo in grassetto, frase grande, link a pillola con freccia esterna; scheda interfaccia ruotata di 3 gradi; scheda demo numerata ("1 / crm-follow-up"); a fine tappa linea d'onda e "Torna alla navigazione" con freccia su; il divisore d'onda della tappa successiva sale e copre la precedente.
- Font: Bricolage Grotesque per titoli e scritte giganti, Inter per i testi.
- In design sono stati fatti solo gli elementi visivi: le pagine si compongono in codice.
- Prima solo italiano; inglese in un secondo momento.

## Decisioni aperte

- Nome definitivo del brand.
- Scritta gigante dietro la testa.
- Frase nel fumetto e testi definitivi delle sezioni.
- Loghi ufficiali di Claude, n8n e HubSpot.
- Servizio esterno per il form (Formspree, Tally o link a un calendario).
- Prezzi dei tre livelli di offerta.
- Nomi delle cinque demo (finora noto solo "crm-follow-up").
- Sezione "Lavori e demo" prevista dal brief: non è nell'elenco attuale e non ci sono casi reali da mostrare.
- Pagina privacy (necessaria con un form che raccoglie dati) e partita IVA nel piè di pagina.
- Immagine di anteprima per i social.
