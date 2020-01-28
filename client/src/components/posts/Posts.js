import React, { Fragment, useEffect } from 'react';
import Moment from 'react-moment';
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
			topic: 'illinois',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'2': {
			topic: 'louisiana',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'3': {
			topic: 'texas',
			numPosts: 0,
			mostRecent: '',
			type: 'state'
		},
		'4': {
			topic: 'general discussion',
			numPosts: 0,
			mostRecent: '',
			type: 'general'
		},
		'5': {
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
				<i>COMMUNITY</i>
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
							<Link to='/posts/illinois'>Illinois</Link>
						</td>
						<td>{topics[1].numPosts} Posts</td>
						<td>{topics[1].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[1].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/louisiana'>Louisiana</Link>
						</td>
						<td>{topics[2].numPosts} Posts</td>
						<td>{topics[2].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[2].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/texas'>Texas</Link>
						</td>
						<td>{topics[3].numPosts} Posts</td>
						<td>{topics[3].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[3].mostRecent}</Moment> : 'Never' }</td>
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
						<td>{topics[4].numPosts} Posts</td>
						<td>{topics[4].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[4].mostRecent}</Moment> : 'Never' }</td>
					</tr>
					<tr>
						<td>
							<Link to='/posts/enhancement%20requests'>
								Enhancement Requests
							</Link>
						</td>
						<td>{topics[5].numPosts} Posts</td>
						<td>{topics[5].mostRecent ? <Moment format='MM/DD/YYYY hh:mm A'>{topics[5].mostRecent}</Moment> : 'Never' }</td>
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
