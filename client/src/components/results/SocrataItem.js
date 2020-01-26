import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Spinner from '../Layout/Spinner/Spinner';
import { Link } from 'react-router-dom';
// import {Favorites} from '../../actions/favorites';

const SocrataItem = ({ incidents, loading }) => {
	return loading && incidents === null ? (
		<Spinner />
	) : (
		<Fragment>
			{incidents.map(incident => (
				<tr key={incident._id}>
                    <td>
						<a href='#!' className='btn float-right'>
							<i className='far fa-heart'></i>
						</a>
					</td>
					<th className='highlight' scope='row'>
						{incident.Case_Number}
					</th>
					<td>
						<Moment format='MM/DD/YYYY hh:mm A'>{incident.Date}</Moment>
					</td>
					<td>
						<Moment format='dddd'>{incident.Date}</Moment>
					</td>
					<td>{incident.Descript || incident.Description}</td>
					<td>{incident.Block}</td>
					<td>
						{incident.City}, {incident.State}
					</td>
				</tr>
			))}
		</Fragment>
	);
};

export default SocrataItem;
