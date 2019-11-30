import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getArticle } from '../actions/index'
import store from '../store'
import { init } from '../actions/index'
import utils from '../utils'

class Article extends Component {
  async componentDidMount() {
    if (store.getState().articles.length === 0) {
      await this.props.init()
    }
    const slug = this.props.match.params.slug //eslint-disable-line
    this.props.getArticle(slug)
  }

  getTimeToRead(article) {
    if (article.timeToRead) {
      return (
        <span className="article__time-to-read">{article.timeToRead} min.</span>
      )
    }
    return
  }

  diplayArticle(article) {
    return (
      <div className="article">
        <h1 className="article__title">{article.title}</h1>
        {this.getTimeToRead(article)}
        <div className="article__image">
          {utils.getImageFromArticle(article)}
        </div>
        <div className="article__image">
          {utils.getImageFileFromArticle(article)}
        </div>
        <div className="article__content">
          <ReactMarkdown source={article.content}></ReactMarkdown>
        </div>
      </div>
    )
  }

  render() {
    const { currentArticle } = this.props

    if (currentArticle !== null && currentArticle !== undefined) {
      return this.diplayArticle(currentArticle)
    }
    return null
  }
}

Article.propTypes = {
  init: PropTypes.func,
  getArticle: PropTypes.func,
  currentArticle: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    articles: state.articles.slice(0, 10),
    currentArticle: state.currentArticle,
  }
}

export default connect(mapStateToProps, { init, getArticle })(Article)
