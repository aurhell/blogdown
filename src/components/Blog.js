import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from './Header';
import Posts from './Posts';
import Post from './Post';
import Footer from './Footer';

import { connect } from 'react-redux';
import { init } from '../actions/index';

class Blog extends Component {

  componentDidMount() {
    this.props.init();
  }

  render() {
    return <div className="Blog">
      <Header></Header>
      <br /><br />
      <Route exact path="/" component={Posts} />
      <Route path="/posts/:slug" component={Post} />
      <br /><br />
      <Footer></Footer>
    </div>
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { init }
)(Blog);

