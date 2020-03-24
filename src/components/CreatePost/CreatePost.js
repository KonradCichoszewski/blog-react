import React from 'react';
import PostForm from '../Home/PostForm';

class CreatePost extends React.Component {
    render(){
        return (
            <div id='formContainer'>
                <h1>Create post here</h1>
                <PostForm/>
                <p id='success'>Post added successfully!</p>
            </div>
        )
    }
}

export default CreatePost;