const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    username: {
        type: String,
        required: true,
      },
      useremail: {
        type: String,
        required: true,
      },
      userphone: {
        type: Number,
        required: true,
      },
      
      eventD: String,
    
      eventP: String,
    
      
    
});

const payment = mongoose.model('payment', paymentSchema);

module.exports = payment;