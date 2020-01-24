//connect to database with Express and us postman to test
// DEPENDENCIES
const express = require('express');
const router = express.Router();
const allCrimes = require('../../models/Crimes');


//Routes(to hit route /api/crimes)
router.post('/', async (req, res) => {  
    //find results from crimes collection in the db with a query that finds all in our db
    console.log(req.body);
    
    try {
        if (req.body.city) {
            const crimes = await allCrimes.find({
                Offense: { $regex : new RegExp('.*' + req.body.incidentType + '.*', "i") },
                State: { $regex : new RegExp(req.body.state, "i") },
                City: { $regex : new RegExp(req.body.city, "i") }
            });
            
            res.json(crimes);
        } else {
            const crimes = await allCrimes.find({
                Offense: { $regex : new RegExp('.*' + req.body.incidentType + '.*', "i") },
                State: { $regex : new RegExp(req.body.state, "i") }
            });

            res.json(crimes);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;