const Quiz = "Preparazione Certificazione GA4 - Corso 2026";
const questionBank = [
    { 
        q: "Un'azienda Enterprise deve monitorare il comportamento degli utenti tra un sito e-commerce principale, un blog su dominio separato e un'app iOS nativa. Qual è l'architettura GA4 ottimale per garantire la deduplicazione degli utenti e l'analisi centralizzata?", 
        options: [
            "Creare tre Account separati e unirli tramite una Vista Roll-up in GA360, utilizzando l'assegnazione dell'User-ID.", 
            "Configurare una Proprietà per il Web (con cross-domain) e una per l'App, esportando poi tutto in BigQuery per l'unione tramite SQL.", 
            "Creare un'unica Proprietà con tre Flussi di Dati distinti, implementando il cross-domain tracking tra i due domini web.", 
            "Utilizzare un unico Flusso di Dati Web per i domini e Firebase per l'app, unificando i dati tramite un parametro custom a livello di Account."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **Creare un'unica Proprietà con tre Flussi di Dati distinti, implementando il cross-domain tracking tra i due domini web.** Questa struttura permette a GA4 di utilizzare i suoi Identity Spaces (User-ID, Google Signals, Device ID) per deduplicare nativamente gli utenti cross-piattaforma nella medesima Proprietà, mentre il cross-domain mantiene la persistenza della sessione (Client-ID) tra i domini web. Le altre opzioni sono errate: creare tre Account separati impedisce la deduplicazione nativa in quanto i dati vivono in silos; configurare Proprietà separate richiede un lavoro complesso e non nativo in BigQuery, perdendo i report standard unificati di GA4; utilizzare parametri custom a livello di Account non esiste come funzionalità strutturale in GA4." 
    },
    { 
        q: "Quale affermazione descrive in modo più accurato l'impatto tecnico e strategico della marcatura di un evento come 'Evento Chiave' (Key Event) in GA4?", 
        options: [
            "L'evento viene elaborato in tempo reale e rimuove le soglie di campionamento dai report standard.", 
            "L'evento diventa esportabile in Google Ads per l'ottimizzazione del bidding e viene incluso automaticamente nei modelli di attribuzione Data-Driven di GA4.", 
            "L'evento interrompe la raccolta degli eventi generici nella stessa sessione per preservare le quote API del Measurement Protocol.", 
            "L'evento viene registrato con priorità assoluta nel browser dell'utente, bypassando i blocchi della Consent Mode."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **L'evento diventa esportabile in Google Ads per l'ottimizzazione del bidding e viene incluso automaticamente nei modelli di attribuzione Data-Driven di GA4.** Gli Eventi Chiave (ex Conversioni) sono fondamentali per istruire gli algoritmi pubblicitari e per calcolare il ROI nei report di attribuzione, permettendo al machine learning di assegnare il credito frazionale ai vari touchpoint. Le altre opzioni sono errate: gli eventi chiave non bypassano mai il campionamento o le soglie di privacy (Data Thresholds); non bloccano in alcun modo il tracciamento degli altri eventi secondari; e non possono bypassare le restrizioni sul consenso (Consent Mode), per le quali viene invece utilizzata la modellazione comportamentale." 
    },
    { 
        q: "La Misurazione Avanzata (Enhanced Measurement) è attivata per impostazione predefinita. Quali tra i seguenti eventi specifici vengono tracciati automaticamente in modo completo e senza configurazioni GTM aggiuntive?", 
        options: [
            "Le visualizzazioni di video HTML5 nativi ospitati sul proprio server.", 
            "Lo scorrimento della pagina al 25%, 50%, 75% e 90%.", 
            "I clic sui link in uscita (outbound) e i download di file con estensioni standard (es. .pdf, .docx).", 
            "Le submission di qualsiasi modulo in formato AJAX o React (form_submit)."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **I clic sui link in uscita (outbound) e i download di file con estensioni standard (es. .pdf, .docx).** La Misurazione Avanzata intercetta automaticamente i link che puntano fuori dal dominio corrente e i link che terminano con estensioni di file comuni. Le altre opzioni sono errate: il tracciamento video automatico funziona esclusivamente per i video di YouTube incorporati (con API abilitata), non per player HTML5 custom; lo scroll automatico scatta solo ed esclusivamente al raggiungimento del 90% della profondità della pagina; il tracciamento automatico dei form intercetta nativamente i form HTML standard (submit), ma fallisce molto spesso con form gestiti dinamicamente via AJAX, React o Angular, richiedendo GTM." 
    },
    { 
        q: "Qual è il limite principale e la caratteristica tecnica dell'integrazione nativa gratuita tra GA4 standard e Google BigQuery?", 
        options: [
            "Esporta solo dati aggregati, non a livello di evento grezzo, con un limite di 10 milioni di righe mensili.", 
            "Offre un'esportazione giornaliera (Daily) con un limite massimo di 1 milione di eventi al giorno per le proprietà standard.", 
            "Permette l'esportazione in streaming in tempo reale senza alcun limite di volume per tutte le proprietà.", 
            "Richiede un abbonamento obbligatorio a Google Analytics 360 per essere attivata."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **Offre un'esportazione giornaliera (Daily) con un limite massimo di 1 milione di eventi al giorno per le proprietà standard.** Questo limite è la soglia chiave oltre la quale l'esportazione giornaliera per gli utenti gratuiti fallisce, richiedendo filtri sugli eventi o l'upgrade a GA360 (che eleva il limite a miliardi). Le altre opzioni sono errate: BigQuery esporta dati grezzi a livello di evento e di utente (non aggregati); l'esportazione in streaming è disponibile anche per gli utenti gratuiti ma comporta costi diretti in Google Cloud e non elimina il limite del milione per il batch giornaliero; l'integrazione non richiede GA360, essendo uno dei più grandi vantaggi introdotti nativamente nella versione gratuita di GA4." 
    },
    { 
        q: "In GA4, affinché una sessione venga classificata rigorosamente come 'Sessione con coinvolgimento' (Engaged Session), deve soddisfare determinati criteri. Quali tra i seguenti sono validi singolarmente?", 
        options: [
            "La sessione dura almeno 10 secondi (personalizzabile fino a 60s).", 
            "L'utente naviga su almeno 2 pagine o schermate distinte.", 
            "L'utente attiva almeno un Evento Chiave.", 
            "L'utente clicca su un annuncio a pagamento."
        ], 
        correct: [0, 1, 2], 
        explanation: "Le risposte corrette sono **La sessione dura almeno 10 secondi (personalizzabile fino a 60s)**, **L'utente naviga su almeno 2 pagine o schermate distinte**, e **L'utente attiva almeno un Evento Chiave**. GA4 utilizza questi tre criteri in logica OR: basta che se ne verifichi uno per considerare la sessione 'engaged'. L'opzione relativa al clic su un annuncio a pagamento è errata: la sorgente di acquisizione del traffico (organica, a pagamento, diretta) non ha alcuna influenza diretta sulla misurazione tecnica dell'engagement on-site post-clic." 
    },
    { 
        q: "Per testare implementazioni complesse tramite Google Tag Manager prima del rilascio, si utilizza la DebugView di GA4. Qual è la condizione tecnica necessaria affinché gli eventi del tuo browser appaiano in questa interfaccia isolata?", 
        options: [
            "Devi attivare l'opzione 'Sviluppatore' a livello di Account GA4.", 
            "Devi inviare l'evento con il parametro 'debug_mode' impostato su true o utilizzare l'estensione Google Tag Assistant.", 
            "Devi filtrare il tuo indirizzo IP pubblico nei report in Tempo Reale.", 
            "Devi abilitare il parametro 'test_traffic' nelle impostazioni di raccolta dati."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **Devi inviare l'evento con il parametro 'debug_mode' impostato su true o utilizzare l'estensione Google Tag Assistant.** Inviare questo parametro (che Tag Assistant fa automaticamente in modalità Preview) istruisce i server di GA4 a instradare quegli specifici eventi verso la DebugView, isolandoli dal traffico reale di produzione. Le altre opzioni sono errate: non esiste un'opzione 'Sviluppatore' a livello di account; filtrare l'IP nei report in Tempo Reale non attiva la timeline dettagliata della DebugView e mostra comunque dati frammentati; il parametro 'test_traffic' non è uno standard GA4 per l'attivazione della DebugView, ma ricorda il parametro 'traffic_type' usato per i filtri IP." 
    },
    { 
        q: "Hai impostato la Conservazione dei Dati (Data Retention) a 14 mesi. Su quali aree specifiche dell'interfaccia di GA4 ha effetto questa impostazione temporale?", 
        options: [
            "Determina il limite storico per tutti i Report Standard aggregati (es. Report Acquisizione).", 
            "Definisce quanto tempo i dati grezzi rimangono in Google BigQuery prima di essere cancellati.", 
            "Ha impatto esclusivamente sulle tecniche di Esplorazione, determinando per quanto tempo è possibile interrogare dati storici associati a identificatori utente o cookie.", 
            "Imposta la data di scadenza tecnica dei cookie di prima parte sui dispositivi degli utenti."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **Ha impatto esclusivamente sulle tecniche di Esplorazione, determinando per quanto tempo è possibile interrogare dati storici associati a identificatori utente o cookie.** Se provi a fare un'Esplorazione su dati più vecchi di 14 mesi, GA4 non te lo permetterà. Le altre opzioni sono errate: i Report Standard non sono influenzati da questa impostazione e mantengono i dati aggregati a tempo indeterminato; BigQuery ha regole di conservazione indipendenti gestite da Google Cloud; i cookie di GA4 (come _ga) hanno una scadenza predefinita di 2 anni lato client, regolata dai browser e dai parametri di configurazione del tag, non dall'interfaccia Data Retention." 
    },
    { 
        q: "L'Identity Reporting 'Spazi di identità combinati' (Blended) in GA4 utilizza un ordine di priorità gerarchico per riconoscere gli utenti cross-device. Qual è la sequenza esatta valutata dal sistema?", 
        options: [
            "Device ID > Google Signals > User-ID > Modellazione", 
            "Google Signals > Modellazione > User-ID > Device ID", 
            "User-ID > Google Signals > Device ID > Modellazione comportamentale", 
            "User-ID > Device ID > Modellazione comportamentale (Google Signals è escluso dal reporting Blended)"
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **User-ID > Google Signals > Device ID > Modellazione comportamentale.** GA4 cerca prima la massima precisione: l'User-ID fornito dal tuo backend. Se assente, usa i Google Signals (utenti loggati in Google con personalizzazione annunci attiva). Se assenti, ricade sul Device ID (cookie del browser/ID app). Infine, se il consenso manca e il Device ID non è disponibile, utilizza il machine learning (Modellazione comportamentale). Le altre opzioni sono errate perché mescolano l'ordine di accuratezza, mettendo identificatori probabilistici o legati al singolo dispositivo prima degli identificatori esatti e deterministici come lo User-ID." 
    },
    { 
        q: "Un'azienda vuole escludere completamente il traffico dei propri dipendenti dai report di GA4. Qual è la procedura in due fasi corretta per ottenere un'esclusione definitiva e sicura?", 
        options: [
            "1. Bloccare gli IP nel file .htaccess. 2. Aggiungere un parametro UTM agli URL aziendali.", 
            "1. Creare un Segmento nei report escludendo gli IP. 2. Salvare il report nella Libreria.", 
            "1. Definire le regole del traffico interno (indirizzi IP) nel Flusso di dati. 2. Modificare lo stato del Filtro Dati corrispondente da 'Testing' ad 'Attivo' a livello di Proprietà.", 
            "1. Attivare il Measurement Protocol. 2. Inviare un evento di 'opt_out' tramite GTM."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **1. Definire le regole del traffico interno (indirizzi IP) nel Flusso di dati. 2. Modificare lo stato del Filtro Dati corrispondente da 'Testing' ad 'Attivo' a livello di Proprietà.** Questo aggiunge il parametro traffic_type=internal agli hit, che poi il Filtro Dati intercetta per scartarli a livello di server, evitando che entrino nei report. Le altre opzioni sono errate: bloccare gli IP su .htaccess impedisce la navigazione, non solo il tracciamento; i Segmenti agiscono in lettura, non bloccano la raccolta dati alla fonte e si applicano solo alle Esplorazioni; il Measurement Protocol serve per importare dati esterni, non per creare filtri di esclusione." 
    },
    { 
        q: "Durante l'analisi di un report di e-commerce personalizzato, scopri che il 40% delle transazioni è raggruppato sotto la riga '(other)'. Qual è la causa tecnica e l'effetto sulle tue analisi?", 
        options: [
            "È causato da una violazione delle policy PII. GA4 offusca automaticamente i dati per proteggere la privacy.", 
            "È dovuto all'applicazione delle 'Soglie di dati' (Data Thresholds) derivanti da Google Signals, che nascondono segmenti di utenti troppo piccoli.", 
            "Deriva da una dimensione ad alta cardinalità (es. ID Transazione univoci) che supera i limiti giornalieri di elaborazione del database standard di GA4.", 
            "È il risultato della Modellazione Comportamentale (Consent Mode), che raggruppa gli utenti senza cookie in una macro-categoria."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **Deriva da una dimensione ad alta cardinalità (es. ID Transazione univoci) che supera i limiti giornalieri di elaborazione del database standard di GA4.** Quando una dimensione supera i limiti di righe univoche elaborabili giornalmente (es. 25.000 righe per alcune tabelle), GA4 raggruppa i dati in eccesso in '(other)' per velocizzare i report. Le altre opzioni sono errate: la violazione PII comporta l'eliminazione dell'evento o la sospensione dell'account, non il raggruppamento in (other); le Data Thresholds rimuovono interamente le righe dal report, non le sommano sotto una voce; la modellazione distribuisce i dati stimati, non li isola in (other)." 
    },
    { 
        q: "Nell'Esplorazione a Imbuto (Funnel Exploration), qual è la differenza tecnica sostanziale tra un 'Imbuto Aperto' (Open Funnel) e un 'Imbuto Chiuso' (Closed Funnel)?", 
        options: [
            "L'Imbuto Aperto esporta i dati senza campionamento; quello Chiuso richiede GA360.", 
            "Nell'Imbuto Aperto, gli utenti possono entrare in qualsiasi passaggio del funnel e procedere; in quello Chiuso, devono obbligatoriamente completare il Passo 1 per essere conteggiati nei passaggi successivi.", 
            "L'Imbuto Chiuso traccia le sessioni cross-device; quello Aperto traccia solo i cookie di singola sessione.", 
            "L'Imbuto Aperto permette l'aggiunta di dimensioni di suddivisione (Breakdown); l'Imbuto Chiuso non lo permette."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **Nell'Imbuto Aperto, gli utenti possono entrare in qualsiasi passaggio del funnel e procedere; in quello Chiuso, devono obbligatoriamente completare il Passo 1 per essere conteggiati nei passaggi successivi.** Questo è essenziale per l'analisi: un imbuto chiuso analizza percorsi rigidi (es. checkout lineare), un imbuto aperto è utile se l'utente può atterrare direttamente a metà processo tramite link diretti. Le altre opzioni sono errate: il campionamento si applica a entrambe le tipologie a seconda del volume dati; entrambi supportano l'analisi cross-device se l'Identity Reporting lo prevede; ed entrambi supportano pienamente le dimensioni di breakdown (es. Categoria Dispositivo)." 
    },
    { 
        q: "Sei incaricato di misurare il Tasso di Abbandono (Churn Rate) degli utenti che hanno installato l'app durante una campagna natalizia. Quale tecnica di Esplorazione e relativa impostazione devi utilizzare?", 
        options: [
            "Esplorazione a imbuto con la funzione 'Tempo trascorso' attivata.", 
            "Esplorazione in formato libero con il filtro 'Data acquisizione primo utente'.", 
            "Analisi di coorte (Cohort Exploration) impostando il tipo di coorte su 'Primo contatto' e analizzando la metrica 'Utenti attivi' nel tempo.", 
            "Sovrapposizione dei segmenti tra 'Utenti Natalizi' e 'Disinstallazioni App'."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **Analisi di coorte (Cohort Exploration) impostando il tipo di coorte su 'Primo contatto' e analizzando la metrica 'Utenti attivi' nel tempo.** La coorte isola il gruppo di utenti in base alla data di acquisizione (campagna natalizia) e la tabella temporale mostra quanti di essi tornano (o non tornano, deducendo il churn) nei giorni/settimane successive. Le altre opzioni sono errate: il Funnel traccia una sequenza di step puntuali, non l'attività reiterata a intervalli di tempo regolari; il formato libero mostra dati aggregati e non offre la vista a decadimento tipica della retention; la sovrapposizione mostra solo intersezioni statiche di insiemi, non l'andamento temporale del ritorno." 
    },
    { 
        q: "Nei report di Acquisizione di GA4, incontri le dimensioni 'Sorgente/mezzo primo utente' (First user source/medium) e 'Sorgente/mezzo sessione' (Session source/medium). Quale affermazione descrive accuratamente il loro comportamento nell'attribuzione?", 
        options: [
            "Sono identiche e presenti solo per retrocompatibilità con Universal Analytics.", 
            "La dimensione 'primo utente' attribuisce tutto il valore all'ultimo clic della sessione; 'sessione' utilizza il Data-Driven Attribution.", 
            "La dimensione 'primo utente' mantiene perennemente traccia del canale che ha portato l'utente sul sito per la primissima volta (scope utente); 'sessione' traccia il canale che ha generato la visita corrente (scope sessione).", 
            "La dimensione 'sessione' si azzera a mezzanotte, mentre 'primo utente' dura 30 minuti."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **La dimensione 'primo utente' mantiene perennemente traccia del canale che ha portato l'utente sul sito per la primissima volta (scope utente); 'sessione' traccia il canale che ha generato la visita corrente (scope sessione).** Questo distingue radicalmente l'acquisizione di *nuovi clienti* (primo utente) dall'acquisizione di *nuove visite* (sessione). Le altre opzioni sono errate: non sono affatto identiche, rappresentano scope completamente diversi; il modello di attribuzione Data-Driven si applica all'attribuzione delle conversioni a livello di evento (scope evento), non in questi report standard; il reset di mezzanotte era una regola di sessione del vecchio Universal Analytics, rimossa in GA4." 
    },
    { 
        q: "In Universal Analytics, la Frequenza di Rimbalzo (Bounce Rate) dipendeva dalle hit inviate a Google. In GA4, la formula di calcolo del Bounce Rate è cambiata profondamente. Come viene determinata?", 
        options: [
            "È calcolata come il numero di sessioni con una sola pagina vista, diviso il totale delle sessioni.", 
            "È l'esatta percentuale inversa (100% meno la metrica) del Tasso di Coinvolgimento (Engagement Rate).", 
            "Rappresenta la percentuale di utenti che escono dal sito prima che il file gtm.js venga caricato.", 
            "Viene determinata dal rapporto tra il tempo di permanenza inferiore a 30 secondi e le conversioni totali."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **È l'esatta percentuale inversa (100% meno la metrica) del Tasso di Coinvolgimento (Engagement Rate).** In GA4, se l'Engagement Rate è 60% (sessioni che durano >10s, OR vedono 2+ pagine, OR convertono), il Bounce Rate sarà automaticamente il 40%. È diventato il complemento a 1 dell'engagement. Le altre opzioni sono errate: la definizione legata alla singola pagina vista apparteneva storicamente a Universal Analytics; l'uscita prima del caricamento di GTM comporta la non-raccolta del dato (nessuna sessione registrata); il tempo di permanenza in rapporto alle conversioni è una metrica inventata e priva di fondamento in GA4." 
    },
    { 
        q: "Stai analizzando l'efficacia di un'architettura multi-dominio. Quale parametro tecnico passa GA4 nell'URL (URL decoration) per abilitare il Cross-Domain Tracking e garantire che il Client-ID venga trasferito da 'dominioA.com' a 'dominioB.com'?", 
        options: [
            "Il parametro '?utm_id=' seguito dal tracking ID.", 
            "Il parametro '?_ga=' combinato con l'hash dell'User-ID.", 
            "Il parametro '?_gl=' che contiene una stringa crittografata con il Client-ID e il timestamp.", 
            "Il parametro '?gclid=' generato da Google Ads."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **Il parametro '?_gl=' che contiene una stringa crittografata con il Client-ID e il timestamp.** Quando configuri il cross-domain via interfaccia, GA4 aggiunge automaticamente questo parametro ai link in uscita verso i domini configurati. Il sito di destinazione legge '_gl' e sovrascrive il proprio cookie di prima parte, mantenendo l'utente intatto. Le altre opzioni sono errate: utm_id è usato per il tracking delle campagne marketing importate; _ga veniva usato parzialmente nei vecchi setup ma ora il framework usa specificamente _gl per il linker linker parametrizzato; gclid è il Google Click Identifier esclusivo per l'autotagging di Google Ads, non per le sessioni cross-domain." 
    },
    { 
        q: "Durante la visualizzazione di un'Esplorazione, noti un'icona a scudo rosso o arancione che indica l'applicazione delle 'Data Thresholds' (Soglie di dati). Qual è la causa scatenante più comune di questa limitazione e come puoi aggirarla temporaneamente per vedere i dati reali?", 
        options: [
            "Causa: Alto volume di traffico. Soluzione: Passare a Google Analytics 360.", 
            "Causa: Violazione GDPR nei parametri UTM. Soluzione: Eliminare i dati tramite richiesta al supporto.", 
            "Causa: Attivazione di Google Signals su dataset piccoli. Soluzione: Cambiare l'Identity Reporting in 'Basato sul dispositivo' (Device-based).", 
            "Causa: Utilizzo di dimensioni ad alta cardinalità. Soluzione: Creare un report predefinito anziché un'esplorazione."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **Causa: Attivazione di Google Signals su dataset piccoli. Soluzione: Cambiare l'Identity Reporting in 'Basato sul dispositivo' (Device-based).** Google Signals raccoglie dati demografici, ma Google applica soglie rigorose per impedire l'identificazione di singoli utenti quando i numeri sono bassi. Disattivando l'Identity Reporting Blended a favore del Device-based, i Signals non vengono interrogati per il conteggio utenti, rimuovendo le soglie. Le altre opzioni sono errate: l'alto volume di traffico causa il 'Campionamento' (Sampling), non le Soglie (Thresholds); la violazione GDPR o PII provoca la cancellazione del dato da parte di Google; la cardinalità causa il raggruppamento in (other), non le soglie." 
    },
    { 
        q: "Il Modello di Attribuzione Data-Driven (DDA) è il predefinito in GA4. Quale concetto matematico/teorico sta alla base del calcolo algoritmico utilizzato da Google per assegnare il credito frazionale ai touchpoint?", 
        options: [
            "La catena di Markov (Markov Chains) lineare.", 
            "I valori di Shapley (Shapley Value) derivati dalla teoria dei giochi cooperativi.", 
            "Il decadimento temporale esponenziale (Time Decay).", 
            "L'euristica basata sulla posizione (U-Shape / Position Based)."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **I valori di Shapley (Shapley Value) derivati dalla teoria dei giochi cooperativi.** Il DDA di GA4 analizza tutti i percorsi degli utenti (chi ha convertito e chi no) e usa il modello di Shapley per calcolare il contributo incrementale di ogni singolo canale alla probabilità di conversione finale, distribuendo il merito di conseguenza. Le altre opzioni sono errate: sebbene le catene di Markov siano modelli probabilistici usati storicamente in alcune piattaforme, il DDA di Google si basa esplicitamente su Shapley; il decadimento temporale e l'euristica U-Shape sono modelli di attribuzione 'statici' basati su regole matematiche fisse, deprecati proprio a favore del DDA." 
    },
    { 
        q: "L'analisi del Lifetime Value (LTV) in GA4 presenta limiti temporali specifici che ne influenzano l'output predittivo e storico. Quale affermazione sul calcolo del LTV in GA4 è vera?", 
        options: [
            "Calcola il valore per l'intera vita dell'utente senza limiti storici, purché l'User-ID sia configurato.", 
            "Il calcolo è limitato esclusivamente ai dati degli ultimi 30 giorni precedenti la data della query.", 
            "Le metriche di LTV aggregano il comportamento storico dal momento dell'acquisizione dell'utente, ma solo entro l'arco temporale massimo di 120 giorni dall'acquisizione.", 
            "Richiede obbligatoriamente l'integrazione di dati CRM offline tramite Measurement Protocol per attivarsi."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **Le metriche di LTV aggregano il comportamento storico dal momento dell'acquisizione dell'utente, ma solo entro l'arco temporale massimo di 120 giorni dall'acquisizione.** Questa è una limitazione tecnica vitale delle esplorazioni LTV in GA4 standard: anche se hai 14 mesi di dati, l'analisi del valore a lungo termine si ferma a 120 giorni dalla coorte di acquisizione. Le altre opzioni sono errate: il LTV non analizza l'intera vita storica oltre i 120 giorni nell'interfaccia nativa; non è limitato a soli 30 giorni; non richiede integrazioni offline per funzionare, si basa sugli eventi e-commerce o monetari tracciati nativamente (es. purchase o in_app_purchase)." 
    },
    { 
        q: "Nella tecnica 'Sovrapposizione dei segmenti' (Segment Overlap), qual è il limite strutturale di segmenti contemporanei che possono essere analizzati visivamente nel diagramma di Venn generato?", 
        options: [
            "Fino a 3 segmenti contemporaneamente.", 
            "Fino a 5 segmenti contemporaneamente.", 
            "Non vi è limite numerico, dipende dalle soglie di dati.", 
            "Esattamente 2 segmenti per creare l'intersezione A/B."
        ], 
        correct: [0], 
        explanation: "La risposta corretta è **Fino a 3 segmenti contemporaneamente.** L'interfaccia di esplorazione di GA4 consente di trascinare fino a un massimo di 3 segmenti nella tecnica di sovrapposizione. Questo genera un diagramma di Venn triplo, mantenendo il grafico leggibile. Le altre opzioni sono errate: GA4 impedisce fisicamente il trascinamento di un quarto o quinto segmento in questa specifica tecnica; il limite non è legato alla quantità di dati (soglie) ma all'UI; la sovrapposizione supporta più di 2 segmenti per mostrare intersezioni complesse tra gruppi di utenti distinti." 
    },
    { 
        q: "Il 'Default Channel Grouping' (Raggruppamento dei canali predefinito) in GA4 classifica automaticamente il traffico basandosi su regole stringenti (Regex) su sorgente e mezzo. Se invii traffico con utm_source=newsletter e utm_medium=email, in quale canale predefinito finirà?", 
        options: [
            "Referral", 
            "Direct", 
            "Unassigned", 
            "Email"
        ], 
        correct: [3], 
        explanation: "La risposta corretta è **Email**. Il sistema di regole del Default Channel Grouping di GA4 stabilisce che se il parametro utm_medium corrisponde esattamente a 'email' (o a varianti simili definite nelle regole di sistema come 'e-mail' o 'e_mail'), il traffico viene classificato sistematicamente nel canale 'Email'. Le altre opzioni sono errate: finirebbe in 'Referral' se mancasse UTM e il referrer fosse un dominio web; finirebbe in 'Direct' se non ci fosse referrer e zero UTM; finirerebbe in 'Unassigned' se gli UTM passati non corrispondessero a nessuna delle complesse regole Regex preimpostate da Google." 
    },
    { 
        q: "La Consent Mode 'Avanzata' (Advanced) differisce dalla Consent Mode 'Di base' (Basic). Qual è la differenza fondamentale nel comportamento dei tag GA4 quando l'utente nega il consenso?", 
        options: [
            "In Advanced i tag vengono completamente bloccati (zero dati); in Basic inviano hit anonimizzati.", 
            "In Advanced i tag inviano 'ping' privi di cookie contenenti informazioni funzionali (es. timestamp, user_agent); in Basic i tag sono bloccati e non inviano alcun ping.", 
            "In Advanced il traffico viene esportato in BigQuery con PII; in Basic rimane solo in GA4.", 
            "In Advanced GA4 utilizza automaticamente i cookie di terze parti per aggirare il blocco; in Basic utilizza i LocalStorage."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **In Advanced i tag inviano 'ping' privi di cookie contenenti informazioni funzionali (es. timestamp, user_agent); in Basic i tag sono bloccati e non inviano alcun ping.** Questo è cruciale per la Modellazione Comportamentale: i ping cookieless dell'Advanced permettono a GA4 di usare il machine learning per stimare quanti utenti anonimi hanno convertito. Se usi la Basic (hard block), GA4 è completamente cieco su chi nega il consenso. Le altre opzioni sono errate: l'opzione 0 inverte le definizioni; nessuna versione della Consent Mode permette l'esportazione di PII illegali in BigQuery; nessuna versione aggira illecitamente i blocchi del consenso riattivando i cookie o i LocalStorage." 
    },
    { 
        q: "Qual è il limite massimo per la registrazione di Proprietà Utente (User Properties) distinte all'interno di una singola Proprietà GA4 standard?", 
        options: [
            "10", 
            "25", 
            "50", 
            "Senza limiti"
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **25**. In una proprietà GA4 standard (non 360), sei limitato alla creazione di un massimo di 25 proprietà utente con scope a livello di Utente. Devi scegliere strategicamente quali attributi persistenti del cliente mappare (es. 'piano_abbonamento', 'status_fedeltà'). Le altre opzioni sono errate: il limite di 50 si applica alle dimensioni personalizzate a livello di *Evento*; 10 era un vecchio limite di Universal Analytics per le viste standard; i limiti esistono sempre in GA4 per controllare i costi di storage e l'elaborazione dei dati nel cloud." 
    },
    { 
        q: "Utilizzando il Measurement Protocol (GA4 API) per inviare un evento di conversione offline dal tuo CRM (es. Salesforce), quali sono i due parametri obbligatori che devono essere inclusi nel payload JSON della richiesta HTTP?", 
        options: [
            "user_id e event_name", 
            "api_secret e client_id (o app_instance_id)", 
            "session_id e timestamp_micros", 
            "google_signals_status e consent_mode"
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **api_secret e client_id (o app_instance_id)**. L'API Secret garantisce che la richiesta sia autenticata dal tuo server, mentre il client_id (o app_instance_id per mobile) è fondamentale per ricollegare l'evento offline al cookie originario dell'utente registrato online, attribuendo così la conversione alla corretta campagna marketing originaria. Le altre opzioni sono errate: l'event_name è ovviamente necessario, ma l'user_id non è obbligatorio se hai il client_id; session_id è opzionale (serve solo se vuoi che l'evento offline incrementi le metriche di sessione corrente); i parametri di consenso sono importanti ma non interrompono/invalidano il payload di base come fanno l'assenza di API Secret o identificatori client." 
    },
    { 
        q: "La sezione 'Libreria' (Library) di GA4 permette la personalizzazione della navigazione dei report. Cosa devi fare affinché una nuova 'Raccolta' (Collection) di report personalizzati appaia nel menu laterale di navigazione per tutti gli utenti della Proprietà?", 
        options: [
            "Devi contrassegnare la Raccolta con una stella (Preferiti).", 
            "Devi approvare la Raccolta tramite l'Amministrazione Account in IAM.", 
            "Devi selezionare la Raccolta e cliccare sull'opzione 'Pubblica' (Publish).", 
            "Le raccolte create appaiono automaticamente nel menu laterale senza azioni aggiuntive."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **Devi selezionare la Raccolta e cliccare sull'opzione 'Pubblica' (Publish).** Finché una Raccolta si trova in stato 'Annullata pubblicazione' (Unpublished), essa vive solo come bozza all'interno della Libreria e non è visibile nella barra laterale sinistra dell'interfaccia. Le altre opzioni sono errate: la stellina serve per i report individuali (Homepage) o Esplorazioni, non per l'architettura della barra laterale; le regole IAM gestiscono i permessi utenti, non la UI dei report; l'automatismo è falso, GA4 richiede deliberatamente la pubblicazione per evitare che report in bozza confondano i manager." 
    },
    { 
        q: "Vuoi attivare le 'Metriche Predittive' (Predictive Metrics) in GA4 per creare un pubblico di utenti 'Likely to purchase' (Acquirenti probabili a 7 giorni). Quale prerequisito tecnico sui volumi di conversione devi soddisfare rigorosamente affinché l'algoritmo si attivi?", 
        options: [
            "Avere almeno 10.000 visualizzazioni di pagina univoche nell'arco di 30 giorni.", 
            "Collegare l'account a Google Ads e spendere almeno 1.000€ in campagne attive.", 
            "Registrare almeno 1.000 utenti che hanno attivato l'evento di acquisto (purchase) e almeno 1.000 utenti che NON lo hanno fatto, in un intervallo continuo di 7 giorni, negli ultimi 28 giorni.", 
            "Avere l'integrazione BigQuery attiva e il modello Data-Driven impostato per almeno 90 giorni."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **Registrare almeno 1.000 utenti che hanno attivato l'evento di acquisto (purchase) e almeno 1.000 utenti che NON lo hanno fatto, in un intervallo continuo di 7 giorni, negli ultimi 28 giorni.** Il Machine Learning di GA4 necessita di un campione statisticamente rilevante di 'successi' e 'fallimenti' recenti per addestrare il modello predittivo e riconoscere i pattern comportamentali. Le altre opzioni sono errate: le visualizzazioni di pagina non addestrano algoritmi di e-commerce; la spesa in Ads non c'entra con il tracking comportamentale on-site di GA4; BigQuery e il modello DDA non sono prerequisiti per la generazione dei pubblici predittivi nativi dell'interfaccia." 
    },
    { 
        q: "L'integrazione di Google Search Console in GA4 fornisce due report cruciali: 'Query di ricerca organica' e 'Traffico di ricerca organica di Google'. Qual è il limite strutturale noto del collegamento tra queste due piattaforme?", 
        options: [
            "I dati di Search Console si azzerano ogni 90 giorni all'interno di GA4.", 
            "È possibile collegare un solo Flusso di dati Web di GA4 a una sola Proprietà di Search Console e viceversa (rapporto 1:1).", 
            "I clic riportati in Search Console non potranno mai essere inferiori alle sessioni riportate in GA4, pena la disconnessione.", 
            "I dati della Search Console vengono oscurati se la Consent Mode è in stato 'Avanzato'."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **È possibile collegare un solo Flusso di dati Web di GA4 a una sola Proprietà di Search Console e viceversa (rapporto 1:1).** Se possiedi più sotto-domini su flussi diversi, non puoi aggregare l'intera Search Console Domain Property a tutti contemporaneamente in un solo passaggio nativo. Le altre opzioni sono errate: i dati SC in GA4 persistono in base alla retention massima consentita per le esplorazioni (14 mesi) pur rispecchiando i 16 mesi nativi di SC; è normalissimo e fisiologico che i clic di SC differiscano dalle sessioni GA4 a causa dei tempi di caricamento o cookie blocker; la Consent Mode influisce sugli hit di Google Analytics, non sui clic pre-landing misurati lato motore di ricerca in SC." 
    },
    { 
        q: "Quale affermazione descrive fedelmente la funzione e l'utilità degli 'Audience Triggers' (Attivatori di pubblico) in GA4?", 
        options: [
            "Permettono di inviare notifiche push via Firebase quando un utente abbandona il carrello.", 
            "Generano dinamicamente un nuovo evento su GA4 nel momento esatto in cui un utente soddisfa i criteri per entrare a far parte di uno specifico pubblico, permettendoti di segnarlo come Evento Chiave.", 
            "Modificano in tempo reale l'HTML della pagina web per mostrare pop-up personalizzati in base al segmento.", 
            "Attivano o disattivano i tag in Google Tag Manager basandosi sui cookie di terze parti."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **Generano dinamicamente un nuovo evento su GA4 nel momento esatto in cui un utente soddisfa i criteri per entrare a far parte di uno specifico pubblico, permettendoti di segnarlo come Evento Chiave.** È uno strumento di macro-automazione: ad esempio, quando un utente legge 5 articoli (entrando nell'Audience 'Avidi Lettori'), GA4 spara l'evento 'lettore_fidelizzato' che puoi usare per ottimizzare le campagne Ads verso utenti di alta qualità. Le altre opzioni sono errate: le notifiche push richiedono piattaforme di CRM/Messaging o Cloud Messaging; la modifica dell'HTML è compito di Google Optimize (deprecato) o tool di CRO, non di GA4; l'attivazione dei tag spetta al Data Layer o alla Consent Mode in GTM, non a GA4 retroattivamente." 
    },
    { 
        q: "Nella configurazione 'Modifica Eventi' (Modify Events) situata nell'area di Amministrazione, vuoi correggere un errore di battitura e trasformare tutti gli eventi in entrata 'add_to_cart_error' nel nome standard 'add_to_cart'. Come viene elaborata questa modifica da GA4?", 
        options: [
            "Viene elaborata lato client dal browser prima dell'invio del payload.", 
            "Viene elaborata lato server da GA4 in fase di elaborazione dati, applicandosi retroattivamente a tutto lo storico passato.", 
            "Viene elaborata lato server all'ingresso dei dati, influenzando esclusivamente i dati futuri raccolti dal momento della configurazione in poi.", 
            "Richiede l'approvazione manuale dell'analista ogni 24 ore prima di riflettersi nei report."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **Viene elaborata lato server all'ingresso dei dati, influenzando esclusivamente i dati futuri raccolti dal momento della configurazione in poi.** Tutte le regole create in Modify/Create Events agiscono sul flusso di elaborazione al momento della ricezione. GA4 non altera mai i dati storici già processati e immagazzinati nel database. Le altre opzioni sono errate: l'elaborazione avviene sui server di Google, non nel browser (questo lo fa GTM); la retroattività è tecnicamente impossibile nell'architettura standard di modifica eventi di GA4; non vi è alcun flusso di approvazione manuale per le regole di routing degli eventi." 
    },
    { 
        q: "L'Importazione Dati (Data Import) in GA4 supporta diverse tipologie di dataset esterni. Quali tra i seguenti NON è attualmente un tipo di dati importabile nativamente nell'interfaccia?", 
        options: [
            "Dati sui costi (Cost data) provenienti da campagne pubblicitarie non-Google (es. Facebook Ads).", 
            "Dati sugli articoli (Item data) per arricchire il catalogo e-commerce (es. margine di profitto, taglie).", 
            "Dati offline di eventi utente, tramite CSV, per riconciliare conversioni in negozio (Offline user events).", 
            "Dati sulle password utente e storici chat PII in formato crittografato AES."
        ], 
        correct: [3], 
        explanation: "La risposta corretta è **Dati sulle password utente e storici chat PII in formato crittografato AES.** Le policy di Google vietano categoricamente, senza eccezioni, l'invio e l'immagazzinamento di informazioni di identificazione personale (PII) come password o chat decifrabili, pena la cancellazione dei dati e sospensione dell'account. Le altre opzioni sono errate in quanto rappresentano esattamente i tipi di dati che PUOI e dovresti importare: Cost Data per analisi ROAS, Item Data per alleggerire i payload degli eventi arricchendo i dettagli dei prodotti lato server, e Offline Events importabili tramite SFTP o CSV manuale." 
    },
    { 
        q: "Attivando Google Signals, accetti politiche rigorose sull'utilizzo dei dati. In quale settore merceologico specifico Google applica limitazioni severe o impedisce del tutto l'utilizzo dei segmenti di pubblico (remarketing) creati tramite Signals?", 
        options: [
            "Software as a Service (SaaS) B2B.", 
            "E-commerce di abbigliamento e fast fashion.", 
            "Salute, finanza personale sensibile e reclutamento (YMYL categories).", 
            "Turismo e prenotazioni alberghiere a lungo termine."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **Salute, finanza personale sensibile e reclutamento (YMYL categories).** Per motivi etici e legali, le policy di Google relative alla pubblicità personalizzata (Personalized Advertising) vietano categoricamente di fare remarketing basato su condizioni mediche, orientamento sessuale, difficoltà finanziarie o categorie marginalizzate. Sebbene tu possa raccogliere dati analitici, i Pubblici esportati per Ads verranno disabilitati. Le altre opzioni sono errate in quanto SaaS, abbigliamento e turismo sono settori ampiamente idonei per il remarketing dinamico senza restrizioni etiche insite nei loro mercati." 
    },
    { 
        q: "Quante Dimensioni Personalizzate (Custom Dimensions) basate sull'evento (event-scoped) e quante basate sull'utente (user-scoped) puoi creare in una Proprietà GA4 standard?", 
        options: [
            "50 event-scoped e 50 user-scoped.", 
            "50 event-scoped e 25 user-scoped.", 
            "100 event-scoped e 100 user-scoped.", 
            "Nessun limite prefissato, dipendono dal piano tariffario."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **50 event-scoped e 25 user-scoped.** Questi sono i limiti hard-coded per le proprietà gratuite. È fondamentale mappare accuratamente i parametri in GTM affinché convergano in queste dimensioni, riutilizzando i parametri laddove possibile (es. un parametro 'categoria_contenuto' usato sia per eventi scroll che click). Le altre opzioni sono errate: 50/50 non è il limite corretto; limiti maggiori come 100 o superiori spettano alle proprietà Google Analytics 360 (Enterprise), che offrono 125 event-scoped e 100 user-scoped." 
    },
    { 
        q: "In base a quale metrica tecnica precisa viene calcolato il parametro nascosto 'engagement_time_msec' inviato da GA4 ai server durante il ciclo di vita della pagina?", 
        options: [
            "Sulla base dei movimenti del mouse dell'utente ogni 3 secondi.", 
            "Dal tempo in cui la pagina web si trova in stato 'visible' o l'app è in 'foreground' (primo piano).", 
            "Dal momento esatto in cui inizia il caricamento del DOM fino al trigger 'Window Loaded'.", 
            "Dal tempo totale intercorso tra il primo e l'ultimo evento inviato nella sessione (differenza di timestamp)."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **Dal tempo in cui la pagina web si trova in stato 'visible' o l'app è in 'foreground' (primo piano).** GA4 utilizza l'API Page Visibility del browser. Se l'utente apre il tuo sito, ma poi cambia scheda (tab) per guardare YouTube, il timer di GA4 si sospende istantaneamente perché il tab è in 'background'. Riprende quando l'utente torna. Le altre opzioni sono errate: i movimenti del mouse venivano usati da script custom anti-idle in UA, ma GA4 è nativo sull'API visibility; il DOM loaded è una metrica di performance di caricamento, non di interazione; la differenza di timestamp era il metodo imperfetto usato dal vecchio Universal Analytics (che causava tempi pari a 0 sui rimbalzi)." 
    },
    { 
        q: "Cosa distingue operativamente i 'Pubblici' (Audiences) dai 'Segmenti' all'interno dell'ecosistema GA4?", 
        options: [
            "I Pubblici si applicano solo alle app mobili, i Segmenti al web.", 
            "I Segmenti sono liste di utenti esportabili in Google Ads; i Pubblici sono usati solo nell'interfaccia.", 
            "I Segmenti sono filtri retroattivi utilizzabili solo nelle Esplorazioni; i Pubblici si popolano dal momento della creazione in poi e possono essere condivisi con le piattaforme Ads per il remarketing.", 
            "Non vi è alcuna differenza, sono sinonimi all'interno della Libreria."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **I Segmenti sono filtri retroattivi utilizzabili solo nelle Esplorazioni; i Pubblici si popolano dal momento della creazione in poi e possono essere condivisi con le piattaforme Ads per il remarketing.** Se crei oggi un Segmento per 'Utenti da Milano', puoi immediatamente analizzare come si sono comportati il mese scorso in una tabella. Se crei oggi un Pubblico 'Utenti da Milano', esso partirà da zero e si riempirà man mano che nuovi utenti soddisfano la condizione, accumulandoli per l'uso pubblicitario. Le altre opzioni sono errate: entrambi si applicano a Web e App; la descrizione della seconda opzione inverte esattamente i due concetti; non sono sinonimi." 
    },
    { 
        q: "Nel modello di attribuzione 'Ultimo Clic cross-channel' (Cross-channel Last Click) presente nei report GA4 standard, come viene gestito l'ingresso di un utente tramite traffico 'Direct' se l'utente aveva precedentemente cliccato su una campagna Facebook 3 giorni prima?", 
        options: [
            "La conversione viene attribuita al 100% al canale 'Direct' poiché è stata l'ultima azione cronologica.", 
            "Il traffico 'Direct' viene ignorato, e il merito del 100% della conversione viene attribuito retroattivamente alla campagna Facebook.", 
            "Il valore viene diviso 50/50 tra Direct e Facebook.", 
            "La conversione viene scartata per conflitto di attribuzione."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **Il traffico 'Direct' viene ignorato, e il merito del 100% della conversione viene attribuito retroattivamente alla campagna Facebook.** Il modello 'Ultimo clic cross-channel' nativo di Google Analytics storicamente applica la regola del 'Last Non-Direct Click' (Ultimo clic non diretto). Se l'ultima visita è un ingresso diretto senza referrer, GA4 va a cercare la sorgente valida precedente (nel limite della finestra di attribuzione) per darle il merito. Le altre opzioni sono errate: attribuire a Direct accadrebbe solo se l'utente non avesse alcun tracciato storico; dividere il merito non è prerogativa del Last Click, ma di modelli algoritmici o lineari." 
    },
    { 
        q: "Un eccessivo volume di traffico classificato come 'Direct' (Direct/None) è sintomo di un'errata configurazione analitica. Quali tra i seguenti scenari tecnici NON provoca un aumento del traffico Direct?", 
        options: [
            "L'utente passa da un sito ospitato su protocollo HTTPS a un tuo sito su protocollo HTTP.", 
            "Mancata o errata codifica dei parametri UTM nelle campagne email (es. Mailchimp non configurato).", 
            "Navigazione da applicazioni mobile di messaggistica (es. WhatsApp, Telegram) che non passano l'header Referrer.", 
            "L'utente clicca su un risultato SEO organico su Google usando la modalità navigazione in Incognito."
        ], 
        correct: [3], 
        explanation: "La risposta corretta è **L'utente clicca su un risultato SEO organico su Google usando la modalità navigazione in Incognito.** La navigazione in incognito blocca i cookie passati o storici, ma il motore di ricerca di Google invia regolarmente l'header Referrer (identificandosi come google/organic) alla pagina di destinazione, permettendo a GA4 di classificarlo correttamente. Le altre opzioni sono errate perché esse CAUSANO l'aumento del Direct: il downgrade della sicurezza (HTTPS > HTTP) uccide l'header referrer per specifiche W3C; l'assenza di UTM su fonti non-web (email) non genera referrer; le app native come WhatsApp disperdono il contesto dell'origine se prive di UTM traccianti." 
    },
    { 
        q: "Hai configurato con successo l'estrazione e l'invio dell'identificativo 'User-ID' su GA4 post-login. Per rispettare rigorosamente i Termini di Servizio di Google, come deve essere formattato questo dato prima dell'invio dal tuo Data Layer?", 
        options: [
            "Deve essere l'indirizzo email in chiaro dell'utente per permettere l'incrocio con Google Ads.", 
            "Deve essere un ID alfanumerico univoco e non intellegibile generato dal tuo CRM (es. hash o codice progressivo).", 
            "Deve contenere nome e cognome separati da un underscore.", 
            "Deve corrispondere al Client-ID generato dal cookie _ga."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **Deve essere un ID alfanumerico univoco e non intellegibile generato dal tuo CRM (es. hash o codice progressivo).** Le policy PII di Google proibiscono l'invio di dati che Google potrebbe utilizzare o riconoscere come dati personali diretti in chiaro (email, telefoni, nomi). Usare un ID interno garantisce l'anonimizzazione lato Google Analytics, pur permettendoti di riunire i dati incrociandoli offline nel tuo CRM. Le altre opzioni sono errate: inviare l'email in chiaro o il nome viola le policy PII e porta alla chiusura dell'account; usare il Client-ID vanifica il concetto di User-ID, in quanto il client-ID è legato al singolo browser, non alla persona cross-device." 
    },
    { 
        q: "Quando si invia una richiesta di 'Eliminazione dei dati' (Data Deletion Request) nell'amministrazione per rimuovere un parametro PII raccolto per errore, come gestisce GA4 la tempistica dell'operazione?", 
        options: [
            "Elimina i dati istantaneamente e non offre possibilità di recupero.", 
            "Mette la richiesta in 'Anteprima' immediata, offrendo un periodo di grazia di 7 giorni prima che l'eliminazione dei dati diventi definitiva.", 
            "Richiede l'intervento di un operatore umano del supporto Google che processerà la richiesta entro 30 giorni.", 
            "Applica un filtro in tempo reale sui report nascondendo i dati, pur mantenendoli intatti nei server."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **Mette la richiesta in 'Anteprima' immediata, offrendo un periodo di grazia di 7 giorni prima che l'eliminazione dei dati diventi definitiva.** Questo permette agli analisti di verificare l'anteprima (Preview) e assicurarsi di non aver erroneamente selezionato di cancellare eventi vitali invece del singolo parametro inquinato. Le altre opzioni sono errate: non è istantanea proprio per evitare danni irreversibili accidentali; non richiede supporto umano ma è un task automatizzato lato server; distrugge fisicamente il dato dal database al termine dei 7 giorni, non lo maschera soltanto tramite un filtro UI." 
    },
    { 
        q: "In GA4, per l'e-commerce, parametri come 'item_name', 'price', e 'quantity' sono contenuti in un array chiamato 'items'. Quale affermazione descrive correttamente il funzionamento tecnico delle dimensioni basate sugli articoli (Item-scoped dimensions)?", 
        options: [
            "GA4 crea automaticamente dimensioni personalizzate per ogni parametro immesso nell'array 'items'.", 
            "Richiedono obbligatoriamente l'integrazione con il feed di Google Merchant Center per attivarsi nei report.", 
            "GA4 supporta nativamente le dimensioni standard degli articoli (es. Categoria e Marca) ma permette la creazione di ulteriori dimensioni personalizzate basate sull'articolo (Item-scoped Custom Dimensions) registrandole nell'interfaccia.", 
            "Gli elementi all'interno dell'array 'items' non possono essere collegati agli eventi di page_view."
        ], 
        correct: [2], 
        explanation: "La risposta corretta è **GA4 supporta nativamente le dimensioni standard degli articoli (es. Categoria e Marca) ma permette la creazione di ulteriori dimensioni personalizzate basate sull'articolo (Item-scoped Custom Dimensions) registrandole nell'interfaccia.** Ad esempio, se invii un parametro custom come 'taglia_scarpe' dentro l'array items in un evento 'purchase', devi creare una dimensione personalizzata 'Item-scoped' per vederla nei report. Le altre opzioni sono errate: GA4 non crea dimensioni custom automaticamente, devi configurarle; l'integrazione del Merchant Center serve per Google Ads e Shopping, non è un prerequisito per l'analisi e-commerce di GA4; gli item possono essere associati e analizzati con vari eventi a patto che il payload JSON lo includa." 
    },
    { 
        q: "Se un utente lascia aperta la pagina web in background mentre va a pranzo, come reagisce il calcolo del timeout della sessione predefinito di GA4 e come può essere modificato?", 
        options: [
            "Scade in modo immutabile dopo 30 minuti di inattività in background.", 
            "Scade dopo 30 minuti di inattività in primo o secondo piano, ma questo parametro può essere esteso fino a un massimo di 7 ore e 55 minuti nelle impostazioni del Flusso di Dati.", 
            "La sessione non scade finché il tab del browser rimane aperto.", 
            "La sessione viene azzerata automaticamente allo scoccare della mezzanotte, ignorando l'inattività."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **Scade dopo 30 minuti di inattività in primo o secondo piano, ma questo parametro può essere esteso fino a un massimo di 7 ore e 55 minuti nelle impostazioni del Flusso di Dati.** Questo setting è fondamentale per siti che ospitano contenuti di lunghissima durata (es. dirette streaming, lunghi documentari) dove un utente potrebbe non interagire col mouse per più di mezz'ora pur essendo 'attivo' nella fruizione. Le altre opzioni sono errate: il tempo è modificabile, non immutabile; il browser aperto non inganna GA4 a causa del ping/heartbeat assente e il timeout scatta; il reset di mezzanotte era una regola fondamentale di Universal Analytics ma è stata eliminata definitivamente dall'architettura basata sugli eventi di GA4." 
    },
    { 
        q: "Un'agenzia collega una proprietà GA4 con elevato traffico a Google Looker Studio tramite il connettore nativo. I report iniziano a restituire errori e a non caricarsi. Qual è la causa architetturale più probabile introdotta da Google su GA4?", 
        options: [
            "L'agenzia non ha pagato la licenza del Data Studio Pro.", 
            "Il limite imposto dalle Quote API di GA4 (Data API Quotas), che bloccano le dashboard quando si fanno troppe richieste simultanee al database standard.", 
            "La scadenza automatica dei token di sicurezza di Google OAuth2.", 
            "L'incompatibilità del linguaggio SQL nativo di Looker Studio con il JSON di GA4."
        ], 
        correct: [1], 
        explanation: "La risposta corretta è **Il limite imposto dalle Quote API di GA4 (Data API Quotas), che bloccano le dashboard quando si fanno troppe richieste simultanee al database standard.** Google ha introdotto limiti rigorosi sulle query API per prevenire sovraccarichi sui propri server. Una dashboard Looker Studio complessa, condivisa tra molti utenti, esaurirà rapidamente questi 'token API', causando l'errore 'Quota Exhausted'. Le altre opzioni sono errate: Looker Studio base è gratuito; i token OAuth si rinnovano automaticamente; il connettore nativo non usa SQL ma invia richieste formattate alla Data API, quindi non vi è alcuna incompatibilità di linguaggio." 
    }
];