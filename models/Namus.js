const mongoose = require('mongoose');
const NamusSchema = new mongoose.Schema({
    Current_Age_From : {
        type: Number,
        required: true,
      },
      City_Of_Last_Contact : {
        type: String,
      },
      First_Name : {
        type: String,
      },
      Modified_Date_Time : {
        type: String,
      },
      Middle_Name : {
        type : String,
      },
      Last_Name : {
        type : String,
      },
      img : {
        type : String,
      },
      Current_Age_To : {
        type : Number,
      },
      Computed_Missing_Max_Age : {
        type : Number,
      },
      Computed_Missing_Min_Age : {
        type : Number,
      },
      County_Of_Last_Contact : {
        type : String,
      },
      id_Formatted : {
        type : String,
      },
      Race_Ethnicity : {
        type : String,
      },
      Gender : {
        type : String,
      },
      Date_Of_Last_Contact : {
        type: String,
      },
      State_Of_Last_Contact : {
        type : String,
      },
      Link : {
        type : String,
      },
      namus2Number : {
        type : String,
      },
      Geo_Shape : {
        type : String,
      },
      Latitude : {
        type : String,
      },
      Longitude : {
        type : String,
      },
      timestamps : {
          required: false,
    }
});

module.exports = Namus = mongoose.model('namus', NamusSchema);