import React, { Component } from 'react'
import store from '../store'

import PostCard from '../components/PostCard'

class Posts extends Component {
  render() {
    const posts = store.getState().posts

    return (
      <div className="posts">
        {posts.map((post, idx) => (
          <PostCard key={idx} post={post}></PostCard>
        ))}
      </div>
    )
  }
}

export default Posts
