import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import store from '../store'
import utils from '../utils'

class Articles extends Component {
  render() {
    const articles = store.getState().articles
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    return (
      <div>
        {articles.map((article, idx) => (
          <div className="card" key={idx}>
            <div className="card-content">
              <div className="content">
                <Link to={`/articles/${slugify(article.title)}`}>
                  {article.title} -{' '}
                  {article.date.toLocaleDateString('fr-FR', dateOptions)}
                </Link>
                {utils.getImageFromArticle(article)}
                {utils.getImageFileFromArticle(article)}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Articles
