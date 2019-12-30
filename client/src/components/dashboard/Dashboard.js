import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner/Spinner';

const Dashboard = ({
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
				<i>DASHBOARD</i>
			</h1>
			<p class="lead"><i className='fas fa-user-secret userIcon'></i> Welcome { user && user.name}</p>
			<p>What do we want here?</p>
		</Fragment>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
