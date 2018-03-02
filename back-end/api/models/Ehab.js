var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date,
    component:{
        type:String,
        quired: true,
        trim: true,
        lowercase: true
    },
    seller:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
});

mongoose.model('Ehab', productSchema);
