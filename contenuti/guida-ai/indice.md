---
titolo: Intelligenza artificiale per il lavoro: la guida pratica per professionisti e piccole imprese
titoloSeo: Guida all'intelligenza artificiale per il lavoro (2026) | Luigi Fiorile
sottotitolo: Cos'è, come si usa e da dove partire. Scritta da una persona che la usa tutti i giorni, con tutte le fonti in chiaro.
descrizione: Guida in italiano all'AI per professionisti e PMI: come funziona, quale assistente scegliere, come scrivere i prompt, cosa dicono gli studi, AI Act e privacy. Con le fonti.
pubblicato: 2026-11-17
aggiornato: 2026-11-17
inBreve:
- L'AI generativa (ChatGPT, Claude, Gemini, Copilot) è un modello che prevede il testo più probabile: è bravissima in alcune cose e sbaglia con sicurezza in altre.
- Nel 2025 la usava il 16,4% delle imprese italiane con almeno 10 addetti, contro l'8,2% dell'anno prima (Istat). In Europa la media è il 20% (Eurostat).
- Gli studi più seri trovano guadagni veri su scrittura, analisi e assistenza clienti, e peggioramenti quando la si usa fuori dal suo terreno.
- Per partire servono poche cose: scegliere un assistente, dargli contesto, verificare quello che conta, non incollarci dati personali dei clienti.
- Dal 10 ottobre 2025 in Italia i professionisti devono dire ai clienti se usano l'AI nel loro lavoro (legge 132/2025).
---

Questa guida esiste per un motivo abbastanza semplice. Le guide migliori sull'intelligenza artificiale sono in inglese e sono scritte per chi lavora in grandi aziende americane: quella di [Ethan Mollick](https://www.oneusefulthing.org/p/using-ai-right-now-a-quick-guide), professore a Wharton, i corsi di [Google](https://ai.google/learn-ai-skills/), le risorse di [OpenAI per le aziende](https://openai.com/it-IT/business/learn/). Sono ottime. Ma se hai uno studio di cinque persone a Bergamo, o fai la commercialista da sola, o gestisci un negozio con un e-commerce che va avanti a fatica, ti lasciano con una domanda: sì, ma io da dove comincio?

Io lavoro con liberi professionisti e piccole imprese e costruisco strumenti AI su misura per loro. Prima ho fatto il consulente e il Chief of Staff in una startup, che è un modo elegante per dire che mi sono occupato di tutto quello che stava in mezzo. L'AI la uso ogni giorno (anche per cose poco nobili, come l'asta del fantacalcio di un amico) e ne scrivo da utilizzatore, senza farne una religione.

Ogni capitolo qui sotto ha un riassunto e un link all'articolo che lo approfondisce. Ogni numero ha una fonte, quasi sempre quella originale: il paper, il comunicato Istat, la documentazione di chi i modelli li costruisce. Quando una cosa non la so, o gli studi non sono d'accordo, lo scrivo.

## Cosa intendiamo quando diciamo AI

"Intelligenza artificiale" è un'etichetta enorme: dentro ci sono il filtro antispam, il riconoscimento delle targhe ai caselli, i suggerimenti di Netflix. In questa guida parlo quasi sempre di **intelligenza artificiale generativa**, cioè dei sistemi che producono testo, immagini, audio o codice a partire da una richiesta scritta in linguaggio normale. ChatGPT di OpenAI, Claude di Anthropic, Gemini di Google, Copilot di Microsoft, Le Chat della francese Mistral.

Il cuore di questi strumenti è un **modello linguistico di grandi dimensioni** (in inglese _large language model_, LLM). Semplificando molto: è un programma addestrato su una quantità enorme di testi a prevedere quale pezzo di parola viene dopo. Fatto su abbastanza testi e con abbastanza potenza di calcolo, questo trucco apparentemente banale produce qualcosa che riassume contratti, scrive email, traduce, ragiona su un foglio Excel e programma.

La tecnologia alla base, il _transformer_, è descritta in un paper di Google del 2017 con un titolo che è diventato un meme: [Attention Is All You Need](https://arxiv.org/abs/1706.03762). Non serve leggerlo. Serve però capire due conseguenze pratiche: il modello non "cerca" la risposta in un archivio, la costruisce parola per parola, e non sa quando sta sbagliando.

Approfondimento: [Come funziona un modello linguistico, spiegato a chi non è un tecnico](guida:come-funziona-l-ai).

## Quanto la usano davvero le imprese italiane

Meno di quanto sembri dai titoli dei giornali, più di quanto pensino i tuoi concorrenti.

Secondo il rapporto [Imprese e ICT di Istat](https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/), nel 2025 il 16,4% delle imprese italiane con almeno 10 addetti usava almeno una tecnologia di intelligenza artificiale. Nel 2024 era l'8,2%, nel 2023 il 5%: in due anni il dato è più che triplicato. La media europea, secondo [Eurostat](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2), è il 20%, con la Danimarca oltre il 40%. Tra le grandi imprese europee la quota supera il 55%.

Due cose da tenere a mente leggendo questi numeri. La prima: le micro imprese (sotto i 10 addetti, cioè la gran parte delle aziende italiane) non sono nel campione. La seconda: "usare una tecnologia di AI" può voler dire tante cose, dal software di trascrizione al chatbot sul sito.

Sul lato del mercato, l'[Osservatorio Artificial Intelligence del Politecnico di Milano](https://www.lapresse.it/economia/2026/02/05/cresce-il-mercato-dellai-in-italia-raggiunto-il-valore-di-18-miliardi/) stima che nel 2025 la spesa in AI in Italia abbia raggiunto 1,8 miliardi di euro, circa il 50% in più dell'anno prima, con l'AI generativa come motore principale.

E le persone? Il dato più interessante viene da OpenAI stessa: uno [studio pubblicato con il National Bureau of Economic Research](https://www.nber.org/papers/w34255) su 1,5 milioni di conversazioni mostra che a metà 2025 oltre il 70% dei messaggi inviati a ChatGPT riguardava la vita privata, non il lavoro. Tradotto: moltissime persone la usano già, a casa. Il salto da fare è portarla in ufficio con un minimo di metodo.

Approfondimento: [AI in una piccola impresa: da dove partire](guida:ai-per-piccole-imprese).

## Cosa sa fare bene, e dove ti frega

Se dovessi tenere un solo concetto di tutta questa guida, sarebbe questo. Nel 2023 un gruppo di ricercatori di Harvard, Wharton e MIT ha fatto un esperimento con 758 consulenti di Boston Consulting Group. Su compiti adatti all'AI, chi la usava ha completato il 12,2% di compiti in più, il 25,1% più in fretta e con una qualità giudicata molto più alta. Su un compito che sembrava simile ma stava appena fuori dalle capacità del modello, chi usava l'AI ha dato la risposta giusta **19 punti percentuali meno spesso** di chi lavorava da solo.

I ricercatori l'hanno chiamata [frontiera tecnologica frastagliata](https://papers.ssrn.com/abstract=4573321): il confine tra quello che l'AI fa bene e quello che sbaglia non è una linea dritta, e non è dove ti aspetteresti. Un modello può scrivere un'ottima analisi di mercato e poi sbagliare una somma in una tabella.

Il caso più noto di cosa succede quando ci si fida troppo è quello delle **allucinazioni**: risposte inventate, presentate con assoluta sicurezza. Nel marzo 2025 il [Tribunale di Firenze](https://www.agendadigitale.eu/documenti/chatgpt-e-le-sentenze-inventate-in-tribunale-che-insegna-il-caso-di-firenze/) si è trovato davanti un atto che citava sentenze della Cassazione inesistenti, generate da ChatGPT. Secondo una [ricerca di OpenAI del 2025](https://openai.com/index/why-language-models-hallucinate/), il problema nasce anche dal modo in cui i modelli vengono addestrati e valutati: tirare a indovinare viene premiato più che dire "non lo so".

Approfondimenti:

- [Cosa l'AI fa bene e cosa sbaglia: la frontiera frastagliata](guida:frontiera-frastagliata)
- [Perché l'AI inventa le cose (e come accorgersene)](guida:allucinazioni-ai)

## Quale assistente scegliere

La risposta onesta è che i tre grandi (ChatGPT, Claude e Gemini) sono abbastanza vicini da far sì che la scelta dipenda più da dove lavori che da chi è "il migliore" questo mese. Se la tua azienda vive dentro Google Workspace, Gemini è già lì. Se vivi dentro Outlook, Word ed Excel, Copilot è integrato. Se scrivi molto e lavori su documenti lunghi, vale la pena provare Claude. ChatGPT è il più diffuso e quello con più funzioni accessorie.

Due consigli che danno anche Mollick e quasi tutti quelli che ci lavorano seriamente. Il primo: per il lavoro vero, usa il modello più capace che hai a disposizione, non quello veloce e gratuito. La differenza su compiti complessi è grande. Il secondo: paga un abbonamento per almeno un mese prima di giudicare. Valutare l'AI con la versione gratuita è un po' come provare un'auto senza togliere il freno a mano.

Approfondimento: [ChatGPT, Claude, Gemini o Copilot: quale usare per lavorare](guida:quale-ai-scegliere).

## Come chiederle le cose

Le guide ufficiali di [Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/be-clear-and-direct), [OpenAI](https://developers.openai.com/cookbook/examples/gpt-5/gpt-5_prompting_guide) e [Google](https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf) dicono, con parole diverse, la stessa cosa: scrivi la richiesta come la scriveresti a un collega bravo appena arrivato, che non sa niente della tua azienda. Chi sei, cosa ti serve, per chi è, in che formato, con quali vincoli. Google la riassume in quattro voci: persona, compito, contesto, formato.

Anthropic ha una regola che trovo utilissima: fai leggere il tuo prompt a un collega che non sa nulla del compito. Se lui sarebbe confuso, lo sarà anche il modello.

Negli ultimi due anni il discorso si è spostato dal prompt al **contesto**: quali documenti dai al modello, quali istruzioni fisse, quali esempi. Anthropic lo chiama [context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). Per chi lavora in una piccola impresa vuol dire una cosa molto concreta: un progetto con dentro il listino, il tono di voce e tre email ben scritte rende più di qualsiasi prompt perfetto.

Approfondimenti:

- [Come scrivere un prompt che funziona](guida:come-scrivere-un-prompt)
- [Il contesto conta più del prompt: progetti, file e istruzioni](guida:dare-contesto-all-ai)

## Usarla per cercare informazioni

Gli assistenti oggi cercano sul web e citano le fonti, e le funzioni di "ricerca approfondita" (_deep research_) leggono decine di pagine e scrivono un rapporto in pochi minuti. Sono strumenti notevoli. Sono anche strumenti che sbagliano spesso le citazioni: in un test del [Tow Center della Columbia University](https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php) del 2025 otto motori di ricerca AI hanno sbagliato la fonte in più del 60% dei casi. Uno [studio coordinato da EBU e BBC](https://aib.org.uk/ai-assistants-misrepresent-news-content-says-major-study/) su oltre 3.000 risposte ha trovato almeno un problema serio nel 45%.

La regola pratica: usala per orientarti e per trovare le fonti, poi apri le fonti.

Approfondimento: [Fare ricerche con l'AI senza farsi ingannare](guida:ricerca-con-l-ai).

## Cosa dicono gli studi sulla produttività

Qui le cose si fanno interessanti, perché gli studi seri non dicono tutti la stessa cosa.

- Su compiti di scrittura professionale, un esperimento pubblicato su [Science](https://www.science.org/doi/10.1126/science.adh2586) con 453 professionisti ha misurato il 40% di tempo in meno e il 18% di qualità in più.
- In un call center con oltre 5.000 operatori, [Brynjolfsson, Li e Raymond](https://www.nber.org/papers/w31161) hanno misurato circa il 14% di problemi risolti in più all'ora, e il 34% in più per gli operatori meno esperti.
- In Procter & Gamble, il [Cybernetic Teammate](https://www.nber.org/papers/w33641) ha mostrato che una persona sola con l'AI arriva al livello di una squadra di due persone senza.
- Ma in uno [studio di METR del 2025](https://arxiv.org/abs/2507.09089) programmatori esperti, al lavoro su codice che conoscevano benissimo, sono andati il 19% più lenti con l'AI. E intanto erano convinti di essere andati più veloci.

Il filo comune: i guadagni più grandi vanno a chi è meno esperto in un compito e a chi la usa su cose adatte. Chi è già bravissimo guadagna meno, e a volte perde.

Approfondimento: [L'AI rende davvero più produttivi? Cosa dicono gli studi](guida:ai-e-produttivita-studi).

## Agenti e automazioni: quando ha senso

"Agente" è la parola del momento, e come tutte le parole del momento viene usata per qualsiasi cosa. Anthropic, in una guida diventata un riferimento ([Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)), fa una distinzione utile. Un **flusso di lavoro** (_workflow_) è una sequenza di passaggi decisa da una persona, in cui l'AI fa alcuni pezzi. Un **agente** è un sistema in cui è il modello a decidere quali passi fare e quali strumenti usare, finché il compito è finito.

Il consiglio della stessa Anthropic è di partire dalla soluzione più semplice possibile e aggiungere complessità solo quando serve. Per una piccola impresa, nove volte su dieci, la cosa giusta è un flusso: una richiesta che arriva dal sito, l'AI che la legge e la classifica, una bozza di risposta, una persona che la approva. È esattamente il tipo di cosa che costruisco nel servizio [CRM e automazioni](servizio:crm-e-automazioni).

Le capacità degli agenti però crescono in fretta. [METR](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/) misura la lunghezza dei compiti che un modello riesce a portare a termine da solo, in tempo umano: tra il 2019 e il 2025 è raddoppiata circa ogni sette mesi, e nei dati più recenti anche più in fretta.

Approfondimento: [Agenti AI: cosa sono davvero e quando servono](guida:agenti-ai).

## Le regole: AI Act, legge italiana e privacy

Tre cose da sapere, senza allarmismi.

**L'AI Act europeo** ([Regolamento UE 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)) classifica i sistemi di AI per livello di rischio. Per chi usa ChatGPT per scrivere email o riassumere documenti, gli obblighi sono leggeri. Uno però riguarda quasi tutti: dal 2 febbraio 2025 chi usa sistemi di AI in azienda deve adottare misure perché il personale abbia un'alfabetizzazione adeguata (articolo 4). Gli obblighi per i sistemi ad alto rischio, come quelli usati per selezionare il personale, sono stati rinviati al dicembre 2027 con il pacchetto di semplificazione chiamato Digital Omnibus.

**La legge italiana sull'AI** ([legge 132/2025](https://www.normattiva.it/eli/id/2025/09/25/25G00143/CONSOLIDATED)), in vigore dal 10 ottobre 2025, ha aggiunto un obbligo che interessa direttamente commercialisti, avvocati, consulenti, architetti e in generale tutte le professioni intellettuali: se usi l'AI nel lavoro per un cliente, devi dirglielo in modo chiaro, e l'AI può servire solo come supporto, con il lavoro intellettuale che resta prevalente.

**La privacy** non è cambiata: vale il GDPR. Le versioni gratuite e personali degli assistenti possono usare le conversazioni per addestrare i modelli, a seconda delle impostazioni; le versioni business di norma no. La regola semplice è non incollare dati personali dei clienti in un account personale.

Approfondimenti:

- [AI Act e legge italiana: cosa deve fare una piccola impresa](guida:ai-act-piccole-imprese)
- [Cosa puoi incollare in ChatGPT (e cosa no)](guida:privacy-e-ai)

## La mia opinione, per quel che vale

Fino a qui ho riferito. Adesso dico cosa ne penso, così sai su quale piano siamo.

Credo che per una piccola impresa il rischio più grande oggi non sia usare male l'AI. È aspettare che "si stabilizzi", perché non si stabilizzerà a breve: ogni sei mesi i modelli fanno cose che sei mesi prima non facevano. Mollick ha una regola che riassume bene il punto: dai per scontato che l'AI che stai usando oggi sia la peggiore che userai mai.

Allo stesso tempo, diffido di chiunque prometta di "rivoluzionare" un'azienda con un chatbot. Nelle realtà piccole i guadagni veri che vedo arrivano da cose noiose: una risposta ai clienti che parte in dieci minuti invece che il giorno dopo, un preventivo che non va riscritto da zero, un report che si compila da solo il lunedì mattina. Nessuna di queste cose finisce su un palco. Tutte liberano ore.

E c'è una cosa che gli studi dicono e che si dimentica spesso: l'AI aiuta di più chi è meno esperto in un compito. Per una piccola impresa, dove ognuno fa tre lavori e due li fa da autodidatta, è una buona notizia.

## Da dove partire questa settimana

Se non hai mai usato l'AI per lavoro, o l'hai usata poco, ecco un percorso che porta via qualche ora e non costa quasi niente.

1. **Scegli un assistente e paga un mese.** Uno solo. Va bene quello integrato negli strumenti che usi già.
2. **Usalo per tutto, per una settimana.** Ogni volta che stai per scrivere un'email, leggere un documento lungo o fare una tabella, chiedi prima a lui. Molte cose non funzioneranno: è il modo più veloce per scoprire dove sta la tua frontiera.
3. **Crea un progetto con il tuo contesto.** Chi sei, cosa vendi, a chi, come scrivi. Carica due o tre documenti veri (senza dati personali).
4. **Scegli un compito ripetitivo** che fai ogni settimana e prova a farlo con l'AI per un mese. Misura quanto tempo ci mettevi prima e quanto ci metti dopo.
5. **Decidi le regole minime**: cosa si può incollare, cosa si verifica sempre, chi controlla prima che qualcosa arrivi a un cliente. Mezza pagina basta, ed è anche un primo passo verso l'obbligo di alfabetizzazione dell'AI Act.

Se dopo un mese hai trovato un compito in cui l'AI ti fa risparmiare ore, quello è il candidato per uno strumento vero, collegato ai tuoi dati. È il punto in cui di solito entro in gioco io.

## Domande frequenti

### Cos'è l'intelligenza artificiale generativa?

È un tipo di intelligenza artificiale che produce contenuti nuovi (testo, immagini, audio, codice) a partire da una richiesta in linguaggio normale. I più diffusi sono ChatGPT, Claude, Gemini e Copilot. Funzionano grazie a modelli linguistici addestrati a prevedere il testo più probabile.

### Quanto costa usare l'AI in una piccola impresa?

Per iniziare bastano gli abbonamenti individuali o business dei principali assistenti, che costano qualche decina di euro al mese per persona. I costi salgono quando si collega l'AI ai dati e ai software dell'azienda con strumenti su misura.

### Quale AI è la migliore per lavorare?

Non esiste una risposta valida per tutti. ChatGPT, Claude e Gemini sono vicini come capacità; conviene scegliere in base agli strumenti che usi già (Google Workspace, Microsoft 365) e al tipo di lavoro, e usare sempre il modello più capace disponibile per i compiti importanti.

### L'AI può sbagliare?

Sì, e lo fa con sicurezza. Può inventare fatti, citazioni e fonti (le cosiddette allucinazioni) e sbagliare su compiti che sembrano facili. Tutto quello che finisce a un cliente o in una decisione importante va verificato da una persona.

### Posso usare ChatGPT con i dati dei miei clienti?

Solo con cautela. Con un account personale o gratuito le conversazioni possono essere usate per addestrare i modelli, a seconda delle impostazioni. Per dati personali dei clienti servono versioni business con garanzie contrattuali, il rispetto del GDPR e, per i professionisti, l'informativa al cliente prevista dalla legge 132/2025.

### Cosa prevede l'AI Act per le piccole imprese?

Per la maggior parte degli usi quotidiani gli obblighi sono leggeri. Il principale è l'articolo 4: chi usa sistemi di AI deve adottare misure per l'alfabetizzazione del personale. Obblighi molto più pesanti valgono per i sistemi ad alto rischio, per esempio quelli usati per selezionare personale.

## Le fonti di questa guida

Ogni articolo ha le sue fonti in fondo. Queste sono le principali, divise per tipo. Se vuoi una lista ragionata di newsletter, persone e paper da seguire, c'è [un articolo apposta](guida:fonti-ai).

**Dati e statistiche**

- Istat, [Imprese e ICT, anno 2025](https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/)
- Eurostat, [20% of EU enterprises use AI technologies](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2), dicembre 2025
- Chatterji e altri, [How People Use ChatGPT](https://www.nber.org/papers/w34255), NBER, 2025

**Studi scientifici**

- Dell'Acqua e altri, [Navigating the Jagged Technological Frontier](https://papers.ssrn.com/abstract=4573321), Harvard Business School, 2023
- Noy e Zhang, [Experimental evidence on the productivity effects of generative artificial intelligence](https://www.science.org/doi/10.1126/science.adh2586), Science, 2023
- Brynjolfsson, Li e Raymond, [Generative AI at Work](https://www.nber.org/papers/w31161), NBER e Quarterly Journal of Economics, 2025
- Dell'Acqua e altri, [The Cybernetic Teammate](https://www.nber.org/papers/w33641), NBER, 2025
- Becker e altri (METR), [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://arxiv.org/abs/2507.09089), 2025
- Kalai e altri (OpenAI), [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/), 2025
- Vaswani e altri (Google), [Attention Is All You Need](https://arxiv.org/abs/1706.03762), 2017

**Documentazione dei produttori**

- Anthropic, [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) e [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- Anthropic, [guida al prompting di Claude](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/be-clear-and-direct)
- OpenAI, [GPT-5 prompting guide](https://developers.openai.com/cookbook/examples/gpt-5/gpt-5_prompting_guide)
- Google, [Gemini for Workspace, Prompting guide 101](https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf)

**Guide di riferimento**

- Ethan Mollick, [Using AI Right Now: A Quick Guide](https://www.oneusefulthing.org/p/using-ai-right-now-a-quick-guide), One Useful Thing
- Google, [Learn AI skills](https://ai.google/learn-ai-skills/)
- OpenAI, [risorse per le aziende](https://openai.com/it-IT/business/learn/)

**Norme**

- [Regolamento (UE) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), AI Act
- [Legge 23 settembre 2025, n. 132](https://www.normattiva.it/eli/id/2025/09/25/25G00143/CONSOLIDATED), su Normattiva
