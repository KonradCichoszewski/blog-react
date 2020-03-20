import React from 'react';
import PostForm from './PostForm';

class CreatePost extends React.Component {
    render(){
        return (
            <div id='formContainer'>
                <h1>Create post here</h1>
                <PostForm/>
            </div>
        )
    }
}

export default CreatePost;