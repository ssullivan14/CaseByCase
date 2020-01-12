// DEPENDENCIES
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const namusData = require('../../models/Namus');

//Routes(to hit route /api/namus/)
router.post('/', async (req, res) => {   
    //find results from namus collection in the db with a query that finds all in our db
	console.log(req.body);
	try {
        if (req.body.city) {
            const persons = await namusData.find({
                State_Of_Last_Contact: req.body.state, City_Of_Last_Contact: req.body.city
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
		res.status(500).send('Server error');
	}
});

module.exports = router;
