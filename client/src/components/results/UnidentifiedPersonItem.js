import React, { Fragment } from 'react';
import Moment from 'react-moment';
import Spinner from '../Layout/Spinner/Spinner';
import { Link } from 'react-router-dom';

const UnidentifiedPersonItem = ({ persons, loading }) => {
	return loading && persons === null ? (
		<Spinner />
	) : (
		<Fragment>
			{persons.map(person => (
				<tr key={person._id}>
					<td>
						<a href='#!' className='btn float-right'>
							<i className='far fa-heart'></i>
						</a>
					</td>
					<th>{person.casenumber}</th>
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

export default UnidentifiedPersonItem;
