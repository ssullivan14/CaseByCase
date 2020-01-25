const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FavoritesSchema = new mongoose.Schema({
    Users: [{
        user: {
            type: String,
            ref: 'users' //dynamically keep adding or do we have to do User1, User 2
        },
        name: {
            type: String
        }
    }],
    Case_Number: {
        type: String
    },
    Date_Of_Incident: {
        type: Date
    },
    Description: {
        type: String
    },
    Link: {
        type: String
    },
    Date_Added: {
        type: Date,
        default: Date.now
    }
});

module.exports = Favorites = mongoose.model('favorites', FavoritesSchema);