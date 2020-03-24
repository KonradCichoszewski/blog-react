import React from 'react';
import PostListing from './PostListing';
import PostForm from './PostForm';

class Home extends React.Component {
    render(){
        return(
        <div id="home">
            <div id="home-posts">
                <h1>Welcome to the Home Page!</h1>
                <PostForm />
                <PostListing />
            </div>
            <div id="home-aboutMe">
                <h1>About me</h1>
                <p> I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                     I am somebody I like blueberries I often ride a bike.
                </p>
            </div>
        </div>    
        )
    }
}

export default Home;