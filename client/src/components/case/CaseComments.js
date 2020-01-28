import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCaseComment } from '../../actions/casecomments';

const CaseComments = ({ addCaseComment, caseid, match }) => {
	
	// Form data state
	const [formData, setFormData] = useState({
		text: '',
		topic: `${caseid}`
	});

	const { text, topic } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		console.log(formData);
		addCaseComment(formData);
		//  Clear form after post is submitted
		setFormData({
			text: '',
			topic: `${caseid}`
		});
	};

	return (
		<Fragment>
			<div className='post-form'>
				<div className='post-form-header'>
					<h5>Make a Statement</h5>
				</div>
				<form className='form' id='new-post' onSubmit={e => handleSubmit(e)}>
					<textarea
						className='form-control post-control'
						name='text'
						cols='30'
						rows='5'
						placeholder='Create a post'
						value={text}
						onChange={e => onChange(e)}
						required
					></textarea>
					<input
						type='submit'
						className='btn btn-secondary my-1'
						value='Submit'
					/>
				</form>
			</div>
			<br />
			{/* Existing topics */}
			<h2 className='page-header'>
				<i>COMMENTS</i>
			</h2>
			<div className='posts'>
				{/* {posts.map(
					post =>
						post.topic === category && <PostItem key={post._id} post={post} />
				)} */}
			</div>
		</Fragment>
	);
};

CaseComments.propTypes = {
	addCaseComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	casecomment: state.casecomment
});

export default connect(null, { addCaseComment })(CaseComments);
