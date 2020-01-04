import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProfileItem.css';

const ProfileItem = ({
	profile: {
		user: { _id, name, avatar },
		status,
        location
	}, profile
}) => {

	return (
        <div className='profile col-md-6'>
			<img src={avatar} className='round-img' />
            <div>
                <h2>{name}</h2>
                <p className='subtitle'>{location}</p>
                <p>{status}</p>
                <Link to={`/profile/${_id}`} className='btn btn-sm blue-btn'>
                    View Profile
                </Link>
            </div>
            <div className='socials'>
                &nbsp;
            </div>
        </div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired
};

export default ProfileItem;
