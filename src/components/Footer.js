import React, { Component } from 'react'
import store from '../store'
import { Link } from 'react-router-dom'

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
        <span className="footer__copyright">
          Copyright @Aurélien Girault - {new Date().getFullYear()}
        </span>
      </div>
    )
  }
}

export default Footer
