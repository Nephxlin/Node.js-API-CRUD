
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// Start APP
const app = express();

// Start Database
mongoose.connect('mongodb://localhost:27017/nodeapi',
{useNewUrlParser: true, useUnifiedTopology: true}
);

requireDir('./src/models');

const Product = mongoose.model('Product');

//First route
app.get('/',(req,res) => {
    Product.create({ 
        title: 'React Native',
        description: ' Build Native Apps',
        url: 'http://github.com/facebook/react-native'
    });
    
    return res.send('Hello xx');
});

app.listen(3001);