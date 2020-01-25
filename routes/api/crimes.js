//connect to database with Express and us postman to test
// DEPENDENCIES
const express = require("express");
const router = express.Router();
const allCrimes = require("../../models/Crimes");

//Routes(to hit route /api/cimes)
router.get("/", async (req, res) => {
  //find results from namus collection in the db with a query that finds all in our db
  try {
    const crimes = await allCrimes.find({
      Offense: req.body.Offense,
      Date: req.body.Date,
      State: req.body.State,
      City: req.body.City
    });
    res.json(crimes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/case/:case_id", async (req, res) => {
  try {
    const crimeCase = await allCrimes.findOne({
      _id: req.params.case_id
    });

    if (!crimeCase) return res.status(400).json({ msg: "Case not found" });
    res.json(crimeCase);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "Case not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
