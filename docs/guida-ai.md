# Guida AI: strategia, struttura e piano editoriale

Documento di lavoro per la sezione `guida-ai/` del sito. Spiega perché la guida è fatta così, come si aggiunge un articolo e cosa scrivere dopo.

## Obiettivo

Diventare il riferimento in italiano sull'uso pratico dell'AI per **liberi professionisti e piccole imprese**, cioè lo stesso pubblico dei servizi. La guida porta traffico organico e citazioni dagli assistenti AI, e ogni articolo rimanda al servizio più vicino.

- **North Star Metric** (proposta): contatti arrivati dal form che hanno letto almeno un articolo della guida.
- **Metriche di input**: pagine indicizzate, impressioni e clic in Search Console sulle parole chiave della mappa, citazioni del sito nelle risposte di ChatGPT, Perplexity e Google AI Overviews (controllo manuale mensile), backlink da domini italiani pertinenti.

## Perché un pilastro con articoli satellite

Struttura a **pilastro e cluster** (topic cluster):

- `guida-ai/` è la pagina pilastro: copre tutto l'argomento in modo ampio, con un riassunto per ogni capitolo e il link all'articolo che lo approfondisce.
- Ogni articolo (`guida-ai/<slug>/`) copre un sotto-argomento con un intento di ricerca preciso, rimanda al pilastro, ad altri articoli dello stesso capitolo e a un servizio.
- I link interni seguono i capitoli (silos), così i motori capiscono la gerarchia e nessuna pagina resta orfana.

Il riferimento per la struttura sono le guide di Ethan Mollick (One Useful Thing), Google (Learn AI skills) e OpenAI (risorse per le aziende): una guida "viva", aggiornata, che non promette rivoluzioni. Da loro si prende l'impostazione, non i testi.

La differenza rispetto alle guide estere: in italiano, per piccole realtà, con dati italiani (Istat, legge 132/2025, Garante) e con un autore riconoscibile.

## Mappa delle parole chiave

Intento: I = informazionale, C = commerciale. I volumi non sono stimati qui: vanno verificati con Search Console dopo la pubblicazione e, se serve, con Semrush o Ahrefs.

| Pagina | Parola chiave principale | Secondarie | Intento |
|---|---|---|---|
| Pilastro | intelligenza artificiale per il lavoro / guida intelligenza artificiale | AI per aziende, come usare l'AI | I |
| come-funziona-l-ai | come funziona ChatGPT | cos'è un LLM, token, finestra di contesto | I |
| allucinazioni-ai | allucinazioni AI | ChatGPT inventa, sentenze inventate ChatGPT | I |
| frontiera-frastagliata | cosa sa fare l'intelligenza artificiale | frontiera frastagliata, limiti dell'AI | I |
| quale-ai-scegliere | ChatGPT o Claude o Gemini | migliore AI per lavorare, alternativa europea a ChatGPT | C |
| come-scrivere-un-prompt | come scrivere un prompt | prompt efficaci, esempi di prompt | I |
| dare-contesto-all-ai | context engineering | progetti ChatGPT, Gem Gemini, istruzioni personalizzate | I |
| ricerca-con-l-ai | deep research | ricerca con l'AI, fonti affidabili AI | I |
| ai-per-piccole-imprese | intelligenza artificiale per PMI | AI per professionisti, AI piccole imprese | C |
| ai-e-produttivita-studi | AI e produttività | studi intelligenza artificiale lavoro | I |
| agenti-ai | agenti AI | cosa sono gli agenti AI, MCP | I/C |
| ai-act-piccole-imprese | AI Act PMI | legge 132/2025, obbligo alfabetizzazione AI, informativa AI clienti professionisti | I/C |
| privacy-e-ai | ChatGPT privacy | dati clienti ChatGPT, GDPR intelligenza artificiale | I |
| glossario-ai | glossario intelligenza artificiale | cos'è RAG, cos'è un token | I |
| fonti-ai | newsletter intelligenza artificiale | corsi gratuiti AI, esperti di AI | I |

Regola contro la cannibalizzazione: una parola chiave principale per pagina. Se un nuovo articolo tocca una parola già assegnata, si linka la pagina esistente invece di competere.

## Cosa c'è per la GEO (motori generativi)

GEO = farsi trovare e citare da ChatGPT, Perplexity, Gemini e dalle risposte AI di Google. Il paper di riferimento è [GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735) (Princeton, KDD 2024): aggiungere fonti citate, statistiche e citazioni testuali aumenta la visibilità nelle risposte generative fino al 40% nei loro test.

Già fatto nel codice e nei testi:

- **"In breve"** in cima a ogni pagina: 3-5 frasi autosufficienti, facili da estrarre e citare.
- **Definizioni nella prima riga** delle sezioni chiave ("Un agente AI è...").
- **Domande frequenti** con risposte complete in 2-3 frasi: generano dati strutturati `FAQPage`.
- **Numeri sempre con fonte, anno e link** alla fonte primaria (paper, Istat, Eurostat, documentazione ufficiale).
- **Dati strutturati**: `Article` con autore, date di pubblicazione e aggiornamento, numero di parole, `citation` con tutti i link esterni; `BreadcrumbList`; `Person` con `sameAs` (da completare con LinkedIn e Substack).
- **Autore riconoscibile** (E-E-A-T): riquadro "Chi scrive" in ogni articolo, stessa persona dei dati strutturati.
- **Date visibili** ("aggiornato il") e `lastmod` reale nella mappa del sito.
- **`llms.txt`** generato a ogni build ([proposta llmstxt.org](https://llmstxt.org)): indice in Markdown per gli assistenti. Funziona solo alla radice del dominio, quindi servirà con il dominio definitivo.
- **Glossario con un'ancora per voce**, citabile voce per voce (`guida-ai/glossario-ai/#rag`).

## Backlink: cosa aiuta davvero

I link verso fonti autorevoli (OpenAI, Anthropic, Google, paper) rendono i testi più affidabili e aiutano la GEO, ma **non portano backlink**: i backlink sono link dagli altri siti verso il nostro. Per ottenerli:

1. **Contenuti linkabili** già presenti: il glossario, la tabella dei paper in `fonti-ai`, la sintesi degli studi sulla produttività, il calendario aggiornato dell'AI Act. Sono le pagine da proporre quando si scrive ad altri.
2. **Newsletter e testate italiane** che parlano di AI e lavoro (es. Agenda Digitale, Cybersecurity360, newsletter di settore): proporre un articolo ospite o segnalare la pagina pertinente quando trattano lo stesso tema.
3. **Ordini e associazioni professionali**: l'articolo su AI Act e legge 132/2025 risponde a una domanda che commercialisti, consulenti e avvocati hanno adesso. Proporlo ai loro canali.
4. **Substack e LinkedIn di Luigi** (vedi sotto): ogni articolo genera almeno un post e, quando ha senso, un pezzo lungo che rimanda alla guida.
5. **Broken link building**: cercare pagine italiane che linkano risorse sull'AI non più disponibili e proporre la pagina equivalente della guida.
6. **Aggiornare e dirlo**: quando cambia una norma o esce uno studio importante, aggiornare la pagina e la data, e segnalarlo.

## Distribuzione con Substack e LinkedIn

Seguendo le skill `pezzo-substack-luigi` e `post-linkedin-luigi`:

- **LinkedIn**: il post non riassume l'articolo. Prende una scena, un numero o un dubbio (es. i programmatori di METR che si credevano più veloci) e lo racconta come cosa a sé, con il link nel primo commento.
- **Substack**: i pezzi lunghi partono da un episodio vero di Luigi e usano la guida come base di fonti. Il pezzo rimanda all'articolo della guida per chi vuole approfondire.
- Gli articoli della guida sono più "manuale" e meno personali dei pezzi Substack: la voce è la stessa, ma gli episodi personali li mette solo Luigi (segnaposto `[[ESEMPIO DI LUIGI: ...]]`).

## Come si aggiunge o aggiorna un articolo

1. Creare `contenuti/guida-ai/<slug>.md` con l'intestazione (vedi un articolo esistente). Campi obbligatori: `titolo`, `descrizione`, `pubblicato`. Gli altri: `titoloBreve`, `titoloSeo`, `sottotitolo`, `aggiornato`, `capitolo` (id da `it.json → guida.capitoli`), `ordine`, `servizio` (id del servizio collegato; dal 18/11/2026 non compare più nell'invito finale, che non vende), `correlati`, `inBreve`.
2. Link interni: `[testo](guida:slug)`, `[testo](guida:slug#ancora)`, `[testo](servizio:id)`, `[testo](demo:id)`, `[testo](home:#contatti)`. Un link a un articolo non ancora pubblicato resta testo semplice, senza link rotti.
3. Segnaposto: `[[TESTO]]`, sottolineato in pagina come gli altri segnaposto.
4. Esempi di prompt: blocco con tre apici inversi; il testo dopo gli apici è l'etichetta del riquadro.
5. Una sezione `## Domande frequenti` con domande in `###` genera i dati strutturati FAQ.
6. Un file che inizia con `_` è una bozza e non viene pubblicato.
7. A ogni aggiornamento sostanziale cambiare `aggiornato` (va nella pagina, nei dati strutturati e nella mappa del sito).

## Piano dei prossimi articoli

In ordine di priorità (ICE: impatto, fiducia, facilità). Ognuno ha un capitolo e un servizio collegato.

| # | Titolo di lavoro | Capitolo | Servizio | Note |
|---|---|---|---|---|
| 1 | Automazioni con l'AI: n8n, Make e Zapier per una piccola impresa | lavoro | go-to-market-e-automazioni | Alta intenzione commerciale |
| 2 | L'AI per l'assistenza clienti: chatbot, WhatsApp e risposte suggerite | lavoro | go-to-market-e-automazioni | Citare Brynjolfsson; obbligo art. 50 AI Act |
| 3 | L'AI nelle vendite: preventivi, follow-up e CRM | lavoro | go-to-market-e-automazioni | Anthropic Economic Index (uso per vendite B2B) |
| 4 | Scrivere email e testi con l'AI senza sembrare un robot | usare | visibilita-sito-web-e-advertising | Lista dei segnali di testo da AI |
| 5 | L'AI con Excel e i dati aziendali | usare | gestionale-e-reporting-su-misura | Analisi dati con esecuzione di codice |
| 6 | Prompt injection e sicurezza: cosa sapere prima di collegare l'AI alla posta | regole | go-to-market-e-automazioni | Simon Willison, "Agents Rule of Two" di Meta |
| 7 | RAG spiegato semplice: far rispondere l'AI sui documenti aziendali | capire | gestionale-e-reporting-su-misura | |
| 8 | Come formare il team sull'AI (e rispettare l'articolo 4 dell'AI Act) | regole | tutti | Corsi gratuiti, modello di regole interne |
| 9 | SEO e GEO: farsi trovare da Google e dagli assistenti AI | lavoro | visibilita-sito-web-e-advertising | Paper GEO di Princeton |
| 10 | L'AI per il marketing di una piccola impresa | lavoro | visibilita-sito-web-e-advertising | |
| 11 | Modalità vocale: usare l'AI parlando, in macchina e in cantiere | usare | | |
| 12 | Immagini e video con l'AI per il lavoro: cosa si può fare e cosa dichiarare | usare | visibilita-sito-web-e-advertising | Deepfake, art. 50 AI Act |
| 13 | Modelli open e AI in locale: quando ha senso per un'azienda | scegliere | gestionale-e-reporting-su-misura | Privacy, costi |
| 14 | AI per commercialisti e consulenti | lavoro | | Legge 132/2025 art. 13 |
| 15 | Come misurare se l'AI sta funzionando in azienda | lavoro | | Metriche, METR e la percezione |

## Manutenzione

- **Ogni tre mesi**: rileggere `quale-ai-scegliere` (cambia più in fretta di tutti), controllare i link esterni, aggiornare i dati se Istat o Eurostat pubblicano nuovi numeri.
- **Ogni anno**: Istat Imprese e ICT (di solito a dicembre), Stanford AI Index (primavera), Osservatorio PoliMi (febbraio).
- **A ogni cambio normativo**: AI Act (linee guida della Commissione), decreti attuativi della legge 132/2025.

## Voce e tono (18/11/2026)

- La guida informa e non vende: niente frasi che spingono verso i servizi dentro gli articoli, e un invito finale che chiede un parere o la segnalazione di un errore.
- La voce è quella delle skill di scrittura di Luigi (`pezzo-substack-luigi`, `post-linkedin-luigi`): niente frasi a effetto, negazioni contrastive ("non è X, è Y"), frasi che annunciano la struttura ("fino a qui ho riferito…"), due punti teatrali ("Tradotto:", "La regola pratica:"), chiuse ad aforisma.
- Nessuna esperienza con clienti attribuita a Luigi se non l'ha raccontata lui.
