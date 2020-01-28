//connect to database with Express and us postman to test
// DEPENDENCIES
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const allCrimes = require("../../models/Crimes");

//Routes(to hit route /api/crimes)
router.post("/", auth, async (req, res) => {
  //find results from crimes collection in the db with a query that finds all in our db
  console.log(req.body);

  try {
    if (req.body.city) {
      const crimes = await allCrimes.find({
        Offense: {
          $regex: new RegExp(".*" + req.body.incidentType + ".*", "i")
        },
        State: { $regex: new RegExp(req.body.state, "i") },
        City: { $regex: new RegExp(req.body.city, "i") }
      });

      res.json(crimes);
    } else {
      const crimes = await allCrimes.find({
        Offense: {
          $regex: new RegExp(".*" + req.body.incidentType + ".*", "i")
        },
        State: { $regex: new RegExp(req.body.state, "i") }
      });

      res.json(crimes);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
  res.status(500).send("Server Error");
});

router.get("/case/:case_id", auth, async (req, res) => {
  try {
    const crimesCase = await allCrimes.findOne({
      _id: req.params.case_id
    });

    if (!crimesCase) return res.status(400).json({ msg: "Case not found" });
    res.json(crimesCase);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "Case not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
