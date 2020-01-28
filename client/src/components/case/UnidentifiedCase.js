import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner/Spinner";
import { getUnidentifiedCase } from "../../actions/unidentified";
import GMap from "./GMap";
import "./Case.css";

const UnidentifiedCase = ({
  getUnidentifiedCase,
  unidentified: { unIDcase, unIDloading },
  match
}) => {
  useEffect(() => {
    console.log("here");
    getUnidentifiedCase(match.params.id);
  }, [getUnidentifiedCase, match.params.id]);

  return (
    <Fragment>
      {unIDcase === undefined || unIDloading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="row">
            <div className="col-md-12">
              <Link to="/results" className="btn btn-secondary back-btn">
                <i id="toggleIcon" className="fa fa-angle-double-down"></i> Back
                to Results
              </Link>
            </div>
          </div>
          <h1 className="page-header">Case #{unIDcase.casenumber}</h1>
          <p className="lead">
            <i className="fas fa-folder-open gold-icon"></i>&nbsp;&nbsp;
            {unIDcase.state} > Unidenfied Persons
          </p>
          <h5>
            <strong>Case Number: </strong>
            {unIDcase.casenumber}
          </h5>
          <div className="row no-gutters">
            <div className="col-md-5">
              <div className="card-body">
                <p className="card-text">
                  <strong>Gender: </strong> {unIDcase.gender}
                </p>
                <p className="card-text">
                  <strong>Ethnicity: </strong> {unIDcase.ethinicity}
                </p>
                <p className="card-text">
                  <strong>Estimated Age Range (Years): </strong>{" "}
                  {unIDcase.estimated_age_from && unIDcase.estimated_age_to ? (
                    <span>
                      {unIDcase.estimated_age_from} -{" "}
                      {unIDcase.estimated_age_to}
                    </span>
                  ) : (
                    <span>
                      {unIDcase.estimated_age_from} {unIDcase.estimated_age_to}
                    </span>
                  )}
                </p>
                <p className="card-text">
                  <strong>Estimated Weight Range (Pounds): </strong>{" "}
                  {unIDcase.estimated_weight_from &&
                  unIDcase.estimated_weight_to ? (
                    <span>
                      {unIDcase.estimated_weight_from} -{" "}
                      {unIDcase.estimated_weight_to}
                    </span>
                  ) : (
                    <span>
                      {unIDcase.estimated_weight_from}{" "}
                      {unIDcase.estimated_weight_to}
                    </span>
                  )}
                </p>
                <p className="card-text">
                  <strong>Estimated Height Range (inches): </strong>{" "}
                  {unIDcase.estimated_height_from &&
                  unIDcase.estimated_height_to ? (
                    <span>
                      {unIDcase.estimated_height_from} -{" "}
                      {unIDcase.estimated_height_to}
                    </span>
                  ) : (
                    <span>
                      {unIDcase.estimated_height_from}{" "}
                      {unIDcase.estimated_height_to}
                    </span>
                  )}
                </p>
                <p className="card-text">
                  <strong>Hair Color: </strong>{" "}
                  {unIDcase.physicalDescription_hairColor}
                </p>
                <p className="card-text">
                  <strong>Hair Details: </strong> {unIDcase.headHairDescription}
                </p>
                <p className="card-text">
                  <strong>Left Eye Color: </strong> {unIDcase.leftEyeColor}
                </p>
                <p className="card-text">
                  <strong>Right Eye Color: </strong> {unIDcase.rightEyeColor}
                </p>
                <p className="card-text">
                  <strong>Physical Description: </strong>{" "}
                  {unIDcase.physicalFeatureDescription}
                </p>
                {/* Page Break */}
              </div>
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <p className="card-text">
                  <strong>Date Found: </strong>{" "}
                  <Moment format="MM/DD/YYYY">{unIDcase.date_found}</Moment>
                </p>
                <p className="card-text">
                  <strong>Found Day of Week: </strong>{" "}
                  <Moment format="dddd">{unIDcase.date_found}</Moment>
                </p>
                <p className="card-text">
                  <strong>Address Found: </strong> {unIDcase.address}{" "}
                  {unIDcase.city}, {unIDcase.state} {unIDcase.zipcode}
                </p>
                <p className="card-text">
                  <strong>Description of Recovery: </strong>{" "}
                  {unIDcase.circumstancesOfRecovery}
                </p>
                <p className="card-text">
                  <strong>Condition of Remains : </strong>{" "}
                  {unIDcase.conditionOfRemains}
                </p>
                <p className="card-text">
                  <strong>Clothing and Accessories : </strong>{" "}
                  {unIDcase.clothingAndAccessories}
                </p>
                <p className="card-text">
                  <strong>Location of Clothing and Accessories : </strong>{" "}
                  {unIDcase.clothingAndAccessories_location}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <p>
                  {unIDcase.imageThumbnail ? (
                    <a
                      href={`https://www.namus.gov` + unIDcase.images}
                      target="_blank"
                    >
                      <img
                        src={`https://www.namus.gov${unIDcase.imageThumbnail}`}
                      ></img>
                    </a>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </p>

                <br />
                <p className="card-text text-muted">
                  <strong>Last updated: </strong>{" "}
                  <Moment format="MM/DD/YYYY hh:mm A">
                    {unIDcase.modifiedDateTime}
                  </Moment>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 spacer">
              <br></br>
              <h5>Links</h5>
              <ul>
                <li className="link-plain">&nbsp;&nbsp; Not Added</li>
              </ul>
            </div>
          </div>
          <GMap
            persons={{
              latitude: parseInt(unIDcase.latitude),
              longitude: parseInt(unIDcase.longitude)
            }}
          />
          <h3 className="page-header spacer">Comments</h3>
          <div class="post bg-comment p-1 my-1">
            <div>
              <Link to="!#">
                <img
                  class="round-img"
                  src="https://via.placeholder.com/75"
                  alt="User's avatar"
                />
                <h4>Username</h4>
              </Link>
            </div>
            <div>
              <p class="my-1">Here is some text.</p>
              <p class="post-date">
                Posted on{" "}
                <Moment format="MM/DD/YYYY hh:mm A">01/16/2020</Moment>
              </p>
            </div>
          </div>
          <div class="post bg-comment p-1 my-1">
            <div>
              <Link to="!#">
                <img
                  class="round-img"
                  src="https://via.placeholder.com/75"
                  alt="User's avatar"
                />
                <h4>Username</h4>
              </Link>
            </div>
            <div>
              <p class="my-1">A great comment.</p>
              <p class="post-date">
                Posted on{" "}
                <Moment format="MM/DD/YYYY hh:mm A">01/16/2020</Moment>
              </p>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

UnidentifiedCase.propTypes = {
  getUnidentifiedCase: PropTypes.func.isRequired,
  unidentified: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  unidentified: state.unidentified
});

export default connect(mapStateToProps, { getUnidentifiedCase })(
  UnidentifiedCase
);
