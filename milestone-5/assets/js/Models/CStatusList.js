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
        const cStatus = this.list.find(cStatus => cStatus.index === index);
        cStatus.status = status;
    }

    getStatus(index) {
        return this.list.find(cStatus => cStatus.index === index);
    }

    addStatus(index) {
        this.list.push(new CStatus("WRITING", index))
    }
}