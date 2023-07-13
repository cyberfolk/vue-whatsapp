# Whatsapp - Replica web-app

**Initial commit**: 31/03/23

**Tecnologie:** Vue.js, JavaScript, Luxon, HTML, CSS e Bootstrap.

💬 Vi presneto la replica di WhatsApp Web per Boolean

In questo esercizio ho sfruttato Vue.js per dare alla mia pagina la reattività di una single-page-application. Ho implementato la possibilità di inviare messaggi e la simulazione di una risposta automatica, popolando in maniera dinamica la lista dei contatti e dei messaggi tramite il v-for.

🔗 Repository:
https://github.com/cyberfolk/vue-boolzapp

## Milestone

- Replicare della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
- Popolare dinamicamente la lista dei contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
- Visualizzare dinamicamente i messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
- Cliccare sul contatto mostra la conversazione del contatto cliccato
- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
- Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
- Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
- Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
- Creare un apposita classe [CStatusList](/assets/js/Models/CStatusList.js) per gestire con una logica FIFO lo stato dei contatti e relativa temporizzazione nelle risposte.
