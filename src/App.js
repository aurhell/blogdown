import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import './App.css';
import Blog from './components/Blog';

class App extends Component {

  render () {
    return <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Blog></Blog>
        </BrowserRouter>
      </Provider>
    </div>
  }
}

export default App;
