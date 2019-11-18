import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store'

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    store.subscribe(() => {
      // this.setState({
      //   categories: store.getState().categories,
      // });
    });
  }

  render() {
    const listCategories = this.state.categories.map((category) =>
      <Link to={`/category/${category}`} key={category}>
        {category}
      </Link>
    );
    return(
      <div>
        <Link to="/">Home</Link>
        {
          listCategories
        }
      </div>
    )
  }

}

export default Header;
