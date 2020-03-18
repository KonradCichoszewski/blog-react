import React from 'react';
import {Route} from 'react-router-dom';

import Home from './Home';
import CreatePost from './CreatePost';
import NavigationBar from './NavigationBar';
import '../index.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="container">
          <NavigationBar/>
          <Route
            path="/"
            component={Home}
            exact 
          />
          <Route
            path="/createPost"
            component={CreatePost} 
          />
        </div>
      </div>
    );
  }
}

export default App;
