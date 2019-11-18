import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { getPost } from '../actions/index';
import store from '../store'
import { init } from '../actions/index';

class Post extends Component {

  async componentDidMount() {
    if (store.getState().posts.length === 0) {
      await this.props.init();
    }
    const slug = this.props.match.params.slug;
    this.props.getPost(slug);
  }

  render() {
    const { currentPost } = this.props;

    if (currentPost !== null && currentPost !== undefined) {
      return <ReactMarkdown source={currentPost.content}></ReactMarkdown>
    }
    return null;
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 10),
    currentPost: state.currentPost,
  };
}

export default connect(
  mapStateToProps,
  { init, getPost }
)(Post);
