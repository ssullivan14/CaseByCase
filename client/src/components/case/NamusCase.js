import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner/Spinner";
import { getNamusCase } from "../../actions/namus";
import GMap from "./GMap";

const NamusCase = ({ getNamusCase, namus: { namusCase, loading }, match }) => {
  useEffect(() => {
    getNamusCase(match.params.id);
  }, [getNamusCase]);
  console.log("showing namusCase: " + namusCase);

  // function waitForResults(variable) {
  //   if (typeof variable !== "undefined") {
  //     // wait

  //   } else {
  //     setTimeout(waitForResults, 1000);
  //   }
  // }

  // let check = waitForResults(namusCase);

  return (
    <Fragment>
      {namusCase === undefined || loading ? (
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
          <h1 className="page-header">Case #{namusCase.namus2Number}</h1>
          <p className="lead">
            <i className="fas fa-folder-open gold-icon"></i>&nbsp;&nbsp;VA >
            Missing Person
          </p>
          <h5>
            {namusCase.First_Name} {namusCase.Middle_Name} {namusCase.Last_Name}
          </h5>
          <div className="row no-gutters">
            <div className="col-md-2">
              <img src={namusCase.image} className="card-img" />
            </div>
            <div className="col-md-10">
            <GMap 
            persons={namusCase} 
			  	  		/>
              <div className="card-body">
                <p className="card-text">
                  <strong>Area of Last Contact: </strong>{" "}
                  {namusCase.City_Of_Last_Contact},{" "}
                  {namusCase.State_Of_Last_Contact}
                </p>
                <p className="card-text">
                  <strong>Date of Last Contact: </strong>{" "}
                  {namusCase.Date_Of_Last_Contact}
                </p>
                <p className="card-text">
                  <strong>Age at Time of Disappearance:</strong>{" "}
                  {namusCase.Computed_Missing_Min_Age}
                </p>
                <br />
                <p className="card-text">
                  <strong>Current Age:</strong> {namusCase.Current_Age_To}
                </p>
                <p className="card-text">
                  <strong>Race/Ethnicity:</strong> {namusCase.Race_Ethnicity}
                </p>
                <p className="card-text">
                  <strong>Gender:</strong> {namusCase.Gender}
                </p>
                <p className="card-text float-right">
                  <small className="text-muted">
                    Last updated{" "}
                    <Moment format="MM/DD/YYYY hh:mm A">
                      {namusCase.Modified_Date_Time}
                    </Moment>
                  </small>
                </p>
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
          <CommentForm postId={namusCase._id} />
          {/* <div className="comments">
            {post.comments.map(comment => (
              <CommentItem
                key={comment._id}
                comment={comment}
                postId={namusCase._id}
              />
            ))}
          </div> */}
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

NamusCase.propTypes = {
  getNamusCase: PropTypes.func.isRequired,
  namus: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  namus: state.namus
});

export default connect(mapStateToProps, { getNamusCase })(NamusCase);
