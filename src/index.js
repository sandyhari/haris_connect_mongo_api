const { MongoClient } = require('mongodb');

async function connectDB(dbConfig, dbName = 'label') {
    try {
        const mongoOptions = Object.assign({}, dbConfig.options, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Attempting to establish a connection to ${dbName} mongo db...`);
        const client = await MongoClient.connect(dbConfig.connectionURL, mongoOptions);
        const dataBaseInstance = client.db();
        console.log('Connection successfully established...');
        return { dataBaseInstance, client };
    }
    catch (error) {
        console.log('Connection Failed to establish...');
        console.error(error);
        throw error;
    }
}

module.exports = connectDB;