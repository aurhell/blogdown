import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import Footer from './components/Footer';

class App extends Component {

  render () {
    return <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <br /><br />
          <Route exact path="/" component={Posts} />
          <Route path="/posts/:slug" component={Post} />
          <br /><br />
          <Footer></Footer>
        </BrowserRouter>
      </Provider>
    </div>
  }
}

export default App;
