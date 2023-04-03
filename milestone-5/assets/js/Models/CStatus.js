export class CStatus {
    /**
     * CStatus track the status of a contact
     * @param {String} status of contact it can be ONLINE or WRITING
     * @param {Number} index index of contact relative to contacts-array
     */
    constructor(status, index) {
        this.status = status;
        this.index = index;
    }
}