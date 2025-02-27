const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoute = require('./routes/product.route.js');

const app = express();

app.use(cors()); 

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

// testing
app.get('/', (req, res) => {
  res.send("Hello from Node API Server");
});

// server connection
mongoose.connect('mongodb+srv://ngiang:keb6Zy6ubhQCDZ7B@backenddb.dim0u.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(() => {
    console.log('Connection failed');
});