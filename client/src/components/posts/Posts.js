import React, { Fragment, useEffect } from 'react';
import Moment from 'react-moment';
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

	let topics = {
		'0': {
			topic: 'california',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'1': {
			topic: 'florida',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'2': {
			topic: 'illinois',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'3': {
			topic: 'indinia',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'4': {
			topic: 'missouri',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'5': {
			topic: 'new mexico',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'6': {
			topic: 'tennessee',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'7': {
			topic: 'utah',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'8': {
			topic: 'virginia',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'9': {
			topic: 'general discussion',
			numPosts: 0,
			mostRecent: '',
			type: 'general'
		},
		'10': {
			topic: 'enhancement requests',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		}
	};

	const keys = Object.keys(topics);

	for (const key of keys) {
		let topicPosts = posts.filter(function(post) {
			return post.topic === topics[key].topic;
		});

		let mostRecent = topicPosts
			.map(function(e) {
				return e.date;
			})
			.sort()
			.reverse()[0];

		topics[key].numPosts = topicPosts.length;
		topics[key].mostRecent = mostRecent;
	}

	return loading ? (
		<Spinner />
	) : (
		<Fragment>
			<h1>
				<i>POSTS</i>
			</h1>
			<p className='lead'>
				<i className='fas fa-comments gold-icon'></i> Discuss cases with other
				users
			</p>
			<table className='table table-striped table-dark'>
				<thead>
					<tr>
						<th className='post-th-large' scope='col'>
							State Discussions
						</th>
						<th className='post-th-large' scope='col'></th>
						<th className='post-th-large' scope='col'></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th className='post-th' scope='row'>Name</th>
						<th className='post-th' scope='row'>Statistics</th>
						<th className='post-th' scope='row'>Last Post</th>
					</tr>
					<tr>
						<td>
							<Link to='/posts/california'>California</Link>
						</td>
						<td>{topics[0].numPosts} Posts</td>
						<td>{topics[0].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[0].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/florida'>Florida</Link>
						</td>
						<td>{topics[1].numPosts} Posts</td>
						<td>{topics[1].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[1].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/illinois'>Illinois</Link>
						</td>
						<td>{topics[2].numPosts} Posts</td>
						<td>{topics[2].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[2].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/indiana'>Indiana</Link>
						</td>
						<td>{topics[3].numPosts} Posts</td>
						<td>{topics[3].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[3].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/missouri'>Missouri</Link>
						</td>
						<td>{topics[4].numPosts} Posts</td>
						<td>{topics[4].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[4].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/new%20mexico'>New Mexico</Link>
						</td>
						<td>{topics[5].numPosts} Posts</td>
						<td>{topics[5].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[5].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/tennessee'>Tennessee</Link>
						</td>
						<td>{topics[6].numPosts} Posts</td>
						<td>{topics[6].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[6].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/utah'>Utah</Link>
						</td>
						<td>{topics[7].numPosts} Posts</td>
						<td>{topics[7].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[7].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/virginia'>Virginia</Link>
						</td>
						<td>{topics[8].numPosts} Posts</td>
						<td>{topics[8].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[8].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<th className='post-th-large' scope='col'>
							General
						</th>
						<th className='post-th-large' scope='col'></th>
						<th className='post-th-large' scope='col'></th>
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
						<td>{topics[9].numPosts} Posts</td>
						<td>{topics[9].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[9].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/enhancement%20requests'>
								Enhancement Requests
							</Link>
						</td>
						<td>{topics[10].numPosts} Posts</td>
						<td>{topics[10].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[10].mostRecent}</Moment> : 'Never' }</td>
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
