const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const userRoutes = require('./Services/user.routes');
const captainRoutes = require('./router/captain.routes');

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));





app.get('/' , (req, res) =>{
    res.send('Hello World');
});

app.use('/users',userRoutes);
app.use('/captains', captainRoutes);

app.use((error, req, res, next) => {
    if (error.name === 'MongooseError' || error.name === 'MongoServerSelectionError') {
        return res.status(503).json({message: 'Database unavailable. Check the MongoDB connection and Atlas IP access list.'});
    }

    res.status(500).json({message: 'Internal server error'});
});


module.exports = app;