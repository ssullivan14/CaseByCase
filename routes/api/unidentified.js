// DEPENDENCIES
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const unid = require("../../models/Unidentified");

// @route   POST api/unidentified
// @desc    Get unidentified persons
// @access  Private
router.post("/", auth, async (req, res) => {
  //find results from unidentified collection in the db with a query that finds all in our db
  console.log(req.body);

  try {
    if (req.body.city) {
      const unidentified = await unid
        .find({
          state: req.body.state,
          city: req.body.city
        })
        .sort({ date_found: -1 });

      res.json(unidentified);
    } else {
      const unidentified = await unid
        .find({
          state: req.body.state
        })
        .sort({ date_found: -1 });

      res.json(unidentified);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/case/:case_id", async (req, res) => {
  try {
    const unIDcase = await unid.findOne({
      _id: req.params.case_id
    });

    if (!unIDcase) return res.status(400).json({ msg: "Case not found" });
    res.json(unIDcase);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "Case not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
