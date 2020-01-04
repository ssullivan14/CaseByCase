import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const AccountActions = () => {
	return (
		<Fragment>
			<Link to='/edit-profile' className='btn btn-secondary'>
				<i className='fas fa-user-edit'></i> Edit Profile
			</Link>
		</Fragment>
	);
};

export default AccountActions