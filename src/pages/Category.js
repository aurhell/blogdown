import React, { Component } from 'react'
import store from '../store'

import PostCard from '../components/PostCard'

class Category extends Component {
  render() {
    const category = this.props.match.params.name //eslint-disable-line
    const posts = store
      .getState()
      .posts.filter(post => post.category === category)

    return (
      <div>
        {posts.map((post, idx) => (
          <PostCard key={idx} post={post}></PostCard>
        ))}
      </div>
    )
  }
}

export default Category
