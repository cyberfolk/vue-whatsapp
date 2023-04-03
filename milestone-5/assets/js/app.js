/**
 * Milestone 1
 * Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
 * Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto 
 * */

import { contacts } from "./db.js"; // import of a default export
import { randomTextMessages } from "./db.js"; // import of a default export
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
            activeContactStatus: "",
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
            this.contacts[this.activeContact].visible = false; // flag wichtells me that I'm waiting for an answer from that specific user 
            this.activeContactStatus = 'WRITING';
            this.updateStatus();
            const tmpActvContact = this.activeContact //passage to value to avoid binding

            // Set timeout before the user replies
            setTimeout(() => {
                this.reciveMessage(tmpActvContact);
                this.activeContactStatus = 'ONLINE';
                this.updateStatus();
            }, 2 * 1000);

            // Set timeout before the user leaves the chat
            setTimeout(() => {
                this.activeContactStatus = 'NOT-ONLINE';
                this.updateStatus();
                this.contacts[this.activeContact].visible = true;
            }, 5 * 1000);
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
        updateStatus() {
            //with this if I distinguish whether I'm waiting for a response from the user or not
            if (this.contacts[this.activeContact].visible == false) {
                switch (this.activeContactStatus) {
                    case 'WRITING':
                        return `Sta scrivendo...`;
                        break;
                    case 'ONLINE':
                        return `Online`;
                        break;
                }
            }
            return 'Ultimo messaggio inviato alle ' + this.getLastMexDate(contacts[this.activeContact].messages);
        },
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
