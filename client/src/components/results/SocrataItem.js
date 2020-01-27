import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import Moment from "react-moment";
import Spinner from "../Layout/Spinner/Spinner";
import { Link } from "react-router-dom";
import { postFavs } from '../../actions/favorites';

const SocrataItem = ({ incidents, loading, postFavs }) => {

  const addFavorite = (id, Case_Number, Date, State, Description) => {
    const link = `crimes/case/${id}`
    const favObject = {
      id: id,
      Case_Number: Case_Number,
      Date: Date,
      State: State,
      Description: Description,
      Link: link
    }

    postFavs(favObject);
  };

  return loading && incidents === null ? (
    <Spinner />
  ) : (
      <Fragment>
        {incidents.map(incident => (
          <tr key={incident._id}>
            <td>
              <Button className="btn float-right" onClick={() => addFavorite(
                incident._id,
                incident.Case_Number,
                incident.Date,
                incident.State,
                incident.Description
              )}><i className="far fa-heart"></i></Button>
            </td>
            <th className="highlight" scope="row">
              <Link to={`/crimes/case/${incident._id}`}>
                {incident.Case_Number}
              </Link>
            </th>
            <td>
              <Moment format="MM/DD/YYYY hh:mm A">{incident.Date}</Moment>
            </td>
            <td>
              <Moment format="dddd">{incident.Date}</Moment>
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

SocrataItem.propTypes = {
	getFavs: PropTypes.func.isRequired
};

export default connect(null, { postFavs })(SocrataItem);

