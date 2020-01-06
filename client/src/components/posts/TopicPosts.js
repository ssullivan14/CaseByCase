import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts, addPost } from '../../actions/post';
import Spinner from '../Layout/Spinner/Spinner';
import PostItem from './PostItem';
import './Posts.css';

const Posts = ({ getPosts, post: { posts, loading }, match, addPost }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	// Get Category/topic from url
	const category = match.params.topic;

	// Form data state
	const [formData, setFormData] = useState({
		title: '',
		text: '',
		topic: `${category}`
	});

	const { title, text, topic } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		addPost(formData);
	};

	return loading ? (
		<Spinner />
	) : (
		<Fragment>
			<div className='row'>
				<div className='col-md-12'>
					<a href='/posts' className='btn btn-secondary back-btn'>
						<i id='toggleIcon' className='fa fa-angle-double-down'></i> Back to
						Posts
					</a>
				</div>
			</div>
			<h1 className='page-header'>
				<i>{category}</i>
			</h1>
			<p className='lead'>
				<i className='fas fa-comments gold-icon'></i> Discuss cases with other
				users
			</p>
			{/* Submit new post form */}
			<div className='post-form'>
				<div className='post-form-header'>
					<h5>Say Something...</h5>
				</div>
				<form className='form' onSubmit={e => handleSubmit(e)}>
					<input
						type='text'
						className='form-control post-control'
						name='title'
						placeholder='Title'
						value={title}
						onChange={e => onChange(e)}
						required
					/>
					<textarea
						className='form-control post-control'
						name='text'
						cols='30'
						rows='5'
						placeholder='Create a post'
						value={text}
						onChange={e => onChange(e)}
						required
					></textarea>
					<input
						type='submit'
						className='btn btn-secondary my-1'
						value='Submit'
					/>
				</form>
			</div>
			<br />
			{/* Existing topics */}
			<h2 className='page-header'>
				<i>TOPICS</i>
			</h2>
			<div className='posts'>
				{posts.map(
					post =>
						post.topic === category && <PostItem key={post._id} post={post} />
				)}
			</div>
		</Fragment>
	);
};

Posts.propTypes = {
	addPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, { getPosts, addPost })(Posts);
