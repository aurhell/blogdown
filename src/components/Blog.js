import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from './Header'
import Posts from './Posts'
import Post from './Post'
import Category from './Category'
import Tag from './Tag'
import Footer from './Footer'

import { connect } from 'react-redux'
import { init } from '../actions/index'

class Blog extends Component {
  componentDidMount() {
    this.props.init()
  }

  render() {
    return (
      <div className="Blog">
        <Header></Header>
        <br />
        <br />
        <Route exact path="/" component={Posts} />
        <Route path="/posts/:slug" component={Post} />
        <Route path="/category/:name" component={Category} />
        <Route path="/tags/:name" component={Tag} />
        <br />
        <br />
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
