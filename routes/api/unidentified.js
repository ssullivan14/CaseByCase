//connect to database with Express and us postman to test
// DEPENDENCIES
const express = require('express');
const router = express.Router();
const unIdentified = require('../../models/Unidentified');


//Routes(to hit route /api/unidentified/)
router.get('/', async (req, res) => {
    //find results from namus collection in the db with a query that finds all in our db
    try {
        const unidentified = await unIdentified.find();
        //     {
        //     city: req.body.city,
        //     state: req.body.state,
        //     modifiedDateTime: req.body.state
        // });
        res.json(unidentified);
    } 
    
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;