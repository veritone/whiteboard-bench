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

class PostForm extends Component {

  state = {
    title: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost({title: this.state.title})
    this.setState({title: ""});

  }

  handleChange = (e) => {
    this.setState({title: e.target.value})
  }

  render() {
    return (
        <form>
        <input name="title" onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}> Add Post</button>
      </form>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)