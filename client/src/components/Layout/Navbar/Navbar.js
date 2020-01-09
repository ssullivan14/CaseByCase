import React, { Fragment, useEffect } from 'react';
import './Navbar.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';
import Collaborate from './Collaborate'


const Navbar = ({ auth: { user, isAuthenticated, loading }, logout }) => {

	const authLinks = (
		<div className='navbar-nav'>
			<Link to='/dashboard' className='nav-item nav-link'>
				Dashboard
			</Link>
			<Link to='/search' className='nav-item nav-link'>
				Search
			</Link>
			<span id="collab">	
				<Collaborate />		
			</span>
			<li className='nav-item dropdown'>
				<Link
					className='nav-link dropdown-toggle'
					to='!#'
					id='navbarDropdown'
					role='button'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'
				>
					Community
				</Link>
				<div className='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdown'>
					<Link className='dropdown-item' to='/posts'>
						Posts
					</Link>
					<Link className='dropdown-item' to='/users'>
						Users
					</Link>
				</div>
			</li>
			<Link to='!#' className='nav-item nav-link disabled'>
				|
			</Link>
			&nbsp;
			<li className='nav-item dropdown'>
				<Link
					className='nav-link dropdown-toggle'
					to='!#'
					id='navbarDropdown'
					role='button'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'
				>
					<i className='fas fa-user-secret userIcon'></i>{' '}
					<span className='member-name'>{user && user.name}</span>
				</Link>
				<div className='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdown'>
					<Link className='dropdown-item' to='/account'>
						My Account
					</Link>
					<div className='dropdown-divider'></div>
					<Link onClick={logout} className='dropdown-item' to='/'>
						<i className='fas fa-sign-out-alt menuIcons'></i> Logout
					</Link>
				</div>
			</li>
		</div>
	);

	const guestLinks = (
		<div className='navbar-nav'>
			<Link to='/about' className='nav-item nav-link'>
				About
			</Link>
			<Link to='/contact' className='nav-item nav-link'>
				<i className='far fa-paper-plane menuIcons'></i> Contact Us
			</Link>
			<Link to='/register' className='nav-item nav-link'>
				<i className='fas fa-user-plus menuIcons'></i> Register
			</Link>
			<Link to='/login' className='nav-item nav-link'>
				<i className='fas fa-sign-in-alt menuIcons'></i> Login
			</Link>
		</div>
	);

	return (
		<nav className='navbar navbar-expand-lg navbar-dark'>
			<a className='navbar-brand' id='brand' href='/'>
				<img src={logo} className='img-fluid smLogo' alt='Case By Case logo' />
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavAltMarkup'
				aria-controls='navbarNavAltMarkup'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div
				className='collapse navbar-collapse justify-content-end'
				id='navbarNavAltMarkup'
			></div>
			{/* Display links, determine appropriate based on whether user is logged in or not */}
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
