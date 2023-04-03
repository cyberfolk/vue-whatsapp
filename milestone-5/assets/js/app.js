/**
 * Milestone 1
 * Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
 * Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto 
 * */

import { contacts } from "./db.js";
import { randomTextMessages } from "./db.js";
import { statusList } from "./db.js";
import { Message } from "./Models/Message.js";

const { createApp } = Vue

createApp({
    data() {
        return {
            activeContact: -1,
            contacts: contacts,
            newMessage: "",
            searcContact: "",
            statusList: statusList,
        }
    },
    methods: {
        getLastMex(messages) {
            const len = messages.length;
            if (len == 0) {
                return ""
            } else {
                return reduceMexSize(messages[len - 1]);
            }
        },

        getMexDate(message) {
            if (message) {
                const date = new Date(message.date);
                return `${date.getHours()}:${date.getMinutes()}`
            } else {
                return 'tempo fa'
            }
        },

        getLastMexDate(messages) {
            const len = messages.length;
            if (len == 0) {
                return "";
            } else {
                return this.getMexDate(messages[len - 1])
            }
        },

        getActiveContact(index) {
            this.activeContact = index;
        },

        sendMessage() {
            const mexTrimmed = this.newMessage.trim()
            if (mexTrimmed != "") {
                const newMexObj = new Message(new Date(), mexTrimmed, 'sent');
                const activeChat = this.contacts[this.activeContact].messages
                activeChat.push(newMexObj);
                this.newMessage = "";

                this.waitForAnswer();
            }
        },

        waitForAnswer() {
            const tmpActvContact = this.activeContact; // to avoid binding
            this.statusList.addStatus(tmpActvContact)

            this.updateStatus();
            this.waitReplies(tmpActvContact);     // Set timeout before the user replies
            this.waitLeavesChat(tmpActvContact);  // Set timeout before the user leaves the chat
        },

        waitReplies(actvContact) {
            setTimeout(() => {
                this.reciveMessage(actvContact);
                this.statusList.setStatus(actvContact, 'ONLINE');
                this.updateStatus();
            }, 10 * 1000);
        },

        waitLeavesChat(actvContact) {
            setTimeout(() => {
                this.statusList.removeStatus(actvContact);
                this.updateStatus();
            }, 15 * 1000);
        },

        updateStatus() {
            const activeStatus = this.statusList.getLastStatus(this.activeContact);
            switch (activeStatus) {
                case 'WRITING':
                    return `Sta scrivendo...`;
                    break;
                case 'ONLINE':
                    return `Online`;
                    break;
                default:
                    const activeChat = this.contacts[this.activeContact].messages;
                    const lastMexReceived = activeChat.findLast((mex) => mex.status === 'received');
                    return 'Ultimo messaggio inviato alle ' + this.getMexDate(lastMexReceived);
            }

        },

        reciveMessage(activeContact) {
            const text = getRandomTextMessage();
            const newMessageObj = new Message(new Date(), text, 'received');
            this.contacts[activeContact].messages.push(newMessageObj);
        },

        deleteMessage(message) {
            const activeChat = this.contacts[this.activeContact].messages;
            const messageIndex = activeChat.indexOf(message);
            activeChat.splice(messageIndex, 1);
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

function reduceMexSize(mex) {
    const MAX_LENGTH = 40;
    const message = mex.message;
    if (message.length > MAX_LENGTH) {
        return `${message.substring(0, MAX_LENGTH - 3)}...`;
    } else {
        return message;
    }
}