import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ProfileForms.css';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
	profile: { profile, loading },
	createProfile,
	getCurrentProfile,
	history
}) => {
	// Form data state
	const [formData, setFormData] = useState({
		status: '',
		website: '',
		location: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: ''
	});

	const {
		status,
		website,
		location,
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram
	} = formData;

	// Social Input state
	const [displaySocialInputs, toggleSocialInputs] = useState(false);

    // Get current profile information
	useEffect(() => {
		getCurrentProfile();

		setFormData({
			website: loading || !profile.website ? '' : profile.website,
			location: loading || !profile.location ? '' : profile.location,
			status: loading || !profile.status ? '' : profile.status,
			bio: loading || !profile.bio ? '' : profile.bio,
			twitter: loading || !profile.social ? '' : profile.social.twitter,
			facebook: loading || !profile.social ? '' : profile.social.facebook,
			linkedin: loading || !profile.social ? '' : profile.social.linkedin,
			youtube: loading || !profile.social ? '' : profile.social.youtube,
			instagram: loading || !profile.social ? '' : profile.social.instagram
		});
	}, [loading, getCurrentProfile]);

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		createProfile(formData, history, true);
	};

	return (
		<Fragment>
			<h1>
				<i>EDIT PROFILE</i>
			</h1>
			<p className='lead'>
				<i className='fas fa-user-secret userIcon'></i> Update your profile with the latest information.
			</p>
			<form className='form' onSubmit={e => handleSubmit(e)}>
				<div className='form-group'>
					<label htmlFor='status'>Professional Status</label>
					<select
						className='form-control'
						name='status'
						value={status}
						onChange={e => onChange(e)}
					>
						<option value='Web Sleuth'>Web Sleuth</option>
						<option value='Law Enforcement'>Law Enforcement</option>
						<option value='Private Investigator'>Private Investigator</option>
						<option value='Student'>Student</option>
						<option value='Other'>Other</option>
					</select>
					<small className='form-text'>
						Give us an idea of where you are at in your career/hobby.
					</small>
				</div>
				<div className='form-group'>
					<label htmlFor='website'>Website</label>
					<input
						className='form-control'
						type='text'
						placeholder='www.example.com'
						name='website'
						value={website}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>
						Could be your own or a company website.
					</small>
				</div>
				<div className='form-group'>
					<label htmlFor='location'>Location</label>
					<input
						className='form-control'
						type='text'
						placeholder='Small Town, VA, USA'
						name='location'
						value={location}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='bio'>Bio</label>
					<textarea
						className='form-control'
						placeholder='A short bio of yourself.'
						name='bio'
						value={bio}
						onChange={e => onChange(e)}
					></textarea>
					<small className='form-text'>Tell us a little about yourself.</small>
				</div>
				<hr />
				<div>
					<button
						onClick={() => toggleSocialInputs(!displaySocialInputs)}
						type='button'
						className='btn btn-dark green-btn'
					>
						Add Social Network Links
					</button>
					<small id='optional' className='form-text'>
						Optional
					</small>
				</div>

				{displaySocialInputs && (
					<Fragment>
						<div class='input-group social-input'>
							<div className='row'>
								<div className='col-md-2'>
									<i id='twitter-icon' class='fab fa-twitter fa-2x'></i>
								</div>
								<div className='col-md-10'>
									<input
										className='form-control'
										type='text'
										placeholder='Twitter URL'
										name='twitter'
										value={twitter}
										onChange={e => onChange(e)}
									/>
								</div>
							</div>
						</div>
						<div class='input-group social-input'>
							<div className='row'>
								<div className='col-md-2'>
									<i id='facebook-icon' class='fab fa-facebook fa-2x'></i>
								</div>
								<div className='col-md-10'>
									<input
										className='form-control'
										type='text'
										placeholder='Facebook URL'
										name='facebook'
										value={facebook}
										onChange={e => onChange(e)}
									/>
								</div>
							</div>
						</div>
						<div class='input-group social-input'>
							<div className='row'>
								<div className='col-md-2'>
									<i id='youtube-icon' class='fab fa-youtube fa-2x'></i>
								</div>
								<div className='col-md-10'>
									<input
										className='form-control'
										type='text'
										placeholder='YouTube URL'
										name='youtube'
										value={youtube}
										onChange={e => onChange(e)}
									/>
								</div>
							</div>
						</div>
						<div class='input-group social-input'>
							<div className='row'>
								<div className='col-md-2'>
									<i id='linkedin-icon' class='fab fa-linkedin fa-2x'></i>
								</div>
								<div className='col-md-10'>
									<input
										className='form-control'
										type='text'
										placeholder='Linkedin URL'
										name='linkedin'
										value={linkedin}
										onChange={e => onChange(e)}
									/>
								</div>
							</div>
						</div>
						<div class='input-group social-input'>
							<div className='row'>
								<div className='col-md-2'>
									<i id='instagram-icon' class='fab fa-instagram fa-2x'></i>
								</div>
								<div className='col-md-10'>
									<input
										className='form-control'
										type='text'
										placeholder='Instagram URL'
										name='instagram'
										value={instagram}
										onChange={e => onChange(e)}
									/>
								</div>
							</div>
						</div>
					</Fragment>
				)}
				<div id='profile-buttons'>
					<input type='submit' className='btn btn-secondary' />
					<Link className='btn btn-light my-1' to='/dashboard'>
						Go Back
					</Link>
				</div>
			</form>
		</Fragment>
	);
};

EditProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(EditProfile)
);
