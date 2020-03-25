import React from 'react';
import {connect} from 'react-redux';

import PostListing from './PostListing';
import PostForm from './PostForm';
import {showModal, hideModal} from '../../redux/actions';

class Home extends React.Component {
    render(){
        return(
        <div id="home">
            <div id="home-posts">
                <h1 id="chuj">Welcome to the Home Page!</h1><br />
                <p className="transparent-button" onClick={this.props.showModal}> + Add new post </p>
                <div id="overlay">
                    <div className="modal">
                         <PostForm />
                    </div>
                </div>
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

const mapDispatchToProps = dispatch => {
    return{
        showModal: () => dispatch(showModal()),
        hideModal: () => dispatch(hideModal()),
    }
}

export default connect(null, mapDispatchToProps)(Home);