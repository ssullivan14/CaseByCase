import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner/Spinner';

const Account = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading }
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	// Render spinner if profile has not loaded
	return loading && profile === null ? (
		<Spinner />
	) : (
		<Fragment>
			<h1>
				<i>MY ACCOUNT</i>
			</h1>
			<p class="lead"><i className='fas fa-user-secret userIcon'></i> { user && user.name}</p>
			{profile !== null ? (
                <Fragment>Has</Fragment>
            ) : (
                <Fragment>
                    <p>You have not yet setup a profile. Please add some info.</p>
                    <Link to='/create-profile' className="btn btn-secondary">Create Profile</Link>
                </Fragment>
            )}
		</Fragment>
	);
};

Account.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Account);
