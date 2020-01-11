import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { init } from '../actions/index'

import Header from './Header'
import Footer from './Footer'

import Posts from '../pages/Posts'
import Post from '../pages/Post'
import Category from '../pages/Category'
import Tag from '../pages/Tag'

class Blog extends Component {
  componentDidMount() {
    this.props.init()
  }

  render() {
    return (
      <div
        // eslint-disable-next-line no-constant-condition
        className={'blog theme'}
      >
        <Header></Header>
        <Route exact path="/" component={Posts} />
        <Route path="/posts/:slug" component={Post} />
        <Route path="/category/:name" component={Category} />
        <Route path="/tags/:name" component={Tag} />
        <Footer></Footer>
      </div>
    )
  }
}

Blog.propTypes = {
  init: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 10),
  }
}

export default connect(mapStateToProps, { init })(Blog)
