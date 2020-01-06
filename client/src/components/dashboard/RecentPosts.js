import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Dashboard.css';

const RecentPosts = props => {
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

export default RecentPosts;
