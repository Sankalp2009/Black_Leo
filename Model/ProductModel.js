const mongoose = require('mongoose');
//2. Creating Schema or Structure of Data

const ProductSchema = new mongoose.Schema({

    end_year: {
        type: String
    },

    intensity: {
        type: Number
    },

    sector: {
        type: String
    },

    topic: 
    {
        type: String
    },

    insight: 
    {
        type: String
    },

    url: {
        type: String
    },

    region: {
        type: String
    },

    start_year: {
        type: String
    },

    impact: {
        type: String
    },

    added: {
        type: String
    },

    published:{
        type: String
    },

    country:{
        type: String
    },

    relevance: {
        type: Number,
    },

    pestle: {
        type: String
    },

    source: {
        type: String
    },

    title: {
        type: String
    },
    
    likelihood: {
        type: Number,
    }
})

//Assigning Schema or Structure to Model
exports.Product = mongoose.model('Product', ProductSchema);