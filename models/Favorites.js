const mongoose = require('mongoose');
const FavoritesSchema = new mongoose.Schema({
   _id: {
       type: String
   },
   users: [
       {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        name: {
            type: String
        }
    }],
    collection: {
        type: String
    }
});