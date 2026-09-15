const http = require('http');
const app = require('./app');
const connectToDb = require('./db/db');
const port = process.env.PORT || 4000;

const server = http.createServer(app);

connectToDb()
    .then(() => {
        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection failed. Check your MongoDB URI and Atlas IP access list:', error.message);
        process.exitCode = 1;
    });