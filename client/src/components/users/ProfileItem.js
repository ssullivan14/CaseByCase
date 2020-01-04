import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProfileItem.css';

const ProfileItem = ({
	profile: {
		user: { _id, name, avatar },
		status,
		location,
		social,
		website
	},
	profile
}) => {
	return (
		<div className='profile col-md-6'>
			<img src={avatar} className='users-img' />
			<div>
				<h2>{name}</h2>
				<h6 className='subtitle'>{location}</h6>
				<p><i>{status}</i></p>
				<Link to={`/profile/${_id}`} className='btn btn-sm green-btn'>
					View Profile
				</Link>
			</div>
			<div className='socials'>
				<ul>
					{website && (
						<li>
							<i className='fas fa-globe' />
						</li>
					)}
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
