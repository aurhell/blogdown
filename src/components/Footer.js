import React, { Component } from 'react'
import store from '../store'
import { Link } from 'react-router-dom'

import SocialLinks from './SocialLinks'
import config from '../config'

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: [],
    }

    store.subscribe(() => {
      this.setState({
        tags: store.getState().tags,
      })
    })
  }

  getTagLink(tag) {
    return (
      <Link to={`/tags/${tag}`} key={tag} className="footer__tag">
        {tag}
      </Link>
    )
  }

  getTagList() {
    return this.state.tags.map(tag => this.getTagLink(tag))
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__tags">{this.getTagList()}</div>
        <SocialLinks />
        <span className="footer__copyright">
          Copyright @{config.yourName} - {new Date().getFullYear()}
        </span>
      </div>
    )
  }
}

export default Footer
