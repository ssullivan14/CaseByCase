import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../Layout/Spinner/Spinner';
import PostItem from './PostItem';
import './Posts.css';

const Posts = ({ getPosts, post: { posts, loading}, match }) => {
	useEffect(() => {
        getPosts();
    }, [getPosts]);
    
    // Get topic from url
    const topic = match.params.topic;

	return loading ? <Spinner /> : (
		<Fragment>
			<h1 className='page-header'>
				<i>{topic}</i>
			</h1>
			<p className='lead'>
				<i className='fas fa-comments gold-icon'></i> Discuss cases with other
				users
			</p>
            {/* Submit Post Form */}
            <div className="posts">
                {posts.map(post => (
                    post.topic === topic && (
                        <PostItem key={post._id} post={post} />
                    )
                ))}
            </div>
		</Fragment>
    )
};

Posts.propTypes = {};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
