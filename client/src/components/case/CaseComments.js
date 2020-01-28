import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCaseComment } from '../../actions/casecomments';
import { getCaseComments } from '../../actions/casecomments';
import CaseCommentItem from './CaseCommentItem';
import Spinner from '../Layout/Spinner/Spinner';

const CaseComments = ({ getCaseComments, addCaseComment, caseid, casecomments: {casecomments, ccLoading}, match }) => {
	useEffect(() => {
		getCaseComments(caseid);
	}, [getCaseComments]);

	// Form data state
	const [formData, setFormData] = useState({
		text: '',
		topic: `${caseid}`
	});

	const { text, topic } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		console.log(formData);
		addCaseComment(formData);
		//  Clear form after post is submitted
		setFormData({
			text: '',
			topic: `${caseid}`
		});
	};

	return casecomments === null || ccLoading ? (
		<Spinner />
	) : (
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
				{casecomments.map(
					casecomment =>
						<CaseCommentItem key={casecomment._id} casecommentid={casecomment._id} casecomment={casecomment} />
				)}
			</div>
		</Fragment>
	);
};

CaseComments.propTypes = {
	addCaseComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	casecomments: state.casecomments
});

export default connect(mapStateToProps, { addCaseComment, getCaseComments })(CaseComments);
