import {
  GET_ARTICLES,
  GET_CATEGORIES,
  GET_TAGS,
  GET_ARTICLE,
} from '../constants/ActionTypes'
import parseMarkdown from 'front-matter-markdown'

const importAll = r => r.keys().map(r)
const markdownFiles = importAll(
  require.context('../assets/articles', false, /\.md$/)
)
  .sort()
  .reverse()

export function init() {
  return async function(dispatch) {
    const markdownFilesContent = await Promise.all(
      markdownFiles.map(file => fetch(file).then(res => res.text()))
    ).catch(err => console.error(err)) //eslint-disable-line

    let articles = []

    markdownFilesContent.forEach(content => {
      articles.push(parseMarkdown(content))
    })

    articles.sort((current, next) => next.date - current.date)

    const categories = [...new Set(articles.map(article => article.category))]
    let tags = []
    const parsedTags = articles
      .map(article => article.tags.split(',').map(tag => tag.trim()))
      .flat()
    tags = [...new Set(parsedTags)]

    dispatch({ type: GET_ARTICLES, payload: articles })
    dispatch({ type: GET_CATEGORIES, payload: categories })
    dispatch({ type: GET_TAGS, payload: tags })
  }
}

export function getArticle(slug) {
  return function(dispatch) {
    dispatch({ type: GET_ARTICLE, payload: slug })
  }
}
