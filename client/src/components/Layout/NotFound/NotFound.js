import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import oops from '../../../images/oops.gif';
import './NotFound.css';

const NotFound = () => {
	return (
		<div>
			<h1 className='page-header'>404: Not Found</h1>
			<p className='lead'>Sorry, this page does not exist.</p>
			<img id='image-404' src={oops} />
		</div>
	);
};

export default NotFound;
