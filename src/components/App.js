import React from 'react';
import {Route} from 'react-router-dom';

import Home from './Home';
import CreatePost from './CreatePost';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import '../index.css';

class App extends React.Component{
  render(){
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
}

export default App;
