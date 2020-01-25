import React from 'react';
import oops from '../../../images/oops.gif';
import './NotFound.css';

const NotFound = () => {
	return (
		<div>
			<h1 className='page-header'>404: Not Found</h1>
			<p className='lead'><i class="fas fa-exclamation-triangle gold-icon"></i> Sorry, this page does not exist.</p>
			<img id='image-404' src={oops} alt='3 chickens in a trenchcoat' />
		</div>
	);
};

export default NotFound;
