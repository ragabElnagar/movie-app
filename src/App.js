import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Landing from './component/home/Landing';
import Movie from './component/home/Movie';
import {HashRouter,Route} from "react-router-dom";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          
            <HashRouter>
            <div>
            <Navbar />
            <Route exact path="/" component={Landing}/>
            <Route exact path="/movie/:id" component={Movie}/>            
            <Footer />
            </div>
            </HashRouter>
        
      </Provider>
    );
  }
}

export default App;