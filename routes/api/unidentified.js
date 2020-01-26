// DEPENDENCIES
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const unid = require('../../models/Unidentified');


// @route   POST api/unidentified
// @desc    Get unidentified persons
// @access  Private
router.post('/', auth, async (req, res) => {
    //find results from unidentified collection in the db with a query that finds all in our db
    console.log(req.body);
    
    try {
        if (req.body.city) {
            const unidentified = await unid.find({
                state: req.body.state,
                city: req.body.city
            }).sort({ date_found: -1 });
            
            res.json(unidentified);
        } else {
            const unidentified = await unid.find({
                state: req.body.state,
            }).sort({ date_found: -1 });

            res.json(unidentified);
        }
    }

    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;