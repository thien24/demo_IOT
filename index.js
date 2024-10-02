const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://vthien562004:vanthien562004@cluster0.cepmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 


//mongodb+srv://vanthien562004:vanthien562004@cluster0.pizki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// Kết nối MongoDB
mongoose.connect(MONGODB_URL)
    .then(() => console.log('Connected to the database successfully'))
    .catch((error) => {
        console.error('Error connecting to the database', error);
        process.exit(1);
    });

// Middleware
app.use(express.json());
app.use(require('cors')());

// Định nghĩa route cho location
const locationRoute = require('./api/routes/location.route');
app.use('/v1/api/location', locationRoute);

// Route chính
app.get('/', (req, res) => res.send('Thien đang học Node.js'));

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
