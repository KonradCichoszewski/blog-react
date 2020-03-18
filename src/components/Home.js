import React from 'react';
import PostListing from './PostListing';

class Home extends React.Component {
    render(){
        return(
        <div id="home">
            <h1>Welcome to the Home Page!</h1>
            <PostListing />
        </div>       
        )
    }
}

export default Home;