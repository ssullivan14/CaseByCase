import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Users = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();     
    }, []);

    return <Fragment>
        { profiles === null || loading ? <Spinner /> : 
            <Fragment>
                <h1><i>USERS</i></h1>
                <p className="lead">
                <i className="fas fa-fingerprint gold-icon"></i> Browse and connect with other users.
                </p>
                <div className="profiles">
                    {profiles.length > 0 ? (
                        profiles.map(profile => (
                            <ProfileItem key={profile._id} profile={profile} />
                        ))
                    ) : <Spinner /> }
                </div>
            </Fragment>    
        }
    </Fragment>
}

Users.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Users);
