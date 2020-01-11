import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Results = () => {
    const socrataHeader = (
        <Fragment>
            <th scope="col">Case Number</th>
            <th scope="col">Incident Date/Time</th>
            <th scope="col">Incident Day of Week</th>
            <th scope="col">Incident Description</th>
            <th scope="col">Address</th>
            <th scope="col">Location</th>
        </Fragment>
    );

    const unidentifiedHeader = (
        <Fragment>
            <th scope="col">Case Number</th>
            <th scope="col">Date Found</th>
            <th scope="col">Description</th>
            <th scope="col">Address</th>
            <th scope="col">Location Details</th>
            <th scope="col">Images</th>
        </Fragment>
    );

    return (
        <Fragment>
            <div className='row'>
                <div className='col-md-12'>
                    <Link to='/search' className='btn btn-secondary back-btn'>
                        <i id='toggleIcon' className='fa fa-angle-double-down'></i> Back to
						Search
					</Link>
                </div>
            </div>
            <h1 className='page-header'>Results</h1>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        {/* Check incident type and display appropriate headers */}
                        {incidentType === 'unidentified persons' ? (
                            unidentifiedHeader
                        ) : searchType === 'missing person' ? (
                            <Fragment></Fragment>
                        ) : (
                                    socrataHeader
                                )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Results;
