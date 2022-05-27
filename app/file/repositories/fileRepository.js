class FileRepository {
    collection;

    constructor() {
        this.collection = {};
    }

    async find(fileName) {
        return this.collection[fileName] || [];
    }

    async findAll() {
        return this.collection;
    }

    async insert(fileName, data) {
        this.collection[fileName] = data;
    }
}



export default new FileRepository();