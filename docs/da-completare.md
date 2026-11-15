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
