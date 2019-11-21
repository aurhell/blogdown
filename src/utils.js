import React from 'react'

export default {
  getImageFromPost: (post) => {
    if (post.image) {
      return <img src={ post.image } alt={ post.title } width="150" height="150"/>
    }
  },
  getImageFileFromPost: (post) => {
    if (post.imageFile) {
      try {
        const imgPath = require(`./assets/posts/${post.imageFile}`)
        return <img src={ imgPath } alt={ post.title } width="150" height="150"/>
      }
      catch (e) {
        // just ignore it if not found
      }
    }
  },
}
