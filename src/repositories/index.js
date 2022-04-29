export default class MongoRepository {

    constructor(database, collectionName) {
        this._database = database;
        this._collectionName = collectionName;
    }

    get Collection() {
        return this._database.collection(this._collectionName)
    }

    aggregate(pipeline) {
        return this.aggregateCursor(pipeline).toArray();
    }

    aggregateCursor(pipeline) {
        return this.Collection.aggregate(pipeline);
    }

    async deleteOne(filter) {
        const { deletedCount } = await this.Collection.deleteOne(filter);
        return deletedCount;
    }

    async deleteMany(filter) {
        const { deletedCount
        } = await this.Collection.deleteMany(filter)
        return deletedCount;
    }

    get(query, projection = {}) {
        return this.getCursor(query, projection).toArray()
    }

    getCursor(query, projection = {}) {
        return this.Collection.find(query, { projection })
    }

    async insertOne(document) {
        const { insertedId } = await this.Collection.insertOne(document);
        return insertedId;
    }

    async insertMany(documents) {
        const { insertedIds } = await this.Collection.insertMany(documents)
        return insertedIds;
    }

    async updateOne(filter, updates) {
        const { modifiedCount } = await this.Collection.updateOne(filter, updates);
        return modifiedCount;
    }

    async updateMany(filter, updates) {
        const { modifiedCount } = await this.Collection.updateMany(filter, updates)
        return modifiedCount;
    }

}