import React, { Component } from 'react'
import store from '../store'

import PostCard from '../components/PostCard'

class Tag extends Component {
  render() {
    const tag = this.props.match.params.name //eslint-disable-line
    const posts = store.getState().posts.filter(post => post.tags.includes(tag))

    return (
      <div>
        {posts.map((post, idx) => (
          <PostCard key={idx} post={post}></PostCard>
        ))}
      </div>
    )
  }
}

export default Tag
