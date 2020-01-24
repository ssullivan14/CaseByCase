//connect to database with Express and us postman to test
// DEPENDENCIES
const express = require('express');
const router = express.Router();
const allCrimes = require('../../models/Crimes');


//Routes(to hit route /api/cimes)
router.get('/', async (req, res) => {
    //find results from namus collection in the db with a query that finds all in our db
    try {
        const crimes = await allCrimes.find({
            Offense: req.body.Offense,
            Date: req.body.Date,
            State: req.body.State,
            City: req.body.City


        });
        res.json(crimes)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;