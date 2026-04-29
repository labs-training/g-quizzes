const Quiz = "Preparazione Certificazione Google Ads Search - 2026";
const questionBank = [
    {
        q: "Un cliente e-commerce attiva la Consent Mode v2 (Advanced) tramite Google Tag Manager. Qual è l'impatto principale sui modelli di Smart Bidding (es. Target ROAS) per le campagne Search quando un utente rifiuta i cookie analitici e di profilazione (ad_storage='denied')?",
        options: [
            "Il sistema interrompe l'erogazione degli annunci per quell'utente per evitare violazioni GDPR e il budget viene riallocato su utenti consenzienti.",
            "I tag di Google Ads inviano 'ping' privi di cookie (cookieless) che permettono al Machine Learning di modellare le conversioni non osservate, mantenendo l'accuratezza del Target ROAS.",
            "Google Ads retrocede automaticamente alla strategia Massimizza i Clic, in quanto l'assenza di cookie rende impossibile calcolare il Conversion Rate.",
            "Le conversioni vengono registrate regolarmente ma archiviate in BigQuery anziché nell'interfaccia di Google Ads, richiedendo un'importazione manuale."
        ],
        correct: [1],
        explanation: "La risposta corretta è **I tag di Google Ads inviano 'ping' privi di cookie (cookieless) che permettono al Machine Learning di modellare le conversioni non osservate, mantenendo l'accuratezza del Target ROAS.** Con la Consent Mode Advanced, i tag continuano a comunicare con i server Google in modo anonimizzato. Il sistema usa questi ping per modellare i dati mancanti e nutrire algoritmi come il Target ROAS. Le altre opzioni sono errate: l'erogazione degli annunci non si ferma (l'utente naviga comunque sulla rete Search), le strategie di bidding non vengono declassate automaticamente a Massimizza i Clic, e le conversioni modellate appaiono direttamente nell'interfaccia Ads, non è necessaria alcuna importazione manuale da BigQuery."
    },
    {
        q: "Stai implementando l'Importazione delle Conversioni Offline (OCT) per un cliente B2B. A causa delle restrizioni di iOS 14+ (ATT), alcuni clic su rete Search non presentano il parametro GCLID. Quali identificatori alternativi o tecniche sono fondamentali in questo scenario per mappare la conversione al clic originario?",
        options: [
            "L'utilizzo dei parametri wbraid e gbraid in combinazione con l'Enhanced Conversions for Leads.",
            "L'attivazione del parametro UTM_ID e l'uso del Measurement Protocol di Universal Analytics.",
            "L'implementazione esclusiva del parametro FBCLID sincronizzato con Google Analytics 4.",
            "L'abilitazione del tracciamento cross-domain nelle impostazioni a livello di MCC."
        ],
        correct: [0],
        explanation: "La risposta corretta è **L'utilizzo dei parametri wbraid e gbraid in combinazione con l'Enhanced Conversions for Leads.** Quando il GCLID viene rimosso per conformità alle policy Apple, Google Ads utilizza parametri aggregati (wbraid per app-to-web, gbraid per app-to-app/web-to-app). Integrando questi parametri e i dati forniti dagli utenti (Enhanced Conversions), è possibile recuperare l'attribuzione. Le altre opzioni sono errate: Universal Analytics è obsoleto (e l'UTM_ID non sostituisce il GCLID per OCT), FBCLID è un parametro di Facebook non letto nativamente da Google Ads per l'attribuzione, e il cross-domain tracking risolve problemi di sessione tra domini, non la rimozione degli ID di clic dovuta alle policy iOS."
    },
    {
        q: "Seleziona le opzioni corrette. Stai passando dal modello Last Click al Data-Driven Attribution (DDA) in Google Ads. Quali sono gli effetti reali e misurabili di questo cambiamento sui report e sull'ottimizzazione?",
        options: [
            "Le campagne upper-funnel (parole chiave generiche) potrebbero mostrare un aumento delle conversioni frazionarie (es. 0.4 conversioni).",
            "Il budget viene istantaneamente ridistribuito verso le campagne con CPA più alto, ignorando il tetto di spesa giornaliero.",
            "Le strategie Smart Bidding riceveranno segnali più completi sull'intero percorso dell'utente, migliorando le offerte per query assistenziali.",
            "Tutto il traffico Diretto verrà filtrato dai report per allinearsi al modello 'Ultimo Clic Non Diretto' di Universal Analytics."
        ],
        correct: [0, 2],
        explanation: "Le risposte corrette sono **Le campagne upper-funnel (parole chiave generiche) potrebbero mostrare un aumento delle conversioni frazionarie (es. 0.4 conversioni).** e **Le strategie Smart Bidding riceveranno segnali più completi sull'intero percorso dell'utente, migliorando le offerte per query assistenziali.** Il modello DDA assegna credito proporzionale ai vari touchpoint (generando valori decimali) e istruisce lo Smart Bidding sul reale valore delle keyword generiche che iniziano il funnel. Le altre opzioni sono scorrette: il DDA non ignora mai il budget giornaliero per ridistribuire fondi, e il concetto di 'Ultimo Clic Non Diretto' era specifico di Universal Analytics standard, ma Google Ads ha sempre tracciato in base al clic sull'annuncio, non filtrando il traffico diretto in questo modo."
    },
    {
        q: "Durante il Black Friday, il server del sito e-commerce del tuo cliente è andato offline per 8 ore, perdendo il tracciamento di tutte le vendite. Qual è lo strumento nativo in Google Ads più appropriato per evitare che il Target ROAS apprenda dati negativi (CPA elevato/ROAS zero) da questa anomalia?",
        options: [
            "Esclusioni di dati (Data Exclusions) nelle impostazioni di offerta avanzate.",
            "Aggiustamenti della stagionalità (Seasonality Adjustments) impostati a -100%.",
            "Regole del valore di conversione (Conversion Value Rules) basate sul dispositivo.",
            "Messa in pausa temporanea dell'azione di conversione e successiva riattivazione."
        ],
        correct: [0],
        explanation: "La risposta corretta è **Esclusioni di dati (Data Exclusions) nelle impostazioni di offerta avanzate.** Le esclusioni di dati dicono esplicitamente agli algoritmi di Smart Bidding di ignorare un intervallo di tempo specifico (le 8 ore di down) in modo che le mancate conversioni non deprimano le offerte future. Le altre opzioni sono errate: gli aggiustamenti della stagionalità servono per prevedere picchi di tassi di conversione (es. sconti), non per nascondere dati mancanti; le regole del valore modificano il peso economico della conversione; mettere in pausa l'azione di conversione non cancella storicamente le ore in cui le campagne hanno speso senza generare tracciamento."
    },
    {
        q: "Un advertiser vuole importare segmenti di pubblico basati sui dati proprietari (First-Party Data) tramite Customer Match. Quali sono i requisiti minimi e le restrizioni per utilizzare queste liste nelle campagne Search?",
        options: [
            "Non vi è alcun requisito minimo di spesa, ma l'account deve essere aperto da almeno 14 giorni per processare le email codificate in MD5.",
            "L'account deve avere una buona cronologia di conformità alle norme e, per utilizzare l'impostazione 'Targeting' (e non solo 'Osservazione'), un certo livello di spesa storica totale.",
            "Customer Match funziona solo se le email vengono criptate tramite SHA-256 e l'account è collegato obbligatoriamente a Google Cloud Platform.",
            "Le liste di Customer Match possono essere utilizzate solo per escludere gli utenti, ma mai per aumentare l'offerta sulle keyword di ricerca."
        ],
        correct: [1],
        explanation: "La risposta corretta è **L'account deve avere una buona cronologia di conformità alle norme e, per utilizzare l'impostazione 'Targeting' (e non solo 'Osservazione'), un certo livello di spesa storica totale.** Google richiede una cronologia pulita e 90 giorni di attività, oltre a superare i $50.000 USD di spesa totale (o equivalente) per usare il targeting e creare segmenti simili. Le altre opzioni sono errate: l'algoritmo di hashing richiesto è SHA-256 (non MD5); il collegamento a Google Cloud non è obbligatorio (si possono caricare CSV via UI o API partner); Customer Match è eccellente per le offerte (RLSA) e non è limitato alle sole esclusioni."
    },
    {
        q: "Qual è la differenza fondamentale tra 'Keyword Insertion' (Inserimento dinamico della parola chiave) e le Dynamic Search Ads (DSA)?",
        options: [
            "La Keyword Insertion adatta il titolo dell'annuncio alla query di ricerca all'interno di una campagna Standard basata su keyword, mentre le DSA generano titoli dinamicamente basandosi sui contenuti del sito web senza usare keyword.",
            "Le DSA richiedono l'uso obbligatorio di segmenti di pubblico in-market, mentre l'inserimento della parola chiave funziona solo per le campagne Shopping.",
            "Non c'è differenza; sono due nomi diversi per la stessa tecnologia introdotta in Google Ads dopo il ritiro degli Expanded Text Ads (ETA).",
            "La Keyword Insertion modifica l'URL di destinazione in base alla posizione geografica, mentre le DSA modificano solo le estensioni sitelink."
        ],
        correct: [0],
        explanation: "La risposta corretta è **La Keyword Insertion adatta il titolo dell'annuncio alla query di ricerca all'interno di una campagna Standard basata su keyword, mentre le DSA generano titoli dinamicamente basandosi sui contenuti del sito web senza usare keyword.** La Keyword Insertion (es. {KeyWord:Scarpe}) sostituisce la parola chiave che ha attivato l'annuncio in una normale campagna Search. Le DSA (Annunci dinamici della rete di ricerca) invece analizzano il sito (tramite index organico o feed di pagina), intercettano le query rilevanti e creano titoli al volo senza bisogno che l'inserzionista scelga le parole chiave. Le altre opzioni confondono i concetti con Shopping, location insertion o inventano requisiti inesistenti."
    },
    {
        q: "Stai lanciando una campagna Search che utilizza una strategia di offerta di portafoglio (Portfolio Bid Strategy) con Target CPA. Imposti anche un 'Limite di offerta CPC massimo'. Quale rischio tecnico potresti incontrare?",
        options: [
            "Il portafoglio disattiverà automaticamente il Target CPA e passerà a CPC Manuale su tutte le campagne collegate.",
            "Il limite di CPC potrebbe impedire all'algoritmo di partecipare alle aste più competitive e profittevoli, limitando artificialmente le conversioni e l'apprendimento della macchina.",
            "Il punteggio di qualità delle keyword scenderà immediatamente a 1/10 perché le strategie di portafoglio vietano per policy i limiti massimi.",
            "Il limite di offerta verrà ignorato del tutto dal sistema, poiché il Target CPA sovrascrive qualsiasi regola manuale impostata dall'utente."
        ],
        correct: [1],
        explanation: "La risposta corretta è **Il limite di CPC potrebbe impedire all'algoritmo di partecipare alle aste più competitive e profittevoli, limitando artificialmente le conversioni e l'apprendimento della macchina.** Se imposti un limite troppo basso, l'algoritmo (che altrimenti potrebbe offrire molto in un'asta con un'altissima probabilità di conversione) si blocca. Questo strozza i volumi e i segnali necessari al Machine Learning. Le altre opzioni sono false: il limite non viene ignorato (se impostato nel portafoglio viene rispettato), non altera direttamente il Punteggio di Qualità e non declassa la strategia a CPC manuale."
    },
    {
        q: "Seleziona le opzioni corrette. Quando colleghi la tua proprietà GA4 a Google Ads, quali di queste azioni avvengono o possono essere configurate nativamente?",
        options: [
            "Importazione degli Eventi Chiave (Key Events) da GA4 per usarli come azioni di conversione in Google Ads per lo Smart Bidding.",
            "Esportazione automatica di tutto il database dei termini di ricerca in chiaro da Google Ads verso GA4, bypassando le restrizioni di privacy (Data Thresholding).",
            "Importazione dei segmenti di pubblico (Audiences) creati in GA4, compresi i segmenti predittivi, da usare nelle campagne Search.",
            "Sostituzione del tag gtag.js di Google Ads; una volta collegato GA4, il tag di Google Ads deve essere rimosso fisicamente dal sito."
        ],
        correct: [0, 2],
        explanation: "Le risposte corrette sono **Importazione degli Eventi Chiave (Key Events) da GA4 per usarli come azioni di conversione in Google Ads per lo Smart Bidding.** e **Importazione dei segmenti di pubblico (Audiences) creati in GA4, compresi i segmenti predittivi, da usare nelle campagne Search.** Il collegamento GA4-Ads è fondamentale per condividere conversioni (oggi Eventi Chiave) e audience sofisticate, incluse quelle predittive basate su ML (es. 'Probabili acquirenti in 7 giorni'). Le altre opzioni sono errate: GA4 applica comunque il Data Thresholding e non bypassa la privacy per mostrare tutte le query organiche o Ads; inoltre, non è obbligatorio (e spesso sconsigliato) rimuovere il tag nativo di Google Ads, poiché questo supporta l'Enhanced Conversions in modo più diretto."
    },
    {
        q: "In una campagna Search con Smart Bidding (Target ROAS), noti che la Quota Impressioni Rete di Ricerca (Search Impression Share) è crollata dal 80% al 45% dopo aver alzato il target ROAS dal 200% al 450%. Qual è la spiegazione più tecnica e corretta di questo fenomeno?",
        options: [
            "L'algoritmo sta limitando artificialmente le impressioni a causa dell'esaurimento del budget giornaliero (IS Rete di ricerca perso per budget).",
            "Richiedendo un ritorno molto più alto, l'algoritmo partecipa deliberatamente a meno aste (perdendo Impression Share per ranking), scegliendo solo quelle con un tasso di conversione previsto eccezionalmente alto.",
            "L'aumento del ROAS ha azzerato il Punteggio di Qualità, causando un abbassamento del ranking e la conseguente perdita di impressioni.",
            "Si tratta di un bug di visualizzazione: in realtà la campagna sta stampando più annunci, ma il sistema sta escludendo le query da mobile."
        ],
        correct: [1],
        explanation: "La risposta corretta è **Richiedendo un ritorno molto più alto, l'algoritmo partecipa deliberatamente a meno aste (perdendo Impression Share per ranking), scegliendo solo quelle con un tasso di conversione previsto eccezionalmente alto.** Un Target ROAS alto impone al sistema di essere molto 'conservativo'. Per rispettare un obiettivo aggressivo, Google Ads smette di fare offerte per utenti che ritiene 'discreti', concentrandosi solo su quelli 'eccellenti'. Ciò si riflette in una caduta dell'Impression Share. Le altre opzioni sono errate: non è perso per budget (spesso si spende meno alzando il tROAS), non azzera il Quality Score (che dipende dalla rilevanza di ad/keyword, non dal bidding) e non è un bug."
    },
    {
        q: "L'Enhanced Conversions (Conversioni Avanzate) per il Web invia i dati di prima parte (come l'email) in forma sottoposta a hashing. Quale algoritmo di hashing è tassativamente richiesto e supportato per questo processo in Google Ads?",
        options: [
            "MD5",
            "SHA-256",
            "AES-128",
            "Bcrypt"
        ],
        correct: [1],
        explanation: "La risposta corretta è **SHA-256**. L'algoritmo Secure Hash Algorithm 256-bit (SHA-256) è lo standard unidirezionale accettato e richiesto da Google per l'invio sicuro dei dati personali (PII) come email o numeri di telefono per le Conversioni Avanzate. Le altre opzioni sono errate: MD5 è troppo vulnerabile e ormai obsoleto per questi scopi; AES-128 è un algoritmo di crittografia bidirezionale (può essere decriptato), non di hashing; Bcrypt è tipicamente usato per le password nei database locali, non per il match in advertising."
    },
    {
        q: "Un cliente vuole usare 'Target Impression Share' (Quota Impressioni Target) impostato su 'Parte superiore assoluta della pagina' per dominare i concorrenti con un target del 100%. Perché questa strategia potrebbe essere disastrosa per il ROI in Google Ads Search?",
        options: [
            "Perché il Punteggio di Qualità viene ignorato dal Target Impression Share, annullando il peso dell'Ad Rank.",
            "Perché la strategia è incompatibile con le campagne Search e funziona solo sulla Rete Display.",
            "Perché costringe il sistema ad aumentare l'offerta (CPC) a livelli irrazionali pur di vincere ogni singola asta al primo posto, ignorando del tutto i tassi di conversione e i costi di acquisizione.",
            "Perché il target del 100% attiva i filtri antispam di Google che bloccano l'erogazione per prevenire manipolazioni del mercato."
        ],
        correct: [2],
        explanation: "La risposta corretta è **Perché costringe il sistema ad aumentare l'offerta (CPC) a livelli irrazionali pur di vincere ogni singola asta al primo posto, ignorando del tutto i tassi di conversione e i costi di acquisizione.** Questa è una strategia di brand awareness/vanity pura. Non ha alcuna cognizione del valore dell'utente. Pur di garantire la prima posizione assoluta contro un competitor aggressivo, il CPC potrebbe schizzare alle stelle, bruciando il budget su clic non qualificati e distruggendo il Ritorno sull'Investimento (ROI). Le altre opzioni sono errate: l'Ad Rank conta sempre e il QS non viene ignorato, è nativa della rete Search e non attiva alcun 'filtro antispam'."
    },
    {
        q: "Per implementare l'Integrazione Webhook per le estensioni modulo per i lead (Lead Form Extensions) direttamente verso il CRM del cliente, quali componenti tecnici sono strettamente necessari nella configurazione di Google Ads?",
        options: [
            "URL del Webhook (Endpoint) fornito dal CRM e una Chiave di sicurezza (Key) per validare il payload JSON.",
            "L'ID di monitoraggio di Google Analytics 4 e un trigger di Google Tag Manager lato server.",
            "Un file CSV contenente l'elenco dei campi CRM da caricare manualmente via FTP a Google.",
            "L'approvazione del Measurement Protocol e la configurazione di un container Firebase."
        ],
        correct: [0],
        explanation: "La risposta corretta è **URL del Webhook (Endpoint) fornito dal CRM e una Chiave di sicurezza (Key) per validare il payload JSON.** Per inviare i dati del lead generati direttamente sull'annuncio Google Search verso un sistema esterno (come Zapier o un CRM custom), Google Ads richiede semplicemente un URL a cui inviare la richiesta HTTP POST (webhook) e una chiave di verifica (opzionale ma essenziale per sicurezza) per garantire che i dati provengano effettivamente da Google. Le altre opzioni sono errate: GTM server-side, file CSV manuali e Measurement Protocol non c'entrano nulla con l'invio live via Webhook dalle estensioni modulo."
    },
    {
        q: "Seleziona le opzioni corrette. Il tuo account Google Ads è collegato a un account Google Merchant Center. Se attivi una campagna sulla rete Search, come potresti far apparire anche prodotti Shopping insieme agli annunci testuali?",
        options: [
            "Creando un annuncio Search Standard e allegando le estensioni/asset 'Immagine' estratte dal feed Merchant Center.",
            "Non è possibile: i prodotti Shopping appaiono solo tramite campagne Performance Max o campagne Shopping standard, mai in interazione con campagne Search.",
            "Le campagne Search non supportano alcun dato dinamico proveniente dal Merchant Center.",
            "Attivando le 'Performance Max' che inglobano l'inventario Search e Shopping, ma nativamente una campagna *esclusivamente* Search non spinge i pin prodotto, a meno che non si utilizzino feed di prodotti a livello di campagna Search (ad oggi in fase di rollout/beta)."
        ],
        correct: [0, 3],
        explanation: "Le risposte corrette sono **Creando un annuncio Search Standard e allegando le estensioni/asset 'Immagine' estratte dal feed Merchant Center.** e **Attivando le 'Performance Max' che inglobano l'inventario Search e Shopping, ma nativamente una campagna *esclusivamente* Search non spinge i pin prodotto, a meno che non si utilizzino feed di prodotti a livello di campagna Search (ad oggi in fase di rollout/beta).** Tramite gli asset (estensioni), si possono associare immagini o usare il collegamento diretto al feed in Search (se l'account è idoneo). Inoltre le pMax fondono gli inventari. Le altre opzioni sono errate perché affermano l'impossibilità di commistione tra i due formati."
    },
    {
        q: "L'implementazione del tracciamento delle conversioni Server-Side (SS-GTM) sta diventando lo standard per le agenzie avanzate. Nel contesto di Google Ads Search, qual è il principale vantaggio del Server-Side Tagging rispetto al tracciamento client-side tradizionale?",
        options: [
            "Migliora l'estetica degli annunci testuali Responsive Search Ads, permettendo l'uso di CSS custom.",
            "Aumenta la precisione dei dati spostando l'esecuzione dei tag fuori dal browser dell'utente, eludendo gli AdBlocker di rete e prolungando la durata dei cookie proprietari (es. cookie impostati tramite dominio proprio).",
            "Permette di bypassare le normative GDPR, inviando i dati a Google Ads anche se l'utente ha esplicitamente rifiutato i cookie nel banner.",
            "Elimina la necessità di usare parole chiave, in quanto il server targetizza automaticamente gli utenti in base all'indirizzo IP."
        ],
        correct: [1],
        explanation: "La risposta corretta è **Aumenta la precisione dei dati spostando l'esecuzione dei tag fuori dal browser dell'utente, eludendo gli AdBlocker di rete e prolungando la durata dei cookie proprietari (es. cookie impostati tramite dominio proprio).** Il tagging server-side funge da proxy. Il browser comunica con il server del cliente (su un sottodominio proprietario), che poi inoltra i dati a Google. Questo mitiga le restrizioni ITP di Safari (prolungando i cookie first-party), riduce l'impatto degli adblocker e alleggerisce il client. Le altre opzioni sono false: non bypassa il GDPR (il server deve comunque rispettare i flag di consenso), non altera le dinamiche delle keyword e non cambia l'estetica degli annunci."
    },
    {
        q: "Analizzando il report 'Informazioni Aste' (Auction Insights) per la rete Search, noti che un tuo competitor ha una 'Quota di sovrapposizione' (Overlap Rate) del 65% e una 'Quota di superamento' (Outranking Share) del 15%. Come interpreti questo dato rispetto alle tue performance?",
        options: [
            "Il competitor sta spendendo il 65% in più del tuo budget giornaliero, ma i tuoi annunci sono di qualità inferiore nel 15% dei casi.",
            "Nel 65% delle aste in cui compari tu, compare anche il competitor; ma solo nel 15% di queste aste il suo annuncio è posizionato più in alto del tuo (o appare quando il tuo non appare). Quindi tu lo domini spesso.",
            "Nel 65% dei casi gli annunci sono identici testualmente, causando una penalizzazione del 15% sul tuo CPC medio.",
            "Stai perdendo il 65% della Quota Impressioni per colpa del rank, a causa delle offerte del 15% più alte di questo competitor."
        ],
        correct: [1],
        explanation: "La risposta corretta è **Nel 65% delle aste in cui compari tu, compare anche il competitor; ma solo nel 15% di queste aste il suo annuncio è posizionato più in alto del tuo (o appare quando il tuo non appare). Quindi tu lo domini spesso.** La Quota di sovrapposizione indica quante volte siete apparsi insieme nella stessa asta. La Quota di superamento indica quante volte lui ha vinto contro di te (stando più in alto o apparendo lui al posto tuo). Essendo bassa (15%), significa che nel confronto diretto il tuo Ad Rank è generalmente superiore. Le altre opzioni interpretano in modo totalmente scorretto e fantasioso i nomi delle metriche (budget, testo identico, o penalizzazioni)."
    },
    {
        q: "Il 'Punteggio di Qualità' (Quality Score) in Google Ads Search è composto da tre fattori principali. Quale delle seguenti affermazioni riguardo all'ottimizzazione di queste componenti è tecnicamente accurata?",
        options: [
            "Il 'CTR Previsto' è basato esclusivamente sulle performance storiche del tuo account; inserire nuove parole chiave porterà il punteggio a 1/10 per le prime settimane.",
            "L''Esperienza sulla pagina di destinazione' valuta solo la velocità di caricamento misurata dai Core Web Vitals, ignorando il testo della pagina.",
            "La 'Pertinenza dell'annuncio' valuta quanto le parole chiave corrispondono al messaggio nell'annuncio; l'uso massiccio di Broad Match può deprimere temporaneamente questo fattore se non controllato da keyword negative.",
            "Per aumentare a 10/10 la 'Pertinenza dell'annuncio', è sufficiente usare il Keyword Insertion Tool in tutti i titoli e descrizioni."
        ],
        correct: [2],
        explanation: "La risposta corretta è **La 'Pertinenza dell'annuncio' valuta quanto le parole chiave corrispondono al messaggio nell'annuncio; l'uso massiccio di Broad Match può deprimere temporaneamente questo fattore se non controllato da keyword negative.** La pertinenza valuta la coerenza tra keyword e copy. Con Broad Match (Generica), l'annuncio può attivarsi per query irrilevanti, che potrebbero non essere coerenti con il copy, abbassando il punteggio. L'uso di negative keyword filtra queste aste. Le altre opzioni sono false: il CTR previsto si basa anche su dati medi di mercato per keyword nuove; la landing page experience considera pesantemente pertinenza del contenuto e trasparenza (non solo velocità); usare solo la Keyword Insertion genera annunci robotici che possono avere CTR basso e non garantisce il 10/10."
    },
    {
        q: "Devi creare delle 'Regole del valore di conversione' (Conversion Value Rules) per la lead generation di un'università. I lead provenienti da Milano hanno storicamente un tasso di chiusura doppio rispetto al resto d'Italia. Come configuri correttamente la regola affinché il Target ROAS ottimizzi di conseguenza?",
        options: [
            "Crei una regola basata sulla 'Località', selezionando Milano, e moltiplichi il valore della conversione per 2.",
            "Crei un aggiustamento dell'offerta manuale (Bid Modification) del +100% sulla località Milano a livello di campagna.",
            "Disattivi il Target ROAS, passi a Target CPA e dimezzi il CPA target su Milano.",
            "Modifichi il tag GTM per inviare un valore doppio direttamente dal dataLayer quando l'IP dell'utente è lombardo."
        ],
        correct: [0],
        explanation: "La risposta corretta è **Crei una regola basata sulla 'Località', selezionando Milano, e moltiplichi il valore della conversione per 2.** Le Conversion Value Rules in Google Ads permettono di modificare il valore registrato in base a Luogo, Dispositivo o Segmento di Pubblico. Moltiplicando x2 il valore per Milano, l'algoritmo Target ROAS/Massimizza il Valore capirà che quelle aste valgono il doppio e farà offerte proporzionalmente più aggressive. Le altre opzioni sono errate: l'aggiustamento manuale dell'offerta (+100%) viene ignorato dal Target ROAS; passare a tCPA è un cambio di strategia non necessario; alterare il dataLayer in base all'IP è tecnicamente complesso, impreciso e non nativo come usare le Value Rules dell'interfaccia."
    },
    {
        q: "Seleziona le opzioni corrette. Il tuo team sta analizzando discrepanze di conversione tra Google Ads e GA4. Google Ads registra 150 acquisti, mentre GA4 ne mostra solo 90 sotto la sorgente 'google / cpc'. Quali fattori tecnici e architetturali spiegano questa divergenza?",
        options: [
            "Google Ads utilizza un modello 'Data dell'interazione' (attribuendo la conversione al giorno in cui è avvenuto il clic), mentre GA4 utilizza il modello 'Data dell'evento' (attribuendo la conversione al giorno effettivo dell'acquisto).",
            "GA4 attribuisce sempre e solo al traffico 'Direct', rendendo impossibile la visualizzazione corretta delle conversioni a pagamento.",
            "Google Ads, per le conversioni cross-device e le view-through, si affida ampiamente alla modellazione (Consent Mode) e all'identità Google, mentre GA4 nei report standard potrebbe applicare logiche di attribuzione Data-Driven cross-channel, dividendo il merito con altri canali (es. Email o Organico).",
            "Google Ads non è in grado di tracciare gli acquisti superiori a 1000€ per limiti normativi."
        ],
        correct: [0, 2],
        explanation: "Le risposte corrette sono **Google Ads utilizza un modello 'Data dell'interazione' (attribuendo la conversione al giorno in cui è avvenuto il clic), mentre GA4 utilizza il modello 'Data dell'evento' (attribuendo la conversione al giorno effettivo dell'acquisto).** e **Google Ads, per le conversioni cross-device e le view-through, si affida ampiamente alla modellazione (Consent Mode) e all'identità Google, mentre GA4 nei report standard potrebbe applicare logiche di attribuzione Data-Driven cross-channel, dividendo il merito con altri canali (es. Email o Organico).** GA4 valuta l'intero ecosistema multicanale (es. clic Google Ads -> clic Meta -> Acquisto, in DDA darà valore parziale), mentre Google Ads rivendica la conversione al 100% per se stesso e lo attribuisce temporalmente al momento in cui l'utente ha cliccato sull'annuncio, non quando ha comprato. Le opzioni su limiti di 1000€ e GA4 solo su Direct sono completamente inventate."
    },
    {
        q: "In una strategia 'Massimizza i clic', cosa succede se il budget giornaliero di un account è limitato e il CPC massimo viene impostato a un livello molto basso (es. 0,05€ in un mercato competitivo)?",
        options: [
            "Google Ads sospende automaticamente la campagna per 'Rendimento inatteso'.",
            "La campagna spenderà l'intero budget, portando traffico altissimo e ad alta conversione.",
            "L'algoritmo non riuscirà a vincere quasi nessuna asta valida, portando a volumi di impressioni e clic estremamente bassi e impedendo di spendere il budget giornaliero.",
            "Il sistema ignorerà il limite di 0,05€ per raggiungere l'obiettivo 'Massimizza i clic'."
        ],
        correct: [2],
        explanation: "La risposta corretta è **L'algoritmo non riuscirà a vincere quasi nessuna asta valida, portando a volumi di impressioni e clic estremamente bassi e impedendo di spendere il budget giornaliero.** Massimizza i clic tenta di ottenere il maggior numero di visite per il budget speso. Ma se il CPC Max è imposto manualmente a un limite irrealistico (es. inferiore all'offerta di base per entrare in asta), semplicemente non entra nelle aste. Di conseguenza, il traffico si blocca e il budget non si consuma. Le altre opzioni sono false: non vi è sospensione automatica e il limite del CPC in Massimizza i clic è un vincolo rigido che il sistema NON può ignorare."
    },
    {
        q: "Stai lanciando un nuovo prodotto. Hai creato una campagna Search che include 15 Keyword Broad Match (Generiche). Vuoi assicurarti che gli annunci non appaiano per termini completamente irrilevanti (brand reputation). Qual è la configurazione preventiva più avanzata e scalabile?",
        options: [
            "Creare campagne parallele Exact Match ed escludere le keyword Exact dalla campagna Broad Match.",
            "Creare Elenchi di parole chiave escluse (Negative Keyword Lists) a livello di MCC (Centro Clienti) o a livello di Account e applicarle a tutte le campagne pertinenti.",
            "Impostare il Broad Match in modalità 'Conservativa' tramite le impostazioni di campagna.",
            "Passare alla modalità Smart Bidding 'Massimizza le conversioni', che automaticamente blocca ogni query che non ha mai convertito storicamente in Italia."
        ],
        correct: [1],
        explanation: "La risposta corretta è **Creare Elenchi di parole chiave escluse (Negative Keyword Lists) a livello di MCC (Centro Clienti) o a livello di Account e applicarle a tutte le campagne pertinenti.** Gli elenchi di parole chiave escluse a livello superiore garantiscono che query non appropriate o concorrenti indesiderati vengano bloccati ovunque in modo scalabile e centralizzato, fondamentale quando si usa la Corrispondenza Generica (che ha una latenza interpretativa ampia). Le altre opzioni sono errate: creare campagne parallele e incrociare le negative (Alpha/Beta testing) è un vecchio metodo faticoso e meno consigliato con le macchine attuali; non esiste una modalità Broad Match 'conservativa'; e lo Smart Bidding non blocca mai le query a priori basandosi sull'assenza di conversioni storiche in un paese."
    },
    {
        q: "Un advertiser vuole sfruttare l'Offerta basata sul Valore per Acquisizione Nuovi Clienti (NCA). Nelle impostazioni, l'obiettivo 'Nuovo Cliente' ha un valore di 50€. L'utente acquista un prodotto di 100€. Come viene calcolato il valore della conversione per il Target ROAS se l'utente è effettivamente nuovo?",
        options: [
            "Il valore passato all'algoritmo sarà 150€ (Valore d'acquisto 100€ + Valore NCA 50€).",
            "Il valore passato all'algoritmo sarà 50€ (sovrascrive il valore di acquisto).",
            "Il valore passato all'algoritmo sarà 100€, mentre i 50€ vengono addebitati all'advertiser come costo di acquisizione.",
            "L'algoritmo ignora il valore dinamico e lo conta come 1 conversione standard."
        ],
        correct: [0],
        explanation: "La risposta corretta è **Il valore passato all'algoritmo sarà 150€ (Valore d'acquisto 100€ + Valore NCA 50€).** Nella modalità 'Offerta per valore del nuovo cliente' (New Customer Acquisition value mode), Google Ads somma il valore in denaro della transazione al 'bonus' assegnato per l'acquisizione del nuovo cliente. Questo eleva il Valore di Conversione totale per quell'asta (da 100€ a 150€), permettendo all'algoritmo tROAS di puntare e offrire di più (CPC maggiore) per vincere gli utenti nuovi, pur mantenendo intatta la logica basata sul ritorno. Le altre opzioni non comprendono questa logica matematica di addizione nativa di Ads."
    },
    {
        q: "Hai 3 campagne Search che puntano a 3 regioni diverse d'Italia. Tutte stanno lottando per generare conversioni. Come si utilizza correttamente la funzione 'Bozze ed esperimenti' (Drafts & Experiments) per testare la strategia 'Massimizza Conversioni' rispetto al CPC Manuale attuale?",
        options: [
            "Si applica direttamente alla MCC e si fa girare l'esperimento su tutta la gerarchia dell'account per 3 giorni.",
            "Si crea un Esperimento a livello di singola campagna (Campaign Experiment), dividendo il traffico 50/50 o cookie-based per isolare l'impatto della nuova strategia di offerta e si valuta la significatività statistica dopo alcune settimane.",
            "Si crea una Bozze ed Esperimenti che intercetta solo gli utenti Safari per misurare l'impatto dell'ITP.",
            "Si esportano le campagne in Google Ads Editor, si flagga 'Modalità Test' e si ricarica nel sistema."
        ],
        correct: [1],
        explanation: "La risposta corretta è **Si crea un Esperimento a livello di singola campagna (Campaign Experiment), dividendo il traffico 50/50 o cookie-based per isolare l'impatto della nuova strategia di offerta e si valuta la significatività statistica dopo alcune settimane.** Gli esperimenti di campagna integrati sono progettati appositamente per A/B test puliti su strategie di offerta, allocando una percentuale del traffico e del budget (es. 50%) alla versione base e il resto all'esperimento. Si attende finché i risultati non hanno valenza statistica. Le altre opzioni descrivono processi fittizi o non applicabili (es. MCC wide per 3 giorni, flag test su Editor, tracciamento isolato Safari)."
    },
    {
        q: "Seleziona le opzioni corrette. L'Esclusione Indirizzi IP a livello di campagna Search ha dei limiti strutturali. Quali delle seguenti situazioni **NON** possono essere efficacemente controllate solo escludendo gli IP in Google Ads?",
        options: [
            "Il traffico derivante dai test eseguiti dal tuo team SEO dagli uffici centrali dell'azienda con IP statico.",
            "Il traffico bot fraudolento generato da una botnet mobile distribuita che cambia IP dinamicamente a ogni richiesta.",
            "Le visite degli utenti VPN che mascherano la loro posizione simulando di essere in un altro continente.",
            "L'esclusione di uno specifico dipartimento interno dell'università che usa lo stesso indirizzo IP statico di facciata."
        ],
        correct: [1, 2],
        explanation: "Le risposte corrette sono **Il traffico bot fraudolento generato da una botnet mobile distribuita che cambia IP dinamicamente a ogni richiesta.** e **Le visite degli utenti VPN che mascherano la loro posizione simulando di essere in un altro continente.** L'esclusione IP in Google Ads accetta liste di IP statici (IPv4 o IPv6). Non può gestire indirizzi che ruotano dinamicamente come le botnet o le VPN che nascondono sistematicamente il vero IP e usano pool condivisi enormi. Al contrario, è utilissima per le altre opzioni: bloccare l'IP aziendale o dipartimentale noto (IP statici interni) per evitare clic accidentali dei dipendenti."
    },
    {
        q: "Un e-commerce vuole passare a un modello Target ROAS calcolato non sul fatturato, ma sul 'Margine di profitto'. Come può un inserzionista implementare tecnicamente le conversioni basate sul profitto in Google Ads Search?",
        options: [
            "Inserendo i costi operativi (COGS) nella sezione 'Impostazioni fatturazione' dell'account Google Ads.",
            "Passando il valore del margine lordo dinamicamente come 'value' nel pixel di conversione tramite GTM, o caricando le vendite offline calcolate sul netto via Measurement Protocol.",
            "Installando un'estensione per Chrome che decodifica i prezzi e applica un filtro percentuale direttamente sui report dell'interfaccia Ads.",
            "Google Ads ha un'impostazione nativa chiamata 'Target Margine' (Target Profit) che basta attivare con un flag."
        ],
        correct: [1],
        explanation: "La risposta corretta è **Passando il valore del margine lordo dinamicamente come 'value' nel pixel di conversione tramite GTM, o caricando le vendite offline calcolate sul netto via Measurement Protocol.** L'algoritmo non fa differenza concettuale tra 'fatturato' o 'profitto'; ottimizza semplicemente in base al numero passato al parametro 'value'. Inviando il margine dal backend o modificando il dataLayer, l'algoritmo massimizzerà i margini effettivi e non le vendite vuote. Le altre opzioni sono false: non esiste l'impostazione 'Target Profit' integrata, non si mettono i COGS nella fatturazione dell'account, né esistono estensioni Chrome magiche per l'algoritmo."
    },
    {
        q: "In Universal Analytics l'attribuzione di default era l'Ultimo Clic Indiretto (Last Non-Direct Click). In Google Ads l'attribuzione nativa si è sempre focalizzata sulle interazioni pubblicitarie. Come si comporta oggi il modello di attribuzione basato sui dati (DDA) in Google Ads verso i canali esterni (es. traffico organico e social)?",
        options: [
            "Assegna sempre una quota del merito (es. 20%) alle ricerche organiche e al traffico Facebook se precedono il clic sull'annuncio.",
            "DDA in Google Ads analizza e distribuisce il credito *solo* tra i touchpoint dell'ecosistema pubblicitario di Google (es. Search, YouTube, Display), ignorando i canali non tracciati dai tag Ads (Organic, Meta Ads).",
            "Filtra automaticamente le conversioni se il percorso include canali social a pagamento concorrenti di Google.",
            "Attribuisce il 100% della conversione alla prima parola chiave generica mai cercata dall'utente."
        ],
        correct: [1],
        explanation: "La risposta corretta è **DDA in Google Ads analizza e distribuisce il credito *solo* tra i touchpoint dell'ecosistema pubblicitario di Google (es. Search, YouTube, Display), ignorando i canali non tracciati dai tag Ads (Organic, Meta Ads).** Il tag di Google Ads non ha visibilità completa sull'orchestrazione degli altri canali mediatici. Quando applica il modello DDA, spartisce la singola conversione solo tra le campagne Google (es. un clic YouTube, seguito da un clic Search). Per analisi multicanale oggettive si usa GA4. Le altre opzioni sono errate perché presumono che Google Ads agisca da strumento di tracciamento omnicanale o che applichi filtri punitivi (falso) o attribuisca 100% al first click (falso)."
    },
    {
        q: "Per una campagna Lead Generation Search, il team commerciale nota che il 40% dei lead raccolti è 'spazzatura' (fake data o non qualificati). Come puoi istruire il Target CPA di Google Ads per smettere di rincorrere utenti che inviano lead scadenti?",
        options: [
            "Applicare un Segmento di Pubblico 'Lead Qualificati' in 'Osservazione' nella campagna Search.",
            "Aumentare il CPA Target del 50%, forzando la piattaforma a puntare a clic più costosi che sono implicitamente migliori.",
            "Implementare le conversioni offline (Offline Conversion Tracking): importare i cambi di stato CRM (es. 'Lead Qualificato' o 'Contratto Firmato') e spostare l'ottimizzazione del bid su questa azione di conversione down-funnel, ignorando il form inviato sul sito.",
            "Richiedere a Google di bloccare l'erogazione sulle Reti di Ricerca partner e attivare la Consent Mode Base."
        ],
        correct: [2],
        explanation: "La risposta corretta è **Implementare le conversioni offline (Offline Conversion Tracking): importare i cambi di stato CRM (es. 'Lead Qualificato' o 'Contratto Firmato') e spostare l'ottimizzazione del bid su questa azione di conversione down-funnel, ignorando il form inviato sul sito.** Il Machine Learning si nutre dei segnali che gli passi. Se gli chiedi di massimizzare i 'form inviati', lui troverà chiunque compili form. Dandogli in pasto l'evento 'Lead Qualificato' importato dal CRM (tramite GCLID), l'algoritmo capirà le caratteristiche dei lead buoni e scarterà quelli propensi allo spam. Le altre opzioni non risolvono il problema strutturale dell'apprendimento spazzatura."
    },
    {
        q: "L'uso degli 'Elenchi di Segmenti di Pubblico in-market' per le campagne Search si scontra con il concetto di intent della keyword. Qual è la best practice e l'effetto della loro impostazione in modalità 'Osservazione' piuttosto che 'Targeting'?",
        options: [
            "In Osservazione, limiti il pubblico di chi cerca le keyword a sole quelle persone che sono nell'elenco in-market, abbassando i costi.",
            "In Osservazione, non restringi la copertura. Tutti coloro che cercano le keyword vedono l'annuncio. Però ottieni report separati sulle performance (es. tassi di conversione) degli utenti in-market rispetto agli altri, per poter applicare futuri aggiustamenti dell'offerta.",
            "In Targeting, Google crea automaticamente annunci in-market che appaiono su siti di notizie e non sulla rete di ricerca.",
            "In Osservazione, il Punteggio di Qualità viene raddoppiato in quanto stai fornendo più segnali algoritmici a Google."
        ],
        correct: [1],
        explanation: "La risposta corretta è **In Osservazione, non restringi la copertura. Tutti coloro che cercano le keyword vedono l'annuncio. Però ottieni report separati sulle performance (es. tassi di conversione) degli utenti in-market rispetto agli altri, per poter applicare futuri aggiustamenti dell'offerta.** L'osservazione (ex bid-only) raccoglie dati senza tagliare fuori nessuno che digiti la keyword. Il targeting (ex target-and-bid) blocca letteralmente gli annunci se l'utente non rientra ANCHE nel pubblico specificato, rendendo le campagne Search estremamente di nicchia (spesso troppo). Le altre opzioni indicano finzioni (raddoppio QS, creazione ads display, o restrinzione in osservazione)."
    },
    {
        q: "Seleziona le opzioni corrette. L'Annuncio Adattabile della rete di Ricerca (RSA - Responsive Search Ad) sostituisce il formato obsoleto ETA. Quali meccaniche influenzano profondamente l'ottimizzazione e l'A/B testing degli RSA?",
        options: [
            "Il blocco (Pinning) dei titoli (es. bloccare il Brand Name in Posizione 1) garantisce il controllo del messaggio ma riduce le combinazioni esplorabili dal Machine Learning, spesso abbassando la metrica 'Efficacia dell'annuncio' (Ad Strength).",
            "Gli RSA funzionano solo se vengono inseriti esattamente 15 titoli e 4 descrizioni. Meno asset generano un errore di rifiuto automatico.",
            "Il sistema valuta in automatico la rilevanza in base alla singola query e serve la combinazione Titolo/Descrizione prevista con il miglior rendimento in quella specifica micro-asta.",
            "L'efficacia dell'annuncio ('Eccellente') garantisce automaticamente un Punteggio di Qualità di 10/10 sulle keyword associate."
        ],
        correct: [0, 2],
        explanation: "Le risposte corrette sono **Il blocco (Pinning) dei titoli (es. bloccare il Brand Name in Posizione 1) garantisce il controllo del messaggio ma riduce le combinazioni esplorabili dal Machine Learning, spesso abbassando la metrica 'Efficacia dell'annuncio' (Ad Strength).** e **Il sistema valuta in automatico la rilevanza in base alla singola query e serve la combinazione Titolo/Descrizione prevista con il miglior rendimento in quella specifica micro-asta.** Il pinning è utile (es. per norme legali o linee guida brand), ma Google lo 'penalizza' a livello di rating Ad Strength (che è solo una best-practice, non influenza direttamente l'Ad Rank). Il motore genera dinamicamente la combo. Le altre opzioni sono errate: un RSA può essere salvato e attivato anche con solo 3 titoli e 2 descrizioni, e una 'Ad Strength' eccellente non equivale al Punteggio di Qualità (che include storico CTR, landing page, ecc.)."
    },
    {
        q: "Stai lavorando per un servizio di soccorso stradale (urgenza altissima). Gli utenti convertono quasi esclusivamente da mobile (Click-to-Call). Se usi un Target CPA, perché potresti comunque voler impostare un Modificatore di Offerta Dispositivo a livello di campagna?",
        options: [
            "Perché il Target CPA ignora completamente il dispositivo da cui proviene la ricerca e non apprende autonomamente la differenza tra Desktop e Mobile.",
            "Il Target CPA in realtà assorbe e annulla la maggior parte dei modificatori di offerta per dispositivo (non potendo, per esempio, applicare un +50% in modo statico), ma un modificatore di -100% (esclusione totale) viene rispettato per bloccare il Desktop.",
            "Perché applicando un modificatore del +100% sul Mobile, l'algoritmo duplicherà automaticamente gli annunci trasformandoli in estensioni di chiamata.",
            "Non è mai possibile inserire modificatori di dispositivo su campagne Search se è attiva qualsiasi strategia Smart Bidding."
        ],
        correct: [1],
        explanation: "La risposta corretta è **Il Target CPA in realtà assorbe e annulla la maggior parte dei modificatori di offerta per dispositivo (non potendo, per esempio, applicare un +50% in modo statico), ma un modificatore di -100% (esclusione totale) viene rispettato per bloccare il Desktop.** Lo Smart Bidding automatizza le offerte considerando milioni di segnali, incluso il dispositivo; quindi i modificatori manuali (+20%, -30%) vengono solitamente ignorati (tranne per tROAS dove si può impostare un tCPA per dispositivo in rari casi). Tuttavia, il -100% è interpretato come un comando di *esclusione assoluta*, utilissimo per bloccare del tutto il desktop per business di sole urgenze mobili. Le altre opzioni sono errate e confondono le logiche strutturali."
    },
    {
        q: "L'attributo GCLID (Google Click Identifier) viene scambiato via URL. Nel contesto di un sito web (es. WordPress) con un server cache aggressivo e redirect 301, quale problema gravissimo e comune può verificarsi, paralizzando il tracciamento di Google Ads?",
        options: [
            "Il redirect 301 converte il traffico Google in traffico Bing/Yahoo nei report di sistema.",
            "I redirect mal configurati e i firewall/cache 'strippano' (tagliano) i parametri URL (incluso ?gclid=...), perdendo la stringa univoca. Di conseguenza, il Google Ads Conversion Linker non può salvare il cookie first-party, perdendo l'attribuzione della campagna.",
            "Il GCLID si duplica, costringendo l'inserzionista a pagare due volte lo stesso clic (Double Click Fraud).",
            "Il server invia un ping di cancellazione al sistema di fatturazione di Google."
        ],
        correct: [1],
        explanation: "La risposta corretta è **I redirect mal configurati e i firewall/cache 'strippano' (tagliano) i parametri URL (incluso ?gclid=...), perdendo la stringa univoca. Di conseguenza, il Google Ads Conversion Linker non può salvare il cookie first-party, perdendo l'attribuzione della campagna.** È il problema tecnico numero uno post-lancio. Se la landing page è `sito.com/pagina` ma redirige a `sito.com/pagina/` senza conservare i parametri, il GCLID scompare dall'URL prima che i JavaScript (GTM, gtag) facciano in tempo a leggerlo. Senza GCLID, la conversione apparirà come Direct/Referral e Ads perderà tutti i dati. Le altre opzioni sono false (non si trasforma in traffico Yahoo, né fa pagare doppio il clic)."
    },
    {
        q: "Il Performance Planner di Google Ads suggerisce che aumentando la spesa di 1000€ il mese prossimo su una campagna Target CPA, genererai 50 conversioni extra mantenendo lo stesso CPA. Quale assunzione nascosta fa lo strumento per fornire questa stima matematica?",
        options: [
            "Presume che lancerai contemporaneamente annunci video su YouTube e usa questi dati predittivi.",
            "Assume che le dinamiche d'asta (aggressività dei competitor, conversion rate della landing page) rimangano simili allo storico recente e tiene conto della stagionalità attesa per quelle query.",
            "Presuppone che modificherai tutte le tue keyword Exact Match in Broad Match contestualmente all'aumento di spesa.",
            "Garantisce le conversioni extra coprendo economicamente la differenza se l'obiettivo non viene raggiunto."
        ],
        correct: [1],
        explanation: "La risposta corretta è **Assume che le dinamiche d'asta (aggressività dei competitor, conversion rate della landing page) rimangano simili allo storico recente e tiene conto della stagionalità attesa per quelle query.** Il Performance Planner usa dati storici di milioni di aste, la stagionalità delle query e i tassi di conversione storici dell'account. Simula la curva di rendimento *ceteris paribus* (a parità di altre condizioni, come competitor e performance del sito). Non è una garanzia e non presume cambi strutturali di match types, né garantisce rimborsi. Le altre opzioni sono completamente fasulle."
    },
    {
        q: "Seleziona le opzioni corrette. L'auto-migrazione delle campagne locali (Location targeting) avanzate verso la struttura 'Presenza o Interesse' vs 'Presenza'. Selezionando l'opzione 'Presenza o interesse: persone che si trovano, che sono regolarmente o che mostrano interesse verso le tue località', a quali rischi si espone una clinica dentistica locale a Roma?",
        options: [
            "Potrebbe sprecare gran parte del budget ricevendo clic da utenti a Milano, in Spagna o in Giappone che effettuano ricerche turistiche con parole chiave ambigue e non verranno mai fisicamente nello studio.",
            "La campagna verrebbe bloccata in quanto Google proibisce il targeting per 'Interesse' al settore medico (Healthcare Policy).",
            "La CTR potrebbe abbassarsi vertiginosamente, abbassando il Quality Score a causa di impressioni per intenti lontani dal raggio fisico di servizio.",
            "Aumenterebbe la velocità di caricamento delle landing page grazie all'uso dei server CDN distribuiti di Google Ads in base alla localizzazione dell'utente."
        ],
        correct: [0, 2],
        explanation: "Le risposte corrette sono **Potrebbe sprecare gran parte del budget ricevendo clic da utenti a Milano, in Spagna o in Giappone che effettuano ricerche turistiche con parole chiave ambigue e non verranno mai fisicamente nello studio.** e **La CTR potrebbe abbassarsi vertiginosamente, abbassando il Quality Score a causa di impressioni per intenti lontani dal raggio fisico di servizio.** L'impostazione raccomandata da Google (Presenza o Interesse) può essere fatale per business fisici non turistici (come dentisti o idraulici). Un utente fuori zona che cerca 'Dentista in Italia' (interesse) vedrebbe l'annuncio e potrebbe cliccare disperdendo budget e abbassando le metriche di engagement. Le altre opzioni: le policy mediche limitano il retargeting e la profilazione medica, non la localizzazione geografica. Le landing page CDN non c'entrano nulla."
    },
    {
        q: "Qual è l'impatto principale dell'abilitazione dei 'Segnali di Google' (Google Signals) all'interno dell'ecosistema collegato GA4 -> Google Ads per il targeting Search?",
        options: [
            "Consente a Google Ads di decriptare le email in chiaro dei clienti per l'invio di newsletter pubblicitarie.",
            "Abilita le metriche e la mappatura cross-device basate sugli utenti loggati nell'account Google che hanno attivato la personalizzazione degli annunci, arricchendo i segmenti di pubblico per il remarketing Search (RLSA).",
            "Migliora automaticamente la leggibilità del sito web sui dispositivi mobili eliminando i popup invadenti.",
            "Costringe le campagne Search a trasformarsi automaticamente in campagne Display."
        ],
        correct: [1],
        explanation: "La risposta corretta è **Abilita le metriche e la mappatura cross-device basate sugli utenti loggati nell'account Google che hanno attivato la personalizzazione degli annunci, arricchendo i segmenti di pubblico per il remarketing Search (RLSA).** I Google Signals collegano le visite e i comportamenti del tuo sito/app al potente data graph degli utenti Google. Questo permette di tracciare correttamente l'utente multipiattaforma e creare elenchi di remarketing più solidi, riutilizzabili in Google Ads (Retargeting list for Search Ads). Le altre opzioni (decriptare email, sistemare il sito, forzare la Rete Display) sono del tutto fuori contesto e scorrette."
    },
    {
        q: "Lavori su un account B2B con un ciclo di vendita di 90 giorni. L'obiettivo conversioni in Google Ads (che istruisce il Target CPA) conta le compilazioni di form sul sito web. Qual è la debolezza letale di questa configurazione per l'ottimizzazione a lungo termine?",
        options: [
            "L'algoritmo non sa cosa succede post-form e tenderà a ottimizzare per l'utente che compila il modulo al minor costo, spesso generando volumi elevati di lead a bassa qualità o senza budget (es. studenti o venditori).",
            "I cookie durano obbligatoriamente solo 30 giorni; quindi, la compilazione del form verrebbe comunque ignorata se l'utente converte oltre i 30 giorni.",
            "Il Target CPA nel B2B richiede di associare un carrello e-commerce (Google Shopping) per funzionare.",
            "Le conversioni di tipo form generation possono essere tracciate solo importando un foglio CSV manualmente ogni settimana."
        ],
        correct: [0],
        explanation: "La risposta corretta è **L'algoritmo non sa cosa succede post-form e tenderà a ottimizzare per l'utente che compila il modulo al minor costo, spesso generando volumi elevati di lead a bassa qualità o senza budget (es. studenti o venditori).** In un ciclo B2B lungo, il form è solo il 5% del funnel. Se dai in pasto al machine learning solo il 'form', esso prenderà la scorciatoia: trovare clic a basso costo propensi a compilare form a caso. Non massimizzerà i contratti chiusi. La soluzione è importare gli stage CRM più profondi (Offline Conversions). Le altre opzioni: la finestra di conversione in Google Ads può essere estesa fino a 90 giorni (non 30 obbligatori); non richiede Shopping; i form si tracciano automaticamente via pixel, non serve CSV settimanale."
    },
    {
        q: "In Google Ads, la 'Condivisione del Budget' (Shared Budget) viene applicata a 5 diverse campagne Search in un Portafoglio Target ROAS. Qual è una conseguenza diretta del consolidamento dei budget in questo modo?",
        options: [
            "Tutte le 5 campagne verranno rimosse dall'asta se una sola campagna riceve un rifiuto normativo.",
            "L'algoritmo ripartirà automaticamente e fluidamente i fondi tra le campagne, dando priorità e maggiore liquidità a quella che presenta in tempo reale le migliori opportunità per soddisfare il Target ROAS globale.",
            "Ogni campagna spenderà esattamente e rigidamente un quinto (20%) del budget giornaliero totale condiviso.",
            "La condivisione del budget è un'impostazione deprecata e sostituita integralmente dalle campagne Performance Max."
        ],
        correct: [1],
        explanation: "La risposta corretta è **L'algoritmo ripartirà automaticamente e fluidamente i fondi tra le campagne, dando priorità e maggiore liquidità a quella che presenta in tempo reale le migliori opportunità per soddisfare il Target ROAS globale.** I budget condivisi con strategie di portafoglio permettono di evitare la 'fame di budget' (budget constraint) in una campagna top-performing e fondi non spesi in un'altra scarica. La liquidità migra dove l'algoritmo prevede le migliori conversioni/valore. Le altre opzioni: le policy agiscono a livello di annuncio/keyword e non bloccano l'intero set; il budget NON viene diviso rigidamente (altrimenti sarebbe inutile); non sono deprecate."
    },
    {
        q: "Seleziona le opzioni corrette. Cosa differenzia radicalmente i segmenti di pubblico 'Affinità' (Affinity) dai segmenti 'In-Market' applicati a una campagna Search?",
        options: [
            "I segmenti Affinità si basano sugli stili di vita a lungo termine, passioni e abitudini degli utenti (upper-funnel).",
            "I segmenti In-Market identificano utenti che stanno attivamente ricercando o confrontando prodotti specifici, mostrando un'elevata propensione all'acquisto nel breve termine (lower-funnel).",
            "Gli elenchi In-Market possono essere usati solo per le campagne Display e Video, mai per la Search.",
            "L'Affinità si basa sui dati caricati dal CRM (First party data), mentre l'In-Market si basa sulle email criptate."
        ],
        correct: [0, 1],
        explanation: "Le risposte corrette sono **I segmenti Affinità si basano sugli stili di vita a lungo termine, passioni e abitudini degli utenti (upper-funnel).** e **I segmenti In-Market identificano utenti che stanno attivamente ricercando o confrontando prodotti specifici, mostrando un'elevata propensione all'acquisto nel breve termine (lower-funnel).** Questa è la distinzione fondamentale dell'audience targeting di Google. Affinità = Chi sono/Cosa amano (es. appassionati di cucina). In-Market = Cosa stanno comprando ora (es. in mercato per frullatori industriali). Le altre opzioni sono palesemente errate: entrambi si possono usare in Search e nessuno dei due è basato su CRM o First-party data (quello è il Customer Match)."
    },
    {
        q: "Il report 'Termini di Ricerca' in Google Ads ha subito variazioni storiche dovute alla privacy. Qual è lo stato attuale e la best practice per colmare i gap di visibilità nelle query effettivamente cercate dagli utenti?",
        options: [
            "Google Ads oggi mostra il 100% delle query senza filtri. Non c'è alcun bisogno di colmare gap.",
            "Google filtra le query con volumi estremamente bassi o dati personali per la privacy. Per l'ottimizzazione del Search intent, è vitale utilizzare i 'Dati di ricerca in Rete' forniti nella scheda Approfondimenti (Insights), che categorizza i temi di ricerca nascosti, oppure usare script API avanzati e BigQuery su GA4 (al netto dei thresholding).",
            "I gap possono essere colmati richiedendo all'account manager di disattivare il filtro GDPR a livello di account MCC.",
            "Le query non vengono più mostrate dall'aggiornamento iOS14; bisogna usare Bing Ads per scoprire il traffico Google."
        ],
        correct: [1],
        explanation: "La risposta corretta è **Google filtra le query con volumi estremamente bassi o dati personali per la privacy. Per l'ottimizzazione del Search intent, è vitale utilizzare i 'Dati di ricerca in Rete' forniti nella scheda Approfondimenti (Insights), che categorizza i temi di ricerca nascosti, oppure usare script API avanzati e BigQuery su GA4 (al netto dei thresholding).** Dopo il settembre 2020, Google ha ristretto radicalmente le query visibili (mostrando solo quelle ricercate da un numero 'significativo' di utenti). La scheda Insights ora raggruppa intenti per superare questi blocchi di visibilità a livello di singola query. Le altre opzioni descrivono bypass illegali (togliere filtro GDPR), o falsità tecniche (visibilità al 100%, o impossibilità da iOS14, che intacca i cookie non l'analisi delle query search di Google)."
    },
    {
        q: "Cosa comporta l'attivazione della funzione 'Applica automaticamente i consigli' (Auto-applied recommendations) per le parole chiave ('Aggiungi nuove parole chiave') in un account Google Ads gestito da un'agenzia strutturata?",
        options: [
            "L'account riceverà un bollino di certificazione automatico Google Partner per l'alto livello di ottimizzazione.",
            "Google creerà campagne completamente nuove in autonomia, stanziando extra-budget giornalieri.",
            "Senza supervisione umana severa, l'algoritmo potrebbe inserire keyword Broad Match fuori target, inquinando l'intento originale, cannibalizzando le campagne esistenti e sprecando budget prezioso, inficiando le logiche di controllo dell'agenzia.",
            "Gli annunci Search verranno tradotti automaticamente in oltre 40 lingue per raggiungere segmenti globali."
        ],
        correct: [2],
        explanation: "La risposta corretta è **Senza supervisione umana severa, l'algoritmo potrebbe inserire keyword Broad Match fuori target, inquinando l'intento originale, cannibalizzando le campagne esistenti e sprecando budget prezioso, inficiando le logiche di controllo dell'agenzia.** Sebbene l'applicazione automatica possa far risparmiare tempo e aumentare l'Optimization Score, per agenzie B2B o mercati complessi è molto rischioso lasciare al motore l'autonomia di inserire nuove keyword (che sono spesso troppo ampie). È sempre meglio mantenere questo set di raccomandazioni in approvazione manuale. Le altre opzioni esagerano le conseguenze meccaniche (budget illimitati, traduzioni forzate, bollini Partner automatici)."
    },
    {
        q: "Lavori per un cliente Software-as-a-Service (SaaS). Hai implementato l'Offline Conversion Tracking via API. Cosa succede al Target CPA se i tempi di chiusura del lead verso 'Customer' (la conversione offline importata) richiedono 45-60 giorni e il volume mensile è di 10 chiusure?",
        options: [
            "L'algoritmo funzionerà in modo ottimale grazie all'estrema precisione del Target CPA anche con basse conversioni.",
            "L'algoritmo sarà costantemente in fase di 'Apprendimento' e prenderà decisioni sub-ottimali: sia a causa del bassissimo volume (10 conversioni non forniscono liquidità di dati) sia per la latenza temporale in cui i modelli matematici perdono la correlazione forte tra il clic dell'annuncio e il risultato tardivo.",
            "Google Ads interromperà l'asta rifiutando di partecipare perché il periodo di 60 giorni supera il massimo consentito dai cookie.",
            "Il punteggio di qualità verrà penalizzato per lentezza di risposta della landing page."
        ],
        correct: [1],
        explanation: "La risposta corretta è **L'algoritmo sarà costantemente in fase di 'Apprendimento' e prenderà decisioni sub-ottimali: sia a causa del bassissimo volume (10 conversioni non forniscono liquidità di dati) sia per la latenza temporale in cui i modelli matematici perdono la correlazione forte tra il clic dell'annuncio e il risultato tardivo.** Basso volume (sotto le 15-30 conversioni al mese) e ritardo estremo (Conversion Delay oltre le 3-4 settimane) distruggono l'efficienza dello Smart Bidding, che necessita di feedback rapidi e ciclici. In questo caso, sarebbe meglio ottimizzare per un micro-evento più frequente a monte del funnel (es. MQL/Demo). Le altre opzioni non descrivono il reale problema algoritmico o contengono dati falsi (la finestra massima è 90 giorni, non inficia il Quality Score della landing page)."
    },
    {
        q: "In ottica di tracciamento Server-Side e attribuzione avanzata, cos'è il parametro 'wbraid' nell'ecosistema Google Search?",
        options: [
            "È un token che sostituisce l'indirizzo email inviato in chiaro per adeguarsi alla cookie law europea.",
            "È un identificatore aggregato e criptato introdotto da Google per misurare le conversioni App-to-Web conformemente al framework App Tracking Transparency (ATT) di iOS, quando il GCLID non può essere generato o passato a causa del rifiuto dell'utente al tracciamento su dispositivi Apple.",
            "È un tag html da inserire nell'head della pagina per confermare la proprietà del dominio in Merchant Center.",
            "È l'acronimo di Web Based Return Ad Identifier e serve esclusivamente per il remarketing dinamico Criteo."
        ],
        correct: [1],
        explanation: "La risposta corretta è **È un identificatore aggregato e criptato introdotto da Google per misurare le conversioni App-to-Web conformemente al framework App Tracking Transparency (ATT) di iOS, quando il GCLID non può essere generato o passato a causa del rifiuto dell'utente al tracciamento su dispositivi Apple.** Con iOS 14.5 e la necessità di consenso via prompt, il GCLID deterministico e user-specific viene rimosso. Google passa allora wbraid (o gbraid per app-app) che, attraverso l'infrastruttura di modellazione di Google, permette di conservare misurazioni aggregate senza violare le direttive Apple. Le altre opzioni descrivono tecnologie incorrette (Merchant, Criteo, hashing delle email)."
    }
];