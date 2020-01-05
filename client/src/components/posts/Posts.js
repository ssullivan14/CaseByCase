import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../Layout/Spinner/Spinner';
import './Posts.css';

const Posts = ({ getPosts, post: { posts, loading } }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<Fragment>
			<h1>
				<i>POSTS</i>
			</h1>
			<p className='lead'>
				<i className='fas fa-comments gold-icon'></i> Discuss cases with other
				users
			</p>
			<table class='table table-striped table-dark'>
				<thead>
					<tr>
						<th className='th-large' scope='col'>
							State Discussions
						</th>
						<th className='th-large' scope='col'></th>
						<th className='th-large' scope='col'></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope='row'>Name</th>
						<th scope='row'>Statistics</th>
						<th scope='row'>Last Post</th>
					</tr>
					<tr>
						<td>
							<Link to='/posts/california'>California</Link>
						</td>
						<td>5 Posts</td>
						<td>01/01/2020</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/florida'>Florida</Link>
						</td>
						<td>100 Posts</td>
						<td>01/03/2020</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/illinois'>Illinois</Link>
						</td>
						<td>2 Posts</td>
						<td>12/23/2019</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/indiana'>Indiana</Link>
						</td>
						<td>3 Posts</td>
						<td>12/15/2019</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/missouri'>Missouri</Link>
						</td>
						<td>2 Posts</td>
						<td>12/23/2019</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/new%20mexico'>New Mexico</Link>
						</td>
						<td>6 Posts</td>
						<td>01/02/2020</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/tennessee'>Tennessee</Link>
						</td>
						<td>2 Posts</td>
						<td>01/03/2020</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/utah'>Utah</Link>
						</td>
						<td>7 Posts</td>
						<td>01/04/2020</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/virginia'>Virginia</Link>
						</td>
						<td>22 Posts</td>
						<td>12/13/2019</td>
					</tr>
					<tr>
						<th className='th-large' scope='col'>
							General
						</th>
						<th className='th-large' scope='col'></th>
						<th className='th-large' scope='col'></th>
					</tr>
					<tr>
						<th scope='row'>Name</th>
						<th scope='row'>Statistics</th>
						<th scope='row'>Last Post</th>
					</tr>
					<tr>
						<td>
							<Link to='/posts/general%20discussion'>General Discussion</Link>
						</td>
						<td>20 Posts</td>
						<td>01/04/2020</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/enhancement%20requests'>
								Enhancement Requests
							</Link>
						</td>
						<td>1 Posts</td>
						<td>01/01/2020</td>
					</tr>
				</tbody>
			</table>
		</Fragment>
	);
};

Posts.propTypes = {};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
