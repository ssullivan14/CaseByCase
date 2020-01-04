import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner/Spinner';
import { getProfileById } from '../../actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import './Profile.css';

const Profile = ({ getProfileById, profile: { profile, loading }, match }) => {
	useEffect(() => {
		getProfileById(match.params.id);
	}, [getProfileById, match.params.id]);

	return (
		<Fragment>
			{profile === null || loading ? (
				<Spinner />
			) : (
				<Fragment>
					<div className='row'>
						<div className='col-md-12'>
							<a href='/users' className='btn btn-secondary back-btn'>
								<i id='toggleIcon' className='fa fa-angle-double-down'></i> Back to
								Users
							</a>
						</div>
					</div>
                    <div className='profile-grid'>
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />
                    </div>
				</Fragment>
			)}
		</Fragment>
	);
};

Profile.propTypes = {
	getProfileById: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
