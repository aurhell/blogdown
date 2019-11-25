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
      <Link to={`/tags/${tag}`} key={tag}>
        {tag}
      </Link>
    )
  }

  render() {
    const listTags = this.state.tags.map(tag => this.getTagLink(tag))
    return <div>{listTags}</div>
  }
}

export default Footer
