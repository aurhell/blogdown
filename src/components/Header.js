import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../store'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
    }

    store.subscribe(() => {
      this.setState({
        categories: store.getState().categories,
      })
    })
  }

  getCategoryLink(category) {
    return (
      <Link
        to={`/category/${category}`}
        key={category}
        className="header__link"
      >
        {category}
      </Link>
    )
  }

  getCategoryList() {
    return this.state.categories.map(category => this.getCategoryLink(category))
  }

  render() {
    return (
      <div className="header">
        <div className="header__links">
          <Link to="/" className="header__link">
            Home
          </Link>
          {this.getCategoryList()}
        </div>
      </div>
    )
  }
}

export default Header
