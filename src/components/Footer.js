import React, { Component } from 'react'
import store from '../store'

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

  render() {
    const listTags = this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    return <div>{listTags}</div>
  }
}

export default Footer
