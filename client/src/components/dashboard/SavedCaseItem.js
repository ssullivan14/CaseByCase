import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner/Spinner';
import { Link } from 'react-router-dom';

const SavedCaseItem = ({ favorites, auth: { user } }) => {
	return favorites === undefined ? (
		<Spinner />
	) : (
		<Fragment>
			{favorites.map(favorite => (
				<tr key={favorite._id}>
					<td>
						<Link to={favorite.Link}>{favorite.Case_Number}</Link>
					</td>
					<td>
						<Moment format='MM/DD/YYYY hh:mm A'>
							{favorite.Date_Of_Incident}
						</Moment>
					</td>
					<td>{favorite.Description}</td>
					<td>{favorite.State}</td>
					<td>
						{favorite.Users.map(User =>
							User.name !== user.name ? (
								<Link key={User._id} to={`profile/${User._id}`}>{User.name}</Link>
							) : (
								<Fragment></Fragment>
							)
						)}
					</td>
				</tr>
			))}
		</Fragment>
	);
};

SavedCaseItem.propTypes = {
	favorites: PropTypes.array.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, {})(SavedCaseItem);
