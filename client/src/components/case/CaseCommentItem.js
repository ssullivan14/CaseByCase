import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const CaseCommentItem = ({ casecomment, auth }) => {
	return (
		<Fragment>
			<div class='post bg-comment p-1 my-1'>
				<div>
					<Link to={`/profile/${casecomment.user}`}>
						<img
							class='round-img'
							src={casecomment.avatar}
							alt="User's avatar"
						/>
						<h4>{casecomment.name}</h4>
					</Link>
				</div>
				<div>
					<p class='my-1'>{casecomment.text}</p>
					<p class='post-date'>
						Posted on{' '}
						<Moment format='MM/DD/YYYY hh:mm A'>{casecomment.date}</Moment>
					</p>
					{!auth.loading && casecomment.user === auth.user._id ? (
						<button type='button' className='btn red-btn'>
							<i className='fas fa-times'></i>
						</button>
					) : (
						<Fragment></Fragment>
					)}
				</div>
			</div>
		</Fragment>
	);
};

CaseCommentItem.propTypes = {
	casecommentId: PropTypes.number.isRequired,
	casecomment: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, {})(CaseCommentItem);
