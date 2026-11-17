# Da completare

Elenco di tutti i segnaposto presenti nel sito. Si aggiorna a ogni tappa.

Quasi tutti i valori si cambiano in `contenuti/it.json`. Nel sito i segnaposto sono sottolineati con un tratteggio e, se sono indirizzi, non diventano link finché non vengono riempiti.

## Valori unici (`contenuti/it.json` → `sito`)

| Segnaposto | Cosa serve | Dove compare | Stato |
|---|---|---|---|
| `brand`: "Luigi Fiorile" | Nome definitivo del brand | testata, piè di pagina, titoli delle pagine, anteprima social | provvisorio |
| `scrittaGigante`: "LUIGI" | Scritta gigante dietro la testa | home, apertura; anteprima social | provvisorio |
| `fumetto`: `[FRASE DEL FUMETTO]` | Frase sopra la testa chiusa | home, apertura | aperto |
| `email`: `[EMAIL]` | Indirizzo email pubblico | piè di pagina, sezione Contatti | aperto |
| `partitaIva`: `[PARTITA IVA]` | Partita IVA (obbligatoria per legge) | piè di pagina | aperto |
| `urlPrivacy`: `[LINK PRIVACY]` | Informativa privacy (es. iubenda, a fine progetto) | piè di pagina, casella del form | aperto |
| `urlForm`: `[URL_SERVIZIO_FORM]` | Indirizzo del servizio per il form (Formspree, Tally o calendario). Finché manca, il form mostra "non ancora attivo" | sezione Contatti | aperto |
| `urlBase` | Indirizzo pubblico del sito. Va cambiato solo se cambia il dominio | canonical, sitemap, anteprima social, dati strutturati | ok |

Dopo aver cambiato `brand`, `scrittaGigante` o `home.apertura.titolo`, rigenerare l'anteprima social con `node script/anteprima-social.mjs`.

## Elementi visivi

| Segnaposto | Cosa serve | Dove compare | Stato |
|---|---|---|---|
| Logo Claude | Logo ufficiale dal kit stampa | apertura, oggetti che escono dalla testa | aperto |
| Logo n8n | Logo ufficiale dal kit stampa | apertura, oggetti che escono dalla testa | aperto |
| Logo HubSpot | Logo ufficiale dal kit stampa | apertura, oggetti che escono dalla testa | aperto |

## Bozze da rivedere

Testi scritti da Claude a partire dal brief, da approvare o riscrivere. Sono tutti in `contenuti/it.json`.

| Testo | Chiave | Stato |
|---|---|---|
| Titolo e descrizione della home (Google e social) | `pagine.home` | bozza |
| Frase di apertura (h1, testo blu in alto) | `home.apertura.titolo` | bozza |
| Introduzione Servizi | `home.servizi.intro` | bozza |
| Per ogni servizio: sottotitolo, frase, descrizione, problema, cosa costruisco | `servizi[].sottotitolo` … `servizi[].costruisco` | bozza |
| Introduzione Come lavoro (metafora dello shaper) e testi dei cinque passi | `home.comeLavoro` | bozza |
| Chi sono (fatti dal brief: Milano, Accenture, Chief of Staff, surf e kitesurf) | `home.chiSono.paragrafi` | bozza |
| Testi della sezione Contatti e del form | `home.contatti` | bozza |
| Testi delle pagine servizio (titoli di sezione, tre livelli dell'offerta, invito) | `servizioPagina` | bozza |
| Testi delle pagine demo e dati di esempio (dichiarati in pagina come inventati) | `demoPagina`, `servizi[].demo` | bozza |
| Descrizione nel piè di pagina | `comune.piede.descrizione` | bozza |
| Testi della pagina 404 | `pagine.nonTrovata` | bozza |

## Guida AI (`contenuti/guida-ai/`)

Pagina pilastro e 14 articoli scritti da Claude come bozza, con fonti verificate a novembre 2026. Strategia e piano dei prossimi articoli in `docs/guida-ai.md`.

### Segnaposto negli articoli

| Segnaposto | Cosa serve | Dove |
|---|---|---|
| `[[ESEMPIO DI LUIGI: ...]]` | Un'allucinazione che ti è capitata davvero e come te ne sei accorto | `allucinazioni-ai.md` |
| `[[ESEMPIO DI LUIGI: ...]]` | Quali assistenti usi tu e per cosa, in una o due righe | `quale-ai-scegliere.md` |
| `[[ESEMPIO DI LUIGI: ...]]` | Una ricerca vera fatta con la deep research, per lavoro o per un cliente | `ricerca-con-l-ai.md` |
| `sito.profili` | Link al profilo LinkedIn e alla newsletter Substack (vanno nei dati strutturati come `sameAs`, aiutano motori e assistenti a riconoscere l'autore) | `contenuti/it.json` |

### Affermazioni in prima persona da confermare

Frasi scritte con la tua voce che descrivono abitudini o esperienze. Sono plausibili ma non le ho verificate con te: confermale, correggile o toglile.

| Articolo | Frase |
|---|---|
| `indice.md` | "L'AI la uso ogni giorno (anche per cose poco nobili, come l'asta del fantacalcio di un amico)" |
| `indice.md` | La sezione "La mia opinione, per quel che vale" (opinioni tue, in bozza) |
| `allucinazioni-ai.md` | "Dalla mia esperienza, e da quello che dicono le ricerche, il rischio sale..." e "La soluzione che uso io è ragionare per tipo di compito" |
| `quale-ai-scegliere.md` | "Trovi i criteri che uso io quando qualcuno mi chiede quale devo prendere" e "Le prendo dalla mia esperienza" |
| `ai-per-piccole-imprese.md` | "di quelli che vedo funzionare più spesso", "il percorso che seguo nella fase di diagnosi con i clienti", "Una cosa che ho imparato lavorando dentro le aziende" |
| `agenti-ai.md` | "La mia esperienza è che nove volte su dieci... la risposta giusta è un flusso semplice" |
| `fonti-ai.md` | La lista stessa è una selezione a tuo nome: controlla che ti rappresenti |

### Da verificare (fatti e numeri)

Tutto è stato controllato su fonti pubbliche, ma questi punti vengono da fonti secondarie o hanno versioni diverse in circolazione.

| Fatto | Dove | Nota |
|---|---|---|
| Studio BCG: qualità "oltre il 40% in più"; meno bravi +43%, più bravi +17%; 758 consulenti pari a circa il 7% di quelli individuali | `frontiera-frastagliata.md`, `ai-e-produttivita-studi.md` | Confermati 12,2% e 25,1% e 19 punti; controllare il resto sul PDF dello studio |
| Brynjolfsson: 14% (working paper) contro 15% (versione pubblicata); 34% per i meno esperti | `ai-e-produttivita-studi.md`, pilastro | Nel testo scritto "circa 14-15%" |
| Humlum e Vestergaard: sondaggi su 25.000 lavoratori, risparmio medio intorno al 3% | `ai-e-produttivita-studi.md` | Il paper è poi circolato con un altro titolo (2026) |
| Digital Omnibus: Regolamento (UE) 2026/1744, in vigore dal 27 luglio 2026; nuova formulazione dell'art. 4; scadenze alto rischio 2/12/2027 e 2/8/2028; fine transitorio marcatura 2/12/2026 | `ai-act-piccole-imprese.md`, pilastro | Fonti: siti giuridici italiani; verificare su EUR-Lex |
| Legge 132/2025: art. 11 (informativa ai lavoratori), consenso genitori sotto i 14 anni, reato di diffusione di deepfake | `ai-act-piccole-imprese.md` | Verificare sul testo in Normattiva |
| Sanzione del Garante a OpenAI annullata dal Tribunale di Roma (2026) | `privacy-e-ai.md` | Data esatta della sentenza ed eventuale appello non confermati |
| Prezzi degli abbonamenti "intorno ai 20 euro al mese", piani business "20-30 euro" | `quale-ai-scegliere.md`, `ai-per-piccole-imprese.md` | I prezzi cambiano spesso |
| Osservatorio PoliMi: 1,8 miliardi nel 2025, +50% | pilastro | Da comunicati stampa, non dal rapporto completo |
| Indirizzi di Anthropic Academy (forse spostata su academy.claude.com) e della newsletter di Narayanan e Kapoor (normaltech.ai) | `fonti-ai.md` | Controllare che i link portino alla pagina giusta |
| Link a cybersecurity360.it, science.org, nber.org, arxiv.org | vari | Non raggiungibili dall'ambiente di lavoro: verificati tramite ricerca, conviene un clic di controllo |
