import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPost } from '../actions/index'
import store from '../store'
import { init } from '../actions/index'
import utils from '../utils'

class Post extends Component {
  async componentDidMount() {
    if (store.getState().posts.length === 0) {
      await this.props.init()
    }
    const slug = this.props.match.params.slug //eslint-disable-line
    this.props.getPost(slug)
  }

  getTimeToRead(post) {
    if (post.timeToRead) {
      return (
        <span style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
          {post.timeToRead} min. <br />
        </span>
      )
    }
    return
  }

  diplayPost(post) {
    return (
      <div className="post">
        <h1>{post.title}</h1> <br />
        {this.getTimeToRead(post)}
        {utils.getImageFromPost(post)}
        {utils.getImageFileFromPost(post)}
        <ReactMarkdown source={post.content}></ReactMarkdown>
      </div>
    )
  }

  render() {
    const { currentPost } = this.props

    if (currentPost !== null && currentPost !== undefined) {
      return this.diplayPost(currentPost)
    }
    return null
  }
}

Post.propTypes = {
  init: PropTypes.func,
  getPost: PropTypes.func,
  currentPost: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 10),
    currentPost: state.currentPost,
  }
}

export default connect(mapStateToProps, { init, getPost })(Post)
