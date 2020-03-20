import React from 'react';
import PostForm from './PostForm';

class CreatePost extends React.Component {
    render(){
        return (
            <div id='formContainer'>
                <PostForm/>
            </div>
        )
    }
}

export default CreatePost;