# Whatsapp - Replica web-app

**Initial commit**: 31/03/23

**Tecnologie:** Vue.js, JavaScript, Luxon, HTML, CSS e Bootstrap.

💬 Vi presneto la replica di WhatsApp Web per Boolean

In questo esercizio ho sfruttato Vue.js per dare alla mia pagina la reattività di una single-page-application. Ho implementato la possibilità di inviare messaggi e la simulazione di una risposta automatica, popolando in maniera dinamica la lista dei contatti e dei messaggi tramite il `v-for`.

https://github.com/cyberfolk/vue-whatsapp/assets/114855536/8307e1a7-720b-43a1-a6f0-e61e84042496

## Milestone

-   [x] Replicare della grafica. Creare una classe CSS per i messaggi in verde quelli dell'utente in bianco quelli dell’interlocutore.
-   [x] Popolare dinamicamente la **lista-dei-contatti** visualizzando nome e immagine di ogni contatto. Usare `v-for`.
-   [x] Cliccando su un contatto aprire la chat relativa a quel contatto.
-   [x] Nella chat del contatto selzionato visualizzare dinamicamento lo storico della conversazione. Usare `v-for`.
-   [x] Ordinare cronologicamente la lista-dei-contatti.
-   [x] **Ricerca utenti**: visualizzare solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
-   [x] **Aggiungere un nuovo contatto**: inserendo il nome e un link all'immagine del profilo. Senza questi campi la registrazione fallisce.
-   [x] **Inviare nuovi messaggi**: l’utente scrive un testo nella textarea e premendo “enter” il messaggio verrà aggiunto alla chat, come messaggio verde.
-   [x] **Risposta automatica**: ogni contatto genererà una risposta casuale una volta ricevuto un nuovo messaggio dall'utente.
-   [x] **Aggiornamento status**: dopo aver inviato il messaggio al contatto il suo status verrà aggiornato con "Sta scrivendo", "Online" e infine tornerà all'ora dell'ultimo messaggio.
-   [x] Ogni volta che viene inviato/ricevuto un nuovo messaggio, la finestra della chat scorrerà automaticamente fino al messaggio più recente.
-   [x] Bloccare l'invio di messaggi vuoti.
-   [x] Creare un apposita classe [CStatusList](/assets/js/Models/CStatusList.js) per gestire con una logica FIFO lo stato dei contatti e relativa temporizzazione nelle risposte.
-   [x] **Cancella messaggio**: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
-   [x] **Elimino tutti imessaggi**: puoi eliminare tutti i messaggi all'interno di una chat con un solo click. La chat rimarrà aperta in modo da poter continuare a inviare messaggi.
-   [x] **Elimina chat**: Eliminare un intera chat eliminado anche il relativo contatto.

## TODO

-   [ ] Design responsive
-   [ ] Pagina di benvenuto senza chat aperte.
-   [ ] Switch modalità scuro/chiaro.
-   [ ] Messaggi audio.
-   [ ] Permettere di registrare un nuovo utente fornendo anche solo il suo nome. Se non fornisci un'immagine, verranno utilizzate le iniziali del contatto.
-   [ ] Se un contatto non ha un'immagine del profilo, vedrai le sue iniziali.
-   [ ] Puoi chiudere ogni chat per tornare alla pagina di benvenuto.
-   [ ] Gestione messaggi preferiti.
-   [ ] Se fai click sulla scheda Messaggi preferiti ma non ci sono messaggi preferiti, visualizzare anche una pagina informativa.
-   [ ] I messaggi preferiti possono essere rimossi dalla finestra della chat o dalla finestra dei messaggi preferiti, e anche il messaggio "Aggiungi ai preferiti" / "Rimuovi dai preferiti" si alternerà.
-   [ ] I messaggi preferiti mostrano anche, per ogni messaggio, il nome del contatto da cui provengono/a cui sono stati inviati.
-   [ ] Se elimini un messaggio che era un messaggio preferito, verrà rimosso anche dalla finestra dei messaggi preferiti.
-   [ ] Puoi inserire emoji nei tuoi messaggi.
-   [ ] Se vuoi chiudere la chat attiva, fai click sulla X nell'angolo in alto a destra.
