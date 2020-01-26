//how we search favorites
//collection of save cases and array of who saved it
//put person's id in an array and put the case 
const express = require('express');
const router = express.Router();
const favCase = require('../../models/Favorites');
const User = require('../../models/User');
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');

//@route    Post api/favorites
//@desc     Create a favorite
//@access   Public
router.post('/', async (req, res) => {
    try {
        // const user = await User.findById(req.User);
        // console.log(user)
        const newFav = new favCase({
            Case_Number: req.body.Case_Number,
            Date_Of_Incident: req.body.Date_Of_Incident,
            Description: req.body.Description,
            Link: req.body.Link,
            Users: [{
                name: req.body.User.name,
                id: req.body.User.id
            }]
        });

        const fav = await newFav.save();
        res.json(fav);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// @route   Delete api/favorites/:id
// @desc    Delete favorite case
// @access  Public
router.delete('/:id', async (req, res) => {
    try {
        const favs = await favCase.findById(req.params.id);

        // Check user
        if (favs.users.id !== req.body.users.id) {
            return res.status(401).json({
                msg: 'No saved case found'
            });
        }

        await favs.remove();

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