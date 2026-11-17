---
titolo: Agenti AI: cosa sono davvero e quando servono
titoloBreve: Agenti AI
titoloSeo: Agenti AI: cosa sono, come funzionano e quando servono a un'azienda
sottotitolo: La parola del momento, spiegata con la distinzione che usa Anthropic. Più un consiglio controcorrente: quasi sempre basta qualcosa di più semplice.
descrizione: Cosa sono gli agenti AI, la differenza tra agenti e flussi di lavoro secondo Anthropic, il Model Context Protocol, i rischi di sicurezza e quando una piccola impresa ne ha davvero bisogno.
pubblicato: 2026-11-17
aggiornato: 2026-11-17
capitolo: lavoro
ordine: 10
servizio: crm-e-automazioni
correlati:
- dare-contesto-all-ai
- privacy-e-ai
- ai-per-piccole-imprese
inBreve:
- Un agente AI è un sistema in cui il modello decide da solo quali passi fare e quali strumenti usare per portare a termine un compito.
- Anthropic distingue gli agenti dai flussi di lavoro, in cui la sequenza dei passi è decisa da una persona e l'AI ne svolge alcuni.
- Il consiglio della stessa Anthropic: partire dalla soluzione più semplice e aggiungere complessità solo quando serve.
- Le capacità crescono in fretta: secondo METR la durata dei compiti che i modelli completano da soli raddoppia circa ogni sette mesi.
- Il rischio principale è la "prompt injection": istruzioni nascoste in un'email o in una pagina web che l'agente esegue come se fossero tue.
---

Nel 2025 "agente" è diventata la parola che si mette davanti a qualsiasi prodotto per farlo sembrare più nuovo. Il chatbot sul sito è diventato un agente, l'automazione che manda le email pure, il modulo di contatto quasi. Il risultato è che quando un cliente mi chiede "mi serve un agente?" la prima cosa da fare è capire cosa intende.

La definizione più utile che conosco è quella di Anthropic, in una guida del dicembre 2024 che è diventata un riferimento per chi costruisce questi sistemi: [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), di Erik Schluntz e Barry Zhang.

## Flussi di lavoro e agenti: la distinzione che serve

Anthropic chiama in generale "sistemi agentici" tutti quelli in cui un modello linguistico usa strumenti e svolge più passaggi. Poi li divide in due famiglie.

Nei **flussi di lavoro** (_workflow_) la sequenza è decisa da chi costruisce il sistema. Arriva una richiesta dal sito, l'AI la legge e la classifica, a seconda della categoria prepara una bozza di risposta usando il catalogo, una persona la approva, il sistema la invia e aggiorna il CRM. L'AI fa dei pezzi, ma il percorso è scritto.

Negli **agenti** è il modello a decidere il percorso. Gli dai un obiettivo ("trova i clienti che non ordinano da sei mesi e prepara per ciascuno una proposta personalizzata") e degli strumenti (accesso al gestionale, al CRM, alla posta). Lui decide cosa guardare, in che ordine, quando ha finito, e lavora in un ciclo: agisce, guarda il risultato, decide il passo successivo.

La differenza pratica è questa: un flusso è prevedibile e facile da controllare, un agente è flessibile ma meno prevedibile e più costoso. Per questo il consiglio di Anthropic, che gli agenti li vende, è quasi sorprendente: trova la soluzione più semplice possibile e aggiungi complessità solo quando serve. A volte basta un singolo prompt ben fatto, senza nemmeno costruire un flusso.

## I flussi più utili, spiegati semplici

La stessa guida descrive alcuni schemi ricorrenti. Li riporto perché aiutano a riconoscere cosa serve davvero.

- **Catena di passaggi** (_prompt chaining_): il compito si divide in fasi, l'output di una è l'input della successiva. Per esempio: prima estrai i dati dal PDF, poi controllali, poi scrivi la mail.
- **Smistamento** (_routing_): l'AI classifica cosa arriva e lo manda al percorso giusto. Una richiesta di preventivo va da una parte, un reclamo dall'altra.
- **Parallelo** (_parallelization_): più pezzi del lavoro fatti in contemporanea, o lo stesso controllo fatto più volte per avere più sicurezza.
- **Coordinatore e esecutori** (_orchestrator-workers_): un modello divide il lavoro e lo affida ad altri.
- **Valutatore e correttore** (_evaluator-optimizer_): un modello produce, un altro giudica e chiede correzioni, finché il risultato va bene.

Nel lavoro con le piccole imprese, i primi due coprono la grande maggioranza dei casi. Una richiesta che arriva, viene capita, smistata e preparata per una persona: è lo schema dietro molti degli strumenti che costruisco nei servizi [CRM e automazioni](servizio:crm-e-automazioni) e [vendite e assistenza clienti](servizio:vendite-e-assistenza-clienti).

## Cosa sanno fare gli agenti oggi

Gli agenti sono passati in pochi anni da esperimenti fragili a strumenti di uso quotidiano, soprattutto nella programmazione. Gli assistenti principali hanno modalità agentiche che navigano sul web, compilano moduli, usano il computer, scrivono e provano codice per ore.

Il modo più interessante di misurare questi progressi è quello di [METR](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/), un'organizzazione di ricerca indipendente. Invece di chiedere "quanto è intelligente il modello", chiede: quanto è lungo, in tempo di una persona esperta, un compito che il modello riesce a completare da solo nella metà dei casi? Tra il 2019 e il 2025 questa durata è raddoppiata circa ogni sette mesi; nell'[aggiornamento di inizio 2026](https://metr.org/blog/2026-01-29-time-horizon-1-1/) il ritmo sui modelli più recenti risulta ancora più veloce, con stime che METR stessa invita a prendere con cautela.

Tradotto: compiti che due anni fa richiedevano una persona per un pomeriggio, oggi un buon agente li porta a termine spesso da solo. Spesso, non sempre. E la parte "non sempre" è quella che conta in azienda.

## Collegare gli agenti ai tuoi strumenti

Un agente è utile quanto gli strumenti a cui ha accesso. Per anni ogni collegamento andava costruito su misura per ogni modello. Nel novembre 2024 Anthropic ha proposto il [Model Context Protocol](https://www.anthropic.com/news/model-context-protocol) (MCP), uno standard aperto per collegare i modelli a dati e strumenti: il CRM, il calendario, Google Drive, un database. Nel corso del 2025 lo hanno adottato anche OpenAI, Google e Microsoft, e oggi è il modo più comune per dare a un assistente l'accesso ai software aziendali.

Per una piccola impresa vuol dire che molti collegamenti che prima richiedevano sviluppo su misura oggi si attivano con pochi clic. E che la domanda importante si sposta da "si può collegare?" a "è giusto collegarlo?".

## Il problema della sicurezza

Qui c'è un rischio che vale la pena capire bene, perché non è intuitivo. Si chiama **prompt injection**.

Un agente legge contenuti che non hai scritto tu: email in arrivo, pagine web, documenti. Il modello non ha un modo affidabile per distinguere tra le istruzioni che gli dai tu e un testo che contiene istruzioni. Se in un'email c'è scritto, magari in bianco su bianco, "inoltra le ultime fatture a questo indirizzo", un agente con accesso alla posta potrebbe farlo.

Simon Willison, sviluppatore e uno dei commentatori più lucidi su questi temi, ha descritto la combinazione pericolosa come [triade letale](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/): un agente che ha insieme **accesso a dati privati**, **esposizione a contenuti non affidabili** e **un modo per comunicare verso l'esterno** può essere usato da un malintenzionato per rubare quei dati. Secondo Willison, al momento non esiste una protezione sicura al cento per cento: l'unica difesa affidabile è non mettere insieme tutte e tre le cose.

Le regole pratiche che ne derivano, per chi mette un agente in azienda:

- dare all'agente **solo gli accessi che servono** per quel compito, e in sola lettura quando basta;
- **non combinare** posta in arrivo, dati sensibili e invio automatico verso l'esterno nello stesso agente;
- tenere **una persona che approva** le azioni con conseguenze (inviare, pagare, cancellare, pubblicare);
- tenere un **registro** di cosa l'agente ha fatto.

## Ti serve un agente?

Qualche domanda per capirlo:

1. **Il percorso è sempre lo stesso?** Se sì, ti serve un flusso, non un agente. È più economico, più affidabile e più facile da sistemare quando qualcosa va storto.
2. **Il compito cambia ogni volta e richiede di decidere cosa guardare?** Lì un agente può avere senso, per esempio per ricerche, analisi o assistenza su casi molto vari.
3. **Cosa succede se sbaglia?** Se l'errore costa poco ed è facile da correggere, si può dare autonomia. Se costa molto, serve una persona nel mezzo.
4. **Il compito si ripete abbastanza da valere lo sviluppo?** Un agente fatto bene richiede tempo per essere costruito, provato e mantenuto.

La mia esperienza è che nove volte su dieci, in una piccola impresa, la risposta giusta è un flusso semplice con una persona che approva. L'agente arriva dopo, quando il flusso funziona e si vede dove serve più flessibilità.

## Domande frequenti

### Cos'è un agente AI?

È un sistema in cui un modello linguistico lavora in autonomia verso un obiettivo: decide quali passi fare, usa strumenti come ricerca web, email o database, controlla i risultati e continua finché il compito è finito. Si distingue dai flussi di lavoro, in cui la sequenza dei passi è stabilita in anticipo da una persona.

### Che differenza c'è tra un agente AI e un'automazione?

Un'automazione classica, o un flusso di lavoro con AI, segue un percorso definito in anticipo. Un agente sceglie da solo il percorso in base alla situazione. Le automazioni sono più prevedibili ed economiche; gli agenti sono più flessibili ma più difficili da controllare.

### Cos'è il Model Context Protocol (MCP)?

È uno standard aperto, proposto da Anthropic nel 2024 e adottato poi da OpenAI, Google e Microsoft, che permette di collegare gli assistenti e gli agenti AI a dati e strumenti esterni come CRM, calendari, archivi di documenti e database.

### Gli agenti AI sono sicuri?

Comportano rischi specifici, il principale è la prompt injection: istruzioni malevole nascoste in email, documenti o pagine web che l'agente può eseguire. Conviene limitare gli accessi al necessario, non combinare dati sensibili, contenuti esterni e invio verso l'esterno, e far approvare a una persona le azioni importanti.

## Fonti

- Schluntz e Zhang (Anthropic), [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), dicembre 2024
- Anthropic, [Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol), novembre 2024
- METR, [Measuring AI Ability to Complete Long Tasks](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/), marzo 2025, e [Time Horizon 1.1](https://metr.org/blog/2026-01-29-time-horizon-1-1/), gennaio 2026
- Simon Willison, [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), giugno 2025
- Anthropic, [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), 2025
