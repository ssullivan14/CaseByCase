import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
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
            <h1><i>POSTS</i></h1>
            <p className='lead'><i className="fas fa-comments gold-icon"></i> Discuss cases with other users</p>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th className='th-large' scope="col">State Discussions</th>
                        <th className='th-large' scope="col"></th>
                        <th className='th-large' scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <th scope="row">Statistics</th>
                        <th scope="row">Last Post</th>
                    </tr>
                    <tr>
                        <td>California</td>
                        <td>5 Posts</td>
                        <td>01/01/2020</td>
                    </tr>
                    <tr>
                        <td>Florida</td>
                        <td>100 Posts</td>
                        <td>01/03/2020</td>
                    </tr>
                    <tr>
                        <td>Illinois</td>
                        <td>2 Posts</td>
                        <td>12/23/2019</td>
                    </tr>
                    <tr>
                        <td>Indiana</td>
                        <td>3 Posts</td>
                        <td>12/15/2019</td>
                    </tr>
                    <tr>
                        <td>Missouri</td>
                        <td>2 Posts</td>
                        <td>12/23/2019</td>
                    </tr>
                    <tr>
                        <td>New Mexico</td>
                        <td>6 Posts</td>
                        <td>01/02/2020</td>
                    </tr>
                    <tr>
                        <td>Tennessee</td>
                        <td>2 Posts</td>
                        <td>01/03/2020</td>
                    </tr>
                    <tr>
                        <td>Utah</td>
                        <td>7 Posts</td>
                        <td>01/04/2020</td>
                    </tr>
                    <tr>
                        <th className='th-large' scope="col">General</th>
                        <th className='th-large' scope="col"></th>
                        <th className='th-large' scope="col"></th>
                    </tr>
                    <tr>
                        <th scope="row">Name</th>
                        <th scope="row">Statistics</th>
                        <th scope="row">Last Post</th>
                    </tr>
                    <tr>
                        <td>General Discussion</td>
                        <td>20 Posts</td>
                        <td>01/04/2020</td>
                    </tr>
                    <tr>
                        <td>Enhancement Requests</td>
                        <td>1 Posts</td>
                        <td>01/01/2020</td>
                    </tr>
                </tbody>
                </table>
        </Fragment>
    )
}

Posts.propTypes = {

}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
