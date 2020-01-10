//connect to database with Express and us postman to test
// DEPENDENCIES
const express = require('express');
const router = express.Router();
const namusData = require('../../models/Namus');


//Routes(to hit route /api/namus/)
router.get('/', async (req, res) => {
    //find results from namus collection in the db with a query that finds all in our db
    try {
        const persons = await namusData.find({
            City_Of_Last_Contact: req.body.City_Of_Last_Contact,
            State_Of_Last_Contact: req.body.State_Of_Last_Contact
        });
        res.json(persons)
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
     
