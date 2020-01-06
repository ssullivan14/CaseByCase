import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecent } from '../../actions/post';
import './Dashboard.css';

const RecentPosts = ({ getRecent, post: { posts, loading } }) => {
	useEffect(() => {
		getRecent();
    }, [getRecent]);
    
    console.log(posts[0].avatar);

	return (
		<Fragment>
			<div class='card bg-dark recent-card'>
				<div class='card-header'>
					<i className='fas fa-comment-dots'></i>&nbsp;&nbsp;Recent Posts
				</div>
				<ul class='list-group list-group-flush recent-posts-list'>
					<li class='list-group-item list-group-item-dark'>
						<img
							className='recent-img'
							src='http://www.gravatar.com/avatar/8afeb891d5e3b283d895cb89ef0ac6f6?s=200&r=pg&d=mm'
						/>

						<h5 className='recent-title'><Link to=''>Golden state killer</Link></h5>
						<p className='recent-date-topic my-1'>01/06/2020 | California</p>
					</li>
					<li class='list-group-item list-group-item-dark'>Cras justo odio</li>
					<li class='list-group-item list-group-item-dark'>Cras justo odio</li>
				</ul>
			</div>
		</Fragment>
	);
};

RecentPosts.propTypes = {};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, { getRecent })(RecentPosts);
