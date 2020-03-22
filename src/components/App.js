import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import CreatePost from './CreatePost';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import '../index.css';

function App (props){
  return (
    <div className="App">
      <div className="container">
        <NavigationBar/>
        <Route exact path="/" component={Home} />
        <Route path="/createPost" component={CreatePost} />
        <Footer />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { stylesheet: state.blogApp.stylesheet }
}

export default connect(mapStateToProps)(App);