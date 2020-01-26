//how we search favorites
//collection of save cases and array of who saved it
//put person's id in an array and put the case
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const favCase = require('../../models/Favorites');
const User = require('../../models/User');
const Profile = require('../../models/Profile');

//@route    Post api/favorites/
//@desc     Create a favorite
//@access   Private
router.post('/:id', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select(
			'-password -email -avatar -date'
		);
		const favorited = await favCase.find({ Case_Number: req.params.id });
		// Check if case has already been favorited
        if (favorited.length > 0) {
			favorited[0].Users.push(user);

			await favorited[0].save();
			res.json(favorited);
		} else {
			const newFav = new favCase({
				Case_Number: req.params.id,
				Date_Of_Incident: req.body.Date_Of_Incident,
				Description: req.body.Description,
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
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select(
			'-password -email -avatar -date'
		);
        const favs = await favCase.findOneAndUpdate({$pull: {Users: { _id: user._id, name: user.name}}});

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
        const favs = await favPosts.findById(req.params.id);

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
