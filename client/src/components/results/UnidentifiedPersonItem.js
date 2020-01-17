import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const UnidentifiedPersonItem = () => {
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
                        <th scope="col">Case Number</th>
                        <th scope="col">Date Found</th>
                        <th scope="col">Description</th>
                        <th scope="col">Address</th>
                        <th scope="col">Location Details</th>
                        <th scope="col">Images</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
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

export default UnidentifiedPersonItem;
