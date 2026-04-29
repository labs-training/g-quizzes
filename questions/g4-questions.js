
const Quiz = "Preparazione Certificazione GA4 - Corso 2026";
const questionBank = [
    // 1-10 Struttura, Eventi e Setup
    { 
        q: "Un'azienda che gestisce sia un sito web di e-commerce che un'applicazione mobile nativa vuole consolidare il monitoraggio per analizzare il customer journey completo. Qual è la struttura gerarchica corretta da implementare in Google Analytics 4 per raggiungere questo obiettivo?", 
        options: ["Creare un Account, due Proprietà separate e una Vista globale", "Creare un Account, una Proprietà e due Flussi di dati (uno per il Web e uno per l'App)", "Configurare un'Organizzazione con due Account distinti collegati tramite Firebase", "Utilizzare una Proprietà e inviare tutti i dati a un'unica Vista utilizzando i filtri di dominio"], 
        correct: [1], 
        explanation: "In Google Analytics 4, il concetto di 'Vista' è stato rimosso. La struttura ottimale prevede un'unica Proprietà che funge da contenitore per diversi 'Flussi di dati' (Data Streams). Questo permette a GA4 di unificare i dati provenienti da piattaforme diverse (iOS, Android, Web) sotto lo stesso set di report, facilitando l'analisi cross-piattaforma e l'attribuzione corretta del percorso utente." 
    },
    { 
        q: "Hai deciso di contrassegnare l'evento 'generate_lead' come 'Evento Chiave' (Key Event). Qual è l'impatto principale di questa azione all'interno dei report standard e delle strategie di marketing collegate?", 
        options: ["L'evento verrà rimosso dai report di coinvolgimento per evitare duplicati", "GA4 inizierà a calcolare il valore monetario dell'evento basandosi sulla media del settore", "L'evento apparirà nei report di attribuzione e potrà essere importato in Google Ads per l'ottimizzazione delle offerte", "Il sistema smetterà di tracciare gli altri eventi per dare priorità a quelli chiave"], 
        correct: [2], 
        explanation: "Gli Eventi Chiave (precedentemente chiamati conversioni) sono i pilastri della misurazione del successo in GA4. Contrassegnare un evento come chiave permette al sistema di includerlo nei report sulla pubblicità e sull'attribuzione, consentendo di capire quali canali generano i risultati più importanti. Inoltre, solo gli eventi chiave possono essere esportati in Google Ads per istruire gli algoritmi di bidding a ottimizzare le campagne verso quelle specifiche azioni." 
    },
    { 
        q: "La funzionalità di 'Misurazione Avanzata' (Enhanced Measurement) è attiva per impostazione predefinita nel tuo flusso di dati web. Quali delle seguenti interazioni utente vengono tracciate automaticamente senza dover modificare il codice del sito o il GTM?", 
        options: ["Acquisti e-commerce e transazioni andate a buon fine", "Click su link in uscita, download di file e profondità di scorrimento (scroll)", "Login dell'utente e compilazione di moduli di carta di credito", "Invio di form personalizzati e interazioni con chatbot di terze parti", "Ricerche sul sito e interazioni con i video di YouTube incorporati"], 
        correct: [1, 4], 
        explanation: "La Misurazione Avanzata è una funzione potente che riduce la necessità di tag manuali. Include automaticamente: 1. Visualizzazioni di pagina. 2. Scroll (al 90% della profondità). 3. Click in uscita (Outbound clicks). 4. Ricerca sul sito (basata sui parametri URL). 5. Coinvolgimento con i video (per i video YouTube con API abilitata). 6. Download di file. Non include invece transazioni e-commerce o dati sensibili come i login, che richiedono un'implementazione specifica." 
    },
    { 
        q: "Un analista dati deve eseguire query SQL complesse sui dati grezzi di GA4 per unire i dati web con i dati del magazzino fisico (offline). Quale integrazione nativa di GA4 abilita questa possibilità a livello granulare?", 
        options: ["Il collegamento con Google Search Console", "L'esportazione verso BigQuery", "L'integrazione con Data Studio tramite connettore diretto", "L'attivazione dei dati di Google Signals"], 
        correct: [1], 
        explanation: "L'integrazione con BigQuery è fondamentale per l'analisi avanzata. Mentre l'interfaccia di GA4 mostra dati aggregati e spesso soggetti a soglie di privacy o campionamento, l'esportazione in BigQuery fornisce accesso ai dati grezzi a livello di singolo evento e singolo utente. Questo permette di superare i limiti dell'interfaccia, conservare i dati oltre i 14 mesi e unire le analisi web con database esterni (come CRM o gestionali aziendali)." 
    },
    { 
        q: "In Google Analytics 4, una sessione viene definita 'con coinvolgimento' (Engaged Session) solo se soddisfa determinati parametri di qualità. Quali sono i requisiti necessari affinché una sessione venga conteggiata come tale?", 
        options: ["L'utente deve scorrere almeno il 50% della pagina iniziale", "La sessione deve durare almeno 10 secondi sul sito o nell'app", "L'utente deve visualizzare almeno 2 pagine o schermate distinte", "L'utente deve attivare almeno un Evento Chiave (Key Event)", "L'utente deve provenire da una campagna a pagamento"], 
        correct: [1, 2, 3], 
        explanation: "La 'Sessione con coinvolgimento' è la metrica che sostituisce concettualmente la validità della visita rispetto alla vecchia frequenza di rimbalzo. GA4 considera una sessione coinvolta se: 1. Dura più di 10 secondi. 2. Oppure ha generato almeno un Evento Chiave. 3. Oppure ha registrato almeno 2 visualizzazioni di pagina/schermata. Questo approccio è più accurato perché riconosce il valore anche di un utente che legge un lungo articolo (oltre 10 secondi) senza necessariamente cambiare pagina." 
    },
    { 
        q: "Durante la configurazione di nuovi eventi personalizzati tramite Google Tag Manager, quale strumento interno all'interfaccia di GA4 dovresti utilizzare per convalidare l'invio corretto dei parametri prima di pubblicare le modifiche?", 
        options: ["Il report in Tempo Reale (Real-time)", "L'esplorazione del percorso (Path Exploration)", "La funzionalità DebugView", "Il report di conformità dei dati"], 
        correct: [2], 
        explanation: "La DebugView è lo strumento di diagnostica per eccellenza. A differenza del report Real-time, che aggrega tutti gli utenti, la DebugView isola i dati provenienti dal tuo specifico dispositivo (quando la modalità debug è attiva). Ti permette di vedere una timeline dettagliata di ogni evento inviato, inclusi tutti i parametri e le proprietà utente associati, assicurando che la configurazione sia perfetta prima di renderla definitiva per tutto il traffico." 
    },
    { 
        q: "Per motivi di conformità GDPR e analisi storica, un'azienda desidera sapere per quanto tempo i dati a livello di utente e di evento (es. i segmenti di esplorazione) rimangono disponibili prima di essere eliminati automaticamente dai server di GA4 standard.", 
        options: ["Sempre 2 mesi, non è modificabile", "Di default 2 mesi, ma può essere estesa a 14 mesi", "Fino a un massimo di 50 mesi per tutte le proprietà", "I dati non vengono mai eliminati in GA4"], 
        correct: [1], 
        explanation: "La conservazione dei dati (Data Retention) in GA4 standard ha un limite massimo di 14 mesi per i dati legati a cookie, identificatori utente e identificatori pubblicitari. Di base, molte proprietà sono impostate su 2 mesi; è fondamentale cambiare questa impostazione a 14 mesi nelle impostazioni della Proprietà per poter effettuare analisi comparative anno su anno nelle 'Esplorazioni'. Nota: i report standard aggregati non sono influenzati da questa scadenza." 
    },
    { 
        q: "GA4 utilizza diversi 'Identity Spaces' per cercare di riconoscere un utente che naviga prima da mobile e poi da desktop. In quale ordine di priorità il sistema valuta questi identificatori se sono tutti configurati?", 
        options: ["Indirizzo IP > Cookie > User-ID", "User-ID > Google Signals > Device ID > Modellazione", "Google Signals > User-ID > Device ID", "Solo ed esclusivamente il Device ID"], 
        correct: [1], 
        explanation: "GA4 utilizza un sistema gerarchico per l'identità: 1. User-ID (se fornito dal tuo sistema di login, è il più preciso). 2. Google Signals (dati dagli utenti Google che hanno attivato la personalizzazione degli annunci). 3. Device ID (basato sui cookie del browser o ID istanza app). 4. Modellazione (se il consenso non è fornito). Questa logica permette di ridurre drasticamente il conteggio duplicato degli utenti e fornire una visione reale del comportamento cross-device." 
    },
    { 
        q: "Il team tecnico vuole assicurarsi che i dati nei report non siano inquinati dalle sessioni di test effettuate dagli sviluppatori che lavorano su un IP statico aziendale. Qual è la procedura corretta?", 
        options: ["Cancellare manualmente i dati ogni fine settimana", "Definire il traffico interno nelle impostazioni del Flusso di dati (IP) e poi attivare il Filtro Dati in stato 'Attivo'", "Utilizzare un'estensione del browser su tutti i PC aziendali", "Creare una Proprietà GA4 dedicata solo al team tecnico"], 
        correct: [1], 
        explanation: "La procedura corretta prevede due passaggi: prima si istruisce GA4 su quali siano gli indirizzi IP aziendali (identificandoli con un parametro come 'internal'), poi si va nella sezione 'Filtri dati' della Proprietà per attivare il filtro che esclude il traffico marcato con quel parametro. Finché il filtro è in modalità 'Testing', i dati vengono raccolti ma etichettati; solo quando passa a 'Attivo' il traffico viene rimosso definitivamente dai report." 
    },
    { 
        q: "Stai visualizzando un report personalizzato e noti che molte righe sono state raggruppate sotto la voce '(other)'. Da cosa dipende questo fenomeno e come può essere evitato?", 
        options: ["È dovuto a un errore nel codice di tracciamento", "Si verifica quando una dimensione ha una cardinalità troppo elevata e supera i limiti di elaborazione giornalieri", "Dipende dal fatto che gli utenti non hanno accettato i cookie", "Significa che il campionamento è attivo al 100%"], 
        correct: [1], 
        explanation: "La riga '(other)' compare a causa della 'Cardinalità elevata'. Si verifica quando una dimensione (es. l'URL della pagina o un ID transazione) ha migliaia di valori univoci. GA4, per garantire la velocità dei report, raggruppa i valori meno frequenti in questa riga generica. Per evitarlo, è bene non inviare dati troppo granulari come parametri di dimensione (es. timestamp o ID sessione univoci) o utilizzare BigQuery per l'analisi dei dati grezzi." 
    },

    // 11-20 Esplorazioni e Analisi
    { 
        q: "Quale tecnica di Esplorazione è specificamente progettata per analizzare come gli utenti si muovono tra i vari passaggi di un processo di checkout, evidenziando dove avviene il maggiore abbandono?", 
        options: ["Esplorazione del percorso (Path)", "Esplorazione a imbuto (Funnel Exploration)", "Analisi di coorte", "Esplorazione in formato libero"], 
        correct: [1], 
        explanation: "L'Esplorazione a imbuto (Funnel) è lo strumento perfetto per visualizzare i tassi di abbandono e di completamento in una sequenza di passaggi definiti. Permette di identificare criticità in processi lineari (come acquisti, registrazioni o funnel di lead generation) e di confrontare il comportamento di diversi segmenti (es. utenti mobile vs desktop) all'interno dello stesso imbuto." 
    },
    { 
        q: "Vuoi analizzare la fidelizzazione degli utenti che si sono registrati al sito durante la settimana del Black Friday, verificando se tornano a interagire nelle settimane successive. Quale metodo di analisi è più indicato?", 
        options: ["Sovrapposizione dei segmenti", "Esplorazione del ciclo di vita", "Analisi di coorte (Cohort Exploration)", "Report Acquisizione Traffico"], 
        correct: [2], 
        explanation: "L'analisi di coorte raggruppa gli utenti in base a una caratteristica comune (es. la data della prima acquisizione) e ne osserva il comportamento nel tempo. È lo standard per misurare la 'Retention' (fidelizzazione), permettendo di capire se le strategie di acquisizione portano utenti di valore che tornano sul sito o se l'interesse svanisce rapidamente dopo il primo contatto." 
    },
    { 
        q: "Nel report 'Pagine e schermate', la metrica principale è 'Visualizzazioni'. Se volessi invece analizzare quali sono le pagine che fungono da 'porta d'ingresso' principale per le sessioni degli utenti, quale dimensione dovresti consultare?", 
        options: ["Pagina di destinazione (Landing Page)", "Percorso pagina e classe schermata", "Titolo pagina e nome dell'evento", "Pagina di uscita"], 
        correct: [0], 
        explanation: "La dimensione 'Landing Page' (Pagina di destinazione) è fondamentale per il marketing. Mentre 'Pagine e schermate' mostra il volume totale di visite su ogni URL, la 'Landing Page' isola solo la prima pagina visualizzata all'inizio di una sessione. Questo aiuta a valutare l'efficacia delle campagne pubblicitarie o del posizionamento SEO nel portare traffico qualificato verso pagine specifiche del sito." 
    },
    { 
        q: "In Universal Analytics la 'Frequenza di rimbalzo' (Bounce Rate) indicava sessioni con una sola interazione. In GA4, come viene calcolata questa metrica e come si relaziona con il 'Tasso di coinvolgimento'?", 
        options: ["È calcolata nello stesso identico modo di UA", "È l'esatto opposto (complemento a 100) del Tasso di coinvolgimento", "Indica la percentuale di utenti che disattivano i JavaScript", "Rappresenta il tempo medio di caricamento della pagina"], 
        correct: [1], 
        explanation: "In GA4, la Frequenza di rimbalzo è stata ridefinita per essere più utile: è la percentuale di sessioni che NON sono state 'con coinvolgimento'. Ad esempio, se il tuo Tasso di coinvolgimento è del 70% (ovvero il 70% degli utenti è rimasto >10s, ha visto 2 pagine o convertito), la Frequenza di rimbalzo sarà automaticamente del 30%. È un cambio di paradigma: ci si concentra su quanto l'utente interagisce, non solo su quanto scappa." 
    },
    { 
        q: "Devi riferire al tuo responsabile quanti utenti 'nuovi di zecca' sono arrivati sul sito grazie a una specifica campagna social. Quale dimensione di acquisizione dovresti utilizzare per assicurarti di contare solo il canale che ha generato il primo contatto assoluto?", 
        options: ["Sorgente sessione", "Primo mezzo utente (First user medium)", "Mezzo della sessione", "Sorgente evento"], 
        correct: [1], 
        explanation: "GA4 distingue tra 'Acquisizione Utenti' e 'Acquisizione Traffico'. Le dimensioni che iniziano con 'Primo utente...' (es. Primo mezzo utente) attribuiscono il merito al canale che ha portato l'utente sul sito per la prima volta in assoluto. Le dimensioni legate alla 'Sessione' attribuiscono invece il merito al canale che ha avviato la visita attuale. Per l'analisi della brand awareness e della prima scoperta, si usano sempre le dimensioni 'Primo utente'." 
    },
    { 
        q: "Stai lavorando su un'Esplorazione con un volume di dati molto elevato e appare un'icona a forma di scudo giallo. Cosa significa per l'accuratezza dei tuoi dati?", 
        options: ["I dati sono incompleti perché il server è in manutenzione", "L'esplorazione è basata su dati campionati, ovvero un sottoinsieme del traffico totale", "I dati sono protetti da password", "Ci sono troppi errori JavaScript nel sito"], 
        correct: [1], 
        explanation: "Il campionamento (Sampling) avviene quando GA4 deve elaborare milioni di righe di dati per un'esplorazione complessa. Invece di analizzare il 100% dei dati (che richiederebbe troppo tempo), analizza un campione rappresentativo e stima il totale. Sebbene sia accurato per le tendenze generali, per dati precisi al centesimo è necessario ridurre l'intervallo di tempo o utilizzare BigQuery, dove il campionamento non viene applicato." 
    },
    { 
        q: "Il modello di attribuzione predefinito nelle proprietà GA4 è il 'Basato sui dati' (Data-driven). Qual è il vantaggio principale di questo modello rispetto all'Ultimo Clic?", 
        options: ["Dà tutto il merito all'ultimo annuncio cliccato", "Utilizza algoritmi di machine learning per distribuire il merito della conversione tra i vari touchpoint in base alla loro influenza reale", "Ignora completamente il traffico diretto", "Attribuisce la conversione solo al primo canale di ingresso"], 
        correct: [1], 
        explanation: "L'attribuzione Data-driven è l'evoluzione del tracciamento. Invece di usare regole arbitrarie (come dare tutto il merito all'ultimo clic), il modello analizza il cammino di migliaia di utenti e capisce quali passaggi intermedi sono stati davvero decisivi per convincerli a convertire. Questo fornisce una visione molto più onesta dell'impatto dei canali 'upper-funnel' come i social media o il display advertising." 
    },
    { 
        q: "Cosa permette di misurare l'analisi 'Lifetime Value' (LTV) all'interno delle tecniche di Esplorazione?", 
        options: ["Il tempo medio di vita di un cookie nel browser", "Il valore totale (entrate e interazioni) generato dagli utenti acquisiti in un periodo, calcolato su tutto il tempo in cui sono stati attivi", "Il numero di anni trascorsi dalla creazione dell'account Google dell'utente", "La velocità di caricamento delle risorse durante la vita dell'utente"], 
        correct: [1], 
        explanation: "L'LTV è una metrica di business cruciale. Permette di capire quanto vale realmente un cliente acquisito, andando oltre la singola transazione. Ad esempio, potresti scoprire che gli utenti acquisiti tramite ricerca organica spendono meno al primo ordine ma hanno un valore nel tempo (LTV) molto più alto rispetto a quelli acquisiti tramite promozioni lampo sui social." 
    },
    { 
        q: "Se desideri confrontare il numero di utenti che utilizzano sia il tuo sito web che la tua app mobile, quale tecnica di esplorazione dovresti utilizzare per visualizzare l'intersezione di questi due gruppi?", 
        options: ["Esplorazione a imbuto", "Sovrapposizione dei segmenti (Segment Overlap)", "Analisi di coorte", "Esplorazione del percorso"], 
        correct: [1], 
        explanation: "La 'Sovrapposizione dei segmenti' crea un diagramma di Venn che mostra visivamente quanti utenti appartengono a un segmento, quanti a un altro e quanti a entrambi. È ideale per capire, ad esempio, quanto è ampio il pubblico che interagisce con il brand su più piattaforme o per vedere quanti utenti 'Acquirenti' sono anche iscritti alla 'Newsletter'." 
    },
    { 
        q: "Quale dimensione utilizzeresti per raggruppare il traffico in macro-categorie come 'Organic Search', 'Paid Social' o 'Direct' nei report standard?", 
        options: ["Sorgente", "Mezzo", "Raggruppamento dei canali predefinito (Default Channel Grouping)", "Campagna"], 
        correct: [2], 
        explanation: "Il Default Channel Grouping è una dimensione organizzativa che aggrega sorgenti e mezzi simili in categorie facili da leggere. Ad esempio, raggruppa 'google/organic', 'bing/organic' e 'duckduckgo/organic' sotto l'unica voce 'Organic Search'. Questo permette una panoramica immediata della performance dei canali senza dover analizzare centinaia di singole sorgenti." 
    },

    // 21-30 Impostazioni e Amministrazione
    { 
        q: "In risposta alle normative sulla privacy, Google ha introdotto la 'Modalità di consenso' (Consent Mode). Qual è il suo scopo tecnico principale in GA4?", 
        options: ["Impedire agli utenti di navigare se non accettano i cookie", "Comunicare a Google lo stato del consenso dell'utente per regolare il comportamento dei tag e utilizzare la modellazione per colmare i vuoti nei dati", "Nascondere i dati degli utenti residenti in Europa", "Criptare i dati delle carte di credito"], 
        correct: [1], 
        explanation: "Il Consent Mode è il ponte tra privacy e dati. Se un utente nega il consenso ai cookie, GA4 smette di leggere/scrivere cookie ma continua a inviare 'ping' anonimi. Grazie al Machine Learning, GA4 può quindi 'modellare' (stimare) il comportamento di quegli utenti anonimi basandosi sui dati di chi ha dato il consenso, evitando di perdere visibilità totale sulle prestazioni del sito." 
    },
    { 
        q: "Hai un sito web principale (esempio.it) e un terzo dominio per i pagamenti (checkout-sicuro.it). Per evitare che la sessione si interrompa e l'utente venga conteggiato come nuovo quando passa da un sito all'altro, cosa devi configurare?", 
        options: ["Devi creare due proprietà GA4 diverse", "Devi configurare il monitoraggio tra domini (Cross-domain tracking) nelle impostazioni del Flusso di dati", "Devi usare un plugin speciale di Chrome", "Non è possibile mantenere la sessione tra domini diversi"], 
        correct: [1], 
        explanation: "Il monitoraggio tra domini assicura che lo stesso ID utente (CID) venga passato da un dominio all'altro tramite un parametro URL (_gl). Senza questa configurazione, quando l'utente atterra sul dominio del checkout, GA4 lo vedrebbe come una nuova persona proveniente da un 'referral' (il tuo sito), rovinando l'attribuzione della vendita." 
    },
    { 
        q: "Cosa sono le 'Proprietà Utente' (User Properties) in GA4 e come differiscono dai parametri degli eventi?", 
        options: ["Sono dati sensibili come nome e cognome", "Sono attributi che descrivono segmenti del tuo pubblico (es. 'professione', 'stato_fedeltà') e che persistono in tutte le sessioni", "Sono i parametri che indicano il prezzo di un prodotto", "Servono a tracciare la posizione GPS esatta dell'utente"], 
        correct: [1], 
        explanation: "Mentre i parametri degli eventi descrivono l'azione appena compiuta (es: il nome del file scaricato), le Proprietà Utente descrivono *chi* è l'utente (es: è un utente Premium? È un architetto?). Una volta impostata, una proprietà utente 'appiccica' quell'etichetta all'utente per tutte le sue interazioni future, permettendoti di creare segmenti di pubblico molto precisi basati su caratteristiche statiche." 
    },
    { 
        q: "Qual è la funzione principale del Measurement Protocol in GA4?", 
        options: ["È un manuale di istruzioni per i marketer", "Permette di inviare dati sugli eventi direttamente ai server di Google Analytics tramite richieste HTTP, utile per tracciare interazioni offline o server-side", "È il protocollo che protegge i dati dagli hacker", "Serve per collegare GA4 a Facebook Ads"], 
        correct: [1], 
        explanation: "Il Measurement Protocol consente agli sviluppatori di inviare dati a GA4 da qualsiasi sistema in grado di effettuare una richiesta HTTP (come un registratore di cassa, un CRM o un server). Questo è fondamentale per tracciare eventi che non avvengono nel browser, come un acquisto completato via telefono o la restituzione di un prodotto in negozio." 
    },
    { 
        q: "In GA4, dove puoi gestire la visibilità dei report standard, creando nuove sezioni o modificando l'ordine del menu laterale?", 
        options: ["Nella sezione Esplora", "Nella Libreria (Library), situata all'interno del menu Report", "Nelle impostazioni del Flusso di dati", "Solo tramite l'API di amministrazione"], 
        correct: [1], 
        explanation: "La Libreria è il 'dietro le quinte' dei report. Qui puoi creare nuove 'Raccolte' e 'Argomenti' per organizzare i report in modo che siano rilevanti per il tuo business. Se ad esempio non fai e-commerce, puoi nascondere la sezione 'Acquisti' e creare una sezione dedicata ai 'Lead', rendendo l'interfaccia molto più pulita per il tuo team." 
    },
    { 
        q: "Cosa succede se attivi 'Google Signals' nella tua proprietà GA4?", 
        options: ["Il sito diventa più veloce", "GA4 può raccogliere dati demografici (età, genere, interessi) e abilitare il remarketing cross-device basandosi sugli utenti che hanno effettuato l'accesso a Google", "Viene rimosso il limite dei 14 mesi di conservazione dati", "Google inizierà a gestire le tue campagne Ads automaticamente"], 
        correct: [1], 
        explanation: "Google Signals abilita funzionalità avanzate di tracciamento. Sfrutta l'immenso database di utenti Google per arricchire i tuoi report con dati aggregati su interessi e demografia. È anche il requisito tecnico per poter fare 'Cross-Device Remarketing', ovvero mostrare un annuncio su mobile a un utente che ha visto il tuo prodotto su desktop." 
    },
    { 
        q: "Hai notato che alcuni dati demografici non appaiono nei tuoi report nonostante Google Signals sia attivo. Qual è la causa più probabile?", 
        options: ["Un errore nel codice tracking", "L'applicazione delle soglie di dati (Data Thresholding) per proteggere l'anonimato degli utenti in caso di volumi di traffico troppo bassi", "L'utente ha usato una VPN", "I dati demografici sono disponibili solo a pagamento"], 
        correct: [1], 
        explanation: "Le 'Soglie di dati' sono una misura di sicurezza. Se in un report ci sono così pochi utenti che si potrebbe potenzialmente risalire all'identità di uno di loro (incrociando città, età e dispositivo), Google nasconde quei dati. È un fenomeno comune nei siti con poco traffico o quando si applicano filtri molto stringenti." 
    },
    { 
        q: "Perché è importante collegare GA4 a Google Search Console?", 
        options: ["Per vedere le parole chiave pagate di Google Ads", "Per analizzare all'interno di GA4 quali query di ricerca organica portano traffico e come performano le landing page nei risultati di ricerca", "Per migliorare il punteggio di velocità del sito", "Per creare automaticamente dei backlink"], 
        correct: [1], 
        explanation: "Il collegamento con Search Console porta i dati SEO dentro GA4. Senza questo link, vedresti solo che il traffico arriva da 'google/organic'. Con il link attivo, puoi vedere esattamente quali termini di ricerca (keyword) hanno usato gli utenti e in che posizione appariva il tuo sito, unendo le performance pre-clic (impressioni e click su Google) con quelle post-clic (cosa fanno sul sito)." 
    },
    { 
        q: "Vuoi creare un evento che si attivi automaticamente ogni volta che un utente entra a far parte del segmento 'Clienti Fedeli'. Quale funzionalità useresti?", 
        options: ["Trigger di attivazione del pubblico (Audience Trigger)", "Misurazione avanzata", "Modifica degli eventi", "Filtro dei dati"], 
        correct: [0], 
        explanation: "Gli Audience Triggers sono incredibilmente utili per l'automazione. Ti permettono di generare un evento (es: 'diventato_fedele') nel momento esatto in cui un utente soddisfa certi requisiti (es: ha fatto 5 acquisti). Questo nuovo evento può poi essere segnato come 'Evento Chiave' e usato per ottimizzare le campagne Ads verso la fidelizzazione." 
    },
    { 
        q: "Quante dimensioni personalizzate a livello di evento (event-scoped custom dimensions) puoi creare in una proprietà standard di Google Analytics 4?", 
        options: ["10", "25", "50", "Illimitate"], 
        correct: [2], 
        explanation: "Nelle proprietà GA4 standard, hai a disposizione 50 dimensioni personalizzate per gli eventi e 50 metriche personalizzate. Se hai bisogno di tracciare più dettagli, devi pianificare bene quali parametri registrare o passare alla versione 360 (a pagamento) che offre limiti molto più elevati." 
    },

    // 31-40 Integrazioni, Privacy e Funzioni Avanzate
    { 
        q: "Che cos'è una 'Dimensione Personalizzata' (Custom Dimension) e quando dovresti crearne una?", 
        options: ["Un modo per cambiare il colore del grafico", "Un parametro extra inviato con un evento che deve essere registrato nell'interfaccia per essere usato nei report (es: 'categoria_autore' per un blog)", "Una metrica che conta i soldi", "Un filtro per eliminare lo spam"], 
        correct: [1], 
        explanation: "Quando invii un parametro con un evento (es. invii 'nome_video' con l'evento 'video_play'), GA4 lo riceve ma non lo mostra nei report standard finché non crei una 'Dimensione Personalizzata' corrispondente. È il passaggio necessario per dire a GA4: 'Prendi questo dato tecnico e rendilo una voce consultabile nei miei report'." 
    },
    { 
        q: "In GA4, cosa indica la metrica 'Tempo di coinvolgimento medio' (Average engagement time)?", 
        options: ["Il tempo totale in cui il sito è rimasto aperto in una scheda del browser, anche se in background", "Il tempo medio in cui l'utente ha avuto il sito o l'app in primo piano (focus) sul proprio schermo", "Il tempo necessario per scaricare l'app", "Il tempo che intercorre tra due sessioni dello stesso utente"], 
        correct: [1], 
        explanation: "A differenza del vecchio 'Tempo sulla pagina', GA4 è molto più preciso. Conta solo il tempo in cui l'utente sta effettivamente guardando il sito (scheda attiva). Se l'utente cambia scheda o riduce il browser a icona, il conteggio si ferma. Questo fornisce un dato reale di quanto tempo il brand è stato al centro dell'attenzione dell'utente." 
    },
    { 
        q: "Se desideri importare in GA4 i dati relativi al costo delle tue campagne su Facebook o LinkedIn per confrontarli con quelli di Google Ads, quale funzione dovresti usare?", 
        options: ["Measurement Protocol", "Importazione dati (Data Import)", "Google Signals", "BigQuery"], 
        correct: [1], 
        explanation: "L'Importazione Dati permette di caricare file (CSV) contenenti dati esterni. Caricando i costi pubblicitari di altri canali (associandoli tramite parametri UTM), puoi visualizzare il ROAS (ritorno sull'investimento pubblicitario) di tutte le tue campagne marketing in un unico posto, rendendo GA4 il centro di comando del tuo budget." 
    },
    { 
        q: "Qual è la differenza tra un 'Segmento' e un 'Pubblico' (Audience) in GA4?", 
        options: ["Non c'è differenza, sono sinonimi", "I segmenti si usano solo nelle Esplorazioni per analisi retroattive; i Pubblici sono liste di utenti che si popolano dal momento della creazione e possono essere usate per il remarketing", "I segmenti sono a pagamento", "I Pubblici servono solo per la SEO"], 
        correct: [1], 
        explanation: "I segmenti sono filtri temporanei e retroattivi che applichi mentre analizzi i dati (es: 'fammi vedere solo chi viene da Roma'). I Pubblici sono entità permanenti che GA4 inizia a monitorare dal momento in cui le crei; sono essenziali per il remarketing perché puoi inviarli a Google Ads per mostrare pubblicità mirate a quegli specifici utenti." 
    },
    { 
        q: "Che cos'è l'attribuzione 'Last Click' in GA4 e come si differenzia dal modello 'Data-driven'?", 
        options: ["Dà il merito al primo canale visto dall'utente", "Attribuisce il 100% del valore della conversione all'ultimo canale su cui l'utente ha cliccato prima di convertire", "Divide il merito equamente tra tutti i canali", "Ignora il traffico organico"], 
        correct: [1], 
        explanation: "Il modello Last Click è il metodo tradizionale. Se un utente vede un annuncio Facebook, poi cerca su Google e infine entra direttamente e compra, il Last Click darebbe tutto il merito al traffico 'Direct'. Il modello Data-driven, invece, capirebbe che Facebook e Google hanno giocato un ruolo e distribuirebbe il merito tra di loro." 
    },
    { 
        q: "Quale funzionalità di GA4 ti permette di modificare un nome di un evento errato o di correggere un parametro direttamente dall'interfaccia, senza dover toccare il codice del sito?", 
        options: ["DebugView", "Modifica eventi (Modify Events)", "Filtri di dati", "BigQuery"], 
        correct: [1], 
        explanation: "La funzione 'Modifica eventi' è un salvavita. Se ad esempio hai implementato per errore un evento chiamato 'acquisto' invece di 'purchase', puoi creare una regola nell'interfaccia di GA4 che rinomina automaticamente l'evento in entrata, senza dover chiedere l'intervento degli sviluppatori o ripubblicare il GTM." 
    },
    { 
        q: "Cosa si intende per 'Metriche predittive' in GA4?", 
        options: ["Statistiche basate su quello che è successo l'anno scorso", "Metriche calcolate dal Machine Learning che prevedono comportamenti futuri, come la 'Probabilità di acquisto' o la 'Probabilità di abbandono'", "Previsioni del meteo per il sito e-commerce", "Stime del fatturato basate sui dati della concorrenza"], 
        correct: [1], 
        explanation: "GA4 è 'intelligente'. Se hai abbastanza dati (almeno 1000 utenti che convertono e 1000 che non lo fanno), il sistema impara i pattern comportamentali e può dirti quali utenti hanno più probabilità di fare un acquisto nei prossimi 7 giorni. Questo ti permette di creare segmenti di pubblico 'ad alto potenziale' da colpire con offerte speciali." 
    },
    { 
        q: "In un report di Acquisizione traffico, cosa rappresenta la sorgente 'direct'?", 
        options: ["Utenti che hanno cliccato su un annuncio", "Utenti che hanno digitato l'URL direttamente nel browser o hanno cliccato su un segnalibro (o sorgenti che GA4 non è riuscito a identificare)", "Traffico proveniente da motori di ricerca", "Traffico da newsletter"], 
        correct: [1], 
        explanation: "Il traffico 'Direct' è spesso un 'secchio' che raccoglie tutto ciò che non ha un'origine chiara. Oltre a chi digita l'URL, include chi clicca link in PDF, app di messaggistica (senza UTM) o passaggi da siti HTTPS a HTTP. Una percentuale troppo alta di 'Direct' solitamente indica che le campagne marketing non sono tracciate correttamente con i parametri UTM." 
    },
    { 
        q: "Qual è il vantaggio di utilizzare l'identificatore 'User-ID' rispetto al semplice cookie del browser?", 
        options: ["Permette di conoscere il nome e cognome dell'utente", "Permette di collegare le sessioni dello stesso utente su dispositivi diversi (es. inizia su telefono, finisce su PC) se l'utente ha effettuato l'accesso", "Evita che l'utente veda la pubblicità", "Rende il sito conforme al 100% alle leggi cookie"], 
        correct: [1], 
        explanation: "Lo User-ID è il 'sacro graal' dell'analisi cross-device. Mentre il cookie identifica un browser, lo User-ID identifica una persona (tramite il login al tuo sito). Questo permette di capire che l'utente che ha guardato i prodotti sul bus (mobile) è lo stesso che ha poi comprato da casa (desktop), fornendo un'analisi del percorso utente finalmente completa." 
    },
    { 
        q: "Un cliente ha chiesto la rimozione di tutti i suoi dati dal tuo account GA4 per esercitare il diritto all'oblio. Quale strumento utilizzi?", 
        options: ["Cancellazione dell'account", "Richieste di eliminazione dei dati (Data deletion requests)", "Filtri dei dati", "Sospensione del flusso di dati"], 
        correct: [1], 
        explanation: "Le 'Richieste di eliminazione dei dati' permettono di rimuovere informazioni specifiche (es. basate su ID utente o specifici parametri) senza dover cancellare l'intera proprietà. È lo strumento ufficiale per gestire le richieste legate alla privacy degli utenti e garantire che l'account sia conforme alle normative vigenti." 
    }
];