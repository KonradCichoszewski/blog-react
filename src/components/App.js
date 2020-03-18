import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import Home from './Home';
import CreatePost from './CreatePost';
import '../index.css'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="container">
          <nav>
            <NavLink activeClassName="active" className="inactive" 
                    to="/" exact>Home</NavLink>
            <NavLink activeClassName="active" className="inactive"
                    to="/createPost">Create post</NavLink>
          </nav>
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
