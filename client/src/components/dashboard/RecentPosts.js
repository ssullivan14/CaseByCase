import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecent } from '../../actions/post';
import RecentItem from './RecentItem';
import Spinner from '../Layout/Spinner/Spinner';
import './Dashboard.css';

const RecentPosts = ({ getRecent, post: { posts, loading } }) => {
	useEffect(() => {
		getRecent();
	}, [getRecent]);

	return (
		<Fragment>
			<div className='card bg-dark recent-card'>
				<div className='card-header'>
					<i className='fas fa-comment-dots'></i>&nbsp;&nbsp;Recent Posts
				</div>
				<ul className='list-group list-group-flush recent-posts-list'>
					{posts.length > 0 ? (
						posts.map(post => (
							<RecentItem
                                key={post._id}
								post={post}
							/>
						))
					) : (
						<Spinner />
					)}
				</ul>
			</div>
		</Fragment>
	);
};

RecentPosts.propTypes = {
		getRecent: PropTypes.func.isRequired,
		post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, { getRecent })(RecentPosts);
