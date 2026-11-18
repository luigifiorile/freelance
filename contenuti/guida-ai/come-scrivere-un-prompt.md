---
titolo: Come scrivere un prompt che funziona
titoloBreve: Come scrivere un prompt
titoloSeo: Come scrivere un prompt efficace: la guida pratica con esempi
sottotitolo: Cosa dicono le guide ufficiali di Anthropic, OpenAI e Google, ridotto a quello che serve davvero a chi lavora. Con esempi da copiare.
descrizione: Come scrivere prompt efficaci per ChatGPT, Claude e Gemini: i principi delle guide ufficiali di Anthropic, OpenAI e Google, esempi prima e dopo, errori comuni e modelli da copiare.
pubblicato: 2026-11-17
aggiornato: 2026-11-17
capitolo: usare
ordine: 5
servizio: visibilita-sito-web-e-advertising
correlati:
- dare-contesto-all-ai
- allucinazioni-ai
- quale-ai-scegliere
inBreve:
- Un buon prompt è una richiesta chiara a un collega bravo che non sa niente della tua azienda: chi sei, cosa ti serve, per chi, in che formato.
- Google riassume gli elementi in quattro voci: persona, compito, contesto, formato. Non servono tutti ogni volta.
- Gli esempi valgono più delle descrizioni: una mail scritta bene insegna il tono meglio di tre aggettivi.
- Dividere il prompt in sezioni (istruzioni, documento, esempi) aiuta il modello a non confondere le parti.
- Il primo risultato è una bozza: si migliora conversando, chiedendo correzioni precise.
---

Per un paio d'anni il _prompt engineering_ è stato presentato come una specie di arte segreta, con liste di "prompt magici" da copiare e corsi che promettevano di svelare la formula. Una parte di quella roba aveva senso con i modelli del 2023. Con quelli di oggi conta molto meno.

La buona notizia è che chi i modelli li costruisce ha scritto guide ufficiali, gratuite e piuttosto chiare: [Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/be-clear-and-direct) per Claude, [OpenAI](https://developers.openai.com/cookbook/examples/gpt-5/gpt-5_prompting_guide) per ChatGPT, [Google](https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf) per Gemini. Vale la pena leggerle, e leggendole una dopo l'altra si nota una cosa: dicono, con parole diverse, quasi le stesse cose. Qui sotto c'è il succo, con esempi presi dal lavoro di tutti i giorni.

## La regola del collega appena arrivato

La regola più utile la scrive Anthropic: immagina di passare la tua richiesta a un collega brillante, appena assunto, che non sa niente della tua azienda, dei tuoi clienti e di cosa intendi tu per "una mail breve". Se lui sarebbe confuso, lo sarà anche il modello.

Sembra ovvio, eppure il prompt tipico è questo:

```Prima
Scrivimi una mail per un cliente che non ha pagato.
```

Il modello non sa chi sei, chi è il cliente, da quanto tempo aspetti, se vuoi mantenere il rapporto o chiuderlo, che tono usi di solito. Ti darà una mail generica, cortese e inutilizzabile, e penserai che l'AI non serve.

```Dopo
Sono il titolare di un piccolo studio di grafica. Un cliente con cui lavoro da due anni, di solito puntuale, non ha pagato una fattura da 1.800 euro scaduta da 45 giorni. Gli ho già mandato un sollecito gentile un mese fa, senza risposta.

Scrivi una seconda mail di sollecito: ferma ma cordiale, perché voglio continuare a lavorare con lui. Proponi di sentirci per telefono se c'è un problema. Massimo 120 parole, niente formule tipo "come da oggetto". Dammi due versioni con tono leggermente diverso.
```

Ci vogliono trenta secondi in più. La seconda mail la mandi quasi così com'è.

## Le quattro voci di Google

La guida di Google per Gemini organizza un prompt in quattro elementi. È uno schema comodo da tenere a mente, e non serve usarli tutti ogni volta.

| Elemento | Domanda a cui risponde | Esempio |
|---|---|---|
| Persona | Chi sei, o che ruolo deve avere il modello | "Sono la responsabile commerciale di un'azienda di serramenti" |
| Compito | Cosa deve fare, con un verbo preciso | "Riassumi", "riscrivi", "confronta", "proponi tre alternative" |
| Contesto | Le informazioni che servono per farlo bene | Il cliente, la situazione, i vincoli, i documenti |
| Formato | Come vuoi il risultato | "Una tabella", "massimo 5 punti", "tono informale, dai del tu" |

Nei corsi di marketing e di formazione circolano molti schemi simili con sigle diverse (C.I.D.I., R.I.S.E.N., R.O.S.E.S. e così via). Sono utili come liste di controllo. Sotto, dicono le stesse cose.

## Gli esempi valgono più delle descrizioni

Se vuoi che il modello scriva come scrivi tu, non descrivere il tuo stile: mostralo. "Tono professionale ma caldo" vuol dire cose diverse per ognuno. Due email vere che hai scritto e che ti piacciono dicono tutto.

Lo dicono tutte le guide ufficiali, e i ricercatori lo sanno dal 2020: il paper che ha presentato GPT-3 si intitolava proprio [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165), cioè i modelli imparano da pochi esempi.

Un accorgimento: se dai un solo esempio, il modello tenderà a copiarlo troppo da vicino (stessa lunghezza, stesse frasi). Con due o tre esempi diversi tra loro capisce lo schema invece del singolo caso.

## Dividere il prompt in sezioni

Quando il prompt contiene parti diverse (istruzioni, un documento da analizzare, degli esempi), conviene separarle in modo chiaro. Anthropic suggerisce di racchiuderle tra etichette tipo `<documento>` e `</documento>`; vanno benissimo anche titoli in maiuscolo o righe di separazione. Serve a evitare che il modello scambi un pezzo del documento per un'istruzione.

```Esempio con sezioni
ISTRUZIONI
Leggi il contratto qui sotto e dimmi: durata, rinnovo automatico, penali per recesso anticipato, foro competente. Per ogni punto riporta la frase esatta del contratto. Se un punto non c'è, scrivi "non indicato".

CONTRATTO
[incolla qui il testo]
```

Nei documenti lunghi vale una regola pratica suggerita da Anthropic: metti prima il documento e alla fine la domanda. I modelli tendono a rispondere meglio.

## Dire cosa fare, non solo cosa evitare

"Non essere prolisso" funziona peggio di "massimo 100 parole". "Non usare un tono da robot" funziona peggio di "scrivi come scriveresti a un cliente che conosci da anni, dandogli del lei". Le istruzioni positive e misurabili sono più facili da seguire.

E se una regola ha un motivo, dillo. Le guide di Anthropic insistono su questo punto: "niente elenchi puntati" è un ordine, "niente elenchi puntati, perché il testo verrà letto ad alta voce durante una call" permette al modello di capire anche i casi che non hai previsto.

## Lasciargli spazio per dubitare (e per fare domande)

Due frasi che conviene aggiungere ai compiti importanti, perché migliorano molto le risposte:

```Da aggiungere in fondo
Prima di rispondere, se ti mancano informazioni importanti, fammi al massimo tre domande.
Se non sei sicuro di qualcosa, dillo invece di supporre.
```

La prima evita le risposte generiche nate da un contesto incompleto. La seconda riduce le [allucinazioni](guida:allucinazioni-ai), perché dà al modello il permesso esplicito di non sapere.

## Il primo risultato è una bozza

Una delle differenze tra chi trova l'AI utile e chi no è che i primi conversano. Il primo output è un punto di partenza: si corregge con richieste precise.

- "Più corto, togli il secondo paragrafo."
- "Il tono è troppo formale per questo cliente: lui scrive in modo molto diretto."
- "Il punto 3 è sbagliato: il nostro listino non prevede sconti sopra i 1.000 euro. Rifai tenendone conto."
- "Ora fai l'avvocato del diavolo: quali obiezioni potrebbe avere il cliente leggendo questa proposta?"

L'ultima è una delle richieste più sottovalutate. Chiedere al modello di criticare il proprio lavoro, o il tuo, fa emergere problemi che non avresti visto.

Una cosa da sapere: quando una conversazione è andata nella direzione sbagliata, spesso conviene ricominciare in una chat nuova con un prompt migliore invece di correggere all'infinito. Il modello si porta dietro tutto quello che c'è nella conversazione, anche gli errori.

## Cosa non serve più

Alcuni trucchi che circolano ancora hanno perso senso con i modelli recenti:

- **Le minacce e le mance** ("ti do 200 dollari se lo fai bene"): un [test della Wharton School](https://gail.wharton.upenn.edu/research-and-insights/techreport-threaten-or-tip/) del 2025, firmato tra gli altri da Ethan e Lilach Mollick, non ha trovato nessun miglioramento significativo complessivo, né con le mance né con le minacce.
- **Il maiuscolo per enfatizzare** ("È IMPORTANTISSIMO CHE..."): i modelli recenti seguono le istruzioni con precisione e tendono a esagerare quello che enfatizzi. La guida di OpenAI per GPT-5 lo dice esplicitamente: questi modelli sono molto letterali, e istruzioni troppo insistenti o contraddittorie peggiorano il risultato.
- **"Ragiona passo per passo"** sui modelli che ragionano già da soli: non fa danni, ma non serve. Sui modelli veloci può ancora aiutare per problemi con più passaggi.
- **Il ruolo come formula magica** ("sei il miglior copywriter del mondo"): dare un ruolo aiuta a impostare il tono e il punto di vista, ma il contesto concreto conta molto di più.

## Un modello da tenere a portata di mano

Per i compiti che ripeti spesso, salva un prompt di base e adattalo. Questo è uno schema semplice che funziona per la maggior parte dei casi:

```Schema riutilizzabile
CHI SONO E COSA FACCIO
[due righe sulla tua attività e sul tuo ruolo]

COSA MI SERVE
[il compito, con un verbo preciso]

PER CHI È
[il destinatario: chi è, cosa sa già, cosa gli interessa]

INFORMAZIONI UTILI
[dati, vincoli, documenti incollati qui sotto]

COME LO VOGLIO
[lunghezza, formato, tono, cosa evitare e perché]

Se ti mancano informazioni importanti, fammi prima delle domande.
```

Quando ti accorgi di riscrivere sempre le stesse informazioni di base (chi sei, cosa vendi, come scrivi), è il momento di passare da un prompt a un progetto con istruzioni fisse. Ne parlo in [Il contesto conta più del prompt](guida:dare-contesto-all-ai).

## Domande frequenti

### Cos'è un prompt?

È la richiesta che scrivi a un assistente di intelligenza artificiale come ChatGPT, Claude o Gemini. Può essere una domanda, un'istruzione o un testo più lungo con contesto, documenti ed esempi.

### Come si scrive un buon prompt?

Spiegando la richiesta come la spiegheresti a un collega bravo che non sa niente del tuo lavoro: chi sei, cosa ti serve, per chi è, che informazioni deve usare e in che formato vuoi il risultato. Aggiungere esempi concreti e chiedere di segnalare i dubbi migliora molto le risposte.

### Servono prompt diversi per ChatGPT, Claude e Gemini?

I principi sono gli stessi e le guide ufficiali dei tre produttori dicono quasi le stesse cose. Ci sono piccole differenze di stile (Claude, per esempio, lavora bene con sezioni delimitate da etichette), ma un prompt chiaro funziona bene su tutti.

### Il prompt engineering è ancora importante?

Meno di qualche anno fa, perché i modelli capiscono meglio le richieste normali. Oggi conta di più il contesto: i documenti, gli esempi e le istruzioni fisse che dai al modello. Saper spiegare con chiarezza cosa vuoi resta comunque la competenza di base.

## Fonti

- Anthropic, [Prompting best practices: be clear and direct](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/be-clear-and-direct) e [use XML tags](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/use-xml-tags)
- OpenAI, [GPT-5 prompting guide](https://developers.openai.com/cookbook/examples/gpt-5/gpt-5_prompting_guide), agosto 2025
- Google, [Gemini for Google Workspace: Prompting guide 101](https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf)
- Meincke, Mollick, Mollick e Shapiro, [Prompting Science Report 3: I'll pay you or I'll kill you, but will you care?](https://arxiv.org/abs/2508.00614), Wharton Generative AI Labs, 2025
- Brown e altri (OpenAI), [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165), 2020
- Wei e altri (Google), [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903), 2022
