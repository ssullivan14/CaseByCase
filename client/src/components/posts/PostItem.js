import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import './Posts.css';
import { addLike, removeLike, deletePost } from '../../actions/post';
import Post from '../post/Post';

const PostItem = ({
	addLike,
	removeLike,
	deletePost,
	auth,
	post: { _id, title, text, name, avatar, user, likes, comments, date },
	showActions
}) => (
	<Fragment>
		<div className='post bg-dark p-1 my-1'>
			<div>
				<Link to={`/profile/${user}`}>
					<img className='round-img' src={avatar} alt='' />
					<h4>{name}</h4>
				</Link>
			</div>
			<div>
				<h3 className='post-header'>{title}</h3>
				<p className='my-1'>{text}</p>
				<p className='post-date'>
					Posted on <Moment format='MM/DD/YYYY hh:mm A'>{date}</Moment>
				</p>
				{showActions && (
					<Fragment>
						<div className='post-buttons'>
							{/* Check if logged in user is post author, if so, disable like/unlike buttons */}
							{!auth.loading && user === auth.user._id ? (
								<Fragment>
									<button type='button' className='btn btn-dark disabled'>
										<i className='fas fa-thumbs-up'></i>
										{likes.length > 0 && (
											<span>&nbsp;&nbsp;{likes.length}</span>
										)}
									</button>
									&nbsp;&nbsp;
									<button type='button' className='btn btn-dark disabled'>
										<i className='fas fa-thumbs-down'></i>
									</button>
									&nbsp;&nbsp;
								</Fragment>
							) : (
								<Fragment>
									<button
										onClick={e => addLike(_id)}
										type='button'
										className='btn btn-dark'
									>
										<i className='fas fa-thumbs-up'></i>
										{likes.length > 0 && (
											<span>&nbsp;&nbsp;{likes.length}</span>
										)}
									</button>
									&nbsp;&nbsp;
									<button
										onClick={e => removeLike(_id)}
										type='button'
										className='btn btn-dark'
									>
										<i className='fas fa-thumbs-down'></i>
									</button>
									&nbsp;&nbsp;
								</Fragment>
							)}
							<Link to={`/post/${_id}`} className='btn green-btn'>
								Discussion&nbsp;
								{comments.length > 0 && (
									<span className='badge badge-light'>{comments.length}</span>
								)}
							</Link>
							&nbsp;&nbsp;
							{/* If post user and authenticated user are the same, show delete button */}
							{!auth.loading && user === auth.user._id && (
								<button
									onClick={() => deletePost(_id)}
									type='button'
									className='btn red-btn'
								>
									<i className='fas fa-times'></i>
								</button>
							)}
						</div>
					</Fragment>
				)}
			</div>
		</div>
	</Fragment>
);

PostItem.defaultProps = {
	showActions: true
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	addLike: PropTypes.func.isRequired,
	removeLike: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
	PostItem
);
