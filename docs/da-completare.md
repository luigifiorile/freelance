# Da completare

Elenco di tutti i segnaposto presenti nel sito. Si aggiorna a ogni tappa.

Quasi tutti i valori si cambiano in `contenuti/it.json`. Nel sito i segnaposto sono sottolineati con un tratteggio e, se sono indirizzi, non diventano link finché non vengono riempiti.

## Valori unici (`contenuti/it.json` → `sito`)

| Segnaposto | Cosa serve | Dove compare | Stato |
|---|---|---|---|
| `brand`: "Luigi Fiorile" | Nome del brand (personale) | testata, piè di pagina, titoli delle pagine, anteprima social | fatto |
| `scrittaGigante`: vuota | Scritta gigante dietro la testa: per ora nessuna | home, apertura; anteprima social | fatto |
| `fumetto` | "Scorri per scoprire cosa ho in testa" | home, apertura | fatto |
| `email` | luigi.fiorile@gmail.com. Prima di pubblicare su un dominio proprio, valutare un indirizzo sul dominio | piè di pagina, Contatti, dati strutturati | fatto (da rivedere al dominio) |
| `partitaIva` | Partita IVA (obbligatoria per legge) | piè di pagina | fatto |
| `urlPrivacy`: `[LINK PRIVACY]` | Informativa privacy (es. iubenda, a fine progetto) | piè di pagina | aperto |
| `urlPrenotazione` | Link di prenotazione su Cal.com | sezione Contatti | fatto |
| `indicizzabile`: `false` | Blocca l'indicizzazione dei motori di ricerca (`noindex` su tutte le pagine). Va messo a `true` al lancio, quando i segnaposto sono completati | tutte le pagine | da cambiare al lancio |
| `urlBase` | Indirizzo pubblico del sito. Va cambiato solo se cambia il dominio | canonical, sitemap, anteprima social, dati strutturati | ok |

Dopo aver cambiato `brand`, `scrittaGigante` o `home.apertura.titolo`, rigenerare l'anteprima social con `node script/anteprima-social.mjs`.


## Bozze da rivedere

Testi scritti da Claude a partire dal brief, da approvare o riscrivere. Sono tutti in `contenuti/it.json`.

| Testo | Chiave | Stato |
|---|---|---|
| Titolo e descrizione della home (Google e social) | `pagine.home` | bozza |
| Frase di apertura (h1, testo blu in alto) | `home.apertura.titolo` | bozza |
| Introduzione Servizi | `home.servizi.intro` | bozza |
| Per ogni servizio: sottotitolo, frase, descrizione, problema, cosa costruisco | `servizi[].sottotitolo` … `servizi[].costruisco` | bozza |
| Testi dei cinque passi di Come lavoro (nomi decisi da Luigi il 18/11/2026) | `home.comeLavoro.passi` | bozza |
| Chi sono: testo di Luigi del 18/11/2026, con piccole correzioni di grammatica | `home.chiSono.paragrafi` | da confermare |
| Servizio Go to market e automazioni (ex CRM e automazioni) riscritto il 17/11/2026: tutti i testi e l'offerta | `servizi[0]` | bozza |
| Servizio Marketing riscritto il 17/11/2026: sottotitolo, frase, problema, cosa costruisco, testi dei tre livelli (`offerta`) | `servizi[4]` | bozza |
| Demo Marketing come report mensile: numeri, tabella e osservazioni inventati e dichiarati | `servizi[4].demo` | bozza |
| Testi della sezione Contatti (prenotazione su Cal.com) | `home.contatti` | bozza |
| Testi delle pagine servizio (titoli di sezione, tre livelli dell'offerta, invito) | `servizioPagina` | bozza |
| Testi delle pagine demo e dati di esempio (dichiarati in pagina come inventati) | `demoPagina`, `servizi[].demo` | bozza |
| Descrizione nel piè di pagina | `comune.piede.descrizione` | bozza |
| Testi della pagina 404 | `pagine.nonTrovata` | bozza |

## Guida AI (`contenuti/guida-ai/`)

Pagina pilastro e 14 articoli scritti da Claude come bozza, con fonti verificate a novembre 2026. Strategia e piano dei prossimi articoli in `docs/guida-ai.md`.

### Segnaposto negli articoli

| Segnaposto | Cosa serve | Dove |
|---|---|---|
| `sito.profili` | Fatto: LinkedIn e Substack (@luigifiorile). La newsletter è da creare, partendo dalla guida | `contenuti/it.json` |
| `[[BACKGROUND PROFESSIONALE DA DEFINIRE]]` | Come raccontare il tuo percorso prima del lavoro da freelance (sostituisce "consulenza in Accenture e Chief of Staff in una startup") | `indice.md` (introduzione), `ai-per-piccole-imprese.md` (ultima sezione) |
| `guida.autoreBackground` | Stessa frase, nel riquadro "Chi scrive" in fondo a ogni articolo | `contenuti/it.json` |

Gli esempi personali (libri del padre, assistente finanziario su Claude, deep research sulle dogane per Spill) sono stati inseriti con le parole di Luigi. Le frasi in prima persona sono state approvate da Luigi il 17 novembre 2026.

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
