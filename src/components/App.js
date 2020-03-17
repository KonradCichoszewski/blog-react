import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="container">
          <nav>
            <NavLink to="/">Home </NavLink> |
            <NavLink to="/createPost"> Create post</NavLink>
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
