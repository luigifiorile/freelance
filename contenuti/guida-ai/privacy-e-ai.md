---
titolo: Cosa puoi incollare in ChatGPT (e cosa no)
titoloBreve: Privacy e AI
titoloSeo: ChatGPT e privacy: cosa puoi incollare, impostazioni e GDPR per le aziende
sottotitolo: Account personali e aziendali, addestramento sui dati, GDPR e il Garante italiano. Una guida pratica per non fare danni con i dati dei clienti.
descrizione: Privacy e intelligenza artificiale per aziende e professionisti: quali dati si possono incollare in ChatGPT, Claude e Gemini, le impostazioni sull'addestramento, i piani business e cosa chiede il GDPR.
pubblicato: 2026-11-17
aggiornato: 2026-11-17
capitolo: regole
ordine: 12
servizio: go-to-market-e-automazioni
correlati:
- ai-act-piccole-imprese
- quale-ai-scegliere
- agenti-ai
inBreve:
- Nelle versioni personali degli assistenti le conversazioni possono essere usate per addestrare i modelli, a seconda delle impostazioni: vanno controllate.
- Nei piani business ed enterprise di OpenAI, Anthropic, Google e Microsoft i dati, per contratto, non vengono usati per l'addestramento.
- Il GDPR vale anche per l'AI: per dati personali dei clienti servono una base giuridica, un fornitore con un accordo sul trattamento e il minimo indispensabile di dati.
- Niente dati personali di clienti in account personali; anonimizza quando puoi; per i dati sensibili, chiedi prima.
- Il Garante italiano è stato tra i più attivi d'Europa: ha bloccato ChatGPT nel 2023 e DeepSeek nel 2025.
---

Dopo "quale AI uso?", la domanda che viene più naturale è: "ma posso metterci dentro i dati dei miei clienti?". La risposta breve è: dipende da quale account usi e da quali dati. La risposta lunga è questo articolo.

Premessa doverosa, come per l'[articolo sull'AI Act](guida:ai-act-piccole-imprese): non sono un avvocato né un consulente privacy. Qui trovi i principi e le impostazioni da conoscere. Per trattamenti complessi o dati delicati serve un professionista, e spesso il tuo DPO o consulente privacy, se ce l'hai.

## Il punto di partenza: personale o aziendale

Quasi tutto dipende da una distinzione.

**Account personali** (gratuiti o a pagamento individuali): sono servizi consumer. I fornitori possono usare le conversazioni per migliorare i modelli, a seconda delle impostazioni scelte dall'utente, e le condizioni sono quelle generali del servizio.

**Piani business ed enterprise** (ChatGPT Business ed Enterprise, Claude per i team, Gemini dentro Google Workspace, Microsoft 365 Copilot, e l'uso tramite API): qui i fornitori si impegnano per contratto a **non usare i dati per addestrare i modelli**, offrono un accordo sul trattamento dei dati ai sensi del GDPR e strumenti di amministrazione per l'azienda. Le condizioni sono pubbliche: per esempio la pagina di [OpenAI sulla privacy enterprise](https://openai.com/enterprise-privacy/).

Se in azienda qualcuno incolla email, preventivi e documenti di clienti in un account ChatGPT personale, il problema è che dati dell'azienda e dei clienti stanno passando per un servizio con cui l'azienda non ha nessun contratto.

## Le impostazioni da controllare negli account personali

Se usi un account personale, anche solo per prova, ci sono alcune impostazioni da guardare subito. I nomi cambiano spesso, la logica no.

- **ChatGPT**: nelle impostazioni sui controlli dei dati c'è un'opzione per consentire o no l'uso delle tue conversazioni per migliorare i modelli. Le chat temporanee non vengono usate per l'addestramento e vengono cancellate dopo un periodo breve. Dettagli nelle [domande frequenti di OpenAI](https://help.openai.com/en/articles/7730893-data-controls-faq).
- **Claude**: da settembre 2025 Anthropic chiede agli utenti consumer di scegliere se consentire l'uso delle conversazioni per l'addestramento; se lo consenti, i dati possono essere conservati più a lungo. I piani commerciali sono esclusi. Lo spiega l'[aggiornamento delle condizioni](https://www.anthropic.com/news/updates-to-our-consumer-terms).
- **Gemini**: l'attività delle app Gemini può essere salvata e, in parte, letta da revisori umani per migliorare il servizio; si può disattivare. Tutto è descritto nel [centro privacy delle app Gemini](https://support.google.com/gemini/answer/13594961). Nei piani Google Workspace le regole sono diverse e più protettive.

Un'abitudine utile: rileggere queste impostazioni ogni qualche mese. I fornitori le cambiano, e non sempre con grande clamore.

## Cosa dice il GDPR, in breve

L'AI non ha cambiato le regole sulla privacy: vale il [Regolamento generale sulla protezione dei dati](https://eur-lex.europa.eu/eli/reg/2016/679/oj), come per qualsiasi altro software. Se incolli in un assistente dati che riguardano persone identificabili (nome, email, situazione di un cliente, una busta paga), stai facendo un trattamento di dati personali. Alcuni principi che ne derivano:

- **Base giuridica**: devi avere un motivo valido per trattare quei dati in quel modo, come l'esecuzione di un contratto con il cliente.
- **Minimizzazione**: usa solo i dati che servono. Per far riscrivere una mail di reclamo, il nome del cliente non serve.
- **Fornitore come responsabile del trattamento**: se un fornitore tratta dati per conto tuo, serve un accordo scritto (il cosiddetto DPA, previsto dall'articolo 28 del GDPR). I piani business lo prevedono, quelli personali no.
- **Trasferimenti fuori dall'UE**: i principali fornitori sono americani. I trasferimenti verso gli Stati Uniti oggi si appoggiano soprattutto sul Data Privacy Framework UE-USA, a cui le grandi aziende del settore aderiscono; alcuni piani offrono anche l'archiviazione dei dati in Europa.
- **Informativa**: le persone devono sapere come tratti i loro dati. Se l'AI entra stabilmente nei tuoi processi, l'informativa privacy va aggiornata.

## Il Garante italiano: un'autorità che si fa sentire

L'Italia ha avuto un ruolo particolare in questa storia. Nel marzo 2023 il Garante per la protezione dei dati personali è stata la prima autorità occidentale a bloccare temporaneamente ChatGPT, contestando a OpenAI, tra le altre cose, la mancanza di una base giuridica per l'addestramento e di verifiche sull'età. Il servizio è tornato disponibile dopo alcune settimane, con modifiche.

Nel dicembre 2024 il Garante ha concluso l'istruttoria con una sanzione da 15 milioni di euro. Nel 2026 però il Tribunale di Roma l'ha annullata, ritenendo che la competenza fosse dell'autorità irlandese, dove OpenAI ha la sua sede europea ([qui il resoconto di Diritto.it](https://www.diritto.it/open-ai-annullata-la-sanzione-del-garante-privacy/)). Nel gennaio 2025 il Garante ha anche bloccato in Italia l'app del modello cinese DeepSeek.

Per chi usa l'AI in azienda, la lezione è che in Italia la privacy è un tema su cui l'attenzione è alta, e conviene essere in ordine.

## La regola pratica, in quattro righe

Quella che suggerisco di scrivere nelle regole aziendali:

1. **Niente dati personali di clienti, fornitori o dipendenti in account personali.** Mai.
2. **Anonimizza quando puoi.** "Il cliente A, un'azienda di 20 persone nel settore alimentare" funziona quasi sempre come "Mario Rossi della Rossi Srl".
3. **Per i dati sensibili** (salute, dati giudiziari, dati di minori, informazioni finanziarie dettagliate) usa solo strumenti aziendali approvati, e se hai dubbi chiedi prima a chi si occupa di privacy.
4. **Niente credenziali, password, chiavi di accesso, codici** in nessuna chat, mai.

E per i documenti riservati dell'azienda (bilanci non pubblici, strategie, contratti con clausole di riservatezza) vale lo stesso ragionamento: piano business, oppure niente.

## Quando i dati li legge un agente

Quando l'AI non si limita a leggere quello che incolli ma è collegata direttamente alla posta, al CRM o all'archivio (come succede con gli [agenti](guida:agenti-ai)), la questione si allarga. Oltre a dove vanno i dati, conta cosa l'agente può farci e chi può dargli istruzioni. È il problema della prompt injection, e la difesa principale è dare solo gli accessi strettamente necessari.

## Domande frequenti

### ChatGPT usa i miei dati per l'addestramento?

Negli account personali può farlo, a seconda delle impostazioni sui controlli dei dati, che l'utente può cambiare. Nei piani business, enterprise e nell'uso tramite API, OpenAI si impegna per contratto a non usare i dati dei clienti per addestrare i modelli. Lo stesso vale, con le loro regole, per Anthropic, Google e Microsoft.

### Si possono inserire dati personali dei clienti in ChatGPT?

In un account personale è meglio di no: manca un accordo sul trattamento dei dati e le conversazioni possono essere usate per l'addestramento. Con un piano business che preveda un accordo conforme al GDPR si può fare, rispettando i principi di base giuridica e minimizzazione e aggiornando l'informativa privacy.

### Il GDPR si applica all'uso dell'AI?

Sì. Ogni volta che si inseriscono in un sistema di AI dati riferiti a persone identificabili si fa un trattamento di dati personali, a cui si applicano tutte le regole del GDPR: base giuridica, minimizzazione, sicurezza, accordi con i fornitori e informativa agli interessati.

## Fonti

- [Regolamento (UE) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj) (GDPR), EUR-Lex
- OpenAI, [Enterprise privacy](https://openai.com/enterprise-privacy/) e [Data Controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq)
- Anthropic, [Updates to our consumer terms](https://www.anthropic.com/news/updates-to-our-consumer-terms), 2025
- Google, [Centro per la privacy delle app Gemini](https://support.google.com/gemini/answer/13594961)
- Diritto.it, [OpenAI vince contro il Garante privacy: perché il Tribunale di Roma ha annullato la sanzione da 15 milioni](https://www.diritto.it/open-ai-annullata-la-sanzione-del-garante-privacy/)
