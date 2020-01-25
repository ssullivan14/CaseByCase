//how we search favorites
//collection of save cases and array of who saved it
//put person's id in an array and put the case 
const express = require('express');
const router = express.Router();
const favPosts = require('../../models/Favorites');

router.post('/', [
    
])

//@route   GET api/favorites
//@desc    GET ALL FAVS
router.get('/', async (req, res) => {
    try {
        const favs = await favPosts.find().sort({ user: -1 }).limit(5);
        res.json(posts);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});



module.exports = router;
  