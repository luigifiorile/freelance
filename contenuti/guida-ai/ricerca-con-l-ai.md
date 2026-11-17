---
titolo: Fare ricerche con l'AI senza farsi ingannare
titoloBreve: Fare ricerche con l'AI
titoloSeo: Ricerca con l'AI e deep research: come usarla e come verificare le fonti
sottotitolo: Deep research, ricerca web, NotebookLM. Cosa fanno bene, quanto sbagliano le citazioni secondo gli studi, e un metodo per verificare in fretta.
descrizione: Come usare l'intelligenza artificiale per fare ricerche di lavoro: deep research, ricerca web e NotebookLM, gli studi su quanto sbagliano le fonti e un metodo pratico per verificarle.
pubblicato: 2026-11-17
aggiornato: 2026-11-17
capitolo: usare
ordine: 7
servizio: marketing
correlati:
- allucinazioni-ai
- fonti-ai
- dare-contesto-all-ai
inBreve:
- Gli assistenti oggi cercano sul web e citano le fonti; le funzioni di deep research leggono decine di pagine e scrivono un rapporto.
- In un test della Columbia University (2025), otto motori di ricerca AI hanno sbagliato fonte o link in più del 60% dei casi.
- Uno studio coordinato da EBU e BBC su oltre 3.000 risposte ha trovato almeno un problema serio nel 45%.
- Funzionano bene per orientarsi, trovare fonti e fare una prima sintesi; i dati che contano vanno sempre controllati sulla fonte originale.
- Per lavorare su documenti tuoi, strumenti come NotebookLM rispondono solo a partire da quello che carichi.
---

Capire un mercato, un concorrente o una normativa voleva dire, fino a poco tempo fa, un pomeriggio con venti schede aperte nel browser. Oggi si può far partire una ricerca approfondita e ritrovarsi dopo pochi minuti con un rapporto di dieci pagine, ordinato e pieno di link. [[ESEMPIO DI LUIGI: una ricerca vera che hai fatto così, per lavoro o per un cliente]]

Il problema è che quel rapporto è scritto benissimo anche quando sbaglia. E sbaglia più spesso di quanto sembri.

## Tre modi di cercare con l'AI

**La ricerca web normale.** Tutti gli assistenti principali possono cercare sul web durante la conversazione e mostrano le fonti, di solito come link numerati. Va bene per domande puntuali e informazioni recenti.

**La ricerca approfondita** (_deep research_). Lanciata da Google per Gemini a fine 2024 e da [OpenAI](https://openai.com/index/introducing-deep-research/) per ChatGPT nel febbraio 2025, oggi c'è in quasi tutti gli assistenti. Il modello pianifica una serie di ricerche, legge decine o centinaia di pagine, e dopo qualche minuto consegna un rapporto strutturato con le citazioni. Ethan Mollick, nella sua [guida all'uso dell'AI](https://www.oneusefulthing.org/p/using-ai-right-now-a-quick-guide), la considera una delle funzioni più utili per chi lavora, e sono d'accordo.

**La ricerca sui tuoi documenti.** Strumenti come [NotebookLM](https://notebooklm.google) di Google, o i progetti di ChatGPT e Claude, rispondono a partire da documenti che carichi tu: report di settore, verbali, contratti, manuali. Sono più affidabili per un motivo semplice: lavorano su un insieme chiuso di fonti scelte da te.

## Quanto sbagliano, secondo gli studi

Due ricerche recenti, condotte da giornalisti su notizie di attualità, danno un'idea delle dimensioni del problema.

Nel marzo 2025 il [Tow Center for Digital Journalism della Columbia University](https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php) ha dato a otto motori di ricerca AI estratti di articoli veri e ha chiesto di indicare titolo, testata e link dell'originale. Su 1.600 domande, le risposte sbagliate sono state più del 60%. Il migliore, Perplexity, ha sbagliato il 37% delle volte; il peggiore oltre il 90%. Quasi mai gli strumenti esprimevano un dubbio, e spesso inventavano link o citavano copie dell'articolo invece dell'originale.

Nell'ottobre 2025 uno [studio coordinato dall'Unione europea di radiodiffusione (EBU) e guidato dalla BBC](https://aib.org.uk/ai-assistants-misrepresent-news-content-says-major-study/), con 22 emittenti pubbliche di 18 paesi, ha fatto valutare a giornalisti professionisti oltre 3.000 risposte di ChatGPT, Copilot, Gemini e Perplexity su temi di attualità. Il 45% aveva almeno un problema significativo; il 31% aveva problemi con le fonti, il 20% conteneva errori di fatto o informazioni superate.

Due precisazioni oneste. Questi test riguardano le notizie, un terreno particolarmente difficile perché cambia di continuo. E i modelli migliorano: lo stesso studio EBU registra progressi rispetto alla ricerca della BBC di inizio 2025. Ma la direzione è chiara: una citazione nell'output dell'AI è un indizio, non una prova.

## Per cosa funziona bene

Nella pratica, la ricerca con l'AI dà il meglio quando:

- devi **orientarti** in un argomento nuovo e capire quali sono le domande giuste;
- ti serve una **mappa**: chi sono i concorrenti in un settore, quali normative toccano un'attività, quali studi esistono su un tema;
- vuoi **trovare fonti** da leggere tu, più velocemente di quanto faresti con un motore di ricerca;
- devi **sintetizzare** documenti che hai già scelto e caricato.

Funziona peggio quando ti serve un singolo dato preciso da usare così com'è (un prezzo, una percentuale, una data di scadenza normativa), quando il tema è molto locale o molto recente, o quando le fonti di qualità sono poche e quelle di bassa qualità tante.

## Un metodo per verificare in fretta

Verificare tutto non è realistico, e toglierebbe senso allo strumento. Questo è un metodo che porta via pochi minuti e copre i rischi principali.

1. **Separa i dati dal ragionamento.** Nel rapporto, segna le affermazioni che userai davvero: numeri, date, nomi, citazioni. Il resto (struttura, spiegazioni, contesto) è meno rischioso.
2. **Apri la fonte di ogni dato che userai.** Controlla che la pagina esista, che dica davvero quella cosa e che la data sia quella giusta. È il passaggio che salta più spesso.
3. **Risali alla fonte originale.** Se il link porta a un articolo di giornale che cita uno studio, cerca lo studio. I numeri cambiano spesso tra la fonte e i riassunti dei riassunti.
4. **Guarda chi parla.** Un dato di Istat o di un paper scientifico vale più di quello di un'azienda che vende la soluzione al problema che il dato descrive.
5. **Chiedi all'AI di fare l'avvocato del diavolo.** "Quali affermazioni di questo rapporto sono più deboli o meno supportate dalle fonti?" Spesso le indica da solo.

Un prompt utile per lanciare la ricerca nel modo giusto:

```Per una ricerca approfondita
Fai una ricerca su [tema] per [scopo: es. valutare se aprire una sede a Torino].
Preferisci fonti primarie: istituti di statistica, documenti ufficiali, studi scientifici, siti delle aziende. Evita blog di aziende che vendono servizi sul tema.
Per ogni dato numerico indica fonte, anno e link diretto.
Alla fine elenca le informazioni che non sei riuscito a verificare e i punti in cui le fonti non sono d'accordo.
```

## Quando usare i documenti invece del web

Se la ricerca riguarda un insieme di documenti che hai già (un bando, tre report di settore, i verbali delle ultime riunioni), conviene lavorare su quelli invece che sul web. Strumenti come NotebookLM sono costruiti apposta: rispondono citando il passaggio preciso del documento, e se l'informazione non c'è tendono a dirlo.

È anche il principio dietro molti strumenti aziendali su misura: invece di lasciare che il modello cerchi ovunque, gli si danno solo le fonti giuste. In gergo si chiama _retrieval-augmented generation_ (RAG), e ne parlo nel [glossario](guida:glossario-ai).

## Domande frequenti

### Cos'è la deep research dell'AI?

È una funzione degli assistenti come ChatGPT, Gemini e Claude in cui il modello pianifica e svolge da solo una serie di ricerche web, legge molte fonti e consegna dopo alcuni minuti un rapporto strutturato con le citazioni. È utile per analisi di mercato e approfondimenti, ma le fonti vanno verificate.

### Le fonti citate dall'AI sono affidabili?

Non sempre. In un test della Columbia University del 2025, otto motori di ricerca basati sull'AI hanno sbagliato la fonte in più del 60% dei casi, e uno studio di EBU e BBC ha trovato problemi seri nel 45% delle risposte su temi di attualità. I link vanno aperti e controllati.

### Meglio Google o ChatGPT per cercare informazioni?

Dipende dalla domanda. Per orientarsi su un argomento, trovare fonti e fare sintesi l'AI è spesso più rapida. Per un dato preciso, un sito ufficiale o un'informazione da usare così com'è, la fonte originale resta il riferimento, e spesso la si trova prima con un motore di ricerca tradizionale.

## Fonti

- Jaźwińska e Chandrasekar, [AI Search Has a Citation Problem](https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php), Columbia Journalism Review, marzo 2025
- EBU e BBC, News Integrity in AI Assistants, ottobre 2025, [sintesi dell'Association for International Broadcasting](https://aib.org.uk/ai-assistants-misrepresent-news-content-says-major-study/)
- OpenAI, [Introducing deep research](https://openai.com/index/introducing-deep-research/), febbraio 2025
- Ethan Mollick, [Using AI Right Now: A Quick Guide](https://www.oneusefulthing.org/p/using-ai-right-now-a-quick-guide)
- Google, [NotebookLM](https://notebooklm.google)
