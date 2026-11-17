---
titolo: Glossario dell'intelligenza artificiale, in italiano semplice
titoloBreve: Glossario dell'AI
titoloSeo: Glossario dell'intelligenza artificiale: oltre 40 termini spiegati semplici
sottotitolo: Da "agente" a "token": i termini che senti ogni giorno, spiegati in due o tre righe, con il link all'articolo che li approfondisce.
descrizione: Glossario dell'intelligenza artificiale in italiano: LLM, token, prompt, contesto, RAG, agenti, MCP, allucinazioni, AI Act e altri termini spiegati in modo semplice per chi lavora.
pubblicato: 2026-11-17
aggiornato: 2026-11-17
capitolo: risorse
ordine: 13
correlati:
- come-funziona-l-ai
- fonti-ai
- agenti-ai
inBreve:
- Più di quaranta termini divisi in cinque gruppi: le basi, come si usa, agenti e strumenti, rischi, regole.
- Ogni definizione è in due o tre righe, senza formule.
- Dove serve, c'è il link all'articolo della guida che approfondisce.
---

Questo glossario esiste perché l'AI ha un problema di vocabolario: metà delle parole sono in inglese, l'altra metà sono sigle, e spesso vengono usate in modo diverso da persone diverse. Le definizioni qui sotto sono volutamente semplici. Dove una parola ha un significato tecnico preciso e uno "commerciale" più largo, provo a dirlo.

## Le basi

### Intelligenza artificiale (AI, IA)

L'insieme delle tecniche che permettono ai computer di svolgere compiti che di solito richiedono intelligenza umana: riconoscere immagini, capire il linguaggio, fare previsioni, generare testi. In italiano si usano sia AI sia IA; in questa guida uso AI perché è la sigla che si sente di più parlando.

### Intelligenza artificiale generativa

L'AI che produce contenuti nuovi (testo, immagini, audio, video, codice) a partire da una richiesta. ChatGPT, Claude, Gemini e Copilot sono strumenti di AI generativa.

### Modello linguistico di grandi dimensioni (LLM)

Il "motore" degli assistenti AI: una rete neurale addestrata su enormi quantità di testo a prevedere il pezzo di testo successivo. Dall'inglese _large language model_. Approfondimento: [come funziona un modello linguistico](guida:come-funziona-l-ai).

### Modello di fondazione

Un modello grande e generico, addestrato su dati molto vari, che può essere adattato a molti compiti diversi. Nell'AI Act si parla di "modelli di AI per finalità generali".

### Transformer

L'architettura di rete neurale su cui si basano quasi tutti i modelli linguistici attuali. È stata descritta da ricercatori di Google nel 2017 nel paper [Attention Is All You Need](https://arxiv.org/abs/1706.03762).

### Parametri

I numeri interni che il modello regola durante l'addestramento e che determinano il suo comportamento. I modelli più grandi ne hanno centinaia di miliardi. Più parametri di solito vuol dire più capacità, ma anche più costi.

### Addestramento (training)

Il processo con cui un modello impara dai dati. Si divide in pre-addestramento, su enormi quantità di testo, e una fase successiva in cui il modello impara a fare l'assistente.

### RLHF

Sigla di _reinforcement learning from human feedback_: una tecnica di addestramento in cui persone valutano le risposte del modello e il modello impara a preferire quelle giudicate migliori. È uno dei passaggi che hanno reso possibile ChatGPT.

### Token

Il pezzo di testo che un modello legge e scrive: una parola corta, una sillaba, un segno di punteggiatura. Limiti e prezzi dei modelli si misurano in token. In inglese un token vale in media circa tre quarti di parola.

### Finestra di contesto

La quantità di testo, misurata in token, che il modello può considerare in un dato momento: istruzioni, conversazione, documenti caricati. È la sua memoria a breve termine.

### Data di aggiornamento (knowledge cutoff)

La data fino a cui arrivano i dati con cui il modello è stato addestrato. Di quello che è successo dopo non sa nulla, a meno che non cerchi sul web o non glielo dica tu.

### Modello di ragionamento

Un modello che, prima di rispondere, scrive per conto suo una serie di passaggi intermedi. È più lento ma molto più bravo su problemi con molti passaggi, come calcoli, analisi e pianificazione.

### Multimodale

Un modello che lavora con più tipi di contenuto insieme: testo, immagini, audio, video. Per esempio, che legge la foto di uno scontrino o ascolta una registrazione.

### Open source e open weights

Modelli i cui "pesi" (i parametri) sono pubblicati e si possono scaricare e usare sui propri computer, come quelli di Meta, Mistral o di diversi laboratori cinesi. Spesso si dice open source anche quando il codice e i dati di addestramento non sono pubblici: in quel caso il termine corretto è _open weights_.

## Come si usa

### Prompt

La richiesta che scrivi all'AI: una domanda, un'istruzione, un testo con contesto ed esempi. Approfondimento: [come scrivere un prompt che funziona](guida:come-scrivere-un-prompt).

### Prompt di sistema (system prompt)

Le istruzioni di base, spesso invisibili all'utente, che dicono al modello come comportarsi in un certo prodotto o progetto. Le istruzioni personalizzate e quelle dei progetti funzionano in modo simile.

### Contesto e context engineering

Il contesto è tutto quello che il modello ha a disposizione quando risponde. Il _context engineering_ è l'arte di scegliere quali informazioni dargli, in che forma e quantità. Approfondimento: [il contesto conta più del prompt](guida:dare-contesto-all-ai).

### Few-shot

Dare al modello alcuni esempi del risultato che vuoi, all'interno del prompt. Funziona spesso meglio di qualsiasi descrizione.

### Chain of thought (catena di ragionamento)

Chiedere al modello, o lasciare che faccia da solo, di ragionare passo per passo prima di rispondere. Migliora i risultati su problemi complessi.

### Progetti e Gem

Spazi di lavoro degli assistenti (Progetti in ChatGPT e Claude, Gem in Gemini) dove salvare istruzioni e documenti da usare in tutte le conversazioni.

### Deep research (ricerca approfondita)

Funzione degli assistenti in cui il modello fa da solo molte ricerche web, legge le fonti e scrive un rapporto. Approfondimento: [fare ricerche con l'AI](guida:ricerca-con-l-ai).

### RAG

Sigla di _retrieval-augmented generation_: una tecnica in cui, prima di rispondere, il sistema recupera i documenti pertinenti da un archivio (il manuale aziendale, il catalogo, i contratti) e li dà al modello come contesto. Riduce le invenzioni e permette di rispondere su informazioni che il modello non conosce.

### Embedding

Una rappresentazione numerica del significato di un testo, che permette di trovare testi simili anche se usano parole diverse. È la tecnologia dietro la ricerca nei sistemi RAG.

### Fine-tuning

Un addestramento aggiuntivo di un modello esistente su dati specifici, per adattarlo a un compito o a uno stile. Oggi, per la maggior parte delle aziende, un buon contesto e il RAG bastano e costano molto meno.

### Temperatura

Un'impostazione che regola quanto il modello è "creativo" nella scelta delle parole: bassa per risposte più prevedibili, alta per risposte più varie. Negli assistenti di solito non si vede, nelle API sì.

## Agenti e strumenti

### Agente AI

Un sistema in cui il modello decide da solo quali passi fare e quali strumenti usare per portare a termine un compito. Approfondimento: [agenti AI](guida:agenti-ai).

### Flusso di lavoro (workflow)

Una sequenza di passaggi decisa in anticipo da una persona, in cui l'AI svolge alcune parti. Più prevedibile ed economico di un agente.

### Uso di strumenti (tool use)

La capacità di un modello di usare strumenti esterni: cercare sul web, eseguire codice, leggere un file, interrogare un database, mandare un'email.

### MCP (Model Context Protocol)

Uno standard aperto, proposto da Anthropic nel 2024 e adottato da OpenAI, Google e Microsoft, per collegare gli assistenti AI a dati e software esterni. Documentazione su [modelcontextprotocol.io](https://modelcontextprotocol.io).

### API

L'interfaccia che permette a un programma di usare un modello di AI direttamente, senza passare dalla chat. È il modo in cui l'AI viene integrata in CRM, gestionali e siti.

### Copilota

Un assistente AI integrato in un altro software, che aiuta mentre lavori (in Word, in un CRM, in un editor di codice). Copilot, con la maiuscola, è anche il nome dei prodotti di Microsoft.

### Automazione

Un processo che si svolge da solo al verificarsi di un evento: arriva un modulo, parte un'email e si aggiorna il CRM. Con l'AI le automazioni possono leggere, classificare e scrivere testi. Strumenti noti sono n8n, Make e Zapier.

## Rischi

### Allucinazione

Una risposta falsa presentata dal modello con sicurezza: un fatto, una fonte o un numero inventati. Approfondimento: [perché l'AI inventa le cose](guida:allucinazioni-ai).

### Frontiera frastagliata

Il confine irregolare tra i compiti che l'AI fa bene e quelli che sbaglia, spesso simili tra loro. Il concetto viene da uno studio di Harvard e BCG del 2023. Approfondimento: [la frontiera frastagliata](guida:frontiera-frastagliata).

### Prompt injection

Un attacco in cui istruzioni malevole vengono nascoste in un contenuto che l'AI legge (un'email, una pagina web, un documento) per farle fare cose che l'utente non ha chiesto. È il rischio principale per gli agenti.

### Bias

Distorsioni nelle risposte del modello che riflettono squilibri nei dati di addestramento, per esempio stereotipi di genere o geografici.

### Jailbreak

Un tentativo di aggirare le regole di sicurezza di un modello con richieste costruite ad arte, per fargli produrre contenuti che di norma rifiuterebbe.

### Deepfake

Immagini, audio o video generati o alterati con l'AI che mostrano in modo realistico persone, luoghi o eventi. L'AI Act impone di dichiararli; la legge italiana 132/2025 ha introdotto un reato per la loro diffusione illecita.

## Regole

### AI Act

Il Regolamento europeo 2024/1689 sull'intelligenza artificiale, che classifica i sistemi per livello di rischio e prevede obblighi diversi. Approfondimento: [AI Act e legge italiana](guida:ai-act-piccole-imprese).

### Alfabetizzazione sull'AI (AI literacy)

L'insieme di competenze per usare l'AI in modo consapevole. L'articolo 4 dell'AI Act chiede alle aziende che usano l'AI di adottare misure per svilupparla nel proprio personale.

### Deployer

Nel linguaggio dell'AI Act, chi usa un sistema di AI in ambito professionale, per esempio un'azienda che usa ChatGPT per lavoro. Si distingue dal fornitore, che sviluppa il sistema.

### Sistema ad alto rischio

Nell'AI Act, un sistema di AI usato in ambiti delicati, come selezione del personale, credito, istruzione o sanità, soggetto a obblighi più severi.

### GPAI

Sigla di _general-purpose AI_, i modelli di AI per finalità generali (come quelli dietro ChatGPT, Claude e Gemini), per i cui sviluppatori l'AI Act prevede obblighi specifici dal 2 agosto 2025.

## Fonti

- Vaswani e altri, [Attention Is All You Need](https://arxiv.org/abs/1706.03762), 2017
- Lewis e altri, [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401), 2020
- [Regolamento (UE) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), AI Act
- [Model Context Protocol](https://modelcontextprotocol.io)
- Anthropic, [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
