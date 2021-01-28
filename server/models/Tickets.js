//this is the schema for the tickets 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ticketsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
   
    youtubeLink: {
        type: String,
        required: true
    },
    dateevents: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const tickets = mongoose.model('tickets',  ticketsSchema);