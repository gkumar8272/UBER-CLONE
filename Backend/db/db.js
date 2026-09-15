const mongoose = require('mongoose');

async function connectToDb() {

    const mongoUri = process.env.MONGODB_URI || process.env.DB_CONNECT || process.env.atlas_URL;

    if (!mongoUri) {
        throw new Error('Missing MONGODB_URI, atlas_URL, or DB_CONNECT in Backend/.env');
    }

    await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 10000
    });

    console.log('Connected to MongoDB');
}

module.exports = connectToDb;