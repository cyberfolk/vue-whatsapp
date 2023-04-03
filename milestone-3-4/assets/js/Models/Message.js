export class Message {
    /**
     * Image Contructor
     * @param {String} date The date of the message
     * @param {String} message The text of the message
     * @param {String} status can be only 'sent' or 'received'
     */
    constructor(date, message, status) {
        this.date = date;
        this.message = message;
        this.status = status;
    }
}