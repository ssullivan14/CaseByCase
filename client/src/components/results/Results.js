import React, { Fragment, useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNamus } from '../../actions/namus';
import { getCrimes } from '../../actions/crimes';
import { getUnidentified } from '../../actions/unidentified';
import Spinner from '../Layout/Spinner/Spinner';
import Pagination from './Pagination';
import MissingPersonItem from './MissingPersonItem';
import SocrataItem from './SocrataItem';
import UnidentifiedPersonItem from './UnidentifiedPersonItem';
import './Results.css';

const Results = ({
	getNamus,
	namus: { persons, loading },
	getCrimes,
	crimes: { incidents, crimeLoading },
	getUnidentified,
	unidentified: { unIDpersons, unIDloading }
}) => {
	// Get search request out of local storage and convert back to an object
	const searchRequest = JSON.parse(localStorage.getItem('searchRequest'));

	// Setup how many results to display per page
	const [currentPage, setCurrentPage] = useState(1);
	const [resultsPerPage, setPostsPerPage] = useState(10);

	// Determine which search to run and then call the action
	useEffect(() => {
		switch (searchRequest.incidentType) {
			case 'missing person':
				getNamus(searchRequest);
				break;
			case 'unidentified persons':
				getUnidentified(searchRequest);
				break;
			default:
				getCrimes(searchRequest);
		}
	}, [getNamus, getCrimes, getUnidentified]);

	const socrataHeader = (
		<Fragment>
			<th scope='col'></th>
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
			<th scope='col'></th>
			<th scope='col'>Case Number</th>
			<th scope='col'>Date Found</th>
			<th scope='col'>Gender</th>
			<th scope='col'>Estimated Age</th>
			<th scope='col'>Description</th>
			<th scope='col'>Location</th>
			<th scope='col'>Images</th>
		</Fragment>
	);

	function waitForResults(variable) {
		if (typeof variable !== "undefined") {
			getCurrentResults = variable.slice(
				indexofFirstResult,
				indexOfLastResult
			);
		}
		else {
			setTimeout(waitForResults, 1000);
		}
	}

	// Get current posts
	let getCurrentResults = [];
	const indexOfLastResult = currentPage * resultsPerPage;
	const indexofFirstResult = indexOfLastResult - resultsPerPage;
	switch (searchRequest.incidentType) {
		case 'missing person':
			waitForResults(persons);
			break;
		case 'unidentified persons':
			waitForResults(unIDpersons);
			break;
		case 'assault':
		case 'battery':
		case 'homocide':
		case 'murder':
		case 'rape':
		case 'sexual':
		case 'shot':
			waitForResults(incidents);
	}

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (loading && persons === null) ||
		(crimeLoading && incidents === null) || (unIDloading && unIDpersons === null) ? (
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
					<i className='fas fa-clipboard-list gold-icon'></i>&nbsp;&nbsp;
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
							<UnidentifiedPersonItem persons={getCurrentResults} loading={unIDloading} />
						) : searchRequest.incidentType === 'missing person' ? (
							<MissingPersonItem persons={getCurrentResults} loading={loading} />
						) : (
									<SocrataItem incidents={getCurrentResults} loading={crimeLoading} />
								)}
					</tbody>
				</table>
				<Pagination
					resultsPerPage={resultsPerPage}
					totalResults={persons.length}
					paginate={paginate}
				/>
			</Fragment>
		);
};

Results.propTypes = {
	getNamus: PropTypes.func.isRequired,
	namus: PropTypes.object.isRequired,
	getCrimes: PropTypes.func.isRequired,
	crimes: PropTypes.object.isRequired,
	getUnidentified: PropTypes.func.isRequired,
	unidentified: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	namus: state.namus,
	crimes: state.crimes,
	unidentified: state.unidentified
});

export default connect(mapStateToProps, { getNamus, getCrimes, getUnidentified })(Results);
