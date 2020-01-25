//how we search favorites
//collection of save cases and array of who saved it
//put person's id in an array and put the case 
const express = require('express');
const router = express.Router();
const favCase = require('../../models/Favorites');
const User = require('../../models/User');
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const auth = require('../../middleware/auth');
const {
    check,
    validationResult
} = require('express-validator');

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


//@route   GET api/favorites
//@desc    GET ALL FAVS
router.get('/', async (req, res) => {
    try {
        const favs = await favPosts.find().sort({
            Date_Added: -1
        });
        res.json(favs);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});



module.exports = router;