import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import PropTypes from 'prop-types'
import utils from '../utils'

class PostCard extends Component {
  render() {
    const post = this.props.post
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    return (
      <div className="post-card">
        <div className="post-card__content">
          <span className="post-card__link">
            <Link to={`/posts/${slugify(post.title)}`}>
              {post.title} -{' '}
              {post.date.toLocaleDateString('fr-FR', dateOptions)}
            </Link>
          </span>
          <div className="post-card__image">
            {utils.getImageFromPost(post)}
            {utils.getImageFileFromPost(post)}
          </div>
        </div>
      </div>
    )
  }
}

PostCard.propTypes = {
  post: PropTypes.object,
}

export default PostCard
