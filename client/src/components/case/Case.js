import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import GMap from "./GMap";

const Case = ({ match }) => {
    const caseNumber = match.params.id;
    return (
        <Fragment>
            <div className='row'>
                <div className='col-md-12'>
                    <Link to='/results' className='btn btn-secondary back-btn'>
                        <i id='toggleIcon' className='fa fa-angle-double-down'></i> Back to
						Results
					</Link>
                </div>
            </div>
            <h1 className='page-header'>Case #{caseNumber}</h1>
            <p className='lead'><i class="fas fa-folder-open gold-icon"></i>&nbsp;&nbsp;VA > Missing Person</p>
            <h5>Details</h5>
            <img className='spacer' src='https://via.placeholder.com/150'></img>
            <p className='spacer'>Suspendisse nunc mi, ultrices a vehicula eget, finibus ac dui. Vivamus id turpis vehicula, cursus odio non, sodales purus. Suspendisse faucibus, nunc quis tempus finibus, metus libero auctor urna, non rhoncus nibh sem vitae nisi. Donec eu bibendum massa. Duis efficitur mollis semper. Aliquam rhoncus vitae tellus sodales hendrerit. Pellentesque sagittis lorem arcu, in ornare eros suscipit ut. Integer ullamcorper est eget auctor mattis.</p>
            <div className='row'>
                <div className='col-md-6 spacer'>
                    <h5>Attachments</h5>
                    <ul>
                        <li><i class="fas fa-paperclip text-muted"></i>&nbsp;&nbsp;<a href='!#'>IncidentReport.docx</a></li>
                        <li><i class="fas fa-paperclip text-muted"></i>&nbsp;&nbsp;<a href='!#'>WitnessTestimony.docx</a></li>
                    </ul>
                </div>
                <div className='col-md-6 spacer'>
                    <h5>Links</h5>
                    <ul>
                        <li><i className="fas fa-link text-muted"></i>&nbsp;&nbsp;<a href='!#'>YouTube video - Witness report</a></li>
                        <li><i className="fas fa-link text-muted"></i>&nbsp;&nbsp;<a href='!#'>News article on wtv10.com</a></li>
                    </ul>
                </div>
            </div>
            <h3 className='page-header spacer'>Comments</h3>
            <div class='post bg-comment p-1 my-1'>
                <div>
                    <Link to='!#'>
                        <img
                            class='round-img'
                            src='https://via.placeholder.com/75'
                            alt="User's avatar"
                        />
                        <h4>Username</h4>
                    </Link>
                </div>
                <div>
                    <p class='my-1'>
                        Here is some text.
                    </p>
                    <p class='post-date'>Posted on <Moment format='MM/DD/YYYY hh:mm A'>01/16/2020</Moment></p>
                </div>
            </div>
            <div class='post bg-comment p-1 my-1'>
                <div>
                    <Link to='!#'>
                        <img
                            class='round-img'
                            src='https://via.placeholder.com/75'
                            alt="User's avatar"
                        />
                        <h4>Username</h4>
                    </Link>
                </div>
                <div>
                    <p class='my-1'>
                        A great comment.
                    </p>
                    <p class='post-date'>Posted on <Moment format='MM/DD/YYYY hh:mm A'>01/16/2020</Moment></p>
                </div>
            </div>
        </Fragment>
    )
}

export default Case;
