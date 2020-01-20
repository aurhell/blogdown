import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../store'

import config from '../config'

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

  getHomeLink() {
    if (config.addHomePage) {
      return (
        <Link to="/" className="header__link">
          Home
        </Link>
      )
    }
  }

  getAboutLink() {
    if (config.addAboutPage) {
      return (
        <Link to="/about" className="header__link">
          About
        </Link>
      )
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header__title">My Blog Name</div>
        <div className="header__links">
          {this.getHomeLink()}
          {this.getCategoryList()}
          {this.getAboutLink()}
        </div>
      </div>
    )
  }
}

export default Header
