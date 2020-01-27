import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import Spinner from "../Layout/Spinner/Spinner";
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { postFavs } from '../../actions/favorites';

const MissingPersonItem = ({ persons, loading, postFavs }) => {
  
  const addFavorite = (id, namus2Number, Date_Of_Last_Contact, State_Of_Last_Contact, First_Name, Middle_Name, Last_Name) => {
    const link = `namus/case/${id}`
    const Description = `${First_Name} ${Middle_Name} ${Last_Name}`
    const favObject = {
      id: id,
      Case_Number: namus2Number,
      Date: Date_Of_Last_Contact,
      State: State_Of_Last_Contact,
      Description: Description,
      Link: link
    }

    postFavs(favObject);
  };
  
  return loading && persons === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {persons.map(person => (
        <div className="card text-white bg-dark" key={person._id}>
          <div className="d-flex align-items-center">
            <h5 className="highlight card-header mx-auto w-100">
              <Link to={`/namus/case/${person._id}`}>
                {person.First_Name} {person.Middle_Name} {person.Last_Name}
              </Link>
              <a
                href={person.link}
                target="_blank"
                className="btn float-right ext-btn"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
              <Button className="btn float-right fav-btn" onClick={() => addFavorite(
                person._id,
                person.namus2Number,
                person.Date_Of_Last_Contact,
                person.State_Of_Last_Contact,
                person.First_Name,
                person.Middle_Name,
                person.Last_Name
              )}><i className="far fa-heart"></i></Button>
            </h5>
          </div>
          <div className="row no-gutters">
            <div className="col-md-2">
              <img src={person.image} className="card-img" />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <p className="card-text">
                  <strong>Area of Last Contact: </strong>{" "}
                  {person.City_Of_Last_Contact}, {person.State_Of_Last_Contact}
                </p>
                <p className="card-text">
                  <strong>Date of Last Contact: </strong>{" "}
                  {person.Date_Of_Last_Contact}
                </p>
                <p className="card-text">
                  <strong>Age at Time of Disappearance:</strong>{" "}
                  {person.Computed_Missing_Min_Age}
                </p>
                <br />
                <p className="card-text">
                  <strong>Current Age:</strong> {person.Current_Age_To}
                </p>
                <p className="card-text">
                  <strong>Race/Ethnicity:</strong> {person.Race_Ethnicity}
                </p>
                <p className="card-text">
                  <strong>Gender:</strong> {person.Gender}
                </p>
                <p className="card-text float-right">
                  <small className="text-muted">
                    Last updated{" "}
                    <Moment format="MM/DD/YYYY hh:mm A">
                      {person.Modified_Date_Time}
                    </Moment>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

MissingPersonItem.propTypes = {
  getFavs: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired
};

export default connect(null, { postFavs })(MissingPersonItem);
