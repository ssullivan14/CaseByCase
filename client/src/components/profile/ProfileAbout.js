import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
	profile: {
		bio,
		website,
		social,
		user: { name }
	}
}) => (
	<div className='profile-about p-2'>
		{bio && (
			<Fragment>
				<h3 className='profile-headers'>{name.trim().split(' ')[0]}'s Bio</h3>
				<p>{bio}</p>
				<div className='line' />
			</Fragment>
		)}
		<h3 className='profile-headers'>Social</h3>

		<div className='icons my-1'>
			{website && (
				<a href={website} target='_blank' rel='noopener noreferrer'>
					<i className='fas fa-globe fa-2x' />
				</a>
			)}
			{social && social.twitter && (
				<a href={social.twitter} target='_blank' rel='noopener noreferrer'>
					<i className='fab fa-twitter fa-2x' />
				</a>
			)}
			{social && social.facebook && (
				<a href={social.facebook} target='_blank' rel='noopener noreferrer'>
					<i className='fab fa-facebook fa-2x' />
				</a>
			)}
			{social && social.linkedin && (
				<a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
					<i className='fab fa-linkedin fa-2x' />
				</a>
			)}
			{social && social.youtube && (
				<a href={social.youtube} target='_blank' rel='noopener noreferrer'>
					<i className='fab fa-youtube fa-2x' />
				</a>
			)}
			{social && social.instagram && (
				<a href={social.instagram} target='_blank' rel='noopener noreferrer'>
					<i className='fab fa-instagram fa-2x' />
				</a>
			)}
		</div>
	</div>
);

ProfileAbout.propTypes = {
	profile: PropTypes.object.isRequired
};

export default ProfileAbout;
