import React from 'react'

export default {
  getImageFromArticle: article => {
    if (article.image) {
      return (
        <img src={article.image} alt={article.title} width="150" height="150" />
      )
    }
  },
  getImageFileFromArticle: article => {
    if (article.imageFile) {
      try {
        const imgPath = require(`./assets/articles/${article.imageFile}`)
        return (
          <img src={imgPath} alt={article.title} width="150" height="150" />
        )
      } catch (e) {
        // just ignore it if not found
      }
    }
  },
}
