import React, { Fragment, useEffect } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNamus } from '../../actions/namus';
import Spinner from '../Layout/Spinner/Spinner';
import MissingPersonItem from './MissingPersonItem';

const Results = ({ getNamus, namus: { persons, loading } }) => {
	// Get search request out of local storage and convert back to an object
	const searchRequest = JSON.parse(localStorage.getItem('searchRequest'));

	useEffect(() => {
		if (searchRequest.incidentType === 'missing person') {
			getNamus(searchRequest);
		}
	}, [getNamus]);

	const socrataHeader = (
		<Fragment>
			<th scope='col'>Case Number</th>
			<th scope='col'>Incident Date/Time</th>
			<th scope='col'>Incident Day of Week</th>
			<th scope='col'>Incident Description</th>
			<th scope='col'>Address</th>
			<th scope='col'>Location</th>
		</Fragment>
	);

	const unidentifiedHeader = (
		<Fragment>
			<th scope='col'>Case Number</th>
			<th scope='col'>Date Found</th>
			<th scope='col'>Description</th>
			<th scope='col'>Address</th>
			<th scope='col'>Location Details</th>
			<th scope='col'>Images</th>
		</Fragment>
	);

	return loading && persons === null ? (
		<Spinner />
	) : (
		<Fragment>
			<div className='row'>
				<div className='col-md-12'>
					<Link to='/search' className='btn btn-secondary back-btn'>
						<i id='toggleIcon' className='fa fa-angle-double-down'></i> Back to
						Search
					</Link>
				</div>
			</div>
			<h1 className='page-header'>Search Results</h1>
			<p className='lead'>
				<i class='fas fa-clipboard-list gold-icon'></i>&nbsp;&nbsp;
				{searchRequest.location} > {searchRequest.incidentType} >{' '}
				<Moment format='MM/DD/YYYY'>{searchRequest.startDate}</Moment> -{' '}
				<Moment format='MM/DD/YYYY'>{searchRequest.endDate}</Moment>
			</p>
			<table className='table table-dark table-striped'>
				<thead>
					<tr>
						{/* Check incident type and display appropriate headers */}
						{searchRequest.incidentType === 'unidentified persons' ? (
							unidentifiedHeader
						) : searchRequest.incidentType === 'missing person' ? (
							<Fragment></Fragment>
						) : (
							socrataHeader
						)}
					</tr>
				</thead>
				<tbody>
					{searchRequest.incidentType === 'unidentified persons' ? (
						unidentifiedHeader
					) : searchRequest.incidentType === 'missing person' ? (
						persons.map(person => 
                            <MissingPersonItem key={person._id} person={person} />
                        )
					) : (
						socrataHeader
					)}
				</tbody>
			</table>
		</Fragment>
	);
};

Results.propTypes = {
	getNamus: PropTypes.func.isRequired,
	namus: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	namus: state.namus
});

export default connect(mapStateToProps, { getNamus })(Results);
