/**
 * Milestone 1
 * Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
 * Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto 
 * */

import { contacts } from "./db.js"; // import of a default export
import { Contact } from "./Models/Contact.js"; // import of a default export
import { Message } from "./Models/Message.js"; // import of a default export

const { createApp } = Vue

createApp({
    data() {
        return {
            activeContact: -1,
            contacts: contacts,
            newMessage: "",
            searcContact: "",
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
        getActiveContact(index) {
            this.activeContact = index;
            //console.log(this.activeContact);
        },
        sendMessage() {
            console.log(this.newMessage);
            if (this.newMessage != "") {
                const newMessageObj = new Message(new Date(), this.newMessage, 'sent');
                this.contacts[this.activeContact].messages.push(newMessageObj);
                this.newMessage = "";

                //passage to value to avoid binding
                const tmp = this.activeContact
                setTimeout(() => {
                    this.reciveMessage(tmp)
                }, 2 * 1000);
            }
        },

        /**
         * @param {Number} activeContact to avoid errors if activeContact is changed before receiving a new message 
         */
        reciveMessage(activeContact) {
            const newMessageObj = new Message(new Date(), "ok", 'received');
            this.contacts[activeContact].messages.push(newMessageObj);
        },

        deleteMessage(message) {
            const messageIndex = this.contacts[this.activeContact].messages.indexOf(message);
            this.contacts[this.activeContact].messages.splice(messageIndex, 1);
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