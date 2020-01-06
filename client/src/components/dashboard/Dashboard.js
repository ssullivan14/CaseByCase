import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../Layout/Spinner/Spinner';
import RecentPosts from './RecentPosts';

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading }
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	// Render spinner if profile has not loaded
	return loading && profile === null ? (
		<Spinner />
	) : (
		<Fragment>
			<h1>
				<i>DASHBOARD</i>
			</h1>
			<p className='lead'>
				<i className='fas fa-user-secret userIcon'></i> Welcome{' '}
				{user && user.name}
			</p>
			<p>What do we want here?</p>
			<div className='row'>
				<div className='col-md-8'></div>
				<div className='col-md-4'>
					<RecentPosts />
				</div>
			</div>
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
