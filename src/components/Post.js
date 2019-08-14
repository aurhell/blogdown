import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Post extends Component {

  render() {
    console.log(this.props);
    console.log(this.props.match);


    return (
      <div>coucou</div>
    );
  }

}

export default Post;
