/**
 * Milestone 1
 * Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
 * Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto 
 * */

import { contacts } from "./db.js"; // import of a default export
import { randomTextMessages } from "./db.js"; // import of a default export
import { contacts_status } from "./db.js"; // import of a default export
import { Message } from "./Models/Message.js"; // import of a default export
import { CStatus } from "./Models/CStatus.js"; // import of a default export

const { createApp } = Vue

createApp({
    data() {
        return {
            activeContact: -1,
            contacts: contacts,
            newMessage: "",
            searcContact: "",
            contacts_status: contacts_status,
        }
    },
    methods: {
        getLastMex(messages) {
            const len = messages.length;
            if (len == 0) {
                return ""
            } else {
                const message = messages[len - 1].message;
                if (message.length > 40) {
                    return `${message.substring(0, 37)}...`;
                } else {
                    return message;
                }
            }
        },
        getLastMexDate(messages) {
            const len = messages.length;
            if (len == 0) {
                return ""
            } else {
                const date = new Date(messages[len - 1].date);
                return `${date.getHours()}:${date.getMinutes()}`
            }
        },

        setLatMexDate(messages) {
            const len = messages.length;
            if (len == 0) {
                lastMexDateActive = ""
            } else {
                const date = new Date(messages[len - 1].date);
                lastMexDateActive = `${date.getHours()}:${date.getMinutes()}`
            }
        },

        getActiveContact(index) {
            this.activeContact = index;
        },

        sendMessage() {
            //console.log(this.newMessage);
            if (this.newMessage.trim() != "") {
                const newMessageObj = new Message(new Date(), this.newMessage.trim(), 'sent');
                this.contacts[this.activeContact].messages.push(newMessageObj);
                this.newMessage = "";
                this.waitForAnswer();
            }
        },

        waitForAnswer() {
            const tmpActvContact = this.activeContact;
            const cStatus = this.getCStatusByIndex(tmpActvContact);
            if (cStatus) {
                this.getCStatusByIndex(tmpActvContact).status = 'WRITING';
            } else {
                this.contacts_status.push(new CStatus("WRITING", tmpActvContact))
            }
            //console.log(contacts_status);
            this.updateStatus();

            // Set timeout before the user replies
            setTimeout(() => {
                this.reciveMessage(tmpActvContact);
                this.getCStatusByIndex(tmpActvContact).status = 'ONLINE';
                this.updateStatus();
            }, 5 * 1000);

            // Set timeout before the user leaves the chat
            setTimeout(() => {
                this.removeCStatusByIndex(tmpActvContact);
                //console.log(contacts_status);
                this.updateStatus();
            }, 10 * 1000);
        },

        updateStatus() {
            const cStatus = this.contacts_status.find(cStatus => cStatus.index === this.activeContact)
            //console.log(contacts_status, cStatus, this.activeContact);
            if (cStatus) {
                if (cStatus.status === 'WRITING') {
                    return `Sta scrivendo...`;
                } else {
                    return `Online`;
                }
            } else {
                //Entro qui nel caso incui cStatus sia undefied perchè non esiste nessun cStatus con this.activeContact
                console.log("ma ci entro qui?");
                return 'Ultimo messaggio inviato alle ' + this.getLastMexDate(contacts[this.activeContact].messages);
            }

        },

        /**
         * @param {Number} activeContact to avoid errors if activeContact is changed before receiving a new message 
         */
        reciveMessage(activeContact) {
            const text = getRandomTextMessage();
            const newMessageObj = new Message(new Date(), text, 'received');
            this.contacts[activeContact].messages.push(newMessageObj);
        },

        deleteMessage(message) {
            const messageIndex = this.contacts[this.activeContact].messages.indexOf(message);
            this.contacts[this.activeContact].messages.splice(messageIndex, 1);
        },
        removeCStatusByIndex(tmpActvContact) {
            this.contacts_status.splice(this.contacts_status.findIndex(cStatus => cStatus.index === tmpActvContact), 1);
        },
        getCStatusByIndex(tmpActvContact) {
            return this.contacts_status.find(cStatus => cStatus.index === tmpActvContact);
        }
    },
    computed: {
        filteredList() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searcContact.toLowerCase())
            })
        }
    },
    mounted() {
    },
}
).mount('#app')

function getRandomTextMessage() {
    const max = randomTextMessages.length;
    const index = Math.floor(Math.random() * max);
    return randomTextMessages[index];
}