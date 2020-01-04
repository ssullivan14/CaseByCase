import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../Layout/Spinner/Spinner';
import AccountActions from './AccountActions';

const Account = ({
	getCurrentProfile,
	deleteAccount,
	auth: { user },
	profile: { profile, loading }
}) => {
	// Get current profile data
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	// Render spinner if profile has not loaded
	return loading && profile === null ? (
		<Spinner />
	) : (
		<Fragment>
			<h1>
				<i>MY ACCOUNT</i>
			</h1>
			<p className='lead'>
				<i className='fas fa-user-secret userIcon'></i> {user && user.name}
			</p>
			{profile !== null ? (
				<Fragment>
					<AccountActions />
					&nbsp;&nbsp;
					<button className='btn btn-danger' onClick={() => deleteAccount()}>
						<i className='fas fa-user-times'></i> Delete Account
					</button>
				</Fragment>
			) : (
				<Fragment>
					<p>You have not yet setup a profile. Please add some info.</p>
					<Link to='/create-profile' className='btn btn-secondary'>
						<i class='fas fa-user-tag'></i> Create Profile
					</Link>
				</Fragment>
			)}
		</Fragment>
	);
};

Account.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
	Account
);
