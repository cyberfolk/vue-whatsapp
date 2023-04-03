import { CStatus } from "./CStatus.js"; // import of a default export
export class CStatusList {
    /**
     * Image Contructor
     * @param {Array} list array of CStatus
     */
    constructor() {
        this.list = [];
    }

    removeStatus(index) {
        this.list.splice(this.list.findIndex(cStatus => cStatus.index === index), 1);
    }

    setStatus(index, status) {
        const cStatus = this.getStatus(index)
        cStatus.status = status;
    }

    getLastStatus(index) {
        const cStatus = this.list.findLast(cStatus => cStatus.index === index);
        if (cStatus) {
            return cStatus.status
        } else {
            //Entro qui nel caso incui cStatus sia undefied perchè non esiste nessun cStatus con this.activeContact
            return "NOT-ONLINE"
        }
    }

    getStatus(index) {
        return this.list.find(cStatus => cStatus.index === index);
    }

    addStatus(index) {
        this.list.push(new CStatus("WRITING", index))
    }
}