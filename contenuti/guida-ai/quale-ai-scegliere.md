---
titolo: ChatGPT, Claude, Gemini o Copilot: quale usare per lavorare
titoloBreve: Quale AI scegliere
titoloSeo: ChatGPT, Claude, Gemini o Copilot: quale AI scegliere per lavorare
sottotitolo: Una guida per criteri, non per classifiche: le classifiche cambiano ogni mese, i criteri no.
descrizione: Come scegliere tra ChatGPT, Claude, Gemini, Copilot e Mistral per lavorare: criteri pratici, piani gratuiti e business, privacy, integrazioni e come confrontarli sul tuo lavoro.
pubblicato: 2026-11-17
aggiornato: 2026-11-17
capitolo: scegliere
ordine: 4
servizio: go-to-market-e-automazioni
correlati:
- come-scrivere-un-prompt
- privacy-e-ai
- frontiera-frastagliata
inBreve:
- I tre assistenti principali (ChatGPT di OpenAI, Claude di Anthropic, Gemini di Google) sono vicini come capacità: le differenze contano meno dell'uso che ne fai.
- Il criterio più utile è dove lavori già: Google Workspace porta a Gemini, Microsoft 365 a Copilot.
- Per il lavoro vero serve il modello più capace, che di solito richiede un abbonamento: le versioni gratuite danno un'idea sbagliata.
- Con dati aziendali conviene un piano business, che per contratto non usa le conversazioni per addestrare i modelli.
- Il confronto migliore è il tuo: lo stesso compito reale dato a due assistenti, per due settimane.
---

Ogni mese esce un nuovo modello e ogni mese qualcuno scrive che quello nuovo "distrugge" tutti gli altri. Se segui queste notizie per scegliere che strumento usare in azienda, cambierai assistente ogni sei settimane e non imparerai a usarne bene nessuno.

Così, in questo articolo non trovi una classifica. Trovi i criteri che uso io quando qualcuno mi chiede "quale devo prendere", e che valgono anche quando i nomi dei modelli saranno cambiati.

## Chi sono i contendenti

Per lavorare, oggi, i nomi che contano sono pochi.

| Assistente | Chi lo fa | Dove è più forte |
|---|---|---|
| ChatGPT | OpenAI (Stati Uniti) | Il più diffuso, il più completo di funzioni: voce, immagini, ricerca, agenti, app collegate |
| Claude | Anthropic (Stati Uniti) | Scrittura, documenti lunghi, programmazione, tono più misurato |
| Gemini | Google (Stati Uniti) | Integrato in Gmail, Docs, Drive e Meet; ricerca web di Google |
| Microsoft 365 Copilot | Microsoft (Stati Uniti) | Integrato in Outlook, Word, Excel, Teams; usa modelli di OpenAI e di altri |
| Le Chat | Mistral AI (Francia) | Alternativa europea, utile quando la sede dei dati e del fornitore conta |

Poi ci sono gli strumenti specializzati, che spesso usano gli stessi modelli dentro un prodotto diverso: Perplexity per la ricerca, NotebookLM di Google per studiare i propri documenti, gli assistenti dentro i CRM e i software gestionali.

Le colonne "dove è più forte" sono una semplificazione e cambiano. Le prendo dalla mia esperienza e da quella di chi testa questi strumenti per mestiere, come Ethan Mollick nella sua [guida aggiornata periodicamente](https://www.oneusefulthing.org/p/using-ai-right-now-a-quick-guide).

## Il criterio che conta di più: dove lavori già

Uno strumento che sta dentro il programma che apri ogni mattina viene usato. Uno che sta in un'altra scheda del browser viene dimenticato dopo due settimane. È banale e decide quasi tutto.

- Se l'azienda usa **Google Workspace** (Gmail, Drive, Docs), Gemini è già incluso nei piani business e lavora direttamente sui tuoi documenti.
- Se usa **Microsoft 365** (Outlook, Word, Excel, Teams), Copilot è la scelta naturale, soprattutto se in azienda le email e i file vivono lì.
- Se non c'è un ecosistema dominante, o le persone lavorano soprattutto su testi, analisi e documenti, ChatGPT e Claude come assistenti autonomi sono spesso più capaci e più comodi.

Si possono anche combinare: Gemini dentro Gmail per le risposte rapide, Claude o ChatGPT per i lavori più lunghi.

## Gratuito o a pagamento

Qui il consiglio è netto, ed è lo stesso che danno quasi tutti quelli che ci lavorano seriamente: per giudicare l'AI e per usarla al lavoro serve il modello più capace, e quello di solito è a pagamento. Le versioni gratuite usano modelli più piccoli, hanno limiti stretti e spesso non hanno il ragionamento esteso o la ricerca approfondita.

I piani individuali dei tre principali costano intorno ai 20 euro al mese, quelli business qualche euro in più per persona. Per una settimana di prova è una spesa ridicola rispetto al tempo che si risparmia a capire davvero cosa sanno fare. I prezzi cambiano: controllali sulle pagine ufficiali prima di decidere.

Un dettaglio da non sottovalutare: anche negli abbonamenti a pagamento, a volte il modello più potente va **selezionato a mano**. Molti usano per mesi il modello veloce senza saperlo.

## Personale o business: la questione dei dati

Le versioni consumer (gratuite o individuali) e quelle business hanno regole diverse sull'uso delle conversazioni.

- Nei piani **business ed enterprise** di OpenAI, Anthropic, Google e Microsoft le conversazioni non vengono usate per addestrare i modelli, per contratto, e ci sono strumenti di amministrazione per gestire gli utenti.
- Nei piani **consumer** l'uso per l'addestramento dipende dalle impostazioni, che vanno controllate (in alcuni casi è attivo per impostazione predefinita).

Se in azienda qualcuno incollerà email di clienti, preventivi o documenti interni, il piano business non è un lusso. Ne parlo in dettaglio in [Cosa puoi incollare in ChatGPT (e cosa no)](guida:privacy-e-ai).

## Le funzioni che fanno la differenza

Più del modello in sé, spesso conta cosa c'è intorno. Prima di scegliere, guarda se l'assistente ha queste funzioni e come funzionano:

- **Progetti o spazi di lavoro** con istruzioni fisse e documenti caricati una volta sola. Sono la base per non ripetere il contesto ogni volta (vedi [Il contesto conta più del prompt](guida:dare-contesto-all-ai)).
- **Ricerca approfondita** (_deep research_): legge decine di fonti e scrive un rapporto. Utile per analisi di mercato e concorrenti, da verificare sempre ([come farlo](guida:ricerca-con-l-ai)).
- **Analisi dati**: la capacità di eseguire codice su un file Excel o CSV. Rende i calcoli affidabili.
- **Connettori** a Drive, email, calendario, CRM. Qui le cose si muovono in fretta grazie a standard come il [Model Context Protocol](https://modelcontextprotocol.io), che permette di collegare lo stesso strumento a assistenti diversi.
- **Modalità vocale**: sottovalutata. Per chi è spesso in macchina o in cantiere, dettare e ragionare a voce cambia l'uso.

## Come confrontarli davvero

Le classifiche pubbliche esistono e sono utili per farsi un'idea: [LMArena](https://lmarena.ai) mette i modelli uno contro l'altro e fa votare gli utenti alla cieca, [Artificial Analysis](https://artificialanalysis.ai) confronta capacità, velocità e prezzi. Ma misurano compiti generici, non il tuo.

Il confronto che consiglio è questo:

1. Scegli **tre compiti reali** che fai ogni settimana: una mail difficile, un documento da riassumere, un'analisi su un file.
2. Dalli **identici** a due assistenti, con lo stesso contesto, usando il modello migliore di ciascuno.
3. Ripeti per **due settimane**, perché il primo giorno conta poco: si impara anche a usarli.
4. Giudica su tre cose: quanto dovevi correggere, quanto ti fidavi del risultato, quanto era comodo nel tuo flusso.

Di solito alla fine non c'è un vincitore assoluto, ma uno con cui ti trovi meglio. È una ragione sufficiente.

## Il mio consiglio, se devo darne uno

Se parti da zero e non hai vincoli di ecosistema: prendi un abbonamento a uno dei tre principali, usalo per tutto per un mese, e solo dopo valuta se ti serve altro. Cambiare strumento costa poco, ma imparare a usarne bene uno vale più di provarli tutti male.

Se invece hai già un'azienda organizzata su Google o Microsoft, parti dall'assistente integrato e affiancagli uno strumento autonomo solo per i compiti in cui senti il limite.

E quando hai preso confidenza, l'assistente diventa un posto dove costruire strumenti piccoli per te. Un esempio mio: su Claude ho messo in piedi un assistente finanziario personale fatto di più agenti, ognuno costruito con un'idea diversa su come gestire i soldi, che mi aiutano a capire dove metterli. Non decide al posto mio (e per fortuna, visto che i soldi sono i miei), ma mi fa guardare la stessa scelta da punti di vista diversi.

## Domande frequenti

### Qual è la migliore intelligenza artificiale per lavorare?

Non c'è una risposta valida per tutti: ChatGPT, Claude e Gemini sono vicini come capacità e si superano a vicenda a ogni aggiornamento. Conviene scegliere in base agli strumenti che usi già e al tipo di lavoro, e provarli sui propri compiti reali.

### ChatGPT gratis basta per un'azienda?

Per farsi un'idea sì, per lavorarci no. Le versioni gratuite usano modelli meno capaci, hanno limiti d'uso e regole diverse sull'uso delle conversazioni per l'addestramento. Per dati aziendali è meglio un piano business.

### Esiste un'alternativa europea a ChatGPT?

Sì, Le Chat di Mistral AI, azienda francese. Può essere una scelta sensata quando la sede del fornitore e il trattamento dei dati in Europa sono un requisito importante. Anche i fornitori americani offrono in alcuni piani business l'archiviazione dei dati in Europa.

### Copilot e ChatGPT sono la stessa cosa?

No. Microsoft 365 Copilot è l'assistente di Microsoft integrato in Word, Excel, Outlook e Teams; usa anche modelli di OpenAI, ma è un prodotto diverso, con accesso ai documenti e alle email dell'azienda e regole gestite dall'amministratore Microsoft.

## Fonti

- Ethan Mollick, [Using AI Right Now: A Quick Guide](https://www.oneusefulthing.org/p/using-ai-right-now-a-quick-guide), One Useful Thing
- [LMArena](https://lmarena.ai), classifica dei modelli basata sui voti degli utenti
- [Artificial Analysis](https://artificialanalysis.ai), confronti indipendenti di capacità, velocità e prezzo
- [Model Context Protocol](https://modelcontextprotocol.io), standard aperto per collegare gli assistenti a dati e strumenti
- OpenAI, [Enterprise privacy](https://openai.com/enterprise-privacy/)
- Anthropic, [Updates to our consumer terms](https://www.anthropic.com/news/updates-to-our-consumer-terms), 2025
