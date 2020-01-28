// DEPENDENCIES
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const CaseComment = require('../../models/CaseComments');

// GET ROUTES

// @route   GET api/casecomments
// @desc    Get all case comments by case id
// @access  Private
router.get('/:id', auth, async (req, res) => {
	console.log(req.params.id);
	
	try {
		const casecomments = await CaseComment.find({
			topic: req.params.id
		}).sort({ date: -1 });
		res.json(casecomments);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// POST ROUTES

// @route   POST api/casecomments
// @desc    Create a case comment
// @access  Private
router.post(
	'/',
	[
		auth,
		[
			check('text', 'Text is required')
				.not()
				.isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const user = await User.findById(req.user.id).select('-password');

			const newCaseComment = new CaseComment({
				topic: req.body.topic,
				text: req.body.text,
				name: user.name,
				avatar: user.avatar,
				user: req.user.id
			});

			const casecomment = await newCaseComment.save();
			res.json(casecomment);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);

// DELETE ROUTES

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const casecomment = await CaseComment.findById(req.params.id);

		// Verify post exists
		if (!casecomment) {
			return res.status(404).json({ msg: 'Post not found' });
		}

		// Verify post belongs to logged in user
		if (casecomment.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'User not authorized' });
		}

		await casecomment.remove();

		res.json({ msg: 'Post removed' });
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Post not found' });
		}
		res.status(500).send('Server error');
	}
});

module.exports = router;
