// DEPENDENCIES
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const namusData = require('../../models/Namus');

//Routes(to hit route /api/namus/)
router.get('/', async (req, res) => {
    //find results from namus collection in the db with a query that finds all in our db
    try {
        const persons = await namusData.find();
        res.json(persons)
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;