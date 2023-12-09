export default class ArrayBufferConverter {
    constructor () {
        this.data;
    }

    load(buffer) {
        this.data = buffer;
    }

    toString() {
        let data = '';
        const bufferView = new Uint16Array(this.data);
        for (let i = 0; i < bufferView.length; i++) {
            let symbol = String.fromCharCode(bufferView[i]);
            data += symbol;
        }
        return data;
    }
}