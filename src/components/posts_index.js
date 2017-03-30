import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() { // only call once when component render
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog</div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
