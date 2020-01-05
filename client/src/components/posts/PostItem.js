import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import './Posts.css';
import { addLike, removeLike } from '../../actions/post';

const PostItem = ({
	addLike,
	removeLike,
	auth,
	post: { _id, title, text, name, avatar, user, likes, comments, date }
}) => (
	<Fragment>
		<div class='post bg-dark p-1 my-1'>
			<div>
				<a href='profile/{user}'>
					<img class='round-img' src={avatar} alt='' />
					<h4>{name}</h4>
				</a>
			</div>
			<div>
				<h3 className='post-header'>{title}</h3>
				<p class='my-1'>{text}</p>
				<p class='post-date'>
					Posted on <Moment format='MM/DD/YYYY hh:mm A'>{date}</Moment>
				</p>
				<div className='post-buttons'>
					{/* Check if logged in user is post author, if so, disable like/unlike buttons */}
					{!auth.loading && user === auth.user._id ? (
						<Fragment>
							<button type='button' class='btn btn-dark disabled'>
								<i class='fas fa-thumbs-up'></i>
								{likes.length > 0 && <span>&nbsp;&nbsp;{likes.length}</span>}
							</button>
							&nbsp;&nbsp;
							<button type='button' class='btn btn-dark disabled'>
								<i class='fas fa-thumbs-down'></i>
							</button>
							&nbsp;&nbsp;
						</Fragment>
					) : (
						<Fragment>
							<button
								onClick={e => addLike(_id)}
								type='button'
								class='btn btn-dark'
							>
								<i class='fas fa-thumbs-up'></i>
								{likes.length > 0 && <span>&nbsp;&nbsp;{likes.length}</span>}
							</button>
							&nbsp;&nbsp;
							<button
								onClick={e => removeLike(_id)}
								type='button'
								class='btn btn-dark'
							>
								<i class='fas fa-thumbs-down'></i>
							</button>
							&nbsp;&nbsp;
						</Fragment>
					)}
					<a href='post.html' class='btn green-btn'>
						Discussion
						{comments.length > 0 && (
							<span class='comment-count'>&nbsp;{comments.length}</span>
						)}
					</a>
					&nbsp;&nbsp;
					{/* If post user and authenticated user are the same, show delete button */}
					{!auth.loading && user === auth.user._id && (
						<button type='button' class='btn red-btn'>
							<i class='fas fa-times'></i>
						</button>
					)}
				</div>
			</div>
		</div>
	</Fragment>
);

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
