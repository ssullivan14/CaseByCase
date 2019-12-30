import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../../images/logo.png';
import video from '../../../videos/spotlight.mp4';
import './Landing.css';

const Landing = ({ isAuthenticated }) => {
	if(isAuthenticated) {
		return <Redirect to='/dashboard' />
	}

	return (
		<header>
			<div className='overlay'></div>
			<video
				playsInline='playsinline'
				autoPlay='autoplay'
				muted='muted'
				loop='loop'
			>
				<source src={video} type='video/mp4' />
			</video>
			<div className='container h-100 parallax-container'>
				<div className='d-flex h-100 text-center align-items-center'>
					<div className='w-100 text-white'>
						<img src={logo} className='img-fluid logo' alt='Case By Case logo' />
						<p className='lead mb-0 spacer'>
							a crime database aggregator, search engine, analysis, and
							collaboration tool
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool
}

const maptStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(maptStateToProps)(Landing);
