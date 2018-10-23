import React, { Component } from 'react';
import { connect } from "react-redux";

import {addPost, getPostsFromAPI} from './actions';
import { getPosts, isLoading } from './reducers';

const mapStateToProps = state => ({
  posts: getPosts(state),
  isLoading: isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
  getPostsFromAPI: () => dispatch(getPostsFromAPI())
});

class Posts extends Component {
  
  render() {
    console.log(this.props.isLoading);
    if(this.props.isLoading){
      return <h1>Loading Posts</h1>
    }

    return (
      <div>
        <h1>Postss</h1>
        {this.props.posts && this.props.posts.map( post => (
          <div key={post.id}>{post.title}</div>
        ))}
        <button onClick={this.props.getPostsFromAPI}>Load Posts</button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)