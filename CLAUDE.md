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

1. Go to market e automazioni (prima "CRM e automazioni", rinominato il 17/11/2026)
2. Gestionale interno
3. Vendite e assistenza clienti
4. Siti web e visibilità
5. Marketing

Ogni servizio ha una pagina (modello unico) e una demo statica (modello unico). Offerta su tre livelli: diagnosi iniziale, progetto su misura, manutenzione mensile. **Niente prezzi sul sito.**

Demo (cartelle `demo/<nome>/`): `crm-follow-up`, `gestionale-report`, `vendite-whatsapp`, `siti-visibilita`, `marketing-funnel`.

## Struttura del sito

Home (pagina lunga):
1. Apertura: la testa che si apre (GSAP ScrollTrigger, pin e scrub).
2. Percorso tra i cinque servizi (struttura Shopify Editions Winter '26, non lo stile).
3. Come lavoro: ascoltare, leggere il mare, costruire, mettere in acqua, seguire nel tempo.
4. Chi sono: breve, con la testa e la tavola in piedi.
5. Contatti: messaggio in bottiglia e form semplice.

Altre pagine: cinque pagine servizio, cinque pagine demo, Guida AI (pagina pilastro + articoli), privacy, 404.

Guida AI (`guida-ai/`): pagina pilastro sull'uso dell'AI per professionisti e piccole imprese, con articoli satellite divisi in capitoli (Capire, Scegliere, Usare, Portarla nel lavoro, Regole e rischi, Risorse). Strategia SEO/GEO, mappa delle parole chiave e piano editoriale in `docs/guida-ai.md`.

Pagina servizio (modello unico): il problema del cliente, cosa costruisco, l'offerta su tre livelli senza prezzi, link alla demo, contatto. Niente esempi per ora: si descrivono solo i servizi.

Pagina demo (modello unico): demo statica con dati di esempio, dichiarati come tali sulla pagina.

## Architettura

- `contenuti/it.json`: tutti i testi. In `sito` ci sono i valori da cambiare in un punto solo: `brand` (nome), `scrittaGigante`, `fumetto`, `urlBase` (indirizzo pubblico, usato solo per canonical, sitemap e anteprima social), `indicizzabile` (blocco dei motori di ricerca). L'inglese sarà `contenuti/en.json` con le stesse chiavi.
- `modelli/*.mjs`: modelli delle pagine come funzioni JS che ricevono i testi e restituiscono HTML. Nessun testo scritto nei modelli.
- `script/costruisci.mjs`: script Node senza dipendenze. Genera il sito in `_sito/` (ignorata da git): pagine, `sitemap.xml`, `robots.txt`, copia di `assets/`, di `brand/tokens.css` e degli SVG.
- `script/anteprima.mjs`: server locale che serve `_sito/` sotto `/freelance/`, come su GitHub Pages.
- `assets/css/`, `assets/js/`, `assets/font/` (woff2 + licenze OFL), `assets/vendor/` (GSAP 3.15.0 e ScrollTrigger, copiati).
- `.github/workflows/pubblica.yml`: a ogni push su `main` costruisce e pubblica su GitHub Pages. In Impostazioni → Pages la sorgente deve essere "GitHub Actions".
- Percorsi: ogni pagina conosce la sua profondità e i modelli usano `prefisso()` (in `modelli/aiuti.mjs`) per costruire percorsi relativi. Unica eccezione: la pagina 404 usa `<base href>` con il percorso di `urlBase` (`/freelance/`), perché GitHub Pages la serve a qualsiasi profondità.
- Segnaposto: un valore tra parentesi quadre in `it.json` viene sottolineato con un tratteggio e, se è un indirizzo, non diventa un link (`link()` in `modelli/aiuti.mjs`).
- Guida AI: un file Markdown per articolo in `contenuti/guida-ai/` (`indice.md` è la pagina pilastro, i file che iniziano con `_` sono bozze). `modelli/markdown.mjs` converte il Markdown senza dipendenze; `modelli/guida.mjs` genera le pagine con "In breve", indice, domande frequenti, autore e dati strutturati (`Article`, `BreadcrumbList`, `FAQPage`). Link interni con `guida:slug`, `servizio:id`, `demo:id`, `home:#ancora`; segnaposto con `[[...]]`. Istruzioni complete in `docs/guida-ai.md`.
- `llms.txt` si genera a ogni build: indice della guida e dei servizi per gli assistenti AI. Funziona solo alla radice del dominio, servirà con il dominio definitivo.
- `robots.txt` non si genera: in una sottocartella i motori di ricerca lo ignorano. La mappa del sito va inviata a Google Search Console.

Comandi:
- `node script/costruisci.mjs`: costruisce il sito.
- `node script/anteprima.mjs`: costruisce e apre l'anteprima su `http://localhost:4321/freelance/` (se la porta è occupata usa la successiva libera).
- `node script/anteprima-social.mjs`: rigenera `assets/img/anteprima-social.png` (serve Playwright; da rilanciare quando cambiano nome, scritta gigante o frase di apertura).

## Regole di stile

- Solo colori e font di `brand/tokens.css`. Fondo `--carta`, tutto in `--inchiostro` e `--schiuma`. `--mare` è l'unico accento (testo di apertura, link attivi, un pulsante per pagina).
- `--laguna` e `--sabbia` solo per forme e fondi, mai per testi.
- Testi secondari in `--scoglio`. Le voci non attive dell'elenco servizi usano `--scoglio` (non `--linea`, che non ha contrasto sufficiente).
- Font: Bricolage Grotesque (700, 800) per titoli e scritte giganti; Inter (400–700) per i testi. Ospitati nel repository.
- Testi di interfaccia in evidenza in maiuscolo. Etichette: `--etichetta`, maiuscolo, spaziatura 0.08em.
- Disegni: contorno nero spesso, ombre a retino. Niente foto, niente sfumature. Il retino di `tokens.css` (`.retino`) è un motivo a puntini, non una sfumatura: si può usare.
- Solo gli SVG del repository. Non ridisegnarli: si possono inserire inline e aggiungere id o gruppi per animarli, senza cambiare le forme. Se manca un elemento visivo, chiederlo.
- Le schede interfaccia non contengono testo (valgono per italiano e inglese).
- Loghi di Claude, n8n e HubSpot: tolti dall'apertura. `brand/oggetti/segnaposto-logo.svg` resta nel repository ma non è usato.
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
- Oggetti che escono: tavola da surf, kite, portatile, fumetto di chat, grafico, imbuto, ingranaggio. I loghi di Claude, n8n e HubSpot sono stati tolti (decisione del 17/11/2026).
- Animazione di apertura come in LEGGIMI.md: pin per circa tre schermate; 0–30% il fumetto sparisce e la testa passa a "a metà"; 30–80% la testa scende ed esce dal basso, la calotta sale in alto, gli oggetti escono uno alla volta ruotando; 80–100% compare a sinistra l'elenco dei servizi. Testa aperta e calotta sono due livelli separati, cambia solo l'espressione.
- Scritta gigante: "GTM" (prova del 17/11/2026, prima era "LUIGI"). Se `sito.scrittaGigante` è vuoto l'elemento non viene generato. Nome del brand ("Luigi Fiorile") e frase nel fumetto sono segnaposto. Ciascuno sta in un'unica variabile.
- Percorso tra i servizi: struttura di Shopify Editions Winter '26, non lo stile. Elenco fisso a sinistra con numero e riga di puntini (attiva in nero, le altre in grigio); tappe con numero gigante in `--schiuma` e titolo grande; sottotitolo in grassetto, frase grande, link a pillola con freccia esterna; scheda interfaccia ruotata di 3 gradi; scheda demo numerata ("1 / crm-follow-up"); a fine tappa linea d'onda e "Torna alla navigazione" con freccia su; il divisore d'onda della tappa successiva sale e copre la precedente.
- Font: Bricolage Grotesque per titoli e scritte giganti, Inter per i testi.
- In design sono stati fatti solo gli elementi visivi: le pagine si compongono in codice.
- Prima solo italiano; inglese in un secondo momento.
- Testi separati dal codice con un piccolo build in Node (vedi "Architettura") e pubblicazione con GitHub Actions.
- Niente prezzi sul sito. Le pagine servizio non contengono esempi: descrivono solo il servizio.
- I testi possono essere scritti in bozza a partire dal brief: ogni bozza è segnata in `docs/da-completare.md`. Fatti, contatti e dati personali restano segnaposto.
- Nomi delle demo: `crm-follow-up`, `gestionale-report`, `vendite-whatsapp`, `siti-visibilita`, `marketing-funnel`.
- La sezione "Lavori e demo" del brief non si fa ora: è un promemoria per quando il progetto sarà finito.
- Privacy: alla fine si userà un servizio come iubenda (è uno script di terze parti, già approvato per quel momento). Fino ad allora link segnaposto. Partita IVA nel piè di pagina come segnaposto.
- Anteprima social: un PNG 1200×630 generato una volta componendo SVG esistenti e testo (tappa g).
- Servizio Marketing (17/11/2026), dai metodi del master (skill `competenze-marketing-luigi`): analisi del funnel, tracciamento (GA4, Meta), campagne Google Ads e Meta Ads, e un unico agente AI che ogni mese incrocia GA4, Google Ads e Meta e produce un report rivisto da Luigi. Sulle campagne: si lavora su quelle esistenti o si creano da zero, con l'obiettivo di dare autonomia al cliente (non gestione continua). Grafica e social esclusi. I tre livelli: diagnosi = analisi; progetto = funnel + tracciamento + campagne + agente; manutenzione = report mensile rivisto. La demo `marketing-funnel` è un esempio di report mensile.
- Servizio 1 rinominato "Go to market e automazioni" (17/11/2026), indirizzo `servizi/go-to-market-e-automazioni/`. È il centro del lavoro di Luigi, sul modello del ruolo di GTM engineer: piano di go to market, liste di potenziali clienti arricchite in automatico, primi contatti personalizzati con l'AI, CRM e follow-up, collegamenti tra strumenti, misura della soddisfazione dei clienti (questionari, recensioni, avviso di abbandono). Divisione con il servizio 3: la soddisfazione si misura nel servizio 1, le risposte ai clienti (WhatsApp, assistenza) restano nel servizio 3. La demo resta `crm-follow-up`.
- SEO e GEO restano nel servizio "Siti web e visibilità", non in Marketing.
- Modelli unici con campi facoltativi: `servizi[].offerta` (testi propri dei tre livelli, nomi invariati) e `servizi[].demo.osservazioni` (elenco di letture dei dati nella demo).
- Finché ci sono segnaposto il sito non si fa indicizzare: `sito.indicizzabile` è `false` e tutte le pagine hanno `<meta name="robots" content="noindex">`. Al lancio va messo a `true`.
- Il sito è pubblicato su GitHub Pages da un repository pubblico (Pages su repository privati richiede un piano a pagamento).
- Guida AI (novembre 2026): pilastro + articoli satellite in `guida-ai/`, voce "Guida AI" nel menu. Ogni numero ha fonte primaria linkata (paper, Istat, Eurostat, documentazione di OpenAI, Anthropic, Google). Niente fonti come aggregatori di tool. Voce di Luigi in prima persona, ma episodi personali solo da lui (segnaposto `[[ESEMPIO DI LUIGI: ...]]`). Ogni articolo rimanda a un servizio.
- Su mobile i titoli con misura fissa nei token (`--titolo-1`, `--titolo-2`, `--apertura`) si riducono con `clamp()`; su desktop restano identici ai token.
## Come è fatta l'apertura

- Gli SVG della testa condividono lo stesso sistema di coordinate. In `assets/css/home.css` il riquadro `.testa` corrisponde a `testa-chiusa.svg` (400 × 470 unità) e ogni livello è posizionato in percentuale. Livelli: testa chiusa, testa a metà, e il gruppo testa aperta + calotta.
- Calma → sorpresa: dissolvenza da `testa-chiusa.svg` a `testa-a-meta.svg`. Sorpresa → felice: dissolvenza verso `testa-aperta.svg` + `calotta.svg`, con la calotta nella stessa posa di "a metà"; poi la calotta sale e la testa scende in modo continuo.
- `calotta.svg` è inserita nella pagina con `overflow: visible`: il suo riquadro taglia la cima dei capelli, le forme non cambiano.
- Gli oggetti finiscono nella disposizione di `oggetti-insieme.svg` (posizioni in `modelli/home.mjs`), senza i tre loghi: il riquadro di riferimento è ristretto a 520 × 500 unità.
- Su mobile la calotta esce dall'alto invece di fermarsi, per non coprire il testo.
- La scritta gigante, se c'è, si riduce da sola se non entra nella larghezza (su mobile resta intera). Se è vuota non viene generata.
- Senza JS: testa chiusa ferma, con fumetto ed elenco. Con "riduci animazioni": stato finale subito, senza pin.

## Decisioni aperte

- Dominio definitivo (cambiare solo `sito.urlBase`; `llms.txt` e `robots.txt` alla radice diventano utili).
- Link ai profili LinkedIn e Substack (`sito.profili`).

- Nome definitivo del brand.
- Scritta gigante dietro la testa (in prova: "GTM").
- Frase nel fumetto e testi definitivi delle sezioni.
- Servizio esterno per il form (Formspree, Tally o link a un calendario).
- Servizio per privacy e cookie (es. iubenda), da fare alla fine.

## Promemoria per progetto finito

- Valutare la sezione "Lavori e demo" del brief, quando ci saranno casi reali.
- Versione inglese (`contenuti/en.json`, `hreflang`).
