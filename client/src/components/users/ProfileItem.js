import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProfileItem.css';

const ProfileItem = ({
	profile: {
		user: { _id, name, avatar },
		status,
		location,
		social
	},
	profile
}) => {
	return (
		<div className='profile col-md-6'>
			<img src={avatar} className='users-img' />
			<div>
				<h2>{name}</h2>
				<p className='subtitle'>{location}</p>
				<p>{status}</p>
				<Link to={`/profile/${_id}`} className='btn btn-sm green-btn'>
					View Profile
				</Link>
			</div>
			<div className='socials'>
				<ul>
					{social && social.twitter && (
						<li>
							<i className='fab fa-twitter' />
						</li>
					)}
					{social && social.facebook && (
						<li>
							<i className='fab fa-facebook' />
						</li>
					)}
					{social && social.linkedin && (
						<li>
							<i className='fab fa-linkedin' />
						</li>
					)}
					{social && social.youtube && (
						<li>
							<i className='fab fa-youtube' />
						</li>
					)}
					{social && social.instagram && (
						<li>
							<i className='fab fa-instagram' />
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired
};

export default ProfileItem;
