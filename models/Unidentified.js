const mongoose = require('mongoose');
const UnidentifiedSchema = new mongoose.Schema({
  casenumber: {
    type: String,
  },
  createdDateTime: {
    type: Date,
  },
  modifiedDateTime: {
    type: Date,
  },
  gender: {
    type: String,
  },
  ethinicity: {
    type: String,
  },
  age_group: {
    type: String,
  },
  estimated_age_from: {
    type: String,
  },
  estimated_age_to: {
    type: String,
  },
  estimated_height_from: {
    type: Number,
  },
  estimated_height_to: {
    type: Number,
  },
  estimated_weight_from: {
    type: Number,
  },
  estimated_weight_to: {
    type: Number,
  },
  date_found: {
    type: Date,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  circumstancesOfRecovery: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  conditionOfRemains: {
    type: String,
  },
  clothingAndAccessories: {
    type: String,
  },
  clothingAndAccessories_location: {
    type: String,
  },
  physicalDescription_hairColor: {
    type: String,
  },
  headHairDescription: {
    type: String,
  },
  facialHairDescription: {
    type: String,
  },
  leftEyeColor: {
    type: String,
  },
  rightEyeColor: {
    type: String,
  },
  physicalFeatureDescriptions: {
    type: String,
  },
  images: {
    type: String,
  },
  investigatingAgencies_name: {
    type: String,
  },
  investigatingAgencies_caseNumber: {
    type: String,
  },
  imageThumbnail: {
    type: String,
  },
  imagePoster: {
    type: String,
  }

});
module.exports = Unidentified = mongoose.model('unidentified', UnidentifiedSchema);
