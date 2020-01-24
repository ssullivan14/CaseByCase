const mongoose = require('mongoose');
const CrimeSchema = new mongoose.Schema({
    City : {
        type: String,
      },
      State : {
          type: String,
      },
      ID : {
        type: String,
      },
      Case_Number : {
        type: String,
      },
      Date : {
        type: Date,
      },
      Block : {
        type : String,
      },
      Offense : {
        type : String,
      },
      Description : {
        type : String,
      },
      Longitude : {
        type : String,
      },
      Latitude : {
        type : String,
      },
    
});
module.exports = Crimes = mongoose.model('crime', CrimeSchema);
