import React from 'react'
import config from './config'
import RESSOURCE_TYPES from './constants/ressourceTypes'

export default {
  // eslint-disable-next-line react/display-name
  generatePostImageTag: post => {
    if (!post.image && !post.imageFile) {
      return
    }
    let imgPath = post.image
    if (config.preferedRessource === RESSOURCE_TYPES.FILE && post.imageFile) {
      try {
        imgPath = require(`./assets/posts/${post.imageFile}`)
        return <img src={imgPath} alt={post.title} width="150" height="150" />
      } catch (e) {
        // just ignore it if not found
      }
    }
    if (!imgPath) {
      return
    }
    return <img src={post.image} alt={post.title} width="150" height="150" />
  },
}
