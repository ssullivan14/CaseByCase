// DEPENDENCIES
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const namusData = require("../../models/Namus");
const CaseComments = require("../../models/CaseComments");

//Routes(to hit route /api/namus/)
router.post("/", auth, async (req, res) => {
  //find results from namus collection in the db with a query that finds all in our db
  console.log(req.body);
  try {
    if (req.body.city) {
      const persons = await namusData.find({
        State_Of_Last_Contact: req.body.state,
        City_Of_Last_Contact: req.body.city
      });

      res.json(persons);
    } else {
      const persons = await namusData.find({
        State_Of_Last_Contact: req.body.state
      });

      res.json(persons);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/case/:case_id", async (req, res) => {
  try {
    const namusCase = await namusData.findOne({
      _id: req.params.case_id
    });

    if (!namusCase) return res.status(400).json({ msg: "Case not found" });
    res.json(namusCase);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "Case not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   POST api/posts/comment/:id
// @desc    Comment on a post
// @access  Private
router.post(
  "/comment/:id",
  [
    auth,
    [
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      // Construct new comment
      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      // Add to post
      const post = await newComment.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
