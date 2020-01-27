import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner/Spinner";
import { getUnidentifiedCase } from "../../actions/unidentified";
import GMap from "./GMap";


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
          <h1 className="page-header">Case #{match.params.id}</h1>
          <p className="lead">
            <i className="fas fa-folder-open gold-icon"></i>&nbsp;&nbsp;
            {unIDcase.state} > Unidenfied Persons
          </p>
          <h5>
            <strong>Case Number: </strong>
            {unIDcase.casenumber}
          </h5>
          <div className="row no-gutters">
            <div className="col-md-10">
            <GMap 
            persons={{ 
              latitude: parseInt(unIDcase.latitude), 
              longitude: parseInt(unIDcase.longitude)
            }}
			  	  		/>
              <div className="card-body">
                <p className="card-text">
                  <strong>Gender: </strong> {unIDcase.gender}
                </p>
                <p className="card-text">
                  <strong>Ethnicity: </strong> {unIDcase.ethinicity}
                </p>
                <p className="card-text">
                  <strong>Date Found: </strong>{" "}
                  <Moment format="MM/DD/YYYY">{unIDcase.date_found}</Moment>
                </p>
                <p className="card-text">
                  <strong>Found Day of Week: </strong>{" "}
                  <Moment format="dddd">{unIDcase.date_found}</Moment>
                </p>
                <p className="card-text">
                  <strong>Description: </strong>{" "}
                  {unIDcase.circumstancesOfRecovery}
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 spacer">
              <h5>Attachments</h5>
              <ul>
                <li>
                  <i class="fas fa-paperclip text-muted"></i>&nbsp;&nbsp;
                  <a href="!#">IncidentReport.docx</a>
                </li>
                <li>
                  <i class="fas fa-paperclip text-muted"></i>&nbsp;&nbsp;
                  <a href="!#">WitnessTestimony.docx</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 spacer">
              <h5>Links</h5>
              <ul>
                <li>
                  <i className="fas fa-link text-muted"></i>&nbsp;&nbsp;
                  <a href="!#">YouTube video - Witness report</a>
                </li>
                <li>
                  <i className="fas fa-link text-muted"></i>&nbsp;&nbsp;
                  <a href="!#">News article on wtv10.com</a>
                </li>
              </ul>
            </div>
          </div>
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
