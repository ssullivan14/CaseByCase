import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import Moment from 'react-moment';
import Spinner from '../Layout/Spinner/Spinner';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { postFavs } from '../../actions/favorites';

const UnidentifiedPersonItem = ({ persons, loading, postFavs }) => {
	const addFavorite = (id, casenumber, date_found, state, circumstancesOfRecovery) => {
		const link = `unidentified/case/${id}`
		const favObject = {
			id: id,
			Case_Number: casenumber,
			Date: date_found,
			State: state,
			Description: circumstancesOfRecovery,
			Link: link
		}

		postFavs(favObject);
	};

	return loading && persons === null ? (
		<Spinner />
	) : (
			<Fragment>
				{persons.map(person => (
					<tr key={person._id}>
						<td>
							<Button className="btn float-right fav-btn" onClick={() => addFavorite(
								person._id,
								person.casenumber,
								person.date_found,
								person.state,
								person.circumstancesOfRecovery
							)}><i className="far fa-heart"></i></Button>
						</td>
						<th><Link to={`/unidentified/case/${person._id}`}>{person.casenumber}</Link></th>
						<td>
							<Moment format='MM/DD/YYYY hh:mm A'>{person.date_found}</Moment>
						</td>
						<td>{person.gender}</td>
						{person.estimated_age_from && person.estimated_age_to ? (
							<td>
								{person.estimated_age_from} - {person.estimated_age_to}
							</td>
						) : (
								<td>{person.estimated_age_from} {person.estimated_age_to}</td>
							)}
						<td>{person.circumstancesOfRecovery}</td>

						{person.city ? (
							<td>
								{person.city}, {person.state}
							</td>
						) : (
								<td>{person.state}</td>
							)}
						{person.images ? (
							<td>
								<a href={`https://www.namus.gov` + person.images} target='_blank'>
									<i class='fas fa-external-link-alt'></i>
								</a>
							</td>
						) : (
								<td></td>
							)}
					</tr>
				))}
			</Fragment>
		);
};

UnidentifiedPersonItem.propTypes = {
	getFavs: PropTypes.func.isRequired
}

export default connect(null, { postFavs })(UnidentifiedPersonItem);
