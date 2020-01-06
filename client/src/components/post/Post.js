import React, { fragment, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner/Spinner';
import PostItem from '../posts/PostItem';
import { getPost } from '../../actions/post'
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({ getPost, post: { post, loading }, match }) => {
	useEffect(() => {
		getPost(match.params.id);
	}, [getPost]);

	return loading || post === null ? (
		<Spinner />
	) : (
		<Fragment>
            <div className='row'>
				<div className='col-md-12'>
					<Link to='/posts' className='btn btn-secondary back-btn'>
						<i id='toggleIcon' className='fa fa-angle-double-down'></i> Back to
						Posts
					</Link>
				</div>
			</div>
			<PostItem post={post} showActions={false} />
            <br />
            <CommentForm postId={post._id} />
            <div className="comments">
                {post.comments.map(comment => (
                    <CommentItem key={comment._id} comment={comment} postId={post._id} />
                ))}
            </div>
		</Fragment>
	);
};

Post.propTypes = {
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
