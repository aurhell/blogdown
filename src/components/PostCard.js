import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import PropTypes from 'prop-types'
import utils from '../utils'
import config from '../config'

class PostCard extends Component {
  render() {
    const post = this.props.post

    return (
      <div className="post-card">
        <div className="post-card__content">
          <span className="post-card__link">
            <Link to={`/posts/${slugify(post.title)}`}>
              {post.title} -{' '}
              {post.date.toLocaleDateString('fr-FR', config.dateOptions)}
            </Link>
          </span>
          <div className="post-card__image">{utils.generatePostImageTag(post)}</div>
        </div>
      </div>
    )
  }
}

PostCard.propTypes = {
  post: PropTypes.object,
}

export default PostCard
