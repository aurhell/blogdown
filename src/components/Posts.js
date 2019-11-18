import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import store from '../store'

class Posts extends Component {

  render() {
    const posts = store.getState().posts;
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <div>
          {
            posts.map((post, idx) => (
              <div className="card" key={idx}>                
                  <div className="card-content">
                    <div className="content">
                      <Link to={`/posts/${slugify(post.title)}`}>
                      { post.title } - { post.date.toLocaleDateString('fr-FR', dateOptions) }
                      </Link>
                      <img src={ post.image} alt={post.title} width="150" height="150"/>
                    </div>
                  </div>
              </div>
            ))
          }
      </div>
    )
  }
}

export default Posts;
