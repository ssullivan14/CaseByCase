import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const MissngPersonItem = () => {
    return (
        <Fragment>
            <div className="card text-white bg-dark">
                <div className="d-flex align-items-center">
                    <h5 className="highlight card-header mx-auto w-100">
                        {First_Name} {Middle_Name} {Last_Name}
                        <a href={link} target="_blank" className="btn float-right ext-btn"><i className="fas fa-external-link-alt"></i></a>
                    </h5>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <img src={image} className="card-img" />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <p className="card-text"><strong>Area of Last Contact: </strong> {City_Of_Last_Contact}, {State_Of_Last_Contact}</p>
                            <p className="card-text"><strong>Date of Last Contact: </strong> {Date_Of_Last_Contact}</p>
                            <p className="card-text"><strong>Age at Time of Disappearance:</strong> {Computed_Missing_Min_Age}</p><br />
                            <p className="card-text"><strong>Current Age:</strong> {Current_Age_To}</p>
                            <p className="card-text"><strong>Race/Ethnicity:</strong> {Race_Ethnicity}</p>
                            <p className="card-text"><strong>Gender:</strong> {Gender}</p>
                            <p className="card-text float-right"><small className="text-muted">Last updated <Moment format='MM/DD/YYYY hh:mm A'>{Modified_Date_Time}</Moment></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MissingPersonItem;
