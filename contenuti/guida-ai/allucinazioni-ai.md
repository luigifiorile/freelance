---
titolo: Perché l'AI inventa le cose (e come accorgersene)
titoloBreve: Le allucinazioni dell'AI
titoloSeo: Allucinazioni dell'AI: cosa sono, perché succedono e come evitarle
sottotitolo: Sentenze inesistenti, fonti inventate, numeri plausibili e sbagliati. Da dove vengono e come lavorare senza farsi fregare.
descrizione: Cosa sono le allucinazioni dell'intelligenza artificiale, perché ChatGPT e gli altri inventano fatti e fonti, i casi reali in tribunale e sei abitudini per difendersi.
pubblicato: 2026-11-17
aggiornato: 2026-11-17
capitolo: capire
ordine: 2
servizio: gestionale-e-reporting-su-misura
correlati:
- ricerca-con-l-ai
- come-funziona-l-ai
- frontiera-frastagliata
inBreve:
- Un'allucinazione è una risposta falsa presentata con sicurezza: un fatto, una citazione, un numero o una fonte che non esistono.
- Secondo OpenAI nascono anche da come i modelli vengono valutati: tirare a indovinare rende più che dire "non lo so".
- In Italia il primo caso noto è un'ordinanza del Tribunale di Firenze del marzo 2025, con sentenze della Cassazione inventate da ChatGPT.
- Il rischio è più alto su nomi, numeri, date, citazioni, riferimenti normativi e argomenti di nicchia.
- Le difese funzionano: dare i documenti invece di chiedere a memoria, chiedere le fonti e aprirle, far verificare a una persona quello che conta.
---

Nel marzo 2025 il Tribunale di Firenze, sezione imprese, ha emesso un'ordinanza in una causa su merce contraffatta. Fin qui niente di strano. Il dettaglio che l'ha resa famosa è che in uno degli atti c'erano citazioni di sentenze della Corte di Cassazione che non esistevano. Le aveva prodotte ChatGPT e nessuno le aveva controllate. Il tribunale ha riconosciuto la buona fede e non ha applicato sanzioni aggiuntive, ma il caso è finito su tutti i siti giuridici ([qui un buon resoconto di Agenda Digitale](https://www.agendadigitale.eu/documenti/chatgpt-e-le-sentenze-inventate-in-tribunale-che-insegna-il-caso-di-firenze/)).

Due anni prima era successo lo stesso a New York, nel caso [Mata contro Avianca](https://www.nytimes.com/2023/05/27/nyregion/avianca-airline-lawsuit-chatgpt.html): sei precedenti inventati, avvocati multati. Da allora i casi documentati sono centinaia, in molti paesi.

Il fenomeno ha un nome, **allucinazione**, ed è il motivo per cui tante persone provano l'AI e la abbandonano. Vale la pena capirlo bene, perché si può gestire.

## Cos'è un'allucinazione, esattamente

È una risposta falsa che il modello presenta con la stessa sicurezza di una vera. Le forme più comuni:

- **fatti inventati**: una data, un dato, un evento mai successo;
- **citazioni e fonti inesistenti**: libri, articoli, sentenze, link che non portano da nessuna parte (o, peggio, che esistono ma dicono altro);
- **numeri plausibili e sbagliati**: un fatturato, una percentuale, il totale di una tabella;
- **dettagli aggiunti**: un riassunto corretto in cui compare una cosa che nel documento non c'era.

L'ultima è la più insidiosa, perché il resto della risposta è giusto e abbassa la guardia.

## Perché succede

La spiegazione breve sta nel [funzionamento stesso dei modelli](guida:come-funziona-l-ai): costruiscono la risposta più plausibile, un pezzo alla volta. Se l'informazione giusta non c'è, il modo più plausibile di continuare una frase come "secondo la sentenza della Cassazione n." è un numero con l'aria di una sentenza.

La spiegazione lunga l'ha data OpenAI in un paper del settembre 2025, [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/), firmato da Adam Tauman Kalai e altri. Due argomenti principali.

Il primo è statistico: anche con dati di addestramento perfetti, alcuni fatti compaiono troppo di rado perché il modello possa impararli. L'esempio del paper è il compleanno di una persona poco nota: non c'è nessuno schema da imparare, o lo hai visto abbastanza volte o no.

Il secondo è più interessante, ed è un problema di incentivi. I modelli vengono confrontati con test che premiano le risposte giuste e danno zero sia alle sbagliate sia ai "non lo so". È come un esame a crocette senza penalità per l'errore: conviene sempre tirare a indovinare. Un modello addestrato a far bene in quei test impara che rispondere con sicurezza paga più che ammettere un dubbio. La proposta degli autori è cambiare i test, penalizzando gli errori sicuri più dell'incertezza.

Tradotto: le allucinazioni diminuiscono da un modello all'altro, ma non sono un difetto che sparirà con il prossimo aggiornamento.

## Quando il rischio è più alto

Dalla mia esperienza, e da quello che dicono le ricerche, il rischio sale in alcune situazioni riconoscibili:

- **domande a memoria su cose specifiche**: nomi, numeri, date, codici, articoli di legge;
- **argomenti di nicchia o locali**: una normativa regionale, un'azienda piccola, un fatto recente;
- **richieste di fonti e citazioni** senza ricerca web attiva;
- **calcoli fatti "a testa"** dal modello invece che eseguendo codice;
- **conversazioni lunghissime**, in cui il modello perde pezzi del contesto iniziale;
- **domande che contengono già una premessa sbagliata**: se chiedi "perché la legge X obbliga a Y", il modello tende a spiegartelo anche se la legge non lo dice.

Anche la ricerca web non risolve del tutto. In un test del [Tow Center della Columbia University](https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php) del marzo 2025, otto motori di ricerca basati sull'AI hanno sbagliato fonte, titolo o link in più del 60% dei casi, quasi sempre senza esprimere dubbi. Ne parlo in [Fare ricerche con l'AI senza farsi ingannare](guida:ricerca-con-l-ai).

## Sei abitudini che funzionano

Nessuna di queste elimina il problema. Insieme lo riducono molto.

**1. Dai i documenti invece di chiedere a memoria.** È la difesa più efficace. Se carichi il contratto e chiedi cosa dice sulla risoluzione, il modello lavora sul testo. Se chiedi "cosa dicono di solito i contratti", lavora sui ricordi. Le tecniche di _retrieval-augmented generation_ (RAG), descritte in un [paper del 2020](https://arxiv.org/abs/2005.11401) e alla base di molti strumenti aziendali, fanno esattamente questo in automatico.

**2. Dagli il permesso di non sapere.** Le guide di [Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/be-clear-and-direct) suggeriscono di dirlo in modo esplicito. Una frase così cambia il comportamento più di quanto sembri:

```Da aggiungere ai prompt su fatti e documenti
Se un'informazione non è nel documento o non sei sicuro, scrivi "non lo so" invece di dedurla. Per ogni affermazione importante indica la frase del documento da cui la prendi.
```

**3. Chiedi le citazioni testuali.** Quando lavori su un documento, chiedi di riportare la frase esatta a sostegno di ogni punto. Controllare una citazione è molto più veloce che rileggere tutto, e le frasi inventate saltano all'occhio.

**4. Apri le fonti.** Sembra ovvio, ma è il passaggio che salta più spesso. Un link che esiste non basta: va verificato che dica quello che il modello sostiene.

**5. Usa il codice per i numeri.** Se l'assistente ha l'analisi dati o l'esecuzione di codice, chiedigli di usarla per somme, medie e percentuali. Se non ce l'ha, rifai il calcolo che conta.

**6. Decidi cosa si verifica sempre.** In un'azienda la regola deve essere scritta: tutto quello che arriva a un cliente, che finisce in un atto, in un preventivo o in una decisione economica passa da una persona. Il resto (bozze, idee, riassunti per uso interno) può avere controlli più leggeri.

## Un'osservazione da utilizzatore

C'è un effetto collaterale delle allucinazioni di cui si parla poco. Chi ne incontra una grossa all'inizio spesso smette di usare l'AI per tutto, anche per le cose in cui funziona benissimo. Chi non ne incontra nessuna per settimane, invece, smette di controllare. Il secondo caso è quello che porta in tribunale.

La soluzione che uso io è ragionare per tipo di compito. Su riscrivere, riassumere un documento che ho davanti, trovare idee, strutturare una bozza, l'errore è raro e facile da vedere. Su fatti puntuali, numeri e riferimenti normativi, controllo sempre.

Poi ci sono allucinazioni più sottili, che non riguardano un fatto ma un ragionamento. Me ne è capitata una mentre lavoravo al sito per i libri di mio padre, che fa il cameriere e scrive da sempre e che voglio aiutare a far arrivare il suo sogno a più persone. Chiedevo a Claude di aiutarmi a presentare i suoi tre libri, e Claude si era fissata su un'idea: doveva trovare a tutti i costi un filo comune tra i tre. Quando il filo non c'era, lo inventava. Temi ricorrenti, simboli, collegamenti tra personaggi che nei libri non esistono.

Il punto è che i tre libri non hanno bisogno di un filo. Sono scritti da una persona che in momenti diversi aveva voglia di raccontare cose diverse, ed è anche il bello. Un modello addestrato a dare risposte ordinate e coerenti fa fatica ad accettarlo: se gli chiedi di spiegare qualcosa, una spiegazione la trova, anche quando la risposta giusta sarebbe "non c'è una logica, e va bene così". Per questo, quando l'AI trova uno schema troppo bello per essere vero, conviene chiederle dove lo vede esattamente.

## Domande frequenti

### Cosa sono le allucinazioni dell'intelligenza artificiale?

Sono risposte false presentate con sicurezza da un modello linguistico: fatti, numeri, citazioni o fonti inventati. Succedono perché il modello costruisce la risposta più plausibile e non ha un modo affidabile per sapere quando non conosce la risposta.

### I modelli più recenti allucinano ancora?

Sì, anche se meno dei precedenti, soprattutto quando cercano sul web o lavorano su documenti forniti. Secondo la ricerca di OpenAI del 2025 il problema dipende anche da come i modelli vengono addestrati e valutati, quindi non sparirà del tutto con i prossimi aggiornamenti.

### Come capisco se l'AI si sta inventando qualcosa?

Non sempre si capisce dal tono, perché le risposte inventate sono scritte con la stessa sicurezza delle altre. Conviene chiedere le fonti o le frasi del documento a sostegno, aprire i link, rifare i calcoli importanti e diffidare di nomi, numeri e riferimenti normativi molto specifici.

### Un professionista risponde degli errori dell'AI?

Sì. La legge italiana 132/2025 stabilisce che nelle professioni intellettuali l'AI può essere usata solo come supporto, con il lavoro intellettuale che resta prevalente, e la responsabilità verso il cliente resta del professionista.

## Fonti

- Kalai, Nachum, Vempala e Zhang, [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/), OpenAI, settembre 2025
- Agenda Digitale, [ChatGPT e le sentenze inventate in tribunale: che insegna il caso di Firenze](https://www.agendadigitale.eu/documenti/chatgpt-e-le-sentenze-inventate-in-tribunale-che-insegna-il-caso-di-firenze/)
- The New York Times, [Here's What Happens When Your Lawyer Uses ChatGPT](https://www.nytimes.com/2023/05/27/nyregion/avianca-airline-lawsuit-chatgpt.html), maggio 2023
- Jaźwińska e Chandrasekar, [AI Search Has a Citation Problem](https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php), Columbia Journalism Review, marzo 2025
- Lewis e altri, [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401), 2020
- Anthropic, [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/be-clear-and-direct)
