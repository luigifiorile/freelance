---
titolo: Il contesto conta più del prompt: progetti, file e istruzioni
titoloBreve: Dare il contesto all'AI
titoloSeo: Context engineering per chi lavora: progetti, istruzioni e file nell'AI
sottotitolo: Perché un assistente con dentro il tuo listino e tre email ben scritte rende più di qualsiasi prompt perfetto. E come prepararlo in un'ora.
descrizione: Cos'è il context engineering e come usarlo in una piccola impresa: progetti, istruzioni personalizzate, file e memoria in ChatGPT, Claude e Gemini, con un modello pronto da compilare.
pubblicato: 2026-11-17
aggiornato: 2026-11-17
capitolo: usare
ordine: 6
servizio: gestionale-interno
correlati:
- come-scrivere-un-prompt
- agenti-ai
- privacy-e-ai
inBreve:
- Il modello sa solo quello che ha nel contesto: la conversazione, i file caricati, le istruzioni fisse.
- Anthropic chiama "context engineering" l'arte di scegliere cosa mettere nel contesto, e la considera l'evoluzione del prompt engineering.
- Progetti (ChatGPT e Claude) e Gem (Gemini) permettono di salvare istruzioni e documenti una volta per tutte.
- Più contesto non è sempre meglio: informazioni inutili o contraddittorie peggiorano le risposte.
- Un buon progetto aziendale contiene: chi sei, cosa vendi, a chi, come scrivi (con esempi), cosa evitare.
---

C'è un momento, quando si inizia a usare l'AI per lavoro, in cui ci si accorge di scrivere sempre le stesse cose. "Sono il titolare di un'azienda che fa...", "i nostri clienti sono soprattutto...", "scrivi dando del lei, senza frasi fatte...". Ogni volta, in ogni chat.

È il segnale che il problema non è più il prompt. È il contesto.

## Cosa vuol dire contesto

Come spiego in [come funziona un modello linguistico](guida:come-funziona-l-ai), il modello non ricorda niente tra una conversazione e l'altra. Tutto quello che sa della tua situazione sta nella sua **finestra di contesto**: le istruzioni di sistema, la conversazione, i documenti caricati, i risultati di una ricerca, eventuali "memorie" salvate dal software.

Nel 2025 Anthropic ha pubblicato una guida per sviluppatori intitolata [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) in cui sostiene che, dopo qualche anno in cui si parlava solo di prompt, la vera competenza è un'altra: decidere quali informazioni dare al modello, in che forma e in che quantità. Lo chiamano **context engineering**. Il termine era stato reso popolare qualche mese prima da Andrej Karpathy e da Tobi Lütke, l'amministratore delegato di Shopify.

La guida è pensata per chi costruisce agenti, ma il principio vale identico per chi usa ChatGPT in ufficio.

## Il paradosso: più contesto non vuol dire meglio

Viene spontaneo pensare che basti caricare tutto: il sito, il catalogo, tre anni di email, il manuale interno. Non funziona così.

Anthropic lo spiega con l'idea di un **budget di attenzione**: i modelli, come le persone, fanno più fatica a usare bene le informazioni quando sono sommersi. Più il contesto si allunga, più è facile che un dettaglio importante si perda o che due informazioni in contraddizione producano una risposta confusa. La loro indicazione è cercare l'insieme più piccolo possibile di informazioni ad alto segnale.

In pratica:

- meglio un listino aggiornato di una pagina che tre listini di anni diversi;
- meglio tre email esemplari che trecento email a caso;
- meglio una regola chiara ("non promettiamo mai date di consegna sotto i 10 giorni lavorativi") che un manuale di 40 pagine in cui la regola è sepolta a pagina 27.

## Gli strumenti: progetti, Gem, istruzioni e memoria

Tutti i principali assistenti oggi hanno modi per salvare il contesto e riusarlo. I nomi cambiano, la logica è la stessa.

**Progetti.** In ChatGPT e in Claude puoi creare un progetto con istruzioni proprie e una raccolta di file. Ogni conversazione aperta dentro quel progetto parte già con quelle informazioni. È lo strumento più utile per un'azienda: un progetto "Preventivi", uno "Assistenza clienti", uno "Contenuti social".

**Gem.** In Gemini l'equivalente si chiama Gem: un assistente personalizzato con istruzioni e file di riferimento, anche da Google Drive.

**Istruzioni personalizzate.** Valgono per tutte le conversazioni, non per un progetto. Vanno bene per le cose generali: il tuo ruolo, la lingua, le preferenze di formato ("rispondi in italiano, niente elenchi puntati se non servono").

**Memoria.** Alcuni assistenti salvano da soli informazioni dalle conversazioni e le riusano. È comoda ma meno controllabile: vale la pena aprire ogni tanto le impostazioni e guardare cosa c'è dentro, e cancellare quello che non deve esserci.

## Cosa mettere in un progetto aziendale

Questo è uno schema per iniziare. Si compila in un'ora e si migliora nel tempo. Va scritto come lo spiegheresti a una persona nuova al primo giorno.

```Istruzioni di progetto: modello da compilare
CHI SIAMO
[Nome, cosa fa l'azienda in due frasi, dove lavora, quante persone siamo.]

COSA VENDIAMO
[Prodotti o servizi principali, con i prezzi indicativi se servono. Cosa NON facciamo, così non lo propone.]

I NOSTRI CLIENTI
[Chi sono, cosa gli interessa, le domande e le obiezioni più frequenti.]

COME SCRIVIAMO
[Lei o tu, tono, lunghezza tipica. Parole che usiamo e parole che evitiamo. Vedi gli esempi nei file.]

REGOLE
[Cose da non promettere, informazioni da non dare, quando passare la palla a una persona.]

COME LAVORARE CON ME
[Se mancano informazioni, chiedi. Se non sei sicuro, dillo. Segnala sempre le cose da verificare.]
```

E nei file del progetto:

- **due o tre esempi** di testi veri ben riusciti (una mail, un preventivo, una risposta a un reclamo), senza dati personali dei clienti;
- **il listino o il catalogo** aggiornato;
- **le domande frequenti** che ricevi davvero;
- eventuali **documenti di riferimento** brevi: condizioni di vendita, tempi di consegna, garanzie.

Un consiglio pratico: metti la data di aggiornamento in cima a ogni file. Quando cambia il listino, sostituisci il file invece di aggiungerne un altro.

## Tenere pulito il contesto durante il lavoro

Anche dentro una singola conversazione si può gestire il contesto meglio. Alcune abitudini utili:

- **Una conversazione, un compito.** Se passi dal preventivo per Rossi alla mail per Bianchi, apri una chat nuova. Altrimenti il modello si porta dietro dettagli del primo.
- **Ricomincia quando si incarta.** Se dopo dieci messaggi la conversazione è andata storta, chiedi un riassunto dei punti fermi e incollalo in una chat nuova. Anthropic chiama questa tecnica _compaction_ e la usa nei suoi agenti.
- **Dai i documenti, non i ricordi.** Se il modello deve rispondere su un contratto, caricalo. Chiedere "cosa dice di solito un contratto di agenzia" porta a risposte generiche e, a volte, [inventate](guida:allucinazioni-ai).
- **Togli quello che non serve.** Un PDF di 200 pagine per una domanda su un paragrafo è rumore: incolla il paragrafo.

## Dal progetto allo strumento

Un progetto ben fatto è il primo passo verso qualcosa di più. Quando le istruzioni sono stabili e i compiti si ripetono, il passo successivo è collegare il modello direttamente ai dati veri: il CRM, il gestionale, la casella email. Lì il contesto non lo carichi più a mano, arriva da solo, aggiornato.

È quello che fanno gli strumenti su misura che costruisco, e gli [agenti](guida:agenti-ai) in generale. Lo standard più usato per questi collegamenti è il [Model Context Protocol](https://modelcontextprotocol.io), presentato da Anthropic nel novembre 2024 e adottato poi anche da OpenAI, Google e Microsoft. Il nome dice già tutto: è un protocollo per dare contesto ai modelli.

Ma si parte sempre da qui: sapere quali informazioni servono davvero, e scriverle bene una volta.

## Domande frequenti

### Cos'è il context engineering?

È l'insieme delle scelte su quali informazioni dare a un modello di intelligenza artificiale, in che forma e in che quantità: istruzioni, documenti, esempi, dati. Anthropic lo descrive come l'evoluzione naturale del prompt engineering.

### Cosa sono i progetti di ChatGPT e Claude?

Sono spazi di lavoro con istruzioni e file salvati, che valgono per tutte le conversazioni aperte al loro interno. Permettono di non ripetere ogni volta chi sei, cosa vendi e come scrivi. In Gemini la funzione simile si chiama Gem.

### Quanti documenti conviene caricare nell'AI?

Il meno possibile per fare bene il compito. Informazioni inutili, vecchie o in contraddizione peggiorano le risposte. Meglio pochi documenti aggiornati e ben scelti, con la data di aggiornamento indicata.

## Fonti

- Anthropic, [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), 2025
- Anthropic, [Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol), novembre 2024
- [Model Context Protocol](https://modelcontextprotocol.io), documentazione ufficiale
- Anthropic, [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/be-clear-and-direct)
