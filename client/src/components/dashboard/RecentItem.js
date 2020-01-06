import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecentItem = ({ post: { _id, title, topic, avatar, date }, post }) => {
	return (
		<li className='list-group-item list-group-item-dark'>
			<img className='recent-img' src={avatar} alt="User's avatar" />

			<h6 className='recent-title'>
				<Link to={`/post/${_id}`}>{post.title}</Link>
			</h6>
			<p className='recent-date-topic my-1'>
				<Moment format='MM/DD/YYYY hh:mm A'>{date}</Moment>
				&nbsp;&nbsp;|&nbsp;&nbsp;<span className='recent-topic'>{topic}</span>
			</p>
		</li>
	);
};

RecentItem.propTypes = {
	post: PropTypes.object.isRequired
};

export default RecentItem;
