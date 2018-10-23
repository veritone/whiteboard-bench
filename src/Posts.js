import React, { Component } from 'react';
import { connect } from "react-redux";

import {addPost} from './actions';
import { getPosts } from './reducers';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post))
});

class Posts extends Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.posts && this.props.posts.map( post => (
          <div>{post.title}</div>
        ))}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)