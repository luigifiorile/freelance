---
titolo: Come funziona un modello linguistico, spiegato a chi non è un tecnico
titoloBreve: Come funziona un modello linguistico
titoloSeo: Come funziona ChatGPT (e Claude, e Gemini), spiegato semplice
sottotitolo: Token, addestramento, finestra di contesto e modelli che "ragionano". Quello che serve sapere per usarli meglio, senza formule.
descrizione: Come funzionano ChatGPT, Claude e Gemini spiegato senza formule: cosa sono i token, come si addestra un modello, cos'è la finestra di contesto e perché sbaglia.
pubblicato: 2026-11-17
aggiornato: 2026-11-17
capitolo: capire
ordine: 1
servizio: crm-e-automazioni
correlati:
- allucinazioni-ai
- frontiera-frastagliata
- glossario-ai
inBreve:
- Un modello linguistico (LLM) è un programma addestrato su enormi quantità di testo a prevedere il pezzo di parola successivo.
- Prima impara dai testi (pre-addestramento), poi viene istruito a fare l'assistente con esempi e giudizi di persone.
- Non consulta un archivio: costruisce ogni risposta parola per parola, ed è per questo che può inventare.
- Vede solo quello che sta nella sua finestra di contesto: la conversazione, i file caricati, le istruzioni.
- I modelli "che ragionano" scrivono un ragionamento prima di rispondere, e vanno molto meglio su compiti con più passaggi.
---

C'è un motivo pratico per capire come funziona un modello linguistico, anche se non hai nessuna intenzione di diventare un tecnico. Quasi tutti gli errori che vedo fare con l'AI vengono da un'idea sbagliata di cosa ci sia dall'altra parte. Chi pensa che ChatGPT sia un motore di ricerca si fida delle citazioni. Chi pensa che sia una persona si offende quando "non capisce". Chi pensa che sia un database si stupisce quando sbaglia una data.

Non è nessuna di queste tre cose. Proviamo a vedere cos'è, con il minimo indispensabile di gergo.

## L'idea di fondo: indovinare il pezzo successivo

Un **modello linguistico di grandi dimensioni** (_large language model_, LLM) è un programma che, dato un testo, calcola quale pezzo di testo è più probabile che venga dopo. Poi aggiunge quel pezzo e ricomincia. Lo fa migliaia di volte per scrivere una risposta.

Detta così sembra il completamento automatico della tastiera del telefono, e in effetti il principio è parente. La differenza è la scala. I modelli di oggi sono reti neurali con centinaia di miliardi di parametri (i "numeri" che il modello regola durante l'addestramento), addestrate su una porzione enorme di tutto il testo scritto disponibile: libri, siti, codice, articoli scientifici. Per prevedere bene la parola successiva in testi così diversi, il modello finisce per costruirsi delle rappresentazioni interne di grammatica, fatti, stili, perfino di alcuni passaggi logici.

Una precisazione che negli ultimi anni è diventata importante: "parola per parola" non vuol dire che il modello non abbia nessun piano. Una ricerca di Anthropic sul funzionamento interno di Claude ([Tracing the thoughts of a large language model](https://www.anthropic.com/research/tracing-thoughts-language-model), 2025) ha mostrato che quando scrive una poesia in rima il modello "sceglie" la parola finale del verso prima di arrivarci. Cosa succeda davvero là dentro è ancora in buona parte un mistero, anche per chi i modelli li costruisce.

## Cosa sono i token (e perché ti interessano)

Il modello non legge lettere né parole intere: legge **token**, pezzi di testo che possono essere una parola corta, una sillaba o un segno di punteggiatura. Secondo [OpenAI](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them), in inglese un token vale in media circa quattro caratteri, cioè tre quarti di parola. L'italiano, che ha parole più lunghe e meno presenti nei dati di addestramento, di solito ne consuma qualcuno in più.

Ti interessano per tre motivi pratici:

- **I limiti si contano in token.** Quanto testo puoi caricare, quanto lunga può essere la risposta, quanto costa usare il modello via API.
- **Spiegano alcuni errori strani.** Contare le lettere di una parola o invertire una stringa sono compiti difficili per un sistema che non vede le lettere. Per anni il test classico è stato chiedere quante "r" ci sono in _strawberry_.
- **I prezzi sono per milione di token.** Se un giorno vorrai collegare l'AI al tuo gestionale, è l'unità con cui farai i conti.

## Come si addestra un modello

In due grandi fasi, più una serie di ritocchi.

**Il pre-addestramento.** Il modello legge una quantità immensa di testo e impara a prevedere il token successivo. È la fase che costa centinaia di milioni di dollari in calcolo e da cui escono le capacità di base. Alla fine di questa fase il modello sa continuare un testo, ma non sa fare l'assistente: se gli scrivi una domanda, potrebbe rispondere con altre dieci domande, perché in molti testi le domande stanno in fila.

**L'istruzione.** Poi il modello viene addestrato a comportarsi da assistente: seguire istruzioni, rispondere in modo utile, rifiutare certe richieste. Si usano esempi scritti da persone e, soprattutto, giudizi umani su quale risposta è migliore tra due. La tecnica si chiama _reinforcement learning from human feedback_ (RLHF) ed è descritta nel paper di OpenAI su [InstructGPT](https://arxiv.org/abs/2203.02155) del 2022, il passaggio che ha reso possibile ChatGPT. Oggi ci si affiancano altre tecniche, per esempio l'addestramento su problemi con una risposta verificabile (matematica, codice), che è alla base dei modelli che "ragionano".

Una conseguenza da ricordare: **il modello ha una data di aggiornamento** (_knowledge cutoff_). Quello che è successo dopo non lo sa, a meno che non lo cerchi sul web o glielo dia tu.

## La finestra di contesto: la memoria a breve termine

Il modello non ricorda le conversazioni passate, a meno che il software intorno non gliele faccia rileggere. Quello che vede in un dato momento sta nella **finestra di contesto**: le tue istruzioni, la conversazione fino a lì, i documenti caricati, i risultati di una ricerca web. Le finestre oggi sono grandi, centinaia di migliaia di token, cioè centinaia di pagine.

Due cose pratiche da sapere.

La prima: grande non vuol dire perfetta. Anthropic, nella sua guida al [context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), spiega che i modelli hanno un "budget di attenzione" limitato: più roba metti nel contesto, più è facile che i dettagli si perdano. Conversazioni lunghissime peggiorano. Ogni tanto conviene ricominciare da capo con un riassunto.

La seconda: le funzioni di "memoria" degli assistenti (ChatGPT, Claude e Gemini ne hanno) non sono il modello che si ricorda di te. Sono il software che salva alcune informazioni e le reinserisce nel contesto. Utile, ma vale la pena sapere cosa c'è dentro. Ne parlo in [Il contesto conta più del prompt](guida:dare-contesto-all-ai).

## I modelli che "ragionano"

Dal settembre 2024, con [o1 di OpenAI](https://openai.com/index/learning-to-reason-with-llms/), sono arrivati i modelli di ragionamento: prima di rispondere scrivono, per conto loro, una catena di passaggi intermedi. L'idea viene da un paper di Google del 2022 sul [chain-of-thought prompting](https://arxiv.org/abs/2201.11903), che mostrava come chiedere al modello di ragionare passo per passo migliorasse molto i risultati su matematica e logica. Oggi quel comportamento è addestrato direttamente nel modello.

In pratica, negli assistenti trovi un'opzione tipo "pensiero esteso" o un modello "thinking". Ci mette di più, ma su un preventivo con dieci voci, un'analisi di un bilancio o un problema con molti vincoli la differenza si vede. Per una mail di due righe è sprecato.

## Strumenti: quando il modello non lavora da solo

Gli assistenti di oggi non sono solo il modello. Intorno c'è software che gli permette di usare **strumenti**: cercare sul web, eseguire codice per fare calcoli precisi, leggere un PDF, generare un grafico, collegarsi a Google Drive o al calendario. Quando il modello decide di usare uno strumento, scrive una richiesta in un formato speciale, il software la esegue e gli restituisce il risultato, che finisce nel contesto.

È un dettaglio tecnico con una conseguenza enorme: i calcoli fatti eseguendo codice sono affidabili, quelli fatti "a mente" dal modello molto meno. Se ti serve una somma giusta, chiedigli di usare il codice (o controlla che lo stia facendo).

Collegare il modello agli strumenti della tua azienda è anche il punto di partenza degli [agenti](guida:agenti-ai).

## Perché tutto questo spiega gli errori

Rimettiamo insieme i pezzi. Un sistema che costruisce la risposta più plausibile, token dopo token, partendo da quello che ha nel contesto e da quello che ha assorbito in addestramento:

- se l'informazione giusta non c'è, ne produce una plausibile (è l'origine delle [allucinazioni](guida:allucinazioni-ai));
- se la domanda somiglia a mille domande facili ma ha un dettaglio diverso, rischia di rispondere alla domanda facile;
- se il contesto è confuso o contraddittorio, la risposta lo sarà altrettanto;
- se il compito richiede lettere, cifre esatte o conteggi, senza uno strumento è in difficoltà.

Niente di questo vuol dire che non funzioni. Vuol dire che funziona in un modo preciso, e conoscerlo aiuta a capire quando fidarsi.

## Domande frequenti

### ChatGPT cerca le risposte su internet?

Non per forza. Il modello risponde con quello che ha imparato durante l'addestramento. Cerca sul web solo quando l'assistente ha la ricerca attiva e decide (o tu gli chiedi) di usarla, e in quel caso di solito mostra le fonti.

### Cos'è un token?

È l'unità di testo che il modello legge e scrive: una parola corta, un pezzo di parola o un segno di punteggiatura. In inglese un token vale in media circa tre quarti di parola. Limiti e prezzi dei modelli si misurano in token.

### L'AI capisce davvero quello che scrive?

Dipende da cosa intendi per capire, ed è una discussione aperta anche tra i ricercatori. In pratica, i modelli costruiscono rappresentazioni interne utili di significati e relazioni, ma non hanno un modo affidabile per sapere quando quello che scrivono è falso.

### Perché le risposte cambiano se faccio la stessa domanda due volte?

Perché il modello sceglie i token con un margine di casualità: tra le parole più probabili non prende sempre la prima. È quello che rende le risposte varie e naturali, ma anche meno ripetibili.

## Per andare più a fondo

- Andrej Karpathy, tra i fondatori di OpenAI ed ex responsabile dell'AI di Tesla: [Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) (un'ora, in inglese, la migliore introduzione che conosco) e [Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI) (più lunga e più tecnica).
- Stephen Wolfram, [What Is ChatGPT Doing … and Why Does It Work?](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/): lungo ma chiarissimo.
- 3Blue1Brown, la serie su [reti neurali e transformer](https://www.3blue1brown.com/topics/neural-networks): le animazioni migliori che esistano sull'argomento.

## Fonti

- Vaswani e altri, [Attention Is All You Need](https://arxiv.org/abs/1706.03762), 2017
- Ouyang e altri (OpenAI), [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155), 2022
- Wei e altri (Google), [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903), 2022
- OpenAI, [Learning to reason with LLMs](https://openai.com/index/learning-to-reason-with-llms/), 2024
- OpenAI, [What are tokens and how to count them](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)
- Anthropic, [Tracing the thoughts of a large language model](https://www.anthropic.com/research/tracing-thoughts-language-model), 2025
- Anthropic, [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), 2025
