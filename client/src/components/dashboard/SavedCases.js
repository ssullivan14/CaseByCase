import React, { Fragment, useEffect} from 'react';
import { getFavs } from '../../actions/favorites';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner/Spinner';
import PropTypes from 'prop-types';
import SavedCaseItem from './SavedCaseItem';

const SavedCases = ({ user, getFavs, favorites : { favs } }) => {
    useEffect(() => {
        getFavs(user._id);
    }, [getFavs]);

	return (
		<Fragment>
			<div className='card bg-dark'>
				<div className='card-header'>
					<i className='fas fa-archive'></i>&nbsp;&nbsp;Saved Cases
				</div>
                <table className='card-table table table-striped table-dark'>
                    <thead>
                        <tr>
                            <th scope="col">Case No.</th>
                            <th scope="col">Incident Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">State</th>
                            <th scope="col">Collaborators</th>
                        </tr>
                    </thead>
                    <tbody>
                        <SavedCaseItem favorites={favs} />
                    </tbody>
                </table>
			</div>
		</Fragment>
	);
};

SavedCases.propTypes = {
  getFavs: PropTypes.func.isRequired,
  favorites: PropTypes.object.isRequired,

};
 const mapStateToProps = state => ({
     favorites: state.favorites
 });

export default connect(mapStateToProps,{ getFavs })(SavedCases);
