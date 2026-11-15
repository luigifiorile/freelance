# Brief per Claude Design — sito freelance di Luigi Fiorile

## 1. Cosa serve

Un brand kit completo e le schermate chiave di un sito personale da freelance. Il sito verrà poi sviluppato con Claude Code e pubblicato su GitHub Pages (sito statico: HTML, CSS, JS). Le animazioni a scroll verranno realizzate in codice, quindi il design deve mostrare chiaramente gli stati di ogni animazione (inizio, metà, fine).

Prima versione in italiano, versione inglese in un secondo momento: i layout devono reggere testi più lunghi o più corti del 20–30%.

## 2. Chi è Luigi e cosa offre

Luigi Fiorile, freelance con sede a Milano. Costruisce strumenti AI e digitali su misura per il business del cliente, insieme a consulenza su processi, vendite e marketing. Background in consulenza (Accenture) e come Chief of Staff in una startup.

**Clienti target:** altri liberi professionisti e PMI italiane, comprese micro imprese e startup. Persone pratiche, spesso non tecniche, con poco tempo: devono capire in pochi secondi cosa fa Luigi e come può aiutarle.

**Servizi (da presentare come tappe di un percorso):**

1. **CRM e automazioni** — collegare lead, CRM e follow-up; workflow automatici tra gli strumenti già in uso.
2. **Gestionale interno** — un gestionale costruito con l'AI sul business del cliente, con tutte le sezioni di reportistica.
3. **Vendite e customer service** — automazioni per la vendita, dalle risposte su WhatsApp all'assistenza clienti.
4. **Siti web e sviluppo del business** — siti, ottimizzazione SEO e GEO (visibilità nei motori di ricerca e nelle risposte delle AI).
5. **Marketing** — analisi del funnel di vendita e dei punti in cui si perdono i clienti.

Ogni servizio avrà una demo (statica, con dati di esempio) e un'offerta standard su tre livelli: diagnosi iniziale, progetto su misura, manutenzione mensile.

## 3. Brand: la metafora dello shaper

Luigi ama le onde, il surf e il kitesurf. Il brand si basa sulla figura dello **shaper**: l'artigiano che costruisce la tavola da surf su misura per ogni surfista, in base al suo peso, al suo livello e alle onde che cavalca.

**Il racconto:** l'onda è il business del cliente, che ha già la sua energia. Luigi non crea l'onda: la legge e costruisce lo strumento giusto per cavalcarla.

**Personalità:** umana, calma, concreta, per niente egoriferita. Il protagonista è il cliente, non Luigi. Deve sembrare una persona, non un'agenzia né una software house.

**Nome:** ancora da definire. Usare un segnaposto (es. "Luigi Fiorile") e progettare il logo come sistema adattabile a un nome diverso.

## 4. Brand kit richiesto

- **Logo / marchio:** versione estesa e versione compatta (favicon, avatar social). Può richiamare un'onda o il profilo di una tavola, senza cliché da surf shop.
- **Palette:** ispirata al mare in modo non scontato (acqua, schiuma, sabbia, cielo a diverse ore del giorno). Un colore principale, uno di accento, neutri chiari e scuri. Contrasto accessibile (WCAG AA).
- **Tipografia:** un font per i titoli con carattere e uno leggibile per i testi, entrambi disponibili come web font gratuiti (es. Google Fonts).
- **Illustrazione della testa di Luigi:** versione stilizzata, non fotografica, a linee o forme semplici. Serve in due stati: chiusa e aperta (vedi sezione 5). Verrà fornita una foto di riferimento a parte.
- **Sistema di onde:** forme d'onda riutilizzabili come elementi grafici, divisori di sezione e sfondi.
- **Icone dei servizi:** cinque icone coerenti, una per servizio.
- **Componenti UI:** pulsanti, link, card servizio, card demo, tag, form contatti, navigazione.

**Vincoli:** niente foto. Solo illustrazione, tipografia e forme. Niente stile "rinascimentale".

## 5. Struttura del sito e riferimenti

### Apertura: la testa che si apre

**Riferimento:** https://huyml.co/about

Da questo sito prendere solo l'idea dell'apertura: il sito si apre con una versione stilizzata della testa di Luigi. Scorrendo, la testa si apre e ne esce tutto ciò che c'è dentro. Nella metafora, dalla testa esce il mare: le onde che diventano i servizi.

Mostrare almeno tre fotogrammi: testa chiusa con una frase di apertura, testa che si apre, onde che escono e portano al percorso.

### Il percorso tra i servizi

**Riferimento:** https://www.shopify.com/editions/winter2026#sidekick

Da questo sito prendere **solo la struttura**, non il font né lo stile visivo "rinascimentale":

- una pagina lunga che si legge come una visita guidata, non come un elenco;
- una navigazione per categorie con link che portano direttamente a ogni sezione, e un link "torna alla navigazione" alla fine di ogni sezione;
- ogni sezione ha un titolo grande, una frase di introduzione e blocchi con sottotitolo, breve descrizione, link e un elemento visivo;
- schede numerate che invitano a provare qualcosa (lì "Try it with Sidekick"): qui diventano gli inviti a provare le demo.

Nel sito di Luigi lo scroll è come cavalcare un'onda da un servizio all'altro. Ogni servizio è un'onda: si passa da una all'altra con continuità.

### Sezioni

1. **Apertura** — testa stilizzata e frase di apertura.
2. **Percorso dei servizi** — le cinque tappe, ciascuna con: il problema del cliente in parole semplici, cosa viene costruito, un esempio concreto, il link alla demo.
3. **Come lavoro** — il metodo in pochi passaggi (ascoltare, leggere il mare, costruire, mettere in acqua, seguire nel tempo).
4. **Lavori e demo** — card per i casi reali e per le demo dei servizi.
5. **Chi sono** — breve, umano, con la testa stilizzata e un accenno al surf.
6. **Contatti** — form semplice o link per prenotare una call.

## 6. Schermate da produrre

1. Home desktop: i fotogrammi dell'apertura e due momenti del percorso.
2. Home mobile: le stesse sezioni adattate (le animazioni devono funzionare anche in verticale).
3. Pagina singolo servizio (modello unico per tutti e cinque).
4. Pagina demo (modello per mostrare una demo con dati di esempio).
5. Sezione contatti.

## 7. Testi

- Tono semplice e diretto, frasi brevi, niente gergo tecnico se non serve.
- I testi non devono sembrare scritti da un'AI e non devono dare per scontato che il lettore conosca il contesto.
- Titoli semplici e piani, senza slogan forzati.
- Prima persona singolare (è Luigi che parla), mai prima persona plurale.
- In italiano "lead" è maschile: "un lead", "i lead".

## 8. Note per lo sviluppo

- Sito statico su GitHub Pages: niente funzioni lato server. Il form contatti userà un servizio esterno (es. Formspree o Tally) o un link a un calendario.
- Animazioni a scroll in codice (es. GSAP ScrollTrigger): indicare per ogni animazione cosa si muove e in che ordine.
- Rispettare la preferenza "riduci animazioni" del sistema: prevedere una versione statica dell'apertura.
- Prestazioni: illustrazioni in SVG dove possibile.
