import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../store'
import slugify from 'slugify'
import utils from '../utils'

class Tag extends Component {
  render() {
    const tag = this.props.match.params.name //eslint-disable-line
    const posts = store.getState().posts.filter(post => post.tags.includes(tag))
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    return (
      <div>
        {posts.map((post, idx) => (
          <div className="card" key={idx}>
            <div className="card-content">
              <div className="content">
                <Link to={`/posts/${slugify(post.title)}`}>
                  {post.title} -{' '}
                  {post.date.toLocaleDateString('fr-FR', dateOptions)}
                </Link>
                {utils.getImageFromPost(post)}
                {utils.getImageFileFromPost(post)}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Tag
