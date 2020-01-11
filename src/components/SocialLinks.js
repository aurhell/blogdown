import React, { Component } from 'react'
import config from '../config'
import { FaLinkedinIn, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa'

class SocialLinks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      socialLinks: config.social,
    }
  }

  getSocialLink(social) {
    if (social.url) {
      let IconComponent

      const comp = {
        github: FaGithub,
        linkedin: FaLinkedinIn,
        twitter: FaTwitter,
        youtube: FaYoutube,
      }

      IconComponent = comp[social.name]
      return (
        <a href={social.url} alt={social.name} key={social.name}>
          <IconComponent />
        </a>
      )
    }
    return
  }

  getSocialLinkList() {
    return this.state.socialLinks.map(social => this.getSocialLink(social))
  }

  render() {
    return (
      <div className="social">
        <span className="social__link">{this.getSocialLinkList()}</span>
      </div>
    )
  }
}

export default SocialLinks
