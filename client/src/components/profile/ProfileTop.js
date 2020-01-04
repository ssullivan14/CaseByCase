import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className='profile-top p-2'>
      <img className='profile-img my-1' src={avatar} alt='' />
      <h1 className='user-name'><i>{name}</i></h1>
      <p className='lead'>
        {status}
      </p>
      <p>{location && <span className='subtitle'>{location}</span>}</p>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;