//how we search favorites
//collection of save cases and array of who saved it
//put person's id in an array and put the case
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const favCase = require('../../models/Favorites');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const mongoose = require('mongoose');

//@route    Post api/favorites/
//@desc     Create a favorite
//@access   Private
router.post('/:id', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select(
			'-password -email -avatar -date'
		);
		const favorited = await favCase.find({ id: req.params.id });
		// Check if case has already been favorited
		if (favorited.length > 0) {
			favorited[0].Users.push(user);

			await favorited[0].save();
			res.json(favorited);
		} else {
			const newFav = new favCase({
				id: req.params.id,
				Case_Number: req.body.Case_Number,
				Date_Of_Incident: req.body.Date,
				Description: req.body.Description,
				State: req.body.State,
				Link: req.body.Link,
				Users: [
					{
						name: user.name,
						_id: user.id
					}
				]
			});

			const fav = await newFav.save();
			res.json(fav);
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});


// @route   Delete api/favorites/:id
// @desc    Delete favorite case
// @access  Private
router.put('/:id', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select(
			'-password -email -avatar -date'
		);
		const favs = await favCase.findOneAndUpdate({ $pull: { Users: { _id: user._id, name: user.name } } });

		res.json({
			msg: 'Saved case removed'
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server error');
	}
});

//@route   GET API/FAVORITES 
//@desc    GET FAVs by ID
//@access  Public
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select(
			'-password -email -avatar -date'
		);

		const favs = await favCase.find(
			{ Users: { $elemMatch: { _id: user._id } }
		});

		console.log(favs);

		if (!favs) {
			return res.status(404).json({
				msg: 'Fav not found'
			});
		}
		res.json(favs);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server error');
	}
});


module.exports = router;
